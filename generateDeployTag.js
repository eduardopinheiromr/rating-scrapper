const fs = require("fs");

const generateDeployTag = () => {
  const deployTag = `${new Date().getTime()}`;

  const file = "deployTag.json";
  fs.writeFile(file, deployTag, (err) => {
    if (err) throw err;
    console.log("Deploy tag saved to file");
  });
};

generateDeployTag();

module.exports = generateDeployTag;
