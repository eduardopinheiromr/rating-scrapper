const JSSoup = require("jssoup").default;

const scrapeHtmlTextBySelectorAndClass = (html, selector, className) => {
  const soup = new JSSoup(html);

  return soup.find(selector, { class: className }).text;
};

module.exports = scrapeHtmlTextBySelectorAndClass;
