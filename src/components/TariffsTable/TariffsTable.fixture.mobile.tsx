import { mobileContext } from '../../setup-fixture';
import { TariffsTable } from './TariffsTable';
import type {
  TariffsTableColumn,
  TariffsTableRowHeader,
} from '../TariffsTable/TariffsTableContent';
import type { Picture } from '../../model/Picture';

const image: Picture = {
  src: 'payment-systems.png',
  format: 'webp',
  size: {
    width: 288,
    height: 56,
  },
  alt: 'Платёжные системы',
  title: 'Платёжные системы',
};

const rowHeaders: TariffsTableRowHeader[] = [
  { title: 'Начисление процентов на остаток по счету', icon: 'OkIcon' },
  { title: 'Снятие наличных', icon: 'GlassIcon' },
  { title: 'Оформление онлайн', icon: 'ShieldTickIcon' },
  { title: 'Кэшбэк баллами' },
  { title: 'Кнопки-иконки' },
  { title: 'Стоимость SMS-сервиса' },
  { title: 'Дополнительная информация' },
  { title: 'Описание и кнопка' },
  { title: 'Описание и кнопка' },
  { title: 'Описание и ссылка' },
  { title: 'Описание и список' },
];

const columns: TariffsTableColumn[] = [
  {
    data: [
      [{ label: 'Нет' }],
      [
        {
          label: 'Бесплатно',
          description: 'В банкоматах и кассах Россельхозбанка и банков-партнеров',
        },
        {
          label: 'Бесплатно',
          description: 'В сторонних банкоматах - 1 раз в месяц, далее 1% минимум 150 руб',
        },
      ],
      [{ label: 'Нет' }],
      [{ label: 'Платёжные системы картинкой' }, { image: image }],
      [
        {
          buttons: [
            {
              icon: 'AppleIcon',
              rounded: true,
              version: 'secondary',
              href: '/',
              target: '_blank',
            },
            {
              icon: 'PlayMarketIcon',
              rounded: true,
              version: 'secondary',
              href: '/',
              target: '_blank',
            },
          ],
        },
      ],
      [
        {
          label: 'Бесплатно',
        },
      ],
      [
        {
          image: {
            src: 'money-1.png',
            format: 'webp',
            size: {
              width: 140,
              height: 140,
            },
            alt: 'Деньги',
          },
        },
      ],
      [
        {
          label: '30 тыс - 5 млн рублей',
          buttons: [
            {
              text: 'Подробнее',
              href: '/',
              target: '_blank',
            },
          ],
        },
      ],
      [
        {
          label: '30 тыс - 5 млн рублей',
          buttons: [
            {
              text: 'Подробнее',
              version: 'secondary',
              href: '/',
              target: '_blank',
            },
          ],
        },
      ],
      [
        {
          label: '30 тыс - 5 млн рублей',
          buttons: [
            {
              text: 'Подробнее',
              href: '/',
              target: '_blank',
              version: 'link',
            },
          ],
        },
      ],
      [
        {
          label: '30 тыс - 5 млн рублей',
          list: {
            items: ['item 1', 'item 2', 'item 3'],
          },
        },
      ],
    ],
  },
];

export default {
  'default (vertical)': (
    <div className="container grid grid-cols-12">
      <TariffsTable
        className="col-span-12"
        context={mobileContext}
        title="Заголовок"
        description="Описание предоставляемого продукта"
        rowHeaders={rowHeaders}
        columns={columns.slice(0, 1)}
      />
    </div>
  ),
  horizontal: (
    <div className="container grid grid-cols-12">
      <TariffsTable
        className="col-span-12"
        context={mobileContext}
        title="Заголовок"
        description="Описание предоставляемого продукта"
        rowHeaders={rowHeaders}
        columns={columns}
        orientation="horizontal"
      />
    </div>
  ),
};
