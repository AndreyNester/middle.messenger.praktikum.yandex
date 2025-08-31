import { renderSignInPage } from "./components/pages/signInPage/renderSignInPage";
import { renderRegisterPage } from "./components/pages/registerPage/renderRegisterPage";
import { renderUserSettingsPage } from "./components/pages/userSettingsPage/renderUserSettingsPage";
import { rednerNotFoundPage } from "./components/pages/notFoundPage/rednerNotFoundPage";
import { renderErrorPage } from "./components/pages/errorPage/renderErrorsPage";

export default class App {
  constructor() {
    const otiginPath = window.location.pathname;
    const [_, ...cleanedPathArr] = otiginPath;
    const cleanedOriginPath = cleanedPathArr.join("");

    this.state = {
      currentPage: cleanedOriginPath, // <-- "signin" | "register" | "usersettings" | "notfoundpage" | "errorpage"
    };
    this.appElement = document.getElementById("app");
  }

  render() {
    const pages = {
      signin: () => renderSignInPage(),
      register: () => renderRegisterPage(),
      usersettings: () => renderUserSettingsPage(),
      notfoundpage: () => rednerNotFoundPage(),
      errorpage: () => renderErrorPage(),
    };
    if (pages[this.state.currentPage]) {
      this.appElement.innerHTML = pages[this.state.currentPage]();
    } else {
      this.appElement.innerHTML = pages["notfoundpage"]();
    }
  }
}
