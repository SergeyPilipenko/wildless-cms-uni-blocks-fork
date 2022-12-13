import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { calculateResult, formatValue } from './calculateResult';
import { callbackCurrencySelect } from './callbackCurrencySelect';
import { Currency } from './CurrencyProps';
import { renderInput } from './renderInput';

export interface ExchangeCurrencyItem {
  currency?: {
    id?: number;
    code?: string;
    currency?: Currency;
  };
  buyExchangeRate?: number;
  saleExchangeRate?: number;
}
export interface ExchangeCurrencyCalculatorProps {
  className?: string;
  currencyRatesBuy: ExchangeCurrencyItem[];
  currencyRatesSell: ExchangeCurrencyItem[];
  button?: ButtonProps;
}
export interface CalcState {
  inputSell: string;
  inputBuy: string;
  selectSell: Currency;
  selectBuy: Currency;
}

export const ExchangeCurrencyCalculator = JSX<ExchangeCurrencyCalculatorProps>(
  ({ className = '', currencyRatesBuy, currencyRatesSell, button }) => {
    const [calcState, setCalcState] = useState<CalcState>({
      inputSell: '',
      inputBuy: '',
      selectSell: currencyRatesBuy?.[0]?.currency?.currency || Currency.RUB,
      selectBuy: currencyRatesSell?.[0]?.currency?.currency || Currency.USD,
    });

    const handleSetCalcState = (newState: Partial<CalcState>) => {
      setCalcState((oldState) => ({ ...oldState, ...newState }));
    };

    return (
      <div className={`grid gap-[18px] pt-2 ${className}`}>
        {renderInput({
          placeholder: 'Хочу продать',
          rates: currencyRatesSell,
          selected: calcState.selectSell,
          setSelected: handleSelectSell(calcState, handleSetCalcState, currencyRatesSell),
          value: calcState.inputSell,
          setValue: (value) =>
            handleInputSell(handleSetCalcState, currencyRatesSell)(
              value,
              calcState.selectSell,
              calcState.selectBuy,
            ),
        })}
        {renderInput({
          placeholder: 'Получу',
          rates: currencyRatesBuy,
          selected: calcState.selectBuy,
          setSelected: handleSelectBuy(calcState, handleSetCalcState, currencyRatesBuy),
          value: calcState.inputBuy,
          setValue: (value) =>
            handleInputBuy(handleSetCalcState, currencyRatesBuy)(
              value,
              calcState.selectBuy,
              calcState.selectSell,
            ),
        })}
        {button?.text ? (
          <Button className="py-4 mr-1" version={button?.version} {...button}>
            {button.text}
          </Button>
        ) : null}
      </div>
    );
  },
);

const handleSelectSell =
  (
    calcState: CalcState,
    setCalcState: (state: Partial<CalcState>) => void,
    currencyRatesSell: ExchangeCurrencyItem[],
  ) =>
  (value: Currency) => {
    setCalcState({ selectSell: value });
    callbackCurrencySelect({
      value,
      oppositeValue: calcState.selectBuy,
      handleConvert: (currencyFrom = calcState.selectSell, currencyTo = calcState.selectBuy) => {
        handleInputSell(setCalcState, currencyRatesSell)(
          calcState.inputSell,
          currencyFrom,
          currencyTo,
        );
      },
    });
  };

const handleSelectBuy =
  (
    calcState: CalcState,
    setCalcState: (state: Partial<CalcState>) => void,
    currencyRatesBuy: ExchangeCurrencyItem[],
  ) =>
  (value: Currency) => {
    setCalcState({ selectBuy: value });
    callbackCurrencySelect({
      value,
      oppositeValue: calcState.selectSell,
      handleConvert: (currencyTo = calcState.selectBuy, currencyFrom = calcState.selectSell) =>
        handleInputBuy(setCalcState, currencyRatesBuy)(
          calcState.inputBuy,
          currencyTo,
          currencyFrom,
        ),
    });
  };

const handleInputSell =
  (setCalcState: (state: Partial<CalcState>) => void, currencyRatesSell: ExchangeCurrencyItem[]) =>
  (value: string, currencyFrom: Currency, currencyTo: Currency) => {
    setCalcState({ inputSell: formatValue(value), selectBuy: currencyTo });
    const rate =
      currencyRatesSell.find((_) => _.currency?.currency === currencyTo)?.buyExchangeRate ||
      currencyRatesSell.find((_) => _.currency?.currency === currencyFrom)?.saleExchangeRate;
    if (rate) {
      setCalcState({
        inputBuy: String(calculateResult(value, rate, currencyFrom === Currency.RUB) || ''),
      });
    }
  };

const handleInputBuy =
  (setCalcState: (state: Partial<CalcState>) => void, currencyRatesBuy: ExchangeCurrencyItem[]) =>
  (value: string, currencyTo: Currency, currencyFrom: Currency) => {
    setCalcState({ inputBuy: formatValue(value), selectSell: currencyFrom });
    const rate =
      currencyRatesBuy.find((_) => _.currency?.currency === currencyFrom)?.saleExchangeRate ||
      currencyRatesBuy.find((_) => _.currency?.currency === currencyTo)?.buyExchangeRate;
    if (rate) {
      setCalcState({
        inputSell: String(calculateResult(value, rate, currencyTo === Currency.RUB) || ''),
      });
    }
  };
