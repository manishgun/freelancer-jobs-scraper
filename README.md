

# freelancer-jobs-scraper
 Freelancer Job Scraper: A Node.js project to scrape job listings from Freelancer.in using Puppeteer and save them to MongoDB. Ideal for learning web scraping and automation. 🌐  Let me know if you'd like additional changes! 😊

---
# Watch Tutorial Video on Youtube ([CLICK HERE](https://youtu.be/l0u-WPIcgUM))

[![IMAGE ALT TEXT HERE](https://i9.ytimg.com/vi_webp/l0u-WPIcgUM/sddefault.webp?v=67760cde&sqp=CMCe2LsG&rs=AOn4CLBWF8R1H0xcIzDGRO2paNS3MTb39Q)](https://youtu.be/l0u-WPIcgUM)

Welcome to this in-depth Bengali tutorial where we dive into web scraping with Puppeteer.js and Node.js to extract job listings from Freelancer.in. This video teaches you how to automate gathering job-related data for educational and research purposes only.

---


## Features
- Scrapes job listings from [Freelancer.in](https://www.freelancer.in).
- Extracts job details like project ID, title, and description.
- Saves the scraped data to MongoDB for further analysis.
- Uses Puppeteer.js to handle dynamic content and request interception.

---

## Requirements
- **Node.js** (v16.x or higher recommended)
- **MongoDB** (local or cloud instance)
- Basic knowledge of JavaScript and web scraping concepts

---

## Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/freelancer-job-scraper.git
cd freelancer-job-scraper
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start MongoDB
Ensure MongoDB is running locally or use a remote MongoDB instance. 
Update the connection string in the script if needed.

### 4. Run the Script
```bash
node index.js
```

## How It Works
1. Puppeteer Setup: Launches a browser instance and intercepts requests to control the scraping process.
2. Data Extraction: Extracts job data by parsing API responses from Freelancer.in.
3. Data Storage: Inserts the scraped data into MongoDB, ensuring unique project IDs.

---

### Important Notice
This project is intended for educational and research purposes only. Unauthorized web scraping may violate the terms of service of the target website. Always use web scraping responsibly and ensure compliance with applicable laws and website policies.

