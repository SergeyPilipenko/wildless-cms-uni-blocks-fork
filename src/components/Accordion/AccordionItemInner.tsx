import { JSX } from '@redneckz/uni-jsx';
import type { JSXBlock } from '../ContentPage/ContentPage';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { AccordionBlocks } from './AccordionBlocks';
import type { AccordionBlockProps } from './AccordionContent';
import type { AccordionItemProps } from './AccordionItem';

export const AccordionItemInner = JSX<AccordionItemProps>(({ blocks, columns = 1, context }) => {
  return (
    <div
      className={
        'transition-all duration-300 max-h-0 overflow-hidden group-last:last:pb-0 flex flex-wrap'
      }
    >
      {blocks?.length ? blocks.map(renderBlock(context, columns)) : null}
    </div>
  );
});

const renderBlock =
  (context: ContentPageContext, columns: number) => (block: AccordionBlockProps, i: number) => {
    const type = block?.accordionBlockType;
    if (!type || !(type in AccordionBlocks)) {
      return null;
    }
    const columnsCountClass = columns === 2 ? 'w-1/2' : '';
    const AccordionBlock: JSXBlock = AccordionBlocks[type];
    return (
      <div className={`mb-5 last:mb-0 pb-5 ${columnsCountClass}`} key={`block_${i}`}>
        <AccordionBlock context={context} {...block} className="!p-0" />
      </div>
    );
  };
