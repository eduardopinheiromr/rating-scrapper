import axios from "axios";
import scrapeHtmlTextBySelectorAndClass from "../utils/scrapeHtmlTextBySelectorAndClass";

const getAppStoreRating = async (appStorePage: string) => {
  const html = await (await axios.get(appStorePage)).data.toString();

  const ratingString = scrapeHtmlTextBySelectorAndClass(
    html,
    "span",
    "we-customer-ratings__averages__display"
  );

  const ratingNumber = Number(ratingString.replace(",", "."));

  return ratingNumber;
};

export default getAppStoreRating;
