import { context } from '../../react/setup-fixture';
import type { Picture } from '../../model/Picture';
import type { PictureTextContent } from './PictureTextContent';
import { PictureText } from './PictureText';

const image: Picture = {
  src: 'legal-support-business.png',
  format: 'webp',
  size: {
    width: 400,
    height: 300,
  },
  alt: 'Варианты потребительского кредита',
};

const imageInsurance: Picture = {
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

export const PICTURE_TEXT: PictureTextContent = {
  title: 'Обменивайте бонусы на путешествия',
  description:
    'Получайте 1% бонусными баллами с любых покупок и 1,5% баллами с покупок в категории «Путешествия». Обменивайте ' +
    'бонусные баллы на авиа и ж/д билеты, бронирование отелей и прокат автомобилей.',
  benefits: [
    {
      label: 'Кредит по одному документу',
      description: 'До 300 тыс ₽ по упрощённой процедуре получения кредита',
      icon: { icon: 'DocumentTextIcon' },
    },
    {
      label: 'Кредит на общих условиях',
      description: 'До 5 млн ₽ на общих условиях получения кредита',
      icon: { icon: 'DocumentTextIcon' },
    },
  ],
  image,
};

export const INSURANCE_TEXT: PictureTextContent = {
  title: 'Страховые риски и продукты',
  description: 'Покрываемые риски программы «Защита вас и ваших близких»',
  benefits: [
    {
      label: 'Телесное повреждение',
      icon: { icon: 'ShieldTickIcon' },
    },
    {
      label: 'Госпитализация застрахованного',
      description: 'Описание',
      icon: { icon: 'ShieldTickIcon' },
    },
    {
      label: 'Сокращение численности работников организации и другой текст для теста длинны текста',
      icon: { icon: 'ShieldTickIcon' },
    },
    {
      label: 'Смерть застрахованного',
      icon: { icon: 'ShieldTickIcon' },
    },
  ],
  image: imageInsurance,
  sum: 500000,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <PictureText className="col-span-12" context={context} {...PICTURE_TEXT} />
    </div>
  ),
  secondary: (
    <div className="container grid grid-cols-12">
      <PictureText
        className="col-span-12"
        context={context}
        {...PICTURE_TEXT}
        version="secondary"
      />
    </div>
  ),
  'insurance sum': (
    <div className="container grid grid-cols-12">
      <PictureText context={context} className="col-span-12" {...INSURANCE_TEXT} />
    </div>
  ),
  'insurance monthPay': (
    <div className="container grid grid-cols-12">
      <PictureText
        context={context}
        className="col-span-12"
        {...INSURANCE_TEXT}
        monthLimit={25000}
      />
    </div>
  ),
};
