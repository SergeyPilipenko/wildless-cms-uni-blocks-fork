import type { Footnote } from '../../model/Footnote';

/**
 * @title Аренда сейфовых ячеек
 */
export type SafeDepositRentalContent = Footnote & {
  /** @title Заголовок */
  title?: string;
  /** @title Сноска */
  footnote?: string;
};
