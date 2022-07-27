import { context } from '../../setup-fixture';
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
];

export default {
  default: (
    <StepsBlock
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
      size="normal"
      steps={steps}
    />
  ),
  'only desc': (
    <StepsBlock
      context={context}
      description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
      size="normal"
      steps={steps}
    />
  ),

  small: (
    <StepsBlock
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      size="small"
      steps={steps}
    />
  ),

  'small multi-options': (
    <StepsBlock
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
      size="small"
      steps={[
        {
          description: 'Оставьте онлайн-заявку на потребительский кредит',
          icon: 'ClockIcon',
        },
        {
          label: 'В случае одобрения',
          icon: 'SignDocsIcon',
        },
        {
          label: 'Заявка на кредит',
          description: 'Оставьте онлайн-заявку на потребительский кредит',
          icon: 'ComfortableCompIcon',
        },
        {
          label: 'Получение наличных',
          icon: 'ClockIcon',
        },
      ]}
    />
  ),

  'small icons': (
    <StepsBlock
      context={context}
      title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
      size="small"
      steps={[
        {
          label: 'Заявка на кредит',
          icon: 'EmptyWalletIcon',
        },
        {
          label: 'В случае одобрения',
          icon: 'PercentageSquareIcon',
        },
        {
          label: 'Получение наличных',
          icon: 'CalendarIcon',
        },
      ]}
    />
  ),
};
