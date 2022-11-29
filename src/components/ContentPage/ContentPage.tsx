import { JSX } from '@redneckz/uni-jsx';
import type { BlockDecorator } from '../../model/BlockDecorator';
import type { BlocksRegistry } from '../../model/BlocksRegistry';
import type { ContentPageDef } from '../../model/ContentPageDef';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';
import { style2className } from '../../utils/style2className';
import { LikeControl } from '../LikeControl/LikeControl';
import type { ContentPageContext } from './ContentPageContext';
import { RenderBlockOptions } from './renderBlock';
import { renderBlocksList } from './renderBlockList';
import { renderSlots } from './renderSlots';

interface ContentPageProps extends UniBlockProps {
  blocksRegistry: BlocksRegistry;
  data?: ContentPageDef;
  blockDecorator?: BlockDecorator;
}

const defaultBlockDecorator: BlockDecorator = ({ blockClassName, block, render }) =>
  render({ blockClassName, block });

export const ContentPage: JSXBlock<ContentPageProps> = JSX<ContentPageProps>((props) => {
  const { className = '', blocksRegistry, blockDecorator, context, data = {} } = props;

  const { style: pageStyle, blocks, slots, likeControl, colorPalette = 'pc' } = data;

  const options: RenderBlockOptions = {
    key: '',
    blocksRegistry,
    page: data,
    blockDecorator: blockDecorator || defaultBlockDecorator,
    context,
  };

  const pageSlots = renderSlots({ slots, options });

  return (
    <section
      className={`relative ${style2className(pageStyle)} ${className}`}
      data-theme={colorPalette}
    >
      {pageSlots?.header ? (
        <div className="mb-5 shadow-[0_8px_32px_0px_#00000014]">{pageSlots.header}</div>
      ) : null}

      {blocks?.length ? (
        <div className="container grid grid-cols-12 gap-1">
          {renderBlocksList({ blocks, options })}
        </div>
      ) : null}

      {likeControl ? renderLikeControl(context) : null}
    </section>
  );
});

ContentPage.childrenTypes = [];
ContentPage.slots = () => ['header'];

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
