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
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
          size="normal"
          steps={steps}
        />
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          size="small"
          steps={steps}
        />
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
      </div>
    </div>
  ),

  secondary: (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
          size="normal"
          steps={steps}
          version="secondary"
        />
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          size="small"
          steps={steps}
          version="secondary"
        />
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
          version="secondary"
        />
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
          version="secondary"
        />
      </div>
    </div>
  ),
};
