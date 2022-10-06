export async function mapJSON<T>(
  data: T,
  mapper: <In, Out = In>(value: In, key: string[]) => Promise<Out>,
  keyParts: string[] = [],
): Promise<T> {
  if (data === null || data === undefined) {
    return data;
  }

  const mappedData = await mapper(data, keyParts);
  if (mappedData !== data) {
    return mappedData as T;
  }

  if (Array.isArray(data)) {
    const values = data.map((_, i) => mapJSON(_, mapper, [String(i)].concat(keyParts)));

    return Promise.all(values) as any;
  } else if (typeof data === 'object' && (data as any).toString() === '[object Object]') {
    const subKeys = Object.keys(data);
    const values = subKeys.map((k) => mapJSON(data[k], mapper, [k].concat(keyParts)));
    const pairs = (await Promise.all(values)).map((_, i) => ({
      [subKeys[i]]: _,
    }));

    return Object.assign({}, ...pairs);
  }

  return mapper<T>(data, keyParts);
}
