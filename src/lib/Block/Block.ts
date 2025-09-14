import { IMeta, IProps, TBlockEvent, TEventKey, TTageName, TPropKey } from '@/types/Block';
import EventBus from '../EventBus/EventBus';

// Нельзя создавать экземпляр данного класса
abstract class Block {
  static EVENTS: Record<TEventKey, TBlockEvent> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
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

  private _registerEvents(eventBus: EventBus<TBlockEvent>) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  // Реализуется в расширенном классе
  componentDidMount(oldProps?: unknown) {}

  dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  // private _componentDidUpdate(oldProps: unknown, newProps: unknown) {
  //   // ...
  // }

  private _componentDidUpdate(oldProps: unknown, newProps: unknown): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  // componentDidUpdate(oldProps: unknown, newProps: unknown) {
  //   return true;
  // }
  protected componentDidUpdate(oldProps: unknown, newProps: unknown): boolean {
    console.log(oldProps, newProps);
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

  private _render() {
    const block = this.render();
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
    console.log(block);
    this._element.innerHTML = block;
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render(): string {
    return `<div>ppp</div>`;
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: IProps): any {
    const self = this;
    return new Proxy(props, {
      get(target: IProps, prop: TPropKey) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: IProps, prop: TPropKey, value: unknown) {
        const oldTarget = { ...target };
        target[prop] = value;
        self._eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('No access');
      },
    });
  }

  private _createDocumentElement(tagName: TTageName): HTMLElement {
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
