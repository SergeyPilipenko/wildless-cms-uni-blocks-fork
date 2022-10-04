import { BusEventMap } from './EventBusEvents';

type Subscriber = (ev: BusEventMap[keyof BusEventMap]) => void;

type ListenerDeregistrator = () => void;
type ListenerRegistrator = (callback: () => void) => ListenerDeregistrator;

export class EventBus {
  private subscribers: Partial<Record<keyof BusEventMap, Subscriber[]>> = {};

  constructor(private listenerRegistrator: ListenerRegistrator) {}

  subscribe<T extends keyof BusEventMap>(type: T, listener: (event: BusEventMap[T]) => void) {
    this.listenerRegistrator(() => {
      this.subscribers[type] ||= [];
      this.subscribers[type]?.push(listener);

      return () => {
        this.unsubscribe(type, listener);
      };
    });
  }

  private unsubscribe<T extends keyof BusEventMap>(
    type: T,
    listener: (event: BusEventMap[T]) => void,
  ) {
    this.subscribers[type] = this.subscribers[type]?.filter((s) => s !== listener);
  }

  fire<T extends keyof BusEventMap>(type: T, event: BusEventMap[T]) {
    this.subscribers[type]?.forEach((s) => s(event));
  }
}
