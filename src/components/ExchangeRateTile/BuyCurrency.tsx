import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../../ui-kit/Button/Button';
import { Input } from '../../ui-kit/Input/Input';
import { Select } from '../../ui-kit/Select/Select';
import { Currencies } from './ExchangeRateTileContent';

export const BuyCurrency = JSX<{ currency: Currencies[]; codes: string[] }>(
  ({ currency, codes }) => (
    <div className="grid gap-3.5 pt-9 pl-10">
      {currency.map((item, index) => {
        return (
          <div className="flex items-center w-[246px]">
            {renderInput(index)}
            {codes.length ? (
              <Select
                name="currencySelector"
                id="currencySelector"
                className="h-9 w-[58px] -translate-x-16"
                options={codes}
              />
            ) : null}
          </div>
        );
      })}
      <Button className="mt-3.5 py-3 h-12 w-[173px]" version="primary" href="#">
        Купить валюту
      </Button>
    </div>
  ),
);

function renderInput(index: number) {
  return (
    <Input
      id="exchange-input"
      name="exchange-input"
      className="h-10 border pl-2.5 rounded-md text-m-sm"
      type="number"
      placeholder={`${index === 0 ? 'Хочу продать' : 'Получу'}`}
    />
  );
}
