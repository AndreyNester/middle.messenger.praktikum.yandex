import Handlebars from 'handlebars';
import notFoundPage from './notFoundPage.hbs?raw';

interface INotFoundPageProps {
  someField?: string;
}

export function rednerNotFoundPage(props: INotFoundPageProps) {
  const template = Handlebars.compile<INotFoundPageProps>(notFoundPage);
  return template(props);
}
