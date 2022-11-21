import { JSX } from '@redneckz/uni-jsx';
import type { BlockAncestors, BlockDecorator } from '../../model/BlockDecorator';
import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { BlockDef, ContentPageDef } from '../../model/ContentPageDef';
import type { UniBlockProps } from '../../model/JSXBlock';
import { style2className } from '../../utils/style2className';
import { LikeControl } from '../LikeControl/LikeControl';
import type { ContentPageContext } from './ContentPageContext';
import { renderBlock } from './renderBlock';

interface ContentPageProps extends UniBlockProps {
  blocksRegistry: BlocksRegistry;
  data?: ContentPageDef;
  blockDecorator?: BlockDecorator;
}

const defaultBlockDecorator: BlockDecorator = ({ blockClassName, block, render }) =>
  render({ blockClassName, block });

export const ContentPage = JSX<ContentPageProps>((props) => {
  const { className = '', context, data = {} } = props;

  const { style: pageStyle, blocks, slots, likeControl, colorPalette = 'pc' } = data;

  const blocksListRenderer = renderBlocksList(props);

  return (
    <section
      className={`relative ${style2className(pageStyle)} ${className}`}
      data-theme={colorPalette}
    >
      {slots?.header?.blocks?.length ? (
        <div className={`${style2className(slots.header.style)}`}>
          {blocksListRenderer(slots.header.blocks, ['header'])}
        </div>
      ) : null}

      {blocks?.length ? (
        <div className="container grid grid-cols-12 gap-1">{blocksListRenderer(blocks)}</div>
      ) : null}

      {likeControl ? renderLikeControl(context) : null}
    </section>
  );
});

function renderBlocksList({ blocksRegistry, data, blockDecorator, context }: ContentPageProps) {
  return (blocks: BlockDef[], ancestors?: BlockAncestors) =>
    blocks.map((block, i) =>
      renderBlock(
        block,
        {
          key: `${block.type || '#'}-${i}`,
          blocksRegistry,
          page: data || {},
          blockDecorator: blockDecorator || defaultBlockDecorator,
          context,
        },
        ancestors,
      ),
    );
}

function renderLikeControl(context: ContentPageContext) {
  return (
    <div className="flex items-end absolute bottom-0 right-0 h-full pointer-events-none">
      <LikeControl
        key="LikeControl"
        className="rounded-tl-lg sticky bottom-0 pointer-events-auto"
        context={context}
      />
    </div>
  );
}
