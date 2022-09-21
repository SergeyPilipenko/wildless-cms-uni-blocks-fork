import { JSX } from '@redneckz/uni-jsx';
import type { FuncReturnVoid, UniBlockProps } from '../../types';
import { calculateResult, formatValue } from './calculateResult';
import { callbackCurrencySelect } from './callbackCurrencySelect';
import { Currency } from './CurrencyProps';
import { renderButton } from './renderButton';
import { renderInput } from './renderInput';

export interface ExchangeCurrencyItem {
  code?: Currency;
  buy?: number;
  sell?: number;
}
export interface ExchangeCurrencyCalculatorProps extends UniBlockProps {
  className?: string;
  currencyRatesBuy: ExchangeCurrencyItem[];
  currencyRatesSell: ExchangeCurrencyItem[];
}
export interface CalcState {
  inputSell: string;
  inputBuy: string;
  selectSell: Currency;
  selectBuy: Currency;
}

export const ExchangeCurrencyCalculator = JSX<ExchangeCurrencyCalculatorProps>(
  ({ context, className = '', currencyRatesBuy, currencyRatesSell }) => {
    const [calcState, setCalcState] = context.useState<CalcState>({
      inputSell: '',
      inputBuy: '',
      selectSell: currencyRatesBuy?.[0]?.code || Currency.RUB,
      selectBuy: currencyRatesSell?.[0]?.code || Currency.USD,
    });

    const handleSetCalcState = (newState: Partial<CalcState>) => {
      setCalcState((oldState) => ({ ...oldState, ...newState }));
    };

    return (
      <div className={`grid gap-3.5 ${className}`}>
        {renderInput({
          placeholder: 'Хочу продать',
          rates: currencyRatesBuy,
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
          rates: currencyRatesSell,
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
        {renderButton()}
      </div>
    );
  },
);

const handleSelectSell =
  (
    calcState: CalcState,
    setCalcState: FuncReturnVoid<Partial<CalcState>>,
    currencyRatesSell: ExchangeCurrencyItem[],
  ) =>
  (value: Currency) => {
    setCalcState({ selectSell: value });
    callbackCurrencySelect({
      value,
      oppositeValue: calcState.selectBuy,
      handleConvert: (codeFrom = calcState.selectSell, codeTo = calcState.selectBuy) => {
        handleInputSell(setCalcState, currencyRatesSell)(calcState.inputSell, codeFrom, codeTo);
      },
    });
  };

const handleSelectBuy =
  (
    calcState: CalcState,
    setCalcState: FuncReturnVoid<Partial<CalcState>>,
    currencyRatesBuy: ExchangeCurrencyItem[],
  ) =>
  (value: Currency) => {
    setCalcState({ selectBuy: value });
    callbackCurrencySelect({
      value,
      oppositeValue: calcState.selectSell,
      handleConvert: (codeTo = calcState.selectBuy, codeFrom = calcState.selectSell) =>
        handleInputBuy(setCalcState, currencyRatesBuy)(calcState.inputBuy, codeTo, codeFrom),
    });
  };

const handleInputSell =
  (setCalcState: FuncReturnVoid<Partial<CalcState>>, currencyRatesSell: ExchangeCurrencyItem[]) =>
  (value: string, codeFrom: Currency, codeTo: Currency) => {
    setCalcState({ inputSell: formatValue(value), selectBuy: codeTo });
    const rate =
      currencyRatesSell.find((_) => _.code === codeTo)?.buy ||
      currencyRatesSell.find((_) => _.code === codeFrom)?.sell;
    if (rate) {
      setCalcState({
        inputBuy: String(calculateResult(value, rate, codeFrom === Currency.RUB) || ''),
      });
    }
  };

const handleInputBuy =
  (setCalcState: FuncReturnVoid<Partial<CalcState>>, currencyRatesBuy: ExchangeCurrencyItem[]) =>
  (value: string, codeTo: Currency, codeFrom: Currency) => {
    setCalcState({ inputBuy: formatValue(value), selectSell: codeFrom });
    const rate =
      currencyRatesBuy.find((_) => _.code === codeFrom)?.sell ||
      currencyRatesBuy.find((_) => _.code === codeTo)?.buy;
    if (rate) {
      setCalcState({
        inputSell: String(calculateResult(value, rate, codeTo === Currency.RUB) || ''),
      });
    }
  };
