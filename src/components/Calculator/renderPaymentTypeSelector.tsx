import type { RadioButtonItem } from '../../ui-kit/RadioButtonGroup/RadioButtonGroup';
import { RadioButtonGroup } from '../../ui-kit/RadioButtonGroup/RadioButtonGroup';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';

interface RenderPaymentTypeSelectorProps {
  context: ContentPageContext;
  items: RadioButtonItem[];
  checkedItem?: string;
  onChange: (id: string) => void;
}

export function renderPaymentTypeSelector({ onChange, ...rest }: RenderPaymentTypeSelectorProps) {
  return <RadioButtonGroup onChangeCheckedItem={onChange} {...rest} />;
}
