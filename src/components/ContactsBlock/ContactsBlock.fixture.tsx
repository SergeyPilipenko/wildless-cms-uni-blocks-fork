import { context } from '../../react/setup-fixture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { ContactsBlock } from './ContactsBlock';

const button: ButtonProps = {
  href: '#',
  text: 'Перейти',
  target: '_blank',
  version: 'secondary',
};

export default {
  default: (
    <ContactsBlock
      className="col-span-12"
      info={[
        {
          title: 'Телеграм-канал РСХБ Инвестиции',
          description:
            'Всегда вовремя: главные новости, инвестиционные идеи, анонсы размещения облигаций',
          button,
        },
        {
          title: 'Подписка на аналитику',
          description: 'E-mail рассылка: главное за неделю',
          button,
        },
      ]}
      contacts={[
        [
          {
            title: '8 (800) 100-40-40',
            description: 'Для консультаций',
          },
          {
            title: '8 (800) 100-40-60',
            description: 'Для подачи торговых поручений',
            additionalDescription: 'Потребуется назвать уникальный код клиента и кодовое слово',
          },
        ],
        [
          {
            title: 'invest@rshb.ru',
            description: 'По брокерскому обслуживанию',
            additionalDescription: 'Восстановление логина и номера соглашения',
          },
          {
            title: 'broker@rshb.ru',
            description: 'По брокерскому обслуживанию',
            additionalDescription: 'Получение расчета финансового результата и справки 2-НДФЛ',
          },
        ],
      ]}
      context={context}
    />
  ),
};
