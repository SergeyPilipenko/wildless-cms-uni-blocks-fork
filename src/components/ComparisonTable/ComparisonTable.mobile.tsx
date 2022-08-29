import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import type { ComparisonTableContent } from './ComparisonTableContent';
import { TableColumn } from './TableColumn';

export interface ComparisonTableProps extends ComparisonTableContent, UniBlockProps {}

export const ComparisonTable = JSX<ComparisonTableProps>(
  ({
    className,
    context,
    title,
    rowHeaders,
    columns,
    visibleRowLength = 0,
    isColoredFirstColumn = false,
    orientation = 'vertical',
  }) => {
    const tableData =
      columns?.map(({ data, header }) => ({
        header,
        column: data?.map((cell, i) => ({ cell, rowHeader: rowHeaders?.[i]?.title })),
      })) || [];

    const [columnsViewState, setColumnsViewState] = context.useState<boolean[]>(
      new Array(columns?.length).fill(!visibleRowLength),
    );

    const handleToggleColumn = (i: number) => {
      columnsViewState[i] = !columnsViewState[i];
      setColumnsViewState([...columnsViewState]);
    };

    return (
      <section
        className={`bg-white font-sans px-4 py-6 overflow-hidden text-primary-text relative ${
          className || ''
        }`}
      >
        {title && (
          <Heading headingType="h3" className="font-medium text-center m-0 mb-5" title={title} />
        )}

        {renderColumns({
          tableData,
          context,
          visibleRowLength,
          isColoredFirstColumn,
          columnsViewState,
          handleToggleColumn,
          orientation,
          setColumnsViewState,
        })}
      </section>
    );
  },
);

const renderColumns = ({
  context,
  tableData,
  visibleRowLength,
  isColoredFirstColumn,
  columnsViewState,
  handleToggleColumn,
  orientation = 'horizontal',
  setColumnsViewState,
}) => (
  <div role="table">
    {tableData?.length
      ? renderInnerTable({
          orientation,
          context,
          columnsViewState,
          setColumnsViewState,
          tableData,
          visibleRowLength,
          isColoredFirstColumn,
          handleToggleColumn,
        })
      : null}
  </div>
);

const renderInnerTable = ({
  orientation,
  context,
  columnsViewState,
  setColumnsViewState,
  tableData,
  visibleRowLength,
  isColoredFirstColumn,
  handleToggleColumn,
}) =>
  orientation === 'horizontal' ? (
    <SwipeListControl
      context={context}
      onSlideChange={onSlideChange(columnsViewState, setColumnsViewState)}
    >
      {tableData.map(
        renderColumn({
          context,
          visibleRowLength,
          isColoredFirstColumn,
          columnsViewState,
          handleToggleColumn,
        }),
      )}
    </SwipeListControl>
  ) : (
    tableData.map(
      renderColumn({
        context,
        visibleRowLength,
        isColoredFirstColumn,
        columnsViewState,
        handleToggleColumn,
      }),
    )
  );

const renderColumn =
  ({ context, visibleRowLength, isColoredFirstColumn, columnsViewState, handleToggleColumn }) =>
  (columnData, i) =>
    (
      <TableColumn
        key={String(i)}
        context={context}
        visibleRowLength={visibleRowLength}
        showRow={columnsViewState[i]}
        header={columnData.header}
        columnData={columnData.column}
        isFillGradient={i === 0 && isColoredFirstColumn}
        onToggleColumn={() => handleToggleColumn(i)}
      />
    );

const onSlideChange = (columnsViewState, setColumnsViewState) => () => {
  setColumnsViewState(new Array(columnsViewState.length).fill(false));
};
