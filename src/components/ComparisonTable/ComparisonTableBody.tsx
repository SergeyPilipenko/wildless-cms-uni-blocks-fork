import { JSX } from '@redneckz/uni-jsx';
import { useTableArrowScrollControl } from '../../hooks/useTableArrowScrollControl';
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

    const tableArrowScrollProps = useTableArrowScrollControl({
      columnsLength: colData.length,
      colsLengthForScroll: COLS_LENGTH_FOR_SCROLL,
    });
    const { activeCardIndex, isScrollAvailable } = tableArrowScrollProps;

    return (
      <div>
        <div role="table">
          {colHeaders?.length ? (
            <ComparisonTableColumnHeaders
              colHeaders={colHeaders}
              activeCardIndex={activeCardIndex}
            />
          ) : null}
          {rowData?.length ? (
            <ComparisonTableRows
              rowData={rowData}
              isColoredFirstColumn={isColoredFirstColumn}
              {...tableArrowScrollProps}
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
