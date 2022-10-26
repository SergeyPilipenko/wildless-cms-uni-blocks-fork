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
            label: 'Обслуживание физических лиц',
            icon: { icon: 'CardTickIcon' },
          },
          {
            label: 'Обслуживание юридических лиц',
            icon: { icon: 'EmptyWalletChangeIcon' },
          },
          {
            label: 'Продажа монет из драгоценных металлов',
            icon: { icon: 'UserTickIcon' },
          },
          {
            label: 'Аренда индивидуальных сейфовых ячеек',
            icon: { icon: 'UserTickIcon' },
          },
          {
            label: 'Операции с обезличенными металлическими счетами',
            icon: { icon: 'ShieldTickIcon' },
          },
          {
            label: 'Операции со слитками драгоценных металлов',
            icon: { icon: 'ShieldTickIcon' },
          },
          {
            label: 'Передача фото и голоса в Единую биометрическую систему',
            icon: { icon: 'ShieldTickIcon' },
          },
        ]}
      />
    </div>
  ),
};
