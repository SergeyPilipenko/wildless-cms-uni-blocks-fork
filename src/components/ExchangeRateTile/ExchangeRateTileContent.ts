import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';

/**
 * @title Курсы валют
 */
export type ExchangeRateTileContent = HeadingContent;

export interface ExchangeCurrencyItem {
  buyExchangeRate?: number;
  saleExchangeRate?: number;
  currency?: {
    id?: number;
    code?: string;
    currency?: string;
    name?: string;
  };
}
