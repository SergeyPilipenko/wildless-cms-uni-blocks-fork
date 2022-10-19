export async function fetchJSON<R = unknown>(
  url: string,
  options?: RequestInit,
): Promise<R | null> {
  try {
    return await fetchJSONUnsafe(url, options);
  } catch (err) {
    console.error(err);
  }

  return null;
}

export async function fetchJSONUnsafe<R = unknown>(url: string, options?: RequestInit): Promise<R> {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}
