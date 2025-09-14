import { TCallback, TEvent } from '@/types/EventBus';

export default class EventBus<T extends string> {
  public listeners: Partial<Record<T, TCallback[]>>;

  constructor() {
    this.listeners = {};
  }

  on(event: T, callback: TCallback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: T, callback: TCallback): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: T, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
