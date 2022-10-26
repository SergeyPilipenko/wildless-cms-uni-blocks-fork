import { context } from '../../react/setup-fixture';
import type { Picture } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { ErrorBlock } from './ErrorBlock';

const image: Picture = {
  src: 'error.png',
  format: 'webp',
  alt: 'Ошибка',
  size: {
    width: 460,
    height: 294,
  },
};

const buttonPrimary: ButtonProps = {
  href: '/credit-cards',
  text: 'Вернуться на главную',
  target: '_blank',
  version: 'primary',
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ErrorBlock
        className="col-span-12"
        context={context}
        title="Страница не найдена"
        subtitle="Возможно неправильно набран адрес или такой странице не существует"
        error={{
          errorContentType: 'Code',
          code: '404',
        }}
        button={buttonPrimary}
      />
    </div>
  ),
  'error-with-image': (
    <div className="container grid grid-cols-12">
      <ErrorBlock
        className="col-span-12"
        context={context}
        title="Ваш браузер устарел"
        subtitle="Чтобы открыть наш сайт обновите Ваш браузер или скачайте обновленные версии браузеров"
        error={{
          errorContentType: 'Image',
          image: image,
        }}
      />
    </div>
  ),
};
