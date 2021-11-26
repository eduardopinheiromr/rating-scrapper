const puppeteer = require("puppeteer");
const config = require("../utils/puppeteer-config");

const getAppStoreRating = async (appStorePage) => {
  const browser = await puppeteer.launch(config);

  const page = await browser.newPage();
  await page.goto(appStorePage);
  await page.waitForSelector(".we-customer-ratings__averages__display");
  const stringRating = await page.$eval(
    ".we-customer-ratings__averages__display",
    (el) => el.innerHTML
  );

  const appStoreRating = Number(stringRating.replace(",", "."));
  await browser.close();

  return appStoreRating;
};

module.exports = getAppStoreRating;
