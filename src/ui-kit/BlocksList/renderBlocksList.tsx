import type { JSXBlock } from '../../components/ContentPage/ContentPage';
import type { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { UniBlockProps } from '../../types';
import { style2className } from '../../utils/style2className';
import type { BlockDef } from './BlocksListProps';
import { EmbeddableBlocks } from './EmbeddableBlocks';

type EmbeddableBlocksProps = {
  blocks?: BlockDef[];
  context: ContentPageContext;
  className?: string;
};

export const renderBlocksList = ({ blocks, context, className = '' }: EmbeddableBlocksProps) =>
  blocks?.length ? blocks.map(renderBlock({ context, className })) : null;

const renderBlock =
  ({ context, className }: UniBlockProps) =>
  (block: BlockDef, i: number) => {
    const type = block?.blockListType;
    if (!type || !(type in EmbeddableBlocks)) {
      return null;
    }

    const { style, ...rest } = block;

    const classNameBlock = style2className(style);
    const EmbeddedBlock: JSXBlock = EmbeddableBlocks[type];

    return (
      <EmbeddedBlock
        key={`block_${i}`}
        className={`${className} ${classNameBlock}`}
        context={context}
        {...rest}
      />
    );
  };
