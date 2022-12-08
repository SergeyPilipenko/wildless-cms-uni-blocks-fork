import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useMemo, useRef, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { AnchorClickScrollingEvent } from '../components/Tabs/Tabs';
import { EventBus } from '../EventBus/EventBus';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { UniBlockProps } from '../model/JSXBlock';
import { changeHashOnObserve } from '../utils/changeHashOnObserve';

interface BlockWrapperProps extends UniBlockProps, Record<string, any> {
  anchor?: string;
  tag?: keyof HTMLElementTagNameMap;
}

const THRESHOLD_ACCURACY = 100; // Decimals number (100 is for two decimals number, 0.**)
const THRESHOLD_ARRAY_LENGTH = 18;
const THRESHOLD_ARRAY_START_VALUE =
  (THRESHOLD_ACCURACY - THRESHOLD_ARRAY_LENGTH) / THRESHOLD_ACCURACY;

const OBSERVER_OPTIONS = {
  threshold: new Array(THRESHOLD_ARRAY_LENGTH).fill(0).map(getIntersectionThreshold),
};

export const BlockWrapper = JSX<BlockWrapperProps>(
  ({ anchor, className, children, tag = 'section', labels, role }) => {
    const Tag: any = tag;

    const [isVisible, setVisible] = useState(true);
    const anchorClickRef = useRef<AnchorClickScrollingEvent>({});

    const observerCallback = useMemo(
      () => changeHashOnObserve({ anchor, anchorClickRef }),
      [anchor],
    );
    const ref = useIntersectionObserver(observerCallback, OBSERVER_OPTIONS);

    useEffect(
      () =>
        EventBus.inst.subscribe('anchorClick', (e) => {
          setVisible(true);
          anchorClickRef.current = e;
        }),
      [],
    );
    useEffect(
      () =>
        EventBus.inst.subscribe('tab', (event) => {
          if (event.type === 'group') {
            const hasSettings = labels?.length || anchor;
            setVisible(event.label ? !hasSettings || Boolean(labels?.includes(event.label)) : true);
          } else {
            changeHash(event.label);
            setVisible(true);
          }
        }),
      [],
    );

    return isVisible ? (
      <Tag className={className} role={role} {...(anchor ? { id: anchor, ref } : {})}>
        {children}
      </Tag>
    ) : null;
  },
);

function getIntersectionThreshold(_: number, i: number): number {
  const value = (i + 1) / THRESHOLD_ACCURACY + THRESHOLD_ARRAY_START_VALUE;

  return Math.round(value * THRESHOLD_ACCURACY) / THRESHOLD_ACCURACY;
}

function changeHash(label?: string) {
  if (label) {
    globalThis.document.location.hash = label;
  }
}
