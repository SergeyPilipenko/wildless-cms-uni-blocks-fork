import { JSX } from '@redneckz/uni-jsx';
import { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img/Img';
import { TableCarouselContainer } from '../ComparisonTable/TableCarouselContainer';
import { COLUMN_WIDTH, DIVIDER_CLASSES, FIRST_CELL_CLASSES } from './constants';
import { TariffsTableCell } from './TariffsTableCell';
import type { Data } from './TariffsTableContent';
import { TariffsTableRowContainer } from './TariffsTableRowContainer';

export interface TariffsTableRowProps extends UniBlockProps {
  row: Data;
  activeCardIndex: number;
  isLastRow: boolean;
  rowIdx: number;
}

export const TariffsTableRow = JSX<TariffsTableRowProps>(
  ({ row: { header, data }, activeCardIndex, isLastRow, context, rowIdx }) => {
    return (
      <TariffsTableRowContainer context={context} rowIdx={rowIdx}>
        <div
          className={`text-s py-5 ${FIRST_CELL_CLASSES} ${DIVIDER_CLASSES} ${
            !isLastRow ? 'border-solid' : ''
          }`}
        >
          <div className="flex items-center text-primary-text" role="cell">
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
            {data.map((cells, i) => (
              <TariffsTableCell
                key={String(i)}
                cells={cells}
                isLastRow={isLastRow}
                rowIdx={rowIdx}
                cellIdx={i}
                context={context}
              />
            ))}
          </TableCarouselContainer>
        ) : null}
      </TariffsTableRowContainer>
    );
  },
);
