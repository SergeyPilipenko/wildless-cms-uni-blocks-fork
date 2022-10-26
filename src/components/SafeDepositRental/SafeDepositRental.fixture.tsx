import { context } from '../../react/setup-fixture';
import { SafeDepositRental } from './SafeDepositRental';

export default {
  default: (
    <div className="container grid grid-cols-12 mb-1">
      <SafeDepositRental
        className="col-span-12"
        context={context}
        footnote="Аренда СЯ, в случае проведения процедуры купли-продажи, с использованием наличных денег
          или процедуры ипотечной сделки"
      />
    </div>
  ),
};
