import { JSX } from '@redneckz/uni-jsx';
import { useTableArrowScrollControl } from '../../hooks/useTableArrowScrollControl';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { TableArrowScrollControl } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControl';
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
  ({ className, context, title, description, rowHeaders, columns, anchor = null }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    const colData = getColData(columns);
    const rowData = getRowData(rowHeaders, colData);

    const tableArrowScrollControlProps = useTableArrowScrollControl({
      columnsLength: colData.length,
      colsLengthForScroll: COLS_LENGTH_FOR_SCROLL,
      activeCardIndex,
      setActiveCardIndex,
    });
    const { isScrollAvailable } = tableArrowScrollControlProps;

    return (
      <section
        className={`bg-white font-sans py-[50px] pl-[50px] overflow-hidden text-primary-text relative ${
          className || ''
        }`}
        id={anchor}
      >
        {title ? (
          <Heading
            headingType="h2"
            className={`text-center ${description ? 'mb-2.5' : 'mb-9'}`}
            title={title}
          />
        ) : null}
        {description ? <div className="mb-9 text-center text-m-base">{description}</div> : null}
        {rowData?.length ? (
          <div role="table">
            <div className="relative">
              {rowData.map((row, i, { length }) => (
                <TariffsTableRow
                  key={String(i)}
                  row={row}
                  isLastRow={i + 1 === length}
                  activeCardIndex={activeCardIndex}
                />
              ))}
              <TableArrowScrollControl {...tableArrowScrollControlProps} />
            </div>
            {isScrollAvailable ? (
              <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white" />
            ) : null}
          </div>
        ) : null}
      </section>
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
