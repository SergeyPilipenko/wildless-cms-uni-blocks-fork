import type { JSXBlock } from '../../components/ContentPage/ContentPage';
import type { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { GroupBlockDef } from './BlocksTypeProps';
import { EmbeddableGroupBlocks } from './EmbeddableGroupBlocks';
import { style2className } from '../../utils/style2className';

type EmbeddableBlocksProps = {
  groupBlocks?: GroupBlockDef[];
  context: ContentPageContext;
  className?: string;
};

export const renderBlock =
  ({ context, className }: EmbeddableBlocksProps) =>
  (block: GroupBlockDef, i: number) => {
    const type = block?.blockType;
    if (!type || !(type in EmbeddableGroupBlocks)) {
      return null;
    }
    const classNameBlock = style2className(block?.style);
    const EmbeddedBlock: JSXBlock = EmbeddableGroupBlocks[type];

    return (
      <div className={className} key={`block_${i}`}>
        <EmbeddedBlock context={context} {...block} className={classNameBlock} />
      </div>
    );
  };
