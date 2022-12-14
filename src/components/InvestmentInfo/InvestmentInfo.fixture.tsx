import '../../react/setup-fixture';
import { InvestmentInfo } from './InvestmentInfo';
import type { InvestmentInfoContent } from './InvestmentInfoContent';

export const INVESTMENT_INFO: InvestmentInfoContent = {
  items: [
    'Пример с ежегодным взносом 400 000 ₽',
    'Срок использования ИИС вы определяете сами. Но для получения налоговых вычетов он должен быть открыт не менее 3 лет',
    'Вы можете возвращать до 52 000 ₽ каждый год',
  ],
  investmentZeroColumn: {
    title: 'Открытие ИИС',
  },
  investmentColumns: [
    {
      title: '1 января года, следующего за годом открытия ИИС',
      cells: [
        {
          text: 'Потенциальный доход инвестиций',
          cellColor: 'green-light',
        },
        {
          text: 'Первый взнос 400 000 ₽',
          cellColor: 'green-dark',
          cellSize: 'S',
        },
      ],
    },
    {
      title: '1 января второго года после открытия ИИС',
      cells: [
        {
          text: 'Налоговый вычет за 1 год 52 000 ₽',
          cellColor: 'yellow',
        },
        {
          text: 'Потенциальный доход инвестиций за 2 года',
          cellColor: 'green-light',
          cellSize: 'S',
        },
        {
          text: 'Второй взнос 400 000 ₽',
          cellColor: 'green',
          cellSize: 'S',
        },
        {
          text: 'Первый взнос 400 000 ₽',
          cellColor: 'green-dark',
          cellSize: 'S',
        },
      ],
    },
    {
      title: '1 января третьего года после открытия ИИС',
      cells: [
        {
          text: 'Налоговый вычет за 2 год 52 000 ₽',
          cellColor: 'yellow',
        },
        {
          text: 'Потенциальный доход инвестиций за 3 года',
          cellColor: 'green-light',
          cellSize: 'M',
        },
        {
          text: 'Третий взнос — 0 ₽',
          cellColor: 'green',
          cellSize: 'S',
        },
        {
          text: 'Первый и второй взносы 800 000 ₽',
          cellColor: 'green-dark',
          cellSize: 'L',
        },
      ],
    },
    {
      title: 'Возможный вывод средств, закрытие ИИС',
      cells: [
        {
          text: 'Налоговый вычет за 3 года 156 000 ₽',
          cellColor: 'yellow',
          cellSize: 'S',
        },
        {
          text: 'Потенциальный доход инвестиций за 3 года',
          cellColor: 'green-light',
          cellSize: 'M',
        },
        {
          text: 'Сумма инвестиций за 3 года 1 200 000 ₽',
          cellColor: 'green-dark',
          cellSize: 'XL',
        },
      ],
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <InvestmentInfo className="col-span-12" {...INVESTMENT_INFO} />
    </div>
  ),
};
