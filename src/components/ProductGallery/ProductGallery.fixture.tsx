import type { Picture } from '../../model/Picture';
import '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { ProductGallery } from './ProductGallery';

const percentImage: Picture = {
  src: '3-6-percent.png',
  format: 'webp',
  size: {
    width: 338,
    height: 420,
  },
  alt: 'Ставка от 3,6% годовых',
};

const worker: Picture = {
  src: 'money-2.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
};

const creditCard: Picture = {
  src: 'credit-card-1.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
};

const items = [
  'Потребительский кредит по специальной процентной ставке',
  'Получите деньги без залога и поручительства',
  'Кредитный лимит до 5 млн рублей',
];
const buttons: ButtonWithIconProps[] = [
  {
    href: 'https://rshb.ru',
    text: 'Подробнее',
    target: '_blank',
    version: 'primary',
  },
];

const buttonsSecondary: ButtonWithIconProps[] = [
  {
    href: 'https://rshb.ru',
    text: 'Подробнее',
    target: '_blank',
    version: 'white',
  },
];

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ProductGallery
        className="col-span-12"
        slides={[
          {
            nav: {
              title: 'Кредит по одному документу',
              description: 'Ставка от 5,5% годовых',
            },
            productBlock: {
              title: 'Кредит по одному документу',
              description: 'Ставка от 5,5% годовых',
              headlineVersion: 'L',
              items,
              buttons,
              image: percentImage,
            },
          },
          {
            nav: {
              title: 'Для людей в возрасте',
              description: 'Ставка до 7% годовых',
            },
            productBlock: {
              title: 'Ставка от 12,5% годовых на срок до 3 лет!',
              headlineVersion: 'L',
              items,
              buttons,
              image: worker,
            },
          },
          {
            nav: {
              title: 'Выгодно покупать',
              description: 'Ставка от 5% годовых',
            },
            productBlock: {
              title: 'Дополнительные бонусные баллы за покупки!',
              headlineVersion: 'L',
              items,
              buttons,
              image: creditCard,
            },
          },
          {
            nav: {
              title: 'Карты Unionpay',
              description: '120 дней льготный период',
            },
            productBlock: {
              title: 'Карты Unionpay',
              headlineVersion: 'L',
              items,
              buttons,
              image: creditCard,
            },
          },
        ]}
      />
    </div>
  ),
  primary: (
    <div className="container grid grid-cols-12">
      <ProductGallery
        className="col-span-12"
        version={'secondary'}
        slides={[
          {
            nav: {
              title: 'Кредит по одному документу',
              description: 'Ставка от 5,5% годовых',
            },
            productBlock: {
              title: 'Кредит по одному документу',
              description: 'Кредит наличными без залога и поручительства, только по паспорту',
              headlineVersion: 'L',
              items,
              buttons: buttonsSecondary,
              image: percentImage,
            },
          },
          {
            nav: {
              title: 'Для людей в возрасте',
              description: 'Ставка до 7% годовых',
            },
            productBlock: {
              title: 'Ставка от 12,5% годовых на срок до 3 лет!',
              headlineVersion: 'L',
              items,
              buttons: buttonsSecondary,
              image: worker,
            },
          },
          {
            nav: {
              title: 'Выгодно покупать',
              description: 'Ставка от 5% годовых',
            },
            productBlock: {
              title: 'Дополнительные бонусные баллы за покупки!',
              headlineVersion: 'L',
              items,
              buttons: buttonsSecondary,
              image: creditCard,
            },
          },
          {
            nav: {
              title: 'Карты Unionpay',
              description: '120 дней льготный период',
            },
            productBlock: {
              title: 'Карты Unionpay',
              headlineVersion: 'L',
              items,
              buttons: buttonsSecondary,
              image: creditCard,
            },
          },
        ]}
      />
    </div>
  ),
};
