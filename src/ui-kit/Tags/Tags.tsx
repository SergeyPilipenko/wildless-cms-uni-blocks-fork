import { JSX } from '@redneckz/uni-jsx';
import type { TagsContent } from './TagsContent';

export interface TagsProps extends TagsContent {
  /** @hidden */
  className?: string;
}

export const Tags = JSX<TagsProps>((props) => {
  const { tags, className = '' } = props;

  return tags?.length ? (
    <div className={`flex flex-wrap gap-2 ${className}`}>{tags.map(renderTag)}</div>
  ) : null;
});

const renderTag = (tag: string, key: number) => (
  <span
    key={String(key)}
    className="text-m-light py-2 px-2.5 border-solid border rounded-md border-color-stroke"
  >
    {tag}
  </span>
);
