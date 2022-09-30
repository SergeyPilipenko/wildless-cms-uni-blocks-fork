import { context } from '../../react/setup-fixture';
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
        context={context}
        items={items}
        checkedItem={'Аннуитетный'}
        onChangeCheckedItem={(text) => console.log('Выбран пункт меню: ', text)}
      />
    </div>
  ),
};
