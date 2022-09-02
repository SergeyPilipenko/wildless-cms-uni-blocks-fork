import { context } from '../../setup-fixture';
import { ProductGallery } from './ProductGallery';
import type { Picture } from '../../model/Picture';
import type { ProductSlide } from './ProductGalleryContent';

const moneyImage: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 234,
    height: 234,
  },
  alt: 'Варианты потребительского кредита',
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

const slides: ProductSlide[] = [
  {
    nav: {
      title: 'Деньги на любые цели',
      description: 'Ставка от 12,5% годовых на срок до 5 лет',
    },
    productBlock: {
      title: 'Ставка от 12,5% годовых на срок до 5 лет!',
      headingType: 'h2',
      items: [
        'Потребительский кредит по специальной процентной ставке',
        'Получите деньги без залога и поручительства',
        'Кредитный лимит до 5 млн рублей',
      ],
      buttons: [
        {
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          version: 'primary',
        },
      ],
      version: 'primary',
      image: moneyImage,
    },
  },
  {
    nav: {
      title: 'Для людей в возрасте',
      description: 'Ставка от 12,5% годовых на срок до 3 лет',
    },
    productBlock: {
      title: 'Ставка от 12,5% годовых на срок до 3 лет!',
      headingType: 'h2',
      items: [
        'Потребительский кредит по специальной процентной ставке',
        'Получите деньги без залога и поручительства',
        'Кредитный лимит до 5 млн рублей',
      ],
      buttons: [
        {
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          version: 'primary',
        },
      ],
      version: 'secondary',
      image: worker,
    },
  },
  {
    nav: {
      title: 'Выгодно покупать',
      description: 'Дополнительные бонусные баллы за покупки',
    },
    productBlock: {
      title: 'Дополнительные бонусные баллы за покупки!',
      headingType: 'h2',
      items: [
        'Потребительский кредит по специальной процентной ставке',
        'Получите деньги без залога и поручительства',
        'Кредитный лимит до 5 млн рублей',
      ],
      buttons: [
        {
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          version: 'primary',
        },
      ],
      version: 'primary',
      image: creditCard,
    },
  },
  {
    nav: {
      title: 'Карты Unionpay',
      description: 'Кэшбэк до 20% у партнеров',
    },
    productBlock: {
      title: 'Карты Unionpay',
      headingType: 'h2',
      items: [
        'Потребительский кредит по специальной процентной ставке',
        'Получите деньги без залога и поручительства',
        'Кредитный лимит до 5 млн рублей',
      ],
      buttons: [
        {
          href: 'https://rshb.ru',
          text: 'Подробнее',
          target: '_blank',
          version: 'primary',
        },
      ],
      version: 'secondary',
      image: creditCard,
    },
  },
];

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ProductGallery className="col-span-12" context={context} slides={slides} />
    </div>
  ),
};
