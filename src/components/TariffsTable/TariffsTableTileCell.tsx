import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { VNode } from '../../model/VNode';
import { EmbeddableCellData } from './EmbeddableCellData';
import { TableTileHeader } from './TableTileHeader';
import type { CellDef, TariffsTableTile } from './TariffsTableContent';

export interface TariffsTableTileCellProps extends UniBlockProps {
  tile?: TariffsTableTile;
}

export const TariffsTableTileCell = JSX<TariffsTableTileCellProps>(({ tile, ...rest }) => (
  <div className="rounded-md border-main-stroke h-full box-border border p-4">
    <TableTileHeader {...tile?.header} />
    {tile?.data?.length
      ? tile.data.map((cell, i) => (
          <div key={String(i)}>
            {i > 0 ? <div className="h-5" /> : null}
            {renderCell(cell, rest)}
          </div>
        ))
      : null}
  </div>
));

function renderCell(cell: CellDef, props: UniBlockProps): VNode {
  if (!cell || !cell.tableCellType || !(cell.tableCellType in EmbeddableCellData)) {
    return null;
  }

  const EmbeddableCellInner = EmbeddableCellData[cell.tableCellType];

  return <EmbeddableCellInner displayTable={() => null} isVisible={true} {...cell} {...props} />;
}
