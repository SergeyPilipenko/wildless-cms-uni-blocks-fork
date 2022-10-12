import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { Radio } from '../../ui-kit/Radio/Radio';
import { Select } from '../../ui-kit/Select/Select';
import { SelectOption } from '../../ui-kit/Select/SelectOption';

export type SafeDepositRentalFormProps = UniBlockProps;

// TODO: Добавить типизацию

export const SafeDepositRentalForm = JSX<any>(
  ({ cities, cellDimensions, cellOptions, days, setDays }) => {
    return (
      <div className="flex-1 mr-9">
        {cities.length ? <CitiesOffices cities={cities} /> : null}
        {renderRentalPeriod(days, setDays)}
        {cellDimensions.length && cellOptions.length ? (
          <DimensionsOptions cellDimensions={cellDimensions} cellOptions={cellOptions} />
        ) : null}
        <span className="text-secondary-text text-l-light">Тип договора</span>
        <div className="flex justify-between items-center mt-5">
          <RadioButtons />
          <Button text="Офисы на карте" version="primary" />
        </div>
      </div>
    );
  },
);

const CitiesOffices = JSX<any>(({ cities }) => {
  const [selectedCity, setSelectedCity] = useState(cities[0].city);

  const setSelected = (_) => setSelectedCity(_);

  const offices = cities.find((_) => _.city === selectedCity).offices;

  return (
    <div className="flex justify-between mb-6">
      <div className="w-full mr-4">
        {cities.length
          ? renderSelect({
              data: cities,
              field: 'city',
              selected: selectedCity,
              setSelected,
              label: 'Город',
            })
          : null}
      </div>
      <div className="w-full">
        {offices.length
          ? renderSelect({
              data: offices,
              field: 'office',
              selected: offices[0],
              setSelected,
              label: 'Отделение',
            })
          : null}
      </div>
    </div>
  );
});

const DimensionsOptions = JSX<any>(({ cellDimensions, cellOptions }) => {
  const [selectedDimension, setSelectedDimension] = useState(cellDimensions[0].dimension);
  const [selectedOption, setSelectedOption] = useState(cellOptions[0].option);

  return (
    <div className="flex justify-between mb-6">
      <div className="mr-4 w-full">
        {cellDimensions.length
          ? renderSelect({
              data: cellDimensions,
              field: 'dimension',
              selected: selectedDimension,
              setSelected: setSelectedDimension,
              label: 'Размер ячейки',
            })
          : null}
      </div>
      <div className="w-full">
        {cellOptions.length
          ? renderSelect({
              data: cellOptions,
              field: 'option',
              selected: selectedOption,
              setSelected: setSelectedOption,
              label: 'Параметры ячейки, мм (ВхШхД)',
            })
          : null}
      </div>
    </div>
  );
});

interface SelectProps {
  data: any[];
  field: string;
  selected: string;
  setSelected: (value: string) => void;
  label: string;
}

const renderSelect = (props: SelectProps) => {
  const { data, field, selected, setSelected, label } = props;

  return (
    <div>
      <span className="block text-m-light mb-2">{label}</span>
      <Select
        className="h-14 border border-gray p-4 rounded-md text-s w-full cursor-pointer"
        value={selected}
        onChange={(_) => setSelected(_)}
      >
        {data.map((_, i) => (
          <SelectOption key={String(i)} value={_?.[field]}>
            {_?.[field]}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};

export const renderRentalPeriod = (days, setDays) => {
  const items = ['От 1 дня', 'До 365 дней'];

  return (
    <div className="mb-6">
      <span className="block text-m-light mb-[3px]">Срок аренды</span>
      <InputRange min={1} max={365} value={days} items={items} onChange={setDays} />
    </div>
  );
};

// TODO: В качестве компонента не годится
const RadioButtons = JSX<any>(() => {
  const [selected, setSelected] = useState('option1');
  const onChange = (_: React.ChangeEvent<HTMLInputElement>) => setSelected(_.target.value);

  return (
    <div>
      <Radio
        className="mb-2"
        name="contractType"
        text="Простое хранение"
        value="option1"
        checked={selected === 'option1'}
        onChange={onChange}
      />
      <Radio
        name="contractType"
        text="Сделка с недвижимостью"
        value="option2"
        checked={selected === 'option2'}
        onChange={onChange}
      />
    </div>
  );
});
