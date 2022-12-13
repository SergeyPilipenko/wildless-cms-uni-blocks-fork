import { Heading } from '../../ui-kit/Heading/Heading';
import type { CalculatorBlockDef } from './CalculatorContent';
import { EmbeddableCalcBlocks } from './EmbeddableCalcBlocks';

export const renderCalculatorBlock = (block: CalculatorBlockDef, i: number) => {
  const type = block?.calcType;
  if (!type || !(type in EmbeddableCalcBlocks)) {
    return null;
  }
  const EmbeddedBlock = EmbeddableCalcBlocks[type];

  return (
    <section
      key={String(i)}
      className="box-border relative bg-white flex shrink-0 self-start basis-full"
      role="listitem"
    >
      <div className="box-border p-9 w-full">
        {block?.title ? <Heading className="text-center mb-6" title={block.title} /> : null}
        <EmbeddedBlock {...block} className="flex justify-between" />
      </div>
    </section>
  );
};
