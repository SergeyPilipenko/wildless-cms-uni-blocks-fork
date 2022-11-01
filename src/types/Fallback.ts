type Key = string;
type Data = any;
export type FallbackMap = Record<Key, () => Promise<Data>>;
export type Fallback = Record<Key, Data>;
