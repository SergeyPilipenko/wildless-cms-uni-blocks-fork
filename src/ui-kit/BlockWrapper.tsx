import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { ContentPageContext } from '../components/ContentPage/ContentPageContext';
import { EventBus } from '../EventBus/EventBus';
import type { UniBlockProps } from '../types';
import { changeHashOnObserve } from '../utils/changeHashOnObserve';

interface BlockWrapperProps extends UniBlockProps, Record<string, any> {
  context: ContentPageContext;
  className?: string;
  anchor?: string;
  tag?: keyof HTMLElementTagNameMap;
}

export const BlockWrapper = JSX<BlockWrapperProps>(
  ({ anchor, className, context, children, tag = 'section', labels }) => {
    const Tag: any = tag;

    const { IntersectionObserverTag } = context;
    const [shouldRenderBlock, setShouldRenderBlock] = useState(true);

    useEffect(
      () =>
        EventBus.inst.subscribe('tab', (event) => {
          if (event.type === 'group') {
            setShouldRenderBlock(!labels?.length || !event.label || labels.includes(event.label));
          } else {
            setShouldRenderBlock(true);
            scrollToBlock(event.label);
          }
        }),
      [labels],
    );

    if (!shouldRenderBlock) {
      return null;
    }

    return anchor ? (
      <IntersectionObserverTag
        tag={tag}
        className={className}
        observerCallback={changeHashOnObserve}
        observerOptions={{ threshold: 1 }} // Lower threshold when hash change needed
        anchor={anchor}
      >
        {children}
      </IntersectionObserverTag>
    ) : (
      <Tag className={className}>{children}</Tag>
    );
  },
);

function scrollToBlock(label?: string) {
  setTimeout(() =>
    globalThis.document.getElementById(`#${label}`)?.scrollIntoView({ behavior: 'smooth' }),
  );
}
