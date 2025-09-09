import Handlebars from 'handlebars';
import notFoundPage from './notFoundPage.hbs?raw';

export function rednerNotFoundPage(props) {
  const template = Handlebars.compile(notFoundPage);
  return template(props);
}
