import { useEffect, useRef } from '@redneckz/uni-jsx/lib/hooks';

export function useIntersectionObserver<R extends Element>(
  observerCallback: IntersectionObserverCallback,
  observerOptions?: IntersectionObserverInit,
) {
  const ref = useRef<R | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    intersectionObserver.observe(ref.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [observerCallback, observerOptions]);

  return ref;
}
