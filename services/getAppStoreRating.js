const fetch = require("node-fetch");
const scrapeHtmlTextBySelectorAndClass = require("../utils/scrapeHtmlTextBySelectorAndClass");

const getAppStoreRating = async (appStorePage) => {
  const request = await fetch(appStorePage);

  const html = await request.text();

  const ratingString = scrapeHtmlTextBySelectorAndClass(
    html,
    "span",
    "we-customer-ratings__averages__display"
  );

  const ratingNumber = Number(ratingString.replace(",", "."));

  return ratingNumber;
};

module.exports = getAppStoreRating;
