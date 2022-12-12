import type { AlignType } from '../../model/AlignType';
import type { BlockVersionWithTransparent } from '../../model/BlockVersion';
import type { ColorPalette } from '../../model/ContentPageDef';

/**
 * @title Отсуп между компонентами
 * @enumNames ["Самый большой", "Очень большой", "Большой", "Средний", "Маленький", "Самый маленький", "Без отступа"]
 */
export type GapVersion = 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS' | '';

/**
 * @title Вертикальный компоновщик
 */
export interface VerticalLayoutContent {
  colorPalette?: ColorPalette;
  version?: BlockVersionWithTransparent;
  align?: AlignType;
  gap?: GapVersion;
}
