import '../../react/setup-fixture';
import { RadioButtonGroup } from './RadioButtonGroup';

const items = [
  {
    id: '1',
    text: 'Аннуитетный',
  },
  {
    id: '2',
    text: 'Дифференцированный',
  },
];

export default {
  default: (
    <div>
      <RadioButtonGroup
        items={items}
        checkedItem={'Аннуитетный'}
        onChange={(text) => console.log('Выбран пункт меню: ', text)}
      />
    </div>
  ),
};
