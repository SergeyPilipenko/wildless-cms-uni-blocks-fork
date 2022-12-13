import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Heading } from '../../ui-kit/Heading/Heading';
import type {
  CellDef,
  TariffsTableColumn,
  TariffsTableContent,
  TariffsTableRowHeader,
} from './TariffsTableContent';
import { TariffsTableHorizontal } from './TariffsTableHorizontal';
import { TariffsTableVertical } from './TariffsTableVertical';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

export const TariffsTable = JSX<TariffsTableProps>(
  ({
    className,
    title,
    description,
    tariffsColumns: columns,
    rowHeaders,
    orientation = 'vertical',
    ...rest
  }) => {
    const colData = getColData(columns);
    const tiles = getTiles(rowHeaders, colData);
    const headingMargin = description ? 'mb-2' : 'mb-5';

    return (
      <section
        className={`px-4 py-6 bg-white font-sans text-primary-text overflow-x-hidden ${className}`}
      >
        {title ? (
          <Heading headingType="h2" className={`text-center ${headingMargin}`} title={title} />
        ) : null}
        {description ? <div className="mb-5 text-center text-m">{description}</div> : null}
        {orientation === 'vertical' ? (
          <TariffsTableVertical tiles={tiles} {...rest} />
        ) : (
          <TariffsTableHorizontal tiles={tiles} {...rest} />
        )}
      </section>
    );
  },
);

const getColData = (columns: TariffsTableColumn[] | undefined) =>
  columns?.[0].data ? columns[0].data : [];

const getTiles = (rowHeaders: TariffsTableRowHeader[] | undefined, colData: CellDef[][]) =>
  rowHeaders?.map((header, i) => ({
    header,
    data: colData?.[i] || [{}],
  }));
