export type TTageName = keyof HTMLElementTagNameMap;
export type TBlockEvent =
  | 'init'
  | 'flow:component-did-mount'
  | 'flow:render'
  | 'flow:component-did-update';
export type TEventKey = 'INIT' | 'FLOW_CDM' | 'FLOW_RENDER' | 'FLOW_CDU';
export interface IProps extends Record<string, unknown> {}
export type TPropKey = Extract<keyof IProps, string>;
export interface IMeta {
  tagName: TTageName;
  props: IProps;
}
