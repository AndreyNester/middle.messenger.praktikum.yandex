import Handlebars from 'handlebars';
import signInPage from './signInPage.hbs?raw';

interface ISignInPageProps {
  someField?: string;
}
export function renderSignInPage(props: ISignInPageProps) {
  const template = Handlebars.compile<ISignInPageProps>(signInPage);
  return template(props);
}
