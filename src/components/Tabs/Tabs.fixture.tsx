import { context } from '../../react/setup-fixture';
import { Tabs } from './Tabs';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Tabs
        context={context}
        className="col-span-12"
        tabs={[
          { id: 'tab1', title: 'Вкладка 1' },
          { id: 'tab2', title: 'Вкладка 2' },
          { id: 'tab3', title: 'Вкладка 3' },
        ]}
      />
    </div>
  ),
};
