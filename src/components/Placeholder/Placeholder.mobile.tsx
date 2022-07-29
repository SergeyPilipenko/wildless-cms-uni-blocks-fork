import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Tile } from '../Tile/Tile';
import type { PlaceholderContent } from './PlaceholderContent';

export interface PlaceholderProps extends PlaceholderContent, UniBlockProps {
  className?: string;
}

const GOLDEN_RATIO = 1.618;

export const Placeholder = JSX<PlaceholderProps>(({ className = '', context, title }) => {
  return (
    <Tile
      className={`pr-0 min-h-0 ${className}`}
      context={context}
      title={title}
      description="Блок в разработке..."
    >
      <figure className="m-0">{renderShimmer()}</figure>
    </Tile>
  );
});

const renderShimmer = (size = 3) =>
  goldenSequence(100, size)
    .map((_) => Math.floor(_))
    .map(renderShimmerItem);

const renderShimmerItem = (width = 100, index: number) => (
  <div key={String(index)} style={{ width: `${width}%` }} className="h-4 mt-2 bg-secondary-light" />
);

const goldenSequence = (first: number, size: number): number[] =>
  [first].concat(size > 0 ? goldenSequence(first / GOLDEN_RATIO, size - 1) : []);
