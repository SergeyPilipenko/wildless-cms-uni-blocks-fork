import type { EmptyOption } from '../../model/EmptyOptionType';
import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Изображение
 */
export type BonusImageDef = {
  /** @default image */
  bonusType?: 'image';
  image?: Picture;
};

/**
 * @title Баллы
 */
export type BonusCountDef = {
  /** @default count */
  bonusType?: 'count';
  /** @title Количество баллов */
  bonusCount?: string;
  /** @title Наименование */
  bonusName?: string;
};

/**
 * @title Вид контента
 */
export type BonusItemContentDef = EmptyOption | BonusImageDef | BonusCountDef;

/**
 * @title Плитка
 */
export type BonusItem = HeadlineCommonProps & {
  bonusItemContent?: BonusItemContentDef;
  /**
   * @title Кнопка
   * @maxItems 1
   * @default [{"version" : "secondary", "target": "_self"}]
   */
  buttons?: ButtonWithIconProps[];
};

/**
 * @title Блок Бонусы
 */
export type BonusContent = HeadlineCommonProps & {
  /** @title Список плиток */
  bonusItems?: BonusItem[];
};
