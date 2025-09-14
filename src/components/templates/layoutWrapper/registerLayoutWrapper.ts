import './styles.scss';
import Handlebars from 'handlebars';
import layoutWrapper from './layoutWrapper.hbs?raw';

Handlebars.registerPartial('layoutWrapper', layoutWrapper);
