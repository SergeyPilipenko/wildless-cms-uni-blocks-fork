import React, { ReactNode, useCallback, useRef } from 'react';
import type { IntersectionObserverComponent } from '../components/ContentPage/ContentPageContext';

export const IntersectionObserverTag: IntersectionObserverComponent = (props) => {
  const {
    tag: _tag = 'section',
    observerCallback,
    observerOptions,
    className = '',
    anchor = null,
    children,
  } = props;

  const intersectionObserver = useRef<IntersectionObserver>();

  const ref = useCallback(
    (tag: HTMLElement | null | undefined) => {
      if (!tag) {
        return;
      }

      if (intersectionObserver.current) {
        intersectionObserver.current.disconnect();
      }

      intersectionObserver.current = new IntersectionObserver(observerCallback, observerOptions);
      intersectionObserver.current.observe(tag);
    },
    [observerCallback, observerOptions],
  );

  return React.createElement(_tag, { ref, className, id: anchor }, children as ReactNode);
};
