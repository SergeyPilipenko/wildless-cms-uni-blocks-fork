import { context } from '../../react/setup-fixture';
import { Footer } from './Footer';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Footer className="col-span-12" context={context} />
    </div>
  ),
};
