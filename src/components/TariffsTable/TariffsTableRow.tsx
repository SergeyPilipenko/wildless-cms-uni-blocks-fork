import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Img } from '../../ui-kit/Img/Img';
import type { TariffsTableInnerContent } from '../../ui-kit/InnerTable/InnerTableProps';
import { TableCarouselContainer } from '../ComparisonTable/TableCarouselContainer';
import { COLUMN_WIDTH, DIVIDER_CLASSES, FIRST_CELL_CLASSES } from './constants';
import { TariffsTableCell } from './TariffsTableCell';
import type { Data } from './TariffsTableContent';
import { TariffsTableRowContainer } from './TariffsTableRowContainer';

export interface TariffsTableRowProps extends UniBlockProps {
  row: Data;
  activeCardIndex: number;
  rowIdx: number;
}

export const TariffsTableRow = JSX<TariffsTableRowProps>(
  ({ row: { header, data }, activeCardIndex, context, rowIdx }) => {
    const [tableInner, setTableInner] = useState<TariffsTableInnerContent | undefined>(undefined);
    const [openTableInnerIdx, setOpenTableInnerIdx] = useState<number | undefined>(undefined);

    const onHideContentClick = () => setTableInner(undefined);

    return (
      <TariffsTableRowContainer
        context={context}
        onHideContentClick={onHideContentClick}
        tableInner={tableInner}
      >
        <div className={`text-s py-5 ${FIRST_CELL_CLASSES} ${DIVIDER_CLASSES}`}>
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
            {header?.title ? <div className="text-m-light">{header?.title}</div> : null}
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
                rowIdx={rowIdx}
                cellIdx={i}
                context={context}
                setTableInner={setTableInner}
                tableInner={tableInner}
                openTableInnerIdx={openTableInnerIdx}
                setOpenTableInnerIdx={setOpenTableInnerIdx}
              />
            ))}
          </TableCarouselContainer>
        ) : null}
      </TariffsTableRowContainer>
    );
  },
);
