import type { CarouselCardVersion } from '../../model/CarouselCardVersion';
import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Карточка какусели
 */
export interface CarouselCardContent extends HeadlineCommonProps {
  /**
   * @title Кнопка
   * @default {
   *  "icon": { "format": "webp", "size": { "width": 24, "height": 24 } },
   *  "iconRight" : { "format": "webp", "size": { "width": 24, "height": 24 } }
   * }
   */
  button?: ButtonWithIconProps;
  version?: CarouselCardVersion;
}
