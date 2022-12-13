import '../../react/setup-fixture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { CardTransfer } from './CardTransfer';

const button: ButtonProps = {
  href: '',
  text: 'Далее',
  target: '_blank',
  version: 'primary',
};

export default {
  default: <CardTransfer button={button} />,
};
