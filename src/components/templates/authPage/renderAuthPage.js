import tml from "./authPage.hbs?raw";
import Handlebars from "handlebars";

export function renderAuthPage(props) {
  const compiledTml = Handlebars.compile(tml);
  return compiledTml(props);
}
