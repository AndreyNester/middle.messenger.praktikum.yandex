import Handlebars from "handlebars";
import userSettingsPage from "../../templates/userSettingsPage/userSettingsPage.hbs?raw";

export function renderUserSettingsPage(props) {
  const template = Handlebars.compile(userSettingsPage);
  return template(props);
}
