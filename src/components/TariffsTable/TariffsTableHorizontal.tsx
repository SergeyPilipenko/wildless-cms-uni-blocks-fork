import { JSX } from '@redneckz/uni-jsx';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import { TariffsTableTileCell } from './TariffsTableTileCell';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import type { TariffsTableTileCellProps } from './TariffsTableContent';

export const TariffsTableHorizontal = JSX<{
  context: ContentPageContext;
  tiles: TariffsTableTileCellProps[];
}>(({ tiles, context }) => (
  <SwipeListControl context={context}>
    {tiles.map((tile, i) => (
      <TariffsTableTileCell key={String(i)} {...tile} />
    ))}
  </SwipeListControl>
));
