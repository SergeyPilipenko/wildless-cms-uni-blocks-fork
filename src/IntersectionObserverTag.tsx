import { FC, useCallback, useRef } from 'react';
import { IntersectionObserverTagProps } from './components/ContentPage/ContentPageContext';

export const IntersectionObserverTag: FC<IntersectionObserverTagProps> = (props) => {
  const { Tag, className = '', observerCallback, observerOptions, children, ...rest } = props;

  const intersectionObserver = useRef<IntersectionObserver>();
  const ref = useCallback(
    (tag: HTMLElement | null | undefined) => {
      if (tag && !intersectionObserver.current) {
        intersectionObserver.current = new IntersectionObserver(observerCallback, observerOptions);
        intersectionObserver.current.observe(tag);
      }
    },
    [observerCallback, observerOptions, intersectionObserver.current],
  );

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
};
