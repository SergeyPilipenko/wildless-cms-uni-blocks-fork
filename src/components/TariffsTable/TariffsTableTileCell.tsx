import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { EmbeddableCellData } from './EmbeddableCellData';
import { TableTileHeader } from './TableTileHeader';
import type { CellDef, TariffsTableRowHeader } from './TariffsTableContent';

export interface TariffsTableTileCellProps {
  header: TariffsTableRowHeader;
  data: CellDef[];
  context: ContentPageContext;
}

export const TariffsTableTileCell = JSX<TariffsTableTileCellProps>(({ context, header, data }) => {
  return (
    <div className="rounded-md border-main-stroke h-full box-border border p-4">
      <TableTileHeader {...header} />
      {data?.length ? data.map(renderCellInner(context)) : null}
    </div>
  );
});

const renderCellInner = (context: ContentPageContext) => (cell: CellDef, i: number) =>
  (
    <div key={String(i)}>
      {i > 0 ? <div className="h-5" /> : null}
      {renderCell(cell, context)}
    </div>
  );

const renderCell = (cell: CellDef, context: ContentPageContext) => {
  if (!cell) {
    return null;
  }

  const { tableCellType: type, ...rest } = cell;

  if (!type || !(type in EmbeddableCellData)) {
    return null;
  }

  const EmbeddableCellInner = EmbeddableCellData[type];

  return <EmbeddableCellInner context={context} {...rest} />;
};
