const puppeteer = require("puppeteer");
const config = require("../utils/puppeteer-config");

const getPlayStoreRating = async (playStorePage) => {
  const browser = await puppeteer.launch(config);
  const page = await browser.newPage();
  await page.goto(playStorePage);
  await page.waitForSelector(".K9wGie");
  const div = await page.$eval(".K9wGie", (el) => el.innerHTML);

  const googlePlayRating = Number(
    div.split("</div>")[0].split(">")[1].replace(",", ".")
  );

  await browser.close();
  return googlePlayRating;
};

module.exports = getPlayStoreRating;
