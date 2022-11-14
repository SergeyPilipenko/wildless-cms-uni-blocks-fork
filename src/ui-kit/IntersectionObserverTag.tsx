import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useRef } from '@redneckz/uni-jsx/lib/hooks';
import type { VNode } from '../model/VNode';

interface IntersectionObserverTagProps {
  tag: keyof HTMLElementTagNameMap;
  className?: string;
  anchor?: string;
  children?: VNode;
  observerCallback: IntersectionObserverCallback;
  observerOptions?: IntersectionObserverInit;
}

export const IntersectionObserverTag = JSX<IntersectionObserverTagProps>((props) => {
  const {
    tag = 'section',
    observerCallback,
    observerOptions,
    className = '',
    anchor = null,
    children,
  } = props;

  const intersectionObserver = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (element: HTMLElement | null) => {
      if (!element) {
        return;
      }

      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }

      intersectionObserver.current = new IntersectionObserver(observerCallback, observerOptions);
      intersectionObserver.current.observe(element);
    },
    [observerCallback, observerOptions],
  );

  const Tag = tag as any;

  return (
    <Tag ref={ref} className={className} id={anchor}>
      {children}
    </Tag>
  );
});
