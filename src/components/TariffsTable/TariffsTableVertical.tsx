import { JSX } from '@redneckz/uni-jsx';

import type { TariffsTableProps } from './TariffsTableContent';
import { TariffsTableTileCell } from './TariffsTableTileCell';

export const TariffsTableVertical = JSX<TariffsTableProps>(({ tiles, ...rest }) =>
  tiles?.length ? (
    <div className="flex flex-col gap-3.5">
      {tiles.map((tile, i) => (
        <TariffsTableTileCell key={String(i)} tile={tile} {...rest} />
      ))}
    </div>
  ) : null,
);
