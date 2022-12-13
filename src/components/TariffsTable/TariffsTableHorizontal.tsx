import { JSX } from '@redneckz/uni-jsx';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import type { TariffsTableProps } from './TariffsTableContent';
import { TariffsTableTileCell } from './TariffsTableTileCell';

export const TariffsTableHorizontal = JSX<TariffsTableProps>(({ tiles, ...rest }) =>
  tiles?.length ? (
    <SwipeListControl {...rest}>
      {tiles.map((tile, i) => (
        <TariffsTableTileCell key={String(i)} tile={tile} {...rest} />
      ))}
    </SwipeListControl>
  ) : null,
);
