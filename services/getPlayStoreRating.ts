import axios from "axios";
import scrapeHtmlTextBySelectorAndClass from "../utils/scrapeHtmlTextBySelectorAndClass";

const getPlayStoreRating = async (playStorePage: string) => {
  // const html = await (await axios.get(playStorePage)).data.toString();
  // const ratingString = scrapeHtmlTextBySelectorAndClass(html, "div", "BHMmbe");
  // const ratingNumber = Number(ratingString.replace(",", "."));
  // return ratingNumber;
};

export default getPlayStoreRating;
