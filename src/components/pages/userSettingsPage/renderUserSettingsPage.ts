import Handlebars from 'handlebars';
import userSettingsPage from './userSettingsPage.hbs?raw';

interface ISesstingsPageProps {
  someField?: string;
}
export function renderUserSettingsPage(props: ISesstingsPageProps) {
  const template = Handlebars.compile(<ISesstingsPageProps>userSettingsPage);
  return template(props);
}
