import type { IconProps } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import type { TitleProps } from '../../model/HeadlineType';

/**
 * @title Кнопка выбора программы
 */
export type CardItem = IconProps & {
  /** @title Страховой взнос */
  fee?: number;
  /** @title Страховая сумма */
  sum?: number;
  /** @title Ссылка на программу*/
  href?: string;
};

/**
 * @title Вкладка
 */
export type InsuranceAmountBlockTab = TitleProps & {
  /** @title Содержимое вкладки */
  cards?: CardItem[];
};

/**
 * @title Страховые суммы
 */
export type InsuranceAmountBlockContent = TitleProps & {
  /** @title Список вкладок */
  insuranceTabs?: InsuranceAmountBlockTab[];
  /** @title Кнопка */
  button?: ButtonProps;
};
