import { context } from '../../react/setup-fixture';
import { OfficeServicesBlock } from './OfficeServicesBlock';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <OfficeServicesBlock
        className="col-span-4"
        context={context}
        title="Услуги"
        servicesList={[
          {
            text: 'Обслуживание физических лиц',
            icon: { icon: 'CardTickIcon' },
          },
          {
            text: 'Обслуживание юридических лиц',
            icon: { icon: 'EmptyWalletChangeIcon' },
          },
          {
            text: 'Продажа монет из драгоценных металлов',
            icon: { icon: 'UserTickIcon' },
          },
          {
            text: 'Аренда индивидуальных сейфовых ячеек',
            icon: { icon: 'UserTickIcon' },
          },
          {
            text: 'Операции с обезличенными металлическими счетами',
            icon: { icon: 'ShieldTickIcon' },
          },
          {
            text: 'Операции со слитками драгоценных металлов',
            icon: { icon: 'ShieldTickIcon' },
          },
          {
            text: 'Передача фото и голоса в Единую биометрическую систему',
            icon: { icon: 'ShieldTickIcon' },
          },
        ]}
      />
    </div>
  ),
};
