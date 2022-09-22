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
];

export default {
  primary: (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
          size="normal"
          steps={steps}
        />
      </div>
    </div>
  ),
  'primary small': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          size="small"
          steps={steps}
        />
      </div>
    </div>
  ),
  'primary with images': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
          size="small"
          steps={[
            {
              description: 'Оставьте онлайн-заявку на потребительский кредит',
              icon: { icon: 'ClockIcon' },
            },
            {
              label: 'В случае одобрения',
              icon: { icon: 'SignDocsIcon' },
            },
            {
              label: 'Заявка на кредит',
              description: 'Оставьте онлайн-заявку на потребительский кредит',
              icon: { icon: 'ComfortableCompIcon' },
            },
            {
              label: 'Получение наличных',
              icon: { icon: 'ClockIcon' },
            },
          ]}
        />
      </div>
    </div>
  ),
  'primary with icons': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          size="small"
          steps={[
            {
              label: 'Заявка на кредит',
              icon: { icon: 'EmptyWalletIcon' },
            },
            {
              label: 'В случае одобрения',
              icon: { icon: 'PercentageSquareIcon' },
            },
            {
              label: 'Получение наличных',
              icon: { icon: 'CalendarIcon' },
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
      </div>
    </div>
  ),
  'secondary small': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          size="small"
          steps={steps}
          version="secondary"
        />
      </div>
    </div>
  ),
  'secondary with images': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          description="Откройте мультивалютный вклад, чтобы распределить свои вложения"
          size="small"
          steps={[
            {
              description: 'Оставьте онлайн-заявку на потребительский кредит',
              icon: { icon: 'ClockIcon' },
            },
            {
              label: 'В случае одобрения',
              icon: { icon: 'SignDocsIcon' },
            },
            {
              label: 'Заявка на кредит',
              description: 'Оставьте онлайн-заявку на потребительский кредит',
              icon: { icon: 'ComfortableCompIcon' },
            },
            {
              label: 'Получение наличных',
              icon: { icon: 'ClockIcon' },
            },
          ]}
          version="secondary"
        />
      </div>
    </div>
  ),
  'secondary with icons': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <StepsBlock
          context={context}
          title="Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит"
          size="small"
          steps={[
            {
              label: 'Заявка на кредит',
              icon: { icon: 'EmptyWalletIcon' },
            },
            {
              label: 'В случае одобрения',
              icon: { icon: 'PercentageSquareIcon' },
            },
            {
              label: 'Получение наличных',
              icon: { icon: 'CalendarIcon' },
            },
          ]}
          version="secondary"
        />
      </div>
    </div>
  ),
};
