import getAppStoreRating from "../../services/getAppStoreRating";
import getPlayStoreRating from "../../services/getPlayStoreRating";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const appStoreRating = await getAppStoreRating(req.body.appStorePage);
  // const playStoreRating = await getPlayStoreRating(req.body.playStorePage);

  // res.status(200).json({ appStoreRating, playStoreRating });
  try {
    Promise.all([
      // getAppStoreRating(req.body.appStorePage),
      getPlayStoreRating(req.body.playStorePage),
    ]).then((values) => {
      return res.status(200).json({
        // appStoreRating: values[0],
        playStoreRating: values[0],
      });
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error, message: "Sorry, cannot scrape data" });
  }
}
