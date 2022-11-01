import type { Footnote } from '../../model/Footnote';
import type { TitleProps } from '../../model/HeadlineType';

/**
 * @title Аренда сейфовых ячеек
 */
export type SafeDepositRentalContent = Footnote &
  TitleProps & {
    /** @title Сноска */
    footnote?: string;
  };
