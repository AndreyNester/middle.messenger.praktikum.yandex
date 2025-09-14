/// <reference types="vite/client" />

declare module '*.hbs' {
  const src: unknown;
  export default src;
}
declare module '*.hbs?raw' {
  const src: string;
  export default src;
}
declare module '*.scss' {
  const content: unknown;
  export default content;
}

declare module '*.css' {
  const content: unknown;
  export default content;
}
