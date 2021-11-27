import JSSoup from "jssoup";

const scrapeHtmlTextBySelectorAndClass = (
  html: string,
  selector: string,
  className: string
) => {
  const soup = new JSSoup(html);

  return soup.find(selector, { class: className }).text;
};

export default scrapeHtmlTextBySelectorAndClass;
