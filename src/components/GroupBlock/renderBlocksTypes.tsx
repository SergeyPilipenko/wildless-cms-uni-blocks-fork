import type { JSXBlock } from '../../components/ContentPage/ContentPage';
import type { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import { style2className } from '../../utils/style2className';
import type { GroupBlockDef } from './BlocksTypeProps';
import { EmbeddableGroupBlocks } from './EmbeddableGroupBlocks';

type EmbeddableBlocksProps = {
  groupBlocks?: GroupBlockDef[];
  context: ContentPageContext;
  className?: string;
};

export const renderBlock =
  ({ context, className }: EmbeddableBlocksProps) =>
  (block: GroupBlockDef, i: number) => {
    if (!block) {
      return null;
    }

    const { style, blockType: type, ...rest } = block;

    if (!type || !(type in EmbeddableGroupBlocks)) {
      return null;
    }

    const classNameBlock = style2className(style);
    const EmbeddedBlock: JSXBlock = EmbeddableGroupBlocks[type];

    return (
      <div className={className} key={`block_${i}`}>
        <EmbeddedBlock context={context} {...rest} className={classNameBlock} />
      </div>
    );
  };
