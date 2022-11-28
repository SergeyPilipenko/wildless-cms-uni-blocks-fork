import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useRef } from '@redneckz/uni-jsx/lib/hooks';
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
  const tagRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!tagRef.current) {
      return undefined;
    }

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    intersectionObserver.observe(tagRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [observerCallback, observerOptions]);

  const Tag = tag as any;

  return (
    <Tag ref={tagRef} className={className} id={anchor}>
      {children}
    </Tag>
  );
});
