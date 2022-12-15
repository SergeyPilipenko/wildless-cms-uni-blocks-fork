import '../../react/setup-fixture';
import { Header } from './Header';

export default {
  default: <Header />,
  transparent: <Header bgColor="transparent" />,
  'no submenu': <Header showSubMenu={false} />,
};
