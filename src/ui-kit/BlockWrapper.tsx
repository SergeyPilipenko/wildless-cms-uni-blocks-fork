import { JSX } from '@redneckz/uni-jsx';
import { ContentPageContext } from '../components/ContentPage/ContentPageContext';
import { changeHashOnObserve } from '../utils/changeHashOnObserve';

interface BlockWrapperProps {
  context: ContentPageContext;
  className?: string;
  anchor?: string;
  Tag?: string;
}

export const BlockWrapper = JSX<BlockWrapperProps>(
  ({ anchor, className, context, children, Tag = 'section' }) => {
    const { IntersectionObserverTag } = context;

    return anchor ? (
      <IntersectionObserverTag
        Tag={Tag}
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
