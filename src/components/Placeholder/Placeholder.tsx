import { JSX } from '@redneckz/uni-jsx';
import type { PlaceholderContent } from '../../components/Placeholder/PlaceholderContent';
import type { UniBlockProps } from '../../types';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';

export interface PlaceholderProps extends PlaceholderContent, UniBlockProps {
  className?: string;
}

const GOLDEN_RATIO = 1.618;

export const Placeholder = JSX<PlaceholderProps>(
  ({ className, context, title, description = 'Блок в разработке...' }) => {
    return (
      <section
        className={`bg-white text-primary-text font-sans p-9 box-border ${className} ${getTileRightPadding(
          className,
        )} ${getTileMinHeight(className)} `}
      >
        <BaseTile
          context={context}
          title={
            title ? (
              <Heading
                headingType={getTileHeadingType(className)}
                title={title}
                className={`whitespace-pre-wrap max-w-[600px]`}
              />
            ) : null
          }
        >
          {description ? (
            <Description className="mt-4 max-w-[600px]" description={description} />
          ) : null}
          <figure className="m-0 min-w-[600px]">{renderShimmer()}</figure>
        </BaseTile>
      </section>
    );
  },
);

const renderShimmer = (size = 3) =>
  goldenSequence(100, size)
    .map((_) => Math.floor(_))
    .map(renderShimmerItem);

const renderShimmerItem = (width = 100, index: number) => (
  <div key={String(index)} style={{ width: `${width}%` }} className="h-4 mt-2 bg-secondary-light" />
);

const goldenSequence = (first: number, size: number): number[] =>
  [first].concat(size > 0 ? goldenSequence(first / GOLDEN_RATIO, size - 1) : []);
