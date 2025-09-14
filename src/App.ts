import { renderSignInPage } from './components/pages/signInPage/renderSignInPage';
import { renderRegisterPage } from './components/pages/registerPage/renderRegisterPage';
import { renderUserSettingsPage } from './components/pages/userSettingsPage/renderUserSettingsPage';
import { rednerNotFoundPage } from './components/pages/notFoundPage/rednerNotFoundPage';
import { renderErrorPage } from './components/pages/errorPage/renderErrorsPage';
import { Button } from './components/atoms/button/Button';
import { render } from './lib/render';

type TPage = 'signin' | 'register' | 'usersettings' | 'notfoundpage' | 'errorpage';
interface IState {
  currentPage: TPage;
}
export default class App {
  public state: IState;
  public appElement: HTMLElement | null;
  constructor() {
    const otiginPath = window.location.pathname;
    const [_, ...cleanedPathArr] = otiginPath;
    const cleanedOriginPath = cleanedPathArr.join('');

    this.state = {
      currentPage: cleanedOriginPath as TPage, // <-- "signin" | "register" | "usersettings" | "notfoundpage" | "errorpage"
    };
    this.appElement = document.getElementById('app');
  }

  render() {
    // const pages = {
    //   signin: () => renderSignInPage({}),
    //   register: () => renderRegisterPage({}),
    //   usersettings: () => renderUserSettingsPage({}),
    //   notfoundpage: () => rednerNotFoundPage({}),
    //   errorpage: () => renderErrorPage({}),
    // };
    // if (this.appElement) {
    //   if (pages[this.state.currentPage]) {
    //     this.appElement.innerHTML = pages[this.state.currentPage]();
    //   } else {
    //     this.appElement.innerHTML = pages['notfoundpage']();
    //   }
    // }
    const button = new Button({
      className: 'my-class',
      buttonText: 'Click me',
    });

    // app — это class дива в корне DOM
    render('#app', button);

    // Через секунду контент изменится сам, достаточно обновить пропсы
    setTimeout(() => {
      button.setProps({
        buttonText: '[a[a[a]]]',
      });
    }, 1000);
  }
}
