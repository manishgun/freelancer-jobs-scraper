const { MongoClient } = require("mongodb");
const { default: puppeteer } = require("puppeteer");

(async () => {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017/scraped");
  if (client) console.log("Database Connected!");
  const jobs = client.db("scraped").collection("freelancer-jobs");

  await jobs.createIndex({ project_id: 1 }, { unique: true });

  const browser = await puppeteer.launch({ headless: false, devtools: true });

  const [page] = await browser.pages();

  await page.setRequestInterception(true);

  await page.setViewport({ width: 1024, height: 1600 });

  page.setDefaultNavigationTimeout(90000);

  page.on("request", (request) => {
    const url = request.url();
    if (
      url.includes("www.f-cdn.com") ||
      url.includes("www.freelancer.in") ||
      url.includes("www.freelancer.com")
    ) {
      request.continue();
    } else {
      request.abort();
    }
  });

  const url = "https://www.freelancer.in/jobs?results=100";

  await page.goto(url, { waitUntil: "networkidle0" });

  for (let index = 0; index < 5000; index = index + 100) {
    await page.waitForSelector('li[data-link="next_page"]');
    await page.click('li[data-link="next_page"]');

    await page.waitForResponse(async (response) => {
      const url = response.url();
      if (url.includes("project_contest_datatable.php") && response.ok()) {
        const buffer = await response.buffer();

        if (buffer.length > 1024) {
          const data = JSON.parse(buffer.toString("utf-8"));

          if (data && data["aaData"] && Array.isArray(data["aaData"])) {
            for (let index = 0; index < data["aaData"].length; index++) {
              const job = data["aaData"][index];
              try {
                await jobs.insertOne(job);
              } catch (error) {}
            }

            console.log(index, data["aaData"].length);
          }

          //   console.log(data);
        }

        // console.log(buffer);

        return true;
      }
    });
  }
  browser.close();
  client.close();
})();
