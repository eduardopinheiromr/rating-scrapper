const express = require("express");
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

const getAppStoreRating = require("./services/getAppStoreRating");
const getPlayStoreRating = require("./services/getPlayStoreRating");

app.get("/", (req, res) => {
  res.writeHead(302, {
    Location: "https://github.com/eduardopinheiromr/rating-scrapper",
  });
  res.end();
});

app.get("/deploy", (req, res) => {
  const deployTag = require("./deployTag.json");
  const deployDate =
    "Deployed at " +
    new Date(deployTag).toLocaleTimeString() +
    " " +
    new Date(deployTag).toLocaleDateString();
  res.status(200).json({ deployTag, deployDate });
});

app.get("/api/ios/rating", async (req, res) => {
  try {
    res.status(200).json({
      appStoreRating: await getAppStoreRating(req.query.app),
    });
  } catch (error) {
    res.status(500).json({ error, message: "Sorry, cannot scrape data" });
  }
});

app.get("/api/android/rating", async (req, res) => {
  try {
    res.status(200).json({
      playStoreRating: await getPlayStoreRating(req.query.app),
    });
  } catch (error) {
    res.status(500).json({ error, message: "Sorry, cannot scrape data" });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
