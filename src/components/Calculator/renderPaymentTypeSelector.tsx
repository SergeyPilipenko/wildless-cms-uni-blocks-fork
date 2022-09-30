import { RadioButtonGroup } from '../../ui-kit/RadioButtonGroup/RadioButtonGroup';

export function renderPaymentTypeSelector(context, { items, checkedItem, onChange }) {
  return (
    <RadioButtonGroup
      context={context}
      items={items}
      checkedItem={checkedItem}
      onChangeCheckedItem={onChange}
    />
  );
}
