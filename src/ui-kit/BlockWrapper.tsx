import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useMemo, useRef, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { AnchorClickScrollingEvent } from '../components/Tabs/Tabs';
import { EventBus } from '../EventBus/EventBus';
import type { UniBlockProps } from '../model/ContentPageDef';
import { changeHashOnObserve } from '../utils/changeHashOnObserve';
import { IntersectionObserverTag } from './IntersectionObserverTag';

interface BlockWrapperProps extends UniBlockProps, Record<string, any> {
  anchor?: string;
  tag?: keyof HTMLElementTagNameMap;
}

const THRESHOLD_ACCURACY = 100; // Decimals number (100 is for two decimals number, 0.**)
const THRESHOLD_ARRAY_LENGTH = 18;
const THRESHOLD_ARRAY_START_VALUE =
  (THRESHOLD_ACCURACY - THRESHOLD_ARRAY_LENGTH) / THRESHOLD_ACCURACY;

export const BlockWrapper = JSX<BlockWrapperProps>(
  ({ anchor, className, children, tag = 'section', labels }) => {
    const Tag: any = tag;

    const [shouldRenderBlock, setShouldRenderBlock] = useState(true);
    const anchorClickRef = useRef<AnchorClickScrollingEvent>({});

    const observerCallback = useMemo(
      () => changeHashOnObserve({ anchor, anchorClickRef }),
      [anchor],
    );

    useEffect(() => {
      const anchorClickCleanup = EventBus.inst.subscribe('anchorClick', (e) => {
        setShouldRenderBlock(true);
        anchorClickRef.current = e;
      });
      const tabCleanup = EventBus.inst.subscribe('tab', (event) => {
        if (event.type === 'group') {
          const blockHasSettgins = labels?.length || anchor;
          setShouldRenderBlock(
            event.label ? !blockHasSettgins || Boolean(labels?.includes(event.label)) : true,
          );
        } else {
          changeHash(event.label);
          setShouldRenderBlock(true);
        }
      });

      return () => {
        anchorClickCleanup();
        tabCleanup();
      };
    }, []);

    if (!shouldRenderBlock) {
      return null;
    }

    return anchor ? (
      <IntersectionObserverTag
        tag={tag}
        className={className}
        observerCallback={observerCallback}
        observerOptions={{
          threshold: new Array(THRESHOLD_ARRAY_LENGTH).fill(0).map(getIntersectionThreshold),
        }}
        anchor={anchor}
      >
        {children}
      </IntersectionObserverTag>
    ) : (
      <Tag className={className}>{children}</Tag>
    );
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
