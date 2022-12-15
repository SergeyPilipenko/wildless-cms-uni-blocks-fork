import '../../react/setup-fixture';
import { CarouselCard } from './CarouselCard';
import type { CarouselCardContent } from './CarouselCardContent';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

const button: ButtonProps = {
  text: 'Подробнее',
  href: '/credit-cards',
  version: 'secondary',
};

export const CARD: CarouselCardContent = {
  title: 'Хочешь попасть на практику в РСХБ?',
  description:
    'Стажировка в Россельхозбанке — это возможность реализовать смелые идеи и проекты под руководством опытных наставников, внести свой вклад в развитие перспективных цифровых продуктов.',
  button,
  version: 'normal',
};

export const CARD_NEW: CarouselCardContent = {
  title: 'РСХБ?',
  description:
    'Стажировка в Россельхозбанке — это возможность реализовать смелые идеи и проекты под руководством опытных наставников, внести свой вклад в развитие перспективных цифровых продуктов.',
  button,
  version: 'normal',
};

export const CARD_MINI: CarouselCardContent = {
  title: 'Хочешь попасть на практику в РСХБ?',
  description:
    'Стажировка в Россельхозбанке — это возможность реализовать смелые идеи и проекты под руководством опытных наставников, внести свой вклад в развитие перспективных цифровых продуктов.',
  button,
  version: 'mini',
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <CarouselCard className="col-span-12" {...CARD} />
    </div>
  ),
  mini: (
    <div className="container grid grid-cols-12">
      <CarouselCard className="col-span-12" {...CARD_MINI} />
    </div>
  ),
};
