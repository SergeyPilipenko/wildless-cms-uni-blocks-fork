import type { Picture } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import type { InsuranceProps } from '../../model/Insurance';

/**
 * @title Кнопка выбора программы
 */
export type cardItem = InsuranceProps & {
  icon?: Picture;
  /** @title Страховой взнос */
  fee?: number;
};

/**
 * @title Вкладка
 */
export interface InsuranceAmountBlockTabs {
  /** @title Заголовок вкладки */
  title?: string;
  /** @title Содержимое вкладки */
  cards?: cardItem[];
}

/**
 * @title Страховые суммы
 */
export interface InsuranceAmountBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Список вкладок */
  insuranceTabs?: InsuranceAmountBlockTabs[];
  button?: ButtonProps;
}
