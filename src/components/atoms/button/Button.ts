import Block from '@/lib/Block/Block';
import { compile } from 'handlebars';
import Handlebars from 'handlebars';
import buttonTemplate from './button.hbs?raw';

interface IButton {}

export class Button extends Block {
  constructor(props: IButton) {
    // Создаём враппер DOM-элемент button
    super('button', props);
  }

  override render(): string {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    const compliled = Handlebars.compile(buttonTemplate);
    return compliled(this.props);
  }

  override componentDidMount(oldProps?: unknown): void {}
}
