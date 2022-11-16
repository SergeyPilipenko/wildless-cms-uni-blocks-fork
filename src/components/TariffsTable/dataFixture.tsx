import type { Picture } from '../../model/Picture';
import { Img } from '../../ui-kit/Img/Img';
import type {
  InnerTableBlockDef,
  LabelDescriptionCellDef,
  ListBlockDef,
  TariffsTableColumn,
  TariffsTableContent,
  TariffsTableRowHeader,
} from './TariffsTableContent';

const title = 'Заголовок';
const description = 'Описание предоставляемого продукта';

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

const LABEL_BLOCK: LabelDescriptionCellDef = {
  tableCellType: 'LabelDescription',
  label: 'Заголовок без описания',
};

const LABEL_DESCRIPTION_BLOCK: LabelDescriptionCellDef = {
  label: 'Ячейка 1-2',
  tableCellType: 'LabelDescription',
  description: 'Описание',
};

const TABLE_BLOCK: InnerTableBlockDef = {
  tableCellType: 'Table',
  dataUrl: 'tariffs-inner-table-data',
  pdfUrl: '#',
};

const DESCRIPTION_BLOCK: LabelDescriptionCellDef = {
  tableCellType: 'LabelDescription',
  description: 'Описание без заголовка',
};

const LIST_BLOCK: ListBlockDef = {
  tableCellType: 'List',
  isDotted: true,
  items: ['Элемент списка 1', 'Элемент списка 2', 'Элемент списка 3'],
};

const rowHeaders: TariffsTableRowHeader[] = [
  { title: 'Начисление процентов на остаток по счету', icon: { icon: 'OkIcon' } },
  { title: 'Снятие наличных', icon: { icon: 'GlassIcon' } },
  { title: 'Кэшбэк баллами' },
  { title: 'Кнопки-иконки' },
  { title: 'Дополнительная информация' },
  { title: 'Описание и кнопка' },
  { title: 'Описание и ссылка' },
];

export const columns: TariffsTableColumn[] = [
  {
    data: [
      [LABEL_BLOCK, LIST_BLOCK, LABEL_DESCRIPTION_BLOCK, LIST_BLOCK],
      [
        {
          label: 'Бесплатно',
          description: 'В банкоматах и кассах Россельхозбанка и банков-партнеров',
          tableCellType: 'LabelDescription',
        },
        {
          label: 'Бесплатно',
          description: 'В сторонних банкоматах - 1 раз в месяц, далее 1% минимум 150 руб',
          tableCellType: 'LabelDescription',
        },
      ],
      [LABEL_BLOCK],
      [
        {
          label: 'Платёжные системы картинкой',
          tableCellType: 'LabelDescription',
        },
        {
          image: image,
          tableCellType: 'Img',
        },
      ],
      [
        { label: 'Кнопки-иконки', tableCellType: 'LabelDescription' },
        {
          tableCellType: 'Buttons',
          buttons: [
            {
              appendLeft: <Img image={{ icon: 'AppleIcon' }} width="24" height="24" asSVG />,
              rounded: true,
              version: 'secondary',
              href: '/',
              target: '_blank',
            },
            {
              appendLeft: <Img image={{ icon: 'PlayMarketIcon' }} width="24" height="24" asSVG />,
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
          tableCellType: 'LabelDescription',
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
          tableCellType: 'Img',
        },
      ],
    ],
  },
];

export const columnsTable: TariffsTableColumn[] = [
  {
    data: [
      [LABEL_BLOCK, LIST_BLOCK],
      [TABLE_BLOCK, DESCRIPTION_BLOCK],
      [LIST_BLOCK, DESCRIPTION_BLOCK],
      [TABLE_BLOCK],
    ],
  },
];

export const TARIFFS_TABLE_FIXTURE_EXAMPLE: TariffsTableContent = {
  title,
  description,
  tariffsColumns: columns,
  rowHeaders,
};

export const TARIFFS_TABLE_INNER_TABLE_FIXTURE_EXAMPLE: TariffsTableContent = {
  title,
  description,
  tariffsColumns: columnsTable,
  rowHeaders,
};
