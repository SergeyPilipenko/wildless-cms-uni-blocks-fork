import { context } from '../../react/setup-fixture';
import { StepsBlock } from './StepsBlock';

const steps = [
  {
    label: 'Заявка на кредит',
    description: 'Оставьте онлайн-заявку на потребительский кредит',
  },
  {
    label: 'В случае одобрения',
    description: 'Менеджер свяжется с вами и согласует встречу',
  },
  {
    label: 'Получение наличных',
    description: 'Получите наличные в отделении банка',
  },
  {
    label: 'Последний шаг!',
    description: 'Получите наличные в отделении банка',
  },
];

export default {
  default: (
    <div className="container grid grid-cols-12">
      <StepsBlock
        className="col-span-12"
        context={context}
        title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
        steps={steps.slice(0, 3)}
      />
    </div>
  ),
  'steps-img': (
    <div className="container grid grid-cols-12">
      <StepsBlock
        className="col-span-12"
        context={context}
        title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
        showLines={false}
        steps={[
          {
            label: 'В мобильном приложении или интернет-банке',
            description: 'Для всех клиентов Россельхозбанка',
            icon: { icon: 'SignDocsIcon' },
            button: { text: 'Войти в интернет-банк', href: 'https://www.rshb.ru/' },
          },
          {
            label: 'Через Госуслуги',
            description: 'При наличии данных в Единой биометрической системе',
            icon: { icon: 'ClockIcon' },
            button: { text: 'Оформить', href: 'https://www.rshb.ru/' },
          },
          {
            label: 'В офисах Россельхозбанка',
            description: 'Откройте вклад',
            icon: { icon: 'ComfortableCompIcon' },
            button: { text: 'Офисы на карте', href: 'https://www.rshb.ru/' },
          },
        ]}
      />
    </div>
  ),
  'steps-with-btn': (
    <div className="container grid grid-cols-12">
      <StepsBlock
        className="col-span-12"
        context={context}
        title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
        showLines={false}
        steps={[
          {
            label: 'В мобильном приложении или интернет-банке',
            description: 'Для всех клиентов Россельхозбанка',
            icon: { icon: 'SignDocsIcon' },
          },
          {
            label: 'Через Госуслуги',
            description: 'При наличии данных в Единой биометрической системе',
            icon: { icon: 'ClockIcon' },
          },
          {
            label: 'В офисах Россельхозбанка',
            description: 'Откройте вклад',
            icon: { icon: 'ComfortableCompIcon' },
          },
        ]}
        button={{
          text: 'Отправить заявку',
          href: 'https://www.rshb.ru/',
          target: '_blank',
        }}
      />
    </div>
  ),

  '4 steps': (
    <div className="container grid grid-cols-12">
      <StepsBlock
        className="col-span-12"
        context={context}
        title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
        steps={steps}
      />
    </div>
  ),
};
