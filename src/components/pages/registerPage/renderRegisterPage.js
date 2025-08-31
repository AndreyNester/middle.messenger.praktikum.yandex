import Handlebars from "handlebars";
import registerPage from "../../templates/registerPage/registerPage.hbs?raw";

export function renderRegisterPage(props) {
  const template = Handlebars.compile(registerPage);
  return template(props);
}
