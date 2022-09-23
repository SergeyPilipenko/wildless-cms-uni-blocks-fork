import { useCallback, useRef } from 'react';
import { IntersectionObserverComponent } from '../components/ContentPage/ContentPageContext';

export const IntersectionObserverTag: IntersectionObserverComponent = (props) => {
  const { Tag, observerCallback, observerOptions, children, ...rest } = props;

  const intersectionObserver = useRef<IntersectionObserver>();
  const ref = useCallback(
    (tag: HTMLElement | null | undefined) => {
      if (tag && !intersectionObserver.current) {
        intersectionObserver.current = new IntersectionObserver(observerCallback, observerOptions);
        intersectionObserver.current.observe(tag);
      }
    },
    [observerCallback, observerOptions],
  );

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
};
