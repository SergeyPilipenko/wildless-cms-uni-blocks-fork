import { JSX } from '@redneckz/uni-jsx';
import { TariffsTableTileCell } from './TariffsTableTileCell';
import type { TariffsTableTileCellProps } from './TariffsTableContent';

export const TariffsTableVertical = JSX<{ tiles: TariffsTableTileCellProps[] }>(({ tiles }) => (
  <div className="flex flex-col gap-3.5">
    {tiles.map((tile, i) => (
      <TariffsTableTileCell key={String(i)} {...tile} />
    ))}
  </div>
));
