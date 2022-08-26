import type { JSXBlock } from '../../components/ContentPage/ContentPage';
import type { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { BlockDef, ColumnsCount } from './BlocksListProps';
import { EmbeddableBlocks } from './EmbeddableBlocks';
import { BlockVersion } from '../../model/BlockVersion';

type EmbeddableBlocksProps = {
  blocks?: BlockDef[];
  context: ContentPageContext;
  columns?: ColumnsCount;
  className?: string;
  version?: BlockVersion;
};

export const renderBlocksList = ({
  blocks,
  context,
  className,
  columns,
  version,
}: EmbeddableBlocksProps) =>
  blocks?.length ? blocks.map(renderBlock({ context, className, columns, version })) : null;

export const renderBlock =
  ({ context, columns, className, version }: EmbeddableBlocksProps) =>
  (block: BlockDef, i: number) => {
    const type = block?.blockListType;
    if (!type || !(type in EmbeddableBlocks)) {
      return null;
    }
    const columnsCountClass = columns === 2 ? 'w-1/2' : '';
    const EmbeddedBlock: JSXBlock = EmbeddableBlocks[type];
    return (
      <div className={`${className} ${columnsCountClass}`} key={`block_${i}`}>
        <EmbeddedBlock context={context} {...block} blockVersion={version} className="!p-0" />
      </div>
    );
  };
