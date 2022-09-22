import { context } from '../../react/setup-fixture';
import { Header } from './Header.mobile';

export default {
  default: <Header context={context} defaultLocation="Москва" />,
  transparent: <Header context={context} defaultLocation="Москва" bgColor="transparent" />,
};
