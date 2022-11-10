import { context } from '../../react/setup-fixture';
import { CardTransfer } from './CardTransfer';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

const button: ButtonProps = {
  href: '',
  text: 'Далее',
  target: '_blank',
  version: 'primary',
};

export default {
  default: <CardTransfer context={context} button={button} />,
};
