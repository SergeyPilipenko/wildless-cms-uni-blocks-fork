import { context } from '../../setup-fixture';

import { Picture } from '../../model/Picture';
import { Headline } from './Headline';
import { HeadlineContent } from './HeadlineContent';

export const HEADLINE: HeadlineContent = {
  title: 'Своя кредитная карта',
  description: 'Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах.',
  align: 'center',
  bgColor: 'transparent',
};

const image: Picture = {
  src: 'globe-1.png',
  format: 'webp',
  size: {
    width: 180,
    height: 180,
  },
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        title="Копите в нескольких валютах"
        description="Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада"
        image={image}
      />
    </div>
  ),
  'title-img': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        title="Копите в нескольких валютах"
        image={image}
      />
    </div>
  ),
  'desc-img': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        description="Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада"
        image={image}
      />
    </div>
  ),
  white: (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        title="Копите в нескольких валютах"
        description="Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада"
        bgColor="bg-white"
        image={image}
      />
    </div>
  ),
};
