import type { JSXBlock } from '../../components/ContentPage/ContentPage';
import type { CalculatorBlockDef } from './CalculatorContent';
import { EmbeddableCalcBlocks, EmbeddableCalcProps } from './EmbeddableCalcBlocks';

export const renderCalculatorBlock =
  ({ context, className }: any) =>
  (blockCalcTabs: CalculatorBlockDef, i: number) => {
    const type = blockCalcTabs?.calcType;
    if (!type || !(type in EmbeddableCalcBlocks)) {
      return null;
    }
    const EmbeddedBlock: JSXBlock<EmbeddableCalcProps> = EmbeddableCalcBlocks[type];
    return (
      <section
        key={String(i)}
        className={`box-border relative flex shrink-0 basis-full ${className}`}
        role="listitem"
      >
        <div className="box-border p-9 w-full">
          <EmbeddedBlock context={context} {...blockCalcTabs} className="flex justify-between" />
        </div>
      </section>
    );
  };
