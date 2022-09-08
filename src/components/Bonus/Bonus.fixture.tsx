import { context } from '../../setup-fixture';
import { Bonus } from './Bonus';
import type { BonusContent } from './BonusContent';

export const BONUS: BonusContent = {
  title: 'Начисление баллов',
  description:
    'Получайте 1% бонусными баллами с любых покупок и 1,5% баллами с покупок в категории «Путешествия». Обменивайте бонусные баллы на авиа и ж/д билеты, бронирование отелей и прокат автомобилей.',
  bonusItems: [
    {
      name: '5 баллов за каждые 100 ₽',
      description:
        'Повышенное начисление баллов за операции оплаты товаров и услуг в сети АЗС Роснефть',
      bonusCount: 5,
      bonusName: 'баллов',
    },
    {
      name: '1 балл за каждые 100 ₽',
      description: 'За остальные операции оплаты товаров и услуг',
      bonusCount: 1,
      bonusName: 'балл',
    },
    {
      name: '300 приветственных баллов',
      description:
        'За операции оплаты товаров и услуг на общую сумму 1 000 рублей и более в течение первых двух месяцев после получения карты',
      bonusCount: 300,
      bonusName: 'баллов',
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Bonus className="col-span-12" context={context} {...BONUS} />
    </div>
  ),
};
