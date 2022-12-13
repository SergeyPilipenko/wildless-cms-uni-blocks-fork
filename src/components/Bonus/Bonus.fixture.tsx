import type { Picture } from '../../model/Picture';
import '../../react/setup-fixture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { Bonus } from './Bonus';
import type { BonusContent } from './BonusContent';

const imageSize = {
  height: 242,
  width: 242,
};

const cardWithMoney: Picture = {
  src: 'card-with-diamond.png',
  alt: 'Кредиты в РСХБ',
  format: 'webp',
  size: imageSize,
};

const buttons: ButtonProps[] = [
  {
    text: 'Установить',
    href: '/credit-cards',
    version: 'secondary',
  },
];

export const BONUS: BonusContent = {
  title: 'Начисление баллов',
  description:
    /* eslint-disable max-len */
    'Получайте 1% бонусными баллами с любых покупок и 1,5% баллами с покупок в категории «Путешествия». Обменивайте бонусные баллы на авиа и ж/д билеты, бронирование отелей и прокат автомобилей.',
  bonusItems: [
    {
      title: '5 баллов за каждые 100 ₽',
      description:
        'Повышенное начисление баллов за операции оплаты товаров и услуг в сети АЗС Роснефть',
      bonusItemContent: {
        bonusType: 'count',
        bonusCount: '5',
        bonusName: 'баллов',
      },
    },
    {
      title: '1 балл за каждые 100 ₽',
      description: 'За остальные операции оплаты товаров и услуг',
      bonusItemContent: {
        bonusType: 'count',
        bonusCount: '1',
        bonusName: 'балл',
      },
    },
    {
      title: '300 приветственных баллов',
      description:
        'За операции оплаты товаров и услуг на общую сумму 1 000 рублей и более в течение первых двух месяцев после получения карты',
      bonusItemContent: {
        bonusType: 'image',
        image: cardWithMoney,
      },
      buttons,
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Bonus className="col-span-12" {...BONUS} />
    </div>
  ),
};
