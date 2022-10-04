import { JSX } from '@redneckz/uni-jsx';
import type { PlaceholderContent } from '../../components/Placeholder/PlaceholderContent';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Headline } from '../Headline/Headline';
import type { UniBlockProps } from '../../types';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';

export interface PlaceholderProps extends PlaceholderContent, UniBlockProps {
  className?: string;
}

const GOLDEN_RATIO = 1.618;

export const Placeholder = JSX<PlaceholderProps>(
  ({ className, context, title, description = 'Блок в разработке...', ...rest }) => {
    return (
      <BlockWrapper
        context={context}
        className={`bg-white text-primary-text font-sans p-9 box-border ${className} ${getTileRightPadding(
          className,
        )} ${getTileMinHeight(className)} `}
        {...rest}
      >
        <Headline
          context={context}
          className="!p-0 max-w-[600px]"
          title={title}
          description={description}
          headlineVersion={getTileHeadingType(className)}
        />
        <figure className="m-0 min-w-[600px]">{renderShimmer()}</figure>
      </BlockWrapper>
    );
  },
);

const renderShimmer = (size = 3) =>
  goldenSequence(100, size)
    .map((_) => Math.floor(_))
    .map(renderShimmerItem);

const renderShimmerItem = (width: number, index: number) => (
  <div
    key={String(index)}
    style={{ width: `${width || 100}%` }}
    className="h-4 mt-2 bg-secondary-light"
  />
);

const goldenSequence = (first: number, size: number): number[] =>
  [first].concat(size > 0 ? goldenSequence(first / GOLDEN_RATIO, size - 1) : []);
