import { context } from '../../setup-fixture';
import { Footer } from './Footer';

const DEFAULT_ORIGIN = 'https://rshb.ru/';

export default (
  <div className="container grid grid-cols-12">
    <Footer
      className="col-span-12"
      topItems={[
        {
          href: DEFAULT_ORIGIN,
          text: 'О банке',
          target: '_blank',
          items: [
            {
              href: DEFAULT_ORIGIN,
              text: 'О банке',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Новости',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Офисы и отделения',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Карьера в банке',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Пресс-центр',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Кредитным организациям',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Закупки',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Непрофильные/Профильные нецелевые активы',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Инсайдерам',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Противодействие коррупции',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Меры безопасности',
            },
            {
              href: DEFAULT_ORIGIN,
              text: 'Залоговое имущество',
            },
          ],
        },
      ]}
      socialMedia={[
        { href: 'https://t.me' },
        { href: 'https://vk.com' },
        { href: 'https://ok.ru' },
      ]}
      contacts={[
        {
          text: '+7 (495) 787-7-787',
          description: 'Для звонков из-за границы',
          type: 'tel',
        },
        {
          text: 'example@example.com',
          description: 'Для писем',
          type: 'email',
        },
        {
          text: '7787',
          description: 'Абонентам МТС, Мегафон, Билайн и Tele2',
          type: 'tel',
        },
      ]}
      relatedEnterprises={[
        {
          text: 'РСХБ Страхование',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
        {
          text: 'РСХБ Страхование жизни',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
        {
          text: 'РСХБ Управление активами',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
        {
          text: 'РСХБ Лизинг',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
        {
          text: 'РСХБ Факторинг',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
      ]}
      documents={[
        {
          text: 'Информация о процентных ставках по договорам банковского вклада с физическими лицами',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
        {
          text: 'Раскрытие информации профессиональным участником рынка ценных бумаг',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
        {
          text: 'Раскрытие информации',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
        {
          text: 'Удостоверяющий центр',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
        {
          text: 'Финансовая культура',
          href: DEFAULT_ORIGIN,
          target: '_blank',
        },
      ]}
      context={context}
    />
  </div>
);
