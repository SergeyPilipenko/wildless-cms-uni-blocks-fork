import type { JSXBlock } from '../../components/ContentPage/ContentPage';
import type { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { CalculatorBlockDef } from './CalculatorContent';
import { EmbeddableCalcBlocks, EmbeddableCalcProps } from './EmbeddableCalcBlocks';

type EmbeddableCalcBlocks = {
  blockCalcTabs?: CalculatorBlockDef[];
  context: ContentPageContext;
  className?: string;
};

export const renderCalculatorList = ({
  blockCalcTabs,
  context,
  className,
}: EmbeddableCalcBlocks) => {
  return blockCalcTabs?.length ? blockCalcTabs.map(renderBlock({ context, className })) : null;
};

const renderBlock =
  ({ context, className }: any) =>
  (blockCalcTabs: CalculatorBlockDef, i: number) => {
    const type = blockCalcTabs?.calcType;
    if (!type || !(type in EmbeddableCalcBlocks)) {
      return null;
    }
    const EmbeddedBlock: JSXBlock<EmbeddableCalcProps> = EmbeddableCalcBlocks[type];
    return (
      <section
        key={`${String(i)}`}
        className={`box-border relative flex grow-0 shrink-0 basis-full ${className}`}
        role="listitem"
      >
        <div className={`box-border p-9 w-full`}>
          <EmbeddedBlock
            context={context}
            {...blockCalcTabs}
            className="!p-0 flex justify-between"
          />
        </div>
      </section>
    );
  };
