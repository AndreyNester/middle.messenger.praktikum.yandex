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
import { rednerNotFoundPage } from "./components/pages/notFoundPage/rednerNotFoundPage";
import { renderErrorPage } from "./components/pages/errorPage/renderErrorsPage";

async function render() {
  // const template = await loadTemplate("/src/templates/hela.hbs");
  const html = renderErrorPage({});

  document.querySelector("#app").innerHTML = html;
}

render();
