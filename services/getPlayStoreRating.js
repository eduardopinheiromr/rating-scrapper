const fetch = require("node-fetch");
const scrapeHtmlTextBySelectorAndClass = require("../utils/scrapeHtmlTextBySelectorAndClass");

const getPlayStoreRating = async (playStorePage) => {
  const request = await fetch(playStorePage);

  const html = await request.text();

  const ratingString = scrapeHtmlTextBySelectorAndClass(html, "div", "BHMmbe");

  const ratingNumber = Number(ratingString.replace(",", "."));

  return ratingNumber;
};

module.exports = getPlayStoreRating;
