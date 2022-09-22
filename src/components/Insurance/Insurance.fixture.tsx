import { Picture } from '../../model/Picture';
import { context } from '../../react/setup-fixture';
import { Benefit } from '../BenefitsBlock/BenefitsBlockContent';
import { Insurance } from './Insurance';

const benefits: Benefit[] = [
  {
    label: 'Телесное повреждение',
    description: 'Описание',
    icon: { icon: 'ShieldTickIcon' },
  },
  {
    label: 'Госпитализация застрахованного',
    icon: { icon: 'ShieldTickIcon' },
  },
  {
    label: 'Сокращение численности работников организации',
    icon: { icon: 'ShieldTickIcon' },
  },
  {
    label: 'Смерть застрахованного',
    icon: { icon: 'ShieldTickIcon' },
  },
];

const image: Picture = {
  src: 'insurance.png',
  format: 'webp',
  alt: 'Страховые риски и продукты',
  size: {
    width: 400,
    height: 300,
  },
  sources: [
    {
      src: 'insurance.png 1x, insurance-2x.png 2x',
      format: 'png',
    },
  ],
};

export default {
  'without monthly payment': (
    <div className="container grid grid-cols-12">
      <Insurance
        context={context}
        className="col-span-12"
        title="Страховые риски и продукты"
        description="Покрываемые риски программы «Защита вас и ваших близких»"
        benefits={benefits}
        image={image}
        sum={500000}
      />
    </div>
  ),
  'with monthly payment': (
    <div className="container grid grid-cols-12">
      <Insurance
        context={context}
        className="col-span-12"
        title="Страховые риски и продукты"
        description="Покрываемые риски программы «Защита вас и ваших близких»"
        benefits={benefits}
        image={image}
        sum={500000}
        monthLimit={25000}
      />
    </div>
  ),
};
