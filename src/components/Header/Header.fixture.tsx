import '../../react/setup-fixture';
import { Header } from './Header';

export default {
  default: <Header defaultLocation="Москва" />,
  transparent: <Header defaultLocation="Москва" bgColor="transparent" />,
  'no submenu': <Header defaultLocation="Москва" showSubMenu={false} />,
};
