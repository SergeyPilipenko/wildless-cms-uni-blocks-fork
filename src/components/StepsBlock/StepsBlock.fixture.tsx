import { context } from '../../react/setup-fixture';
import { StepsBlock } from './StepsBlock';
import type { StepsBlockProps } from './StepsBlock';
import type { Step } from './StepsBlockContent';

const TITLE =
  'Рассчитайте условия на онлайн-калькуляторе и оставьте заявку на потребительский кредит';

const ITEMS: Step['items'] = ['item1', 'item2', 'item3', 'item4', 'item5'];
const COMMON_PROPS: StepsBlockProps = {
  className: 'col-span-12',
  context,
  title: TITLE,
};

const STEPS: Step[] = [
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

const STEPS_WITH_ICONS: Step[] = [
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
];

const BUTTONS: Step['button'][] = [
  { text: 'Войти в интернет-банк' },
  { text: 'Оформить' },
  { text: 'Офисы на карте' },
];

const STEPS_WITH_BUTTONS_AND_ICONS: Step[] = STEPS_WITH_ICONS.map((step, i) => ({
  ...step,
  button: BUTTONS[i],
}));

const STEPS_WITH_LIST_PROPS: StepsBlockProps = {
  ...COMMON_PROPS,
  steps: STEPS_WITH_ICONS.map((step) => ({ ...step, description: '', items: ITEMS })),
};

const STEPS_WITH_LIST_AND_DESC_PROPS: StepsBlockProps = {
  ...COMMON_PROPS,
  steps: STEPS_WITH_ICONS.map((step) => ({ ...step, items: ITEMS })),
};

const STEPS_WITH_BUTTON_PROPS: StepsBlockProps = {
  ...COMMON_PROPS,
  steps: STEPS.map((step) => ({
    ...step,
    button: { text: 'Оформить' },
  })),
  title: TITLE,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <StepsBlock {...COMMON_PROPS} steps={STEPS.slice(0, 3)} version="secondary" />
    </div>
  ),
  'steps-img': (
    <div className="container grid grid-cols-12">
      <StepsBlock {...COMMON_PROPS} showLines={false} steps={STEPS_WITH_BUTTONS_AND_ICONS} />
    </div>
  ),
  'steps-with-btn': (
    <div className="container grid grid-cols-12">
      <StepsBlock
        {...COMMON_PROPS}
        showLines={false}
        steps={STEPS_WITH_ICONS}
        button={{
          text: 'Отправить заявку',
          href: 'https://www.rshb.ru/',
          target: '_blank',
          icon: { icon: 'ComfortableCompIcon' },
          iconRight: { icon: 'ComfortableCompIcon' },
        }}
      />
    </div>
  ),
  '4 steps': (
    <div className="container grid grid-cols-12">
      <StepsBlock {...COMMON_PROPS} steps={STEPS} />
    </div>
  ),
  'with list and description': (
    <div className="container grid grid-cols-12">
      <StepsBlock {...STEPS_WITH_LIST_PROPS} version="primary" />
    </div>
  ),
  'with list and description secondary': (
    <div className="container grid grid-cols-12">
      <StepsBlock {...STEPS_WITH_LIST_AND_DESC_PROPS} version="secondary" />
    </div>
  ),
  'with list, no description': (
    <div className="container grid grid-cols-12">
      <StepsBlock {...STEPS_WITH_LIST_AND_DESC_PROPS} version="primary" />
    </div>
  ),
  'with list, no description secondary': (
    <div className="container grid grid-cols-12">
      <StepsBlock {...STEPS_WITH_LIST_PROPS} version="secondary" />
    </div>
  ),
  'with button primary': (
    <div className="container grid grid-cols-12">
      <StepsBlock {...STEPS_WITH_BUTTON_PROPS} version="primary" />
    </div>
  ),
  'with button secondary': (
    <div className="container grid grid-cols-12">
      <StepsBlock {...STEPS_WITH_BUTTON_PROPS} version="secondary" />
    </div>
  ),
};
