import { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { InputRange } from '../../ui-kit/InputRange/InputRange';
import { Radio } from '../../ui-kit/Radio/Radio';
import { Select } from '../../ui-kit/Select/Select';
import { SelectOption } from '../../ui-kit/Select/SelectOption';

export type SafeDepositRentalFormProps = UniBlockProps;

export const SafeDepositRentalForm = ({
  cities,
  cellDimensions,
  cellOptions,
  days,
  setDays,
  context,
}) => {
  return (
    <div className="flex-1 mr-9">
      {cities.length ? renderCitiesOffices(cities, context) : null}
      {renderRentalPeriod(days, setDays)}
      {cellDimensions.length && cellOptions.length
        ? renderDimensionsOptions(cellDimensions, cellOptions, context)
        : null}
      <span className="text-secondary-text text-l-light">Тип договора</span>
      <div className="flex justify-between items-center mt-5">
        {renderRadioButtons(context)}
        <Button text="Офисы на карте" version="primary" />
      </div>
    </div>
  );
};

const renderCitiesOffices = (cities, context) => {
  const [selectedCity, setSelectedCity] = context.useState(cities[0].city);

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
};

const renderDimensionsOptions = (cellDimensions, cellOptions, context) => {
  const [selectedDimension, setSelectedDimension] = context.useState(cellDimensions[0].dimension);
  const [selectedOption, setSelectedOption] = context.useState(cellOptions[0].option);

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
};

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

const renderRadioButtons = (context) => {
  const [selected, setSelected] = context.useState('option1');
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
};
