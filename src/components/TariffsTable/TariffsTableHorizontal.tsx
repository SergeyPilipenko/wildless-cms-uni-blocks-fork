import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import { TariffsTableTileCell, TariffsTableTileCellProps } from './TariffsTableTileCell';
export interface TariffsTableHorizontalProps extends UniBlockProps {
  tiles: TariffsTableTileCellProps[];
}

export const TariffsTableHorizontal = JSX<TariffsTableHorizontalProps>(({ tiles, context }) => (
  <SwipeListControl context={context}>
    {tiles.map((tile, i) => (
      <TariffsTableTileCell key={String(i)} {...tile} />
    ))}
  </SwipeListControl>
));
