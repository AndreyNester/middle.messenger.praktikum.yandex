import { renderSignInPage } from "./components/pages/signInPage/renderSignInPage";
import { renderRegisterPage } from "./components/pages/registerPage/renderRegisterPage";
import { renderUserSettingsPage } from "./components/pages/userSettingsPage/renderUserSettingsPage";
import { rednerNotFoundPage } from "./components/pages/notFoundPage/rednerNotFoundPage";
import { renderErrorPage } from "./components/pages/errorPage/renderErrorsPage";

export default class App {
  constructor() {
    this.state = {
      currentPage: "signIn", // <-- "signIn" | "register" | "userSettings" | "notFoundPage" | "errorPage"
    };
    this.appElement = document.getElementById("app");
  }

  render() {
    const pages = {
      signIn: () => renderSignInPage(),
      register: () => renderRegisterPage(),
      userSettings: () => renderUserSettingsPage(),
      notFoundPage: () => rednerNotFoundPage(),
      errorPage: () => renderErrorPage(),
    };
    this.appElement.innerHTML = pages[this.state.currentPage]();
  }
}
