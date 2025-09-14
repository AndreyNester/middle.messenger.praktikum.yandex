import Handlebars from 'handlebars';
import registerPage from './registerPage.hbs?raw';

interface IRegisterPageProps {
  someField?: string;
}
export function renderRegisterPage(props: IRegisterPageProps) {
  const template = Handlebars.compile<IRegisterPageProps>(registerPage);
  return template(props);
}
