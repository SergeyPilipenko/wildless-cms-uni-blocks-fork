import { JSX } from '@redneckz/uni-jsx';
import { useCarouselControl } from '../../hooks/useCarousel';
import { ComparisonTableColumnHeaders } from './ComparisonTableColumnHeaders';
import type { Column, RowHeader } from './ComparisonTableContent';
import { ComparisonTableRows } from './ComparisonTableRows';
import { COLS_LENGTH_FOR_SCROLL } from './constants';

interface ComparisonTableBodyProps {
  columns?: Column[];
  rowHeaders?: RowHeader[];
  isShowAllRow: boolean;
  isColoredFirstColumn: boolean;
  visibleRowLength: number;
}

export const ComparisonTableBody = JSX<ComparisonTableBodyProps>(
  ({ columns, rowHeaders, isShowAllRow, visibleRowLength, isColoredFirstColumn }) => {
    const colHeaders = columns?.map(({ header }) => header || {});
    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders
      ?.map((header, i) => ({
        header,
        data: colData.map((col) => col?.[i] || [{}]),
      }))
      .slice(0, isShowAllRow ? rowHeaders.length : visibleRowLength);

    const isScrollAvailable = colData.length > COLS_LENGTH_FOR_SCROLL;

    const [activeIndex, controls] = useCarouselControl({
      itemsCount: colData.length,
      visibleItemCount: COLS_LENGTH_FOR_SCROLL,
    });

    return (
      <div>
        <div role="table">
          {colHeaders?.length ? (
            <ComparisonTableColumnHeaders colHeaders={colHeaders} activeCardIndex={activeIndex} />
          ) : null}
          {rowData?.length ? (
            <ComparisonTableRows
              rowData={rowData}
              isColoredFirstColumn={isColoredFirstColumn}
              activeCardIndex={activeIndex}
              controls={controls}
              isScrollAvailable={isScrollAvailable}
            />
          ) : null}
        </div>
        {isScrollAvailable ? (
          <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white" />
        ) : null}
      </div>
    );
  },
);
