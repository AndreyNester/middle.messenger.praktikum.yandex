import Handlebars from "handlebars";
import errorPage from "../../templates/errorPage/errorPage.hbs?raw";

export function renderErrorPage(props) {
  const template = Handlebars.compile(errorPage);
  return template(props);
}
