import Handlebars from 'handlebars';
import registerPage from './registerPage.hbs?raw';

export function renderRegisterPage(props) {
  const template = Handlebars.compile(registerPage);
  return template(props);
}
