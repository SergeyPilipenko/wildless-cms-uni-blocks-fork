import { context } from '../../react/setup-fixture';
import { Tabs } from './Tabs';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Tabs
        context={context}
        className="col-span-12"
        tabs={[
          { ref: 'tab1', title: 'Вкладка 1' },
          { ref: 'tab2', title: 'Вкладка 2' },
          { ref: 'https://google.com', title: 'Вкладка 3' },
        ]}
      />
    </div>
  ),
};
