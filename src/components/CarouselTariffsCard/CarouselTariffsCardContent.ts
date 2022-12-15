import type { HeadlineCommonProps, TitleProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Карточка тарифной карусели
 */
export type CarouselTariffsCardContent = TitleProps & {
  icon?: Picture;
  /** @title Выделить карточку */
  isHighlighting?: boolean;
  /** @title Кнопка */
  button?: ButtonProps;
  /** @title Ячейка */
  rows?: HeadlineCommonProps[];
};
