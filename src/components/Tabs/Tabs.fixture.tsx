import { context } from '../../react/setup-fixture';
import { Tabs } from './Tabs';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Tabs
        context={context}
        className="col-span-12"
        tabs={[
          { type: 'group', ref: 'tab1', title: 'Вкладка 1' },
          { type: 'group', ref: 'tab2', title: 'Вкладка 2' },
          { type: 'link', href: 'https://google.com', text: 'Вкладка 3' },
        ]}
      />
    </div>
  ),
};
