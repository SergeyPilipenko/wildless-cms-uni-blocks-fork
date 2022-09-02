import { JSX } from '@redneckz/uni-jsx';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { TariffsTableRowHeader } from './TariffsTableContent';

export const TableTileHeader = JSX<TariffsTableRowHeader>(({ title, icon }) => {
  return (
    <div className="flex gap-2.5 mb-2">
      {title ? <Heading headingType="h3" className="font-medium" title={title} /> : null}
      {icon ? (
        <Img className="ml-auto max-w-6 max-h-6" image={icon} width="24px" height="24px" />
      ) : null}
    </div>
  );
});
