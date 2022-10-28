import type { Picture } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Кнопка выбора программы
 */
export type CardItem = {
  /** @title Иконка */
  icon?: Picture;
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
export interface InsuranceAmountBlockTab {
  /** @title Заголовок вкладки */
  title?: string;
  /** @title Содержимое вкладки */
  cards?: CardItem[];
}

/**
 * @title Страховые суммы
 */
export interface InsuranceAmountBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список вкладок */
  insuranceTabs?: InsuranceAmountBlockTab[];
  /** @title Кнопка */
  button?: ButtonProps;
}
