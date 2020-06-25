const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome-stable',
    args: ['--no-sandbox']
  });

  const baseUrl = 'https://example.com';

  const page = await browser.newPage();
  await page.goto(baseUrl, {waitUntil: "domcontentloaded"});
  await page.screenshot({path: './dist/example.png'});

  await page.close();
  await browser.close();
})();
