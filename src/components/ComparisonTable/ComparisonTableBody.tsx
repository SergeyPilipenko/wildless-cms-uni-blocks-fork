import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { useTableArrowScrollControl } from '../../hooks/useTableArrowScrollControl';
import { ContentPageContext } from '../ContentPage/ContentPageContext';
import { ComparisonTableColumnHeaders } from './ComparisonTableColumnHeaders';
import { Column, RowHeader } from './ComparisonTableContent';
import { ComparisonTableRows } from './ComparisonTableRows';
import { COLS_LENGTH_FOR_SCROLL } from './constants';

interface ComparisonTableBodyProps {
  context: ContentPageContext;
  columns?: Column[];
  rowHeaders?: RowHeader[];
  isShowAllRow: boolean;
  isColoredFirstColumn: boolean;
  visibleRowLength: number;
}

export const ComparisonTableBody = JSX<ComparisonTableBodyProps>(
  ({ context, columns, rowHeaders, isShowAllRow, visibleRowLength, isColoredFirstColumn }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    const colHeaders = columns?.map(({ header }) => header || {});
    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders
      ?.map((header, i) => ({
        header,
        data: colData.map((col) => col?.[i] || [{}]),
      }))
      .slice(0, isShowAllRow ? rowHeaders.length : visibleRowLength);

    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const tableArrowScrollProps = useTableArrowScrollControl({
      columnsLength: colData.length,
      colsLengthForScroll: COLS_LENGTH_FOR_SCROLL,
      activeCardIndex,
      setActiveCardIndex,
    });
    const { isScrollAvailable } = tableArrowScrollProps;

    return (
      <div>
        <div role="table">
          {colHeaders?.length ? (
            <ComparisonTableColumnHeaders
              colHeaders={colHeaders}
              activeCardIndex={activeCardIndex}
              router={router}
              handlerDecorator={handlerDecorator}
            />
          ) : null}
          {rowData?.length ? (
            <ComparisonTableRows
              rowData={rowData}
              activeCardIndex={activeCardIndex}
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
