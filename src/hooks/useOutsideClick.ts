import { useEffect } from '@redneckz/uni-jsx/lib/hooks';

interface Ref {
  current: HTMLInputElement | null;
}

export function useOutsideClick(wrapperRef: Ref, setIsOpen: (_: boolean) => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef &&
        wrapperRef.current &&
        event.target instanceof HTMLElement &&
        !wrapperRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
}
