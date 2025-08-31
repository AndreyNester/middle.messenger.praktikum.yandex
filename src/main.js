import "./styles/reset.css";
import "./utils/classnames";

/////////////////////////////////////////////////////////////////
/////////// Подключаем слои Atomic Design ///////////////////////
import "./components/atoms/register";
import "./components/molecules/register";
import "./components/organism/register";
import "./components/templates/register";
/////////////////////////////////////////////////////////////////

import { renderSignInPage } from "./components/pages/signInPage/renderSignInPage";
import { renderRegisterPage } from "./components/pages/registerPage/renderRegisterPage";
import { renderUserSettingsPage } from "./components/pages/userSettingsPage/renderUserSettingsPage";

async function render() {
  // const template = await loadTemplate("/src/templates/hela.hbs");
  const html = renderUserSettingsPage({});

  document.querySelector("#app").innerHTML = html;
}

render();
