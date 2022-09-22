import '../../react/setup-fixture';
import { List } from './List';

const items = ['List Item #1', 'List Item #2', 'List Item #3', 'List Item #4'];

export default {
  'primary dotted (default)': (
    <div className="bg-white p-12">
      <List items={items} />
    </div>
  ),
  'primary w/o dots': (
    <div className="bg-white p-12">
      <List items={items} isDotted={false} />
    </div>
  ),
  'secondary dotted': (
    <div className="bg-primary-main p-12">
      <List items={items} version="secondary" />
    </div>
  ),
  'secondary w/o dots': (
    <div className="bg-primary-main p-12">
      <List items={items} version="secondary" isDotted={false} />
    </div>
  ),
  'gray dotted': (
    <div className="bg-white p-12">
      <List items={items} version="gray" />
    </div>
  ),
  'gray w/o dots': (
    <div className="bg-white p-12">
      <List items={items} version="gray" isDotted={false} />
    </div>
  ),
  'tile dotted': (
    <div className="bg-white p-12">
      <List items={items} version="tile" />
    </div>
  ),
  'tile w/o dots': (
    <div className="bg-white p-12">
      <List items={items} version="tile" isDotted={false} />
    </div>
  ),
  'tile white dotted': (
    <div className="bg-primary-main p-12">
      <List items={items} version="tile-white" />
    </div>
  ),
  'tile white w/o dots': (
    <div className="bg-primary-main p-12">
      <List items={items} version="tile-white" isDotted={false} />
    </div>
  ),
};
