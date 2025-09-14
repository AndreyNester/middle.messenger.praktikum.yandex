import { IMeta, IProps, TBlockEvent, TEventKey, TTageName } from '@/types/Block';
import EventBus from '../EventBus/EventBus';

// Нельзя создавать экземпляр данного класса
class Block {
  static EVENTS: Record<TEventKey, TBlockEvent> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement = document.createElement('span'); // Загулшка для TS
  private _meta: IMeta;
  props: IProps;
  private _eventBus: () => EventBus<TBlockEvent>;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName: TTageName, props = {}) {
    const eventBus = new EventBus<TBlockEvent>();

    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);
    this._eventBus = () => eventBus;
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus<TBlockEvent>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount(oldProps?: unknown) {}

  dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    // ...
  }

  componentDidUpdate(oldProps: unknown, newProps: unknown) {
    return true;
  }

  setProps = (nextProps: IProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
    this._element.innerHTML = block;
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render(): string {
    return ``;
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: IProps) {
    // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
    const self = this;

    // Здесь вам предстоит реализовать метод
    return props;
  }

  _createDocumentElement(tagName: TTageName): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}

export default Block;
