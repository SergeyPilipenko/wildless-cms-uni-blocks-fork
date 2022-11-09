import { AnchorClickScrollingEvent } from '../components/Tabs/Tabs';
import { EventBus } from '../EventBus/EventBus';

interface ChangeHashOnObserveProps {
  anchor?: string;
  anchorClickRef?: {
    current: AnchorClickScrollingEvent | null;
  };
}

export const changeHashOnObserve =
  ({ anchor, anchorClickRef }: ChangeHashOnObserveProps) =>
  (entries: IntersectionObserverEntry[]) => {
    if (!entries?.length) {
      return;
    }

    const [entry] = entries;

    if (!entry.isIntersecting || entry.boundingClientRect.top > 150) {
      return;
    }

    if (anchorClickRef?.current?.isScrolling && anchorClickRef.current.label === `#${anchor}`) {
      EventBus.inst.fire('anchorClick', { isScrolling: false, label: undefined });
      EventBus.inst.fire('tab', { type: 'link', label: anchor });
    } else if (!anchorClickRef?.current?.isScrolling) {
      EventBus.inst.fire('tab', { type: 'link', label: anchor });
    }
  };
