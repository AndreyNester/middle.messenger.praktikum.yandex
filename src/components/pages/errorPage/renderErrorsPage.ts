import Handlebars from 'handlebars';
import errorPage from './errorPage.hbs?raw';

interface ErrorPageProps {
  someField?: string;
}
export function renderErrorPage(props: ErrorPageProps) {
  const template = Handlebars.compile<ErrorPageProps>(errorPage);
  return template(props);
}
