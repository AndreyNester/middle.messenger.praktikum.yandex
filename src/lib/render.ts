// utils/renderDOM.js

import Block from './Block/Block';

export function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error('Нет такого элемента');
  }
  root.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}
