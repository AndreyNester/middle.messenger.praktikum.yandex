import { TCallback, TEvent } from '@/types/EventBus';

export default class EventBus {
  public listeners: Partial<Record<TEvent, TCallback[]>>;

  constructor() {
    this.listeners = {};
  }

  on(event: TEvent, callback: TCallback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: TEvent, callback: TCallback): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: TEvent, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
