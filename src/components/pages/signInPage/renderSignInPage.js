import Handlebars from "handlebars";
import signInPage from "../../templates/signInPage/signInPage.hbs?raw";

export function renderSignInPage(props) {
  const template = Handlebars.compile(signInPage);
  return template(props);
}
