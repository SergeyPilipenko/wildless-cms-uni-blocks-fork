import { context } from '../../react/setup-fixture';
import {
  columns,
  columnsTable,
  TARIFFS_TABLE_FIXTURE_EXAMPLE,
  TARIFFS_TABLE_INNER_TABLE_FIXTURE_EXAMPLE,
} from './dataFixture';
import { TariffsTable } from './TariffsTable';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <TariffsTable
        className="col-span-12"
        context={context}
        {...TARIFFS_TABLE_FIXTURE_EXAMPLE}
        tariffsColumns={Array(2).fill(columns).flat()}
      />
    </div>
  ),
  '1 column': (
    <div className="container grid grid-cols-12">
      <TariffsTable
        className="col-span-12"
        context={context}
        {...TARIFFS_TABLE_FIXTURE_EXAMPLE}
        tariffsColumns={columns.slice(0, 1)}
        hiddenRowsNum={2}
      />
    </div>
  ),
  '2 columns': (
    <div className="container grid grid-cols-12">
      <TariffsTable
        className="col-span-12"
        context={context}
        {...TARIFFS_TABLE_FIXTURE_EXAMPLE}
        tariffsColumns={Array(2).fill(columns).flat()}
        hiddenRowsNum={2}
      />
    </div>
  ),
  '3 columns': (
    <div className="container grid grid-cols-12">
      <TariffsTable
        className="col-span-12"
        context={context}
        {...TARIFFS_TABLE_FIXTURE_EXAMPLE}
        tariffsColumns={Array(3).fill(columns).flat()}
        hiddenRowsNum={2}
      />
    </div>
  ),
  '1 columns with inner table': (
    <div className="container grid grid-cols-12">
      <TariffsTable
        className="col-span-12"
        context={context}
        {...TARIFFS_TABLE_INNER_TABLE_FIXTURE_EXAMPLE}
        tariffsColumns={Array(1).fill(columnsTable).flat()}
      />
    </div>
  ),
};
