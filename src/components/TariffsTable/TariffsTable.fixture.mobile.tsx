import '../../react/setup-fixture';
import { TARIFFS_TABLE_FIXTURE_EXAMPLE } from './dataFixture';
import { TariffsTable } from './TariffsTable';

export default {
  'default (vertical)': (
    <div className="container grid grid-cols-12">
      <TariffsTable className="col-span-12" {...TARIFFS_TABLE_FIXTURE_EXAMPLE} />
    </div>
  ),
  horizontal: (
    <div className="container grid grid-cols-12">
      <TariffsTable
        className="col-span-12"
        {...TARIFFS_TABLE_FIXTURE_EXAMPLE}
        orientation="horizontal"
      />
    </div>
  ),
};
