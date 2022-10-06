import { JSX } from '@redneckz/uni-jsx';
import { useTableArrowScrollControl } from '../../hooks/useTableArrowScrollControl';
import type { VNode } from '../../model/VNode';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { UniBlockProps } from '../../types';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { Heading } from '../../ui-kit/Heading/Heading';
import { TableArrowScrollControl } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControl';
import { TableArrowScrollControlProps } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControlProps';
import { COLS_LENGTH_FOR_SCROLL } from './constants';
import type {
  TariffsTableCellData,
  TariffsTableColumn,
  TariffsTableContent,
  TariffsTableRowHeader,
} from './TariffsTableContent';
import { TariffsTableRow } from './TariffsTableRow';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

export const TariffsTable = JSX<TariffsTableProps>(
  ({ className, context, title, description, rowHeaders, columns, hiddenRowsNum = 0, ...rest }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    const colData = getColData(columns);
    const rowData = getRowData(rowHeaders, colData);

    const tableArrowScrollControlProps = useTableArrowScrollControl({
      columnsLength: colData.length,
      colsLengthForScroll: COLS_LENGTH_FOR_SCROLL,
      activeCardIndex,
      setActiveCardIndex,
    });

    const foldableBlocks = rowData?.map((row, i, { length }) => (
      <TariffsTableRow
        key={String(i)}
        row={row}
        isLastRow={i + 1 === length}
        activeCardIndex={activeCardIndex}
      />
    ));

    return (
      <BlockWrapper
        context={context}
        className={`bg-white font-sans py-[50px] pl-[50px] overflow-hidden text-primary-text relative ${
          className || ''
        }`}
        {...rest}
      >
        {title ? (
          <Heading
            headingType="h2"
            className={`text-center ${description ? 'mb-2.5' : 'mb-9'}`}
            title={title}
          />
        ) : null}
        {description ? <div className="mb-9 text-center text-l">{description}</div> : null}
        {rowData?.length ? (
          <Foldable
            blocks={foldableBlocks}
            hiddenBlocksNum={hiddenRowsNum}
            context={context}
            render={(children) => (
              <Wrapper tableArrowScrollControlProps={tableArrowScrollControlProps}>
                {children}
              </Wrapper>
            )}
            foldButtonLabel="Развернуть"
          />
        ) : null}
      </BlockWrapper>
    );
  },
);

type ColDataType = (TariffsTableCellData[][] | undefined)[];
type RowDataType = { header: TariffsTableRowHeader; data: any }[] | undefined;

const getColData = (columns: TariffsTableColumn[] | undefined): ColDataType =>
  columns?.map(({ data }) => data) || [];

const getRowData = (
  rowHeaders: TariffsTableRowHeader[] | undefined,
  colData: ColDataType,
): RowDataType =>
  rowHeaders?.map((header, i) => ({
    header,
    data: colData.map((col) => col?.[i] || [{}]),
  }));

const Wrapper = JSX<
  {
    tableArrowScrollControlProps: TableArrowScrollControlProps;
  },
  any,
  VNode
>(({ children, tableArrowScrollControlProps }) => {
  const { isScrollAvailable } = tableArrowScrollControlProps;

  return (
    <div role="table">
      <div className="relative">
        {children}
        <TableArrowScrollControl {...tableArrowScrollControlProps} />
      </div>
      {isScrollAvailable ? (
        <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white" />
      ) : null}
    </div>
  );
});
