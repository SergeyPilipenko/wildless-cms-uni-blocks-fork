import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../../ui-kit/Img/Img';
import { TableCarouselContainer } from '../ComparisonTable/TableCarouselContainer';
import { TableRowContainer } from '../ComparisonTable/TableRowContainer';
import { COLUMN_WIDTH, DIVIDER_CLASSES, FIRST_CELL_CLASSES } from './constants';
import { TariffsTableCell } from './TariffsTableCell';
import type { TariffsTableRowData } from './TariffsTableContent';

export interface TariffsTableRowProps {
  className?: string;
  row: TariffsTableRowData;
  activeCardIndex: number;
  isLastRow: boolean;
}

export const TariffsTableRow = JSX<TariffsTableRowProps>(
  ({ row: { header, data }, activeCardIndex, isLastRow }) => {
    return (
      <TableRowContainer>
        <div
          className={`text-s py-5 ${FIRST_CELL_CLASSES} ${DIVIDER_CLASSES} ${
            !isLastRow ? 'border-solid' : ''
          }`}
        >
          <div className="flex items-center text-primary-text">
            {header?.icon ? (
              <Img
                className="mr-[14px] max-w-6 max-h-6"
                image={header.icon}
                width="24px"
                height="24px"
                asSVG
              />
            ) : null}
            {header?.title}
          </div>
        </div>
        {data?.length ? (
          <TableCarouselContainer
            activeCardIndex={activeCardIndex}
            columnWidth={COLUMN_WIDTH}
            version="tariff"
          >
            {data.map((cell, i) => (
              <TariffsTableCell key={String(i)} cell={cell} isLastRow={isLastRow} />
            ))}
          </TableCarouselContainer>
        ) : null}
      </TableRowContainer>
    );
  },
);
