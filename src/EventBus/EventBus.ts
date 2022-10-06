import type { EventMap } from './EventMap';

type Subscriber = (ev: EventMap[keyof EventMap]) => void;

export class EventBus {
  public static readonly inst = new EventBus();

  private subscribers: Partial<Record<keyof EventMap, Subscriber[]>> = {};
  private subjectsStateMap: Partial<EventMap> = {};

  subscribe<T extends keyof EventMap>(type: T, listener: (event: EventMap[T]) => void) {
    this.subscribers[type] ||= [];
    this.subscribers[type]?.push(listener);

    const latestEvent = this.subjectsStateMap[type];

    if (latestEvent) {
      listener(latestEvent as EventMap[T]);
    }

    return () => {
      this.unsubscribe(type, listener);
    };
  }

  private unsubscribe<T extends keyof EventMap>(type: T, listener: (event: EventMap[T]) => void) {
    this.subscribers[type] = this.subscribers[type]?.filter((s) => s !== listener);
  }

  fire<T extends keyof EventMap>(type: T, event: EventMap[T]) {
    this.subjectsStateMap[type] = event;
    this.subscribers[type]?.forEach((s) => s(event));
  }

  subject<T extends keyof EventMap>(type: T, event: EventMap[T]) {
    this.subjectsStateMap[type] = event;
  }
}
