import { useEffect, useRef } from '@redneckz/uni-jsx/lib/hooks';

export function useOutsideClick<R extends Node>(onClick: () => void) {
  const targetRef = useRef<R | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target?: any }) => {
      if (
        targetRef &&
        targetRef.current &&
        event.target instanceof Node &&
        !targetRef.current.contains(event.target)
      ) {
        onClick();
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClick]);

  return targetRef;
}
