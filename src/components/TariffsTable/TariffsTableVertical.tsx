import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { TariffsTableTileCell, TariffsTableTileCellProps } from './TariffsTableTileCell';

export interface TariffsTableVerticalProps extends UniBlockProps {
  tiles: TariffsTableTileCellProps[];
}

export const TariffsTableVertical = JSX<TariffsTableVerticalProps>(({ tiles }) => (
  <div className="flex flex-col gap-3.5">
    {tiles.map((tile, i) => (
      <TariffsTableTileCell key={String(i)} {...tile} />
    ))}
  </div>
));
