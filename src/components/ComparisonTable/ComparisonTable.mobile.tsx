import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Heading } from '../../ui-kit/Heading/Heading';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import type { CellData, ComparisonTableContent } from './ComparisonTableContent';
import { TableColumn } from './TableColumn';

export interface ComparisonTableProps extends ComparisonTableContent, UniBlockProps {}

export const ComparisonTable = JSX<ComparisonTableProps>((props) => {
  const { className, title } = props;

  return (
    <section
      className={`bg-white font-sans px-4 py-6 overflow-hidden text-primary-text relative ${
        className || ''
      }`}
    >
      {title ? (
        <Heading headingType="h3" className="font-medium text-center m-0 mb-5" title={title} />
      ) : null}
      <div role="table">
        <TableInner {...props} />
      </div>
    </section>
  );
});

const TableInner = JSX<ComparisonTableProps>(
  ({ columns, rowHeaders, isColoredFirstColumn, visibleRowLength, orientation, context }) => {
    const [columnsViewState, setColumnsViewState] = useState(
      new Array<boolean>(columns?.length || 0).fill(!visibleRowLength),
    );

    const handleToggleColumn = useCallback((colIndex: number) => {
      const toggleColState = (colState: boolean, i: number) =>
        i === colIndex ? !colState : colState;

      setColumnsViewState((_) => _.map(toggleColState));
    }, []);

    const handleSlideChange = useCallback(
      () => setColumnsViewState((_) => new Array(_.length).fill(false)),
      [],
    );

    const getColumnData = (cellData?: CellData[][]) =>
      cellData?.map((cell, i) => ({ cell, rowHeader: rowHeaders?.[i]?.title }));

    const tableColumns = columns?.map(({ data, header }, colIndex) => (
      <TableColumn
        key={String(colIndex)}
        context={context}
        visibleRowLength={visibleRowLength}
        showRow={columnsViewState[colIndex]}
        header={header}
        columnData={getColumnData(data)}
        isFillGradient={colIndex === 0 && isColoredFirstColumn}
        onToggleColumn={() => handleToggleColumn(colIndex)}
      />
    ));

    return orientation === 'horizontal' ? (
      <SwipeListControl context={context} onSlideChange={handleSlideChange}>
        {tableColumns}
      </SwipeListControl>
    ) : (
      tableColumns
    );
  },
);
