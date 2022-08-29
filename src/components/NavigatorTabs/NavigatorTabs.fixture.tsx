import { context } from '../../setup-fixture';
import { NavigatorTabs } from './NavigatorTabs';
import tabsExample from './NavigatorTabs.example.json';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <NavigatorTabs context={context} className="col-span-12" {...tabsExample} />
    </div>
  ),
};
