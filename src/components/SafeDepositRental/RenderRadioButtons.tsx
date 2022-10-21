import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks/core';
import { Radio } from '../../ui-kit/Radio/Radio';

export const RenderRadioButtons = JSX(() => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const onChange = (_: React.ChangeEvent<HTMLInputElement>) => setSelectedOption(_.target.value);

  return (
    <div>
      <Radio
        className="mb-2"
        name="contractType"
        text="Простое хранение"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={onChange}
      />
      <Radio
        name="contractType"
        text="Сделка с недвижимостью"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={onChange}
      />
    </div>
  );
});
