export type TTageName = keyof HTMLElementTagNameMap;
export type TBlockEvent = 'init' | 'flow:component-did-mount' | 'flow:render';
export type TEventKey = 'INIT' | 'FLOW_CDM' | 'FLOW_RENDER';
export interface IProps extends Record<string, unknown> {}
export interface IMeta {
  tagName: TTageName;
  props: IProps;
}
