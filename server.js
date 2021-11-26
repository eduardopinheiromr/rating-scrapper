const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const getAppStoreRating = require("./services/getAppStoreRating");
const getPlayStoreRating = require("./services/getPlayStoreRating");

app.get("/", (req, res) => {
  res.writeHead(302, {
    Location: "https://github.com/eduardopinheiromr/rating-scrapper",
  });
  res.end();
});

app.post("/api/rating", (req, res) => {
  Promise.all([
    getAppStoreRating(req.body.appStorePage),
    getPlayStoreRating(req.body.playStorePage),
  ]).then((values) => {
    res.status(200).json({
      appStoreRating: values[0],
      playStoreRating: values[1],
    });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
