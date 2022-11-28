// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { JSX } from '@redneckz/uni-jsx';
import ymaps from 'yandex-maps';
import { Icon } from '../Icon/Icon';

interface ZoomButtonProps {
  yandexMaps: ymaps.Map;
  direction?: string;
}

const styles = {
  focus: 'focus:border-primary-focus focus:border',
  hover: 'hover:bg-primary-hover',
  active: 'active:bg-primary-active',
  border: 'border-b border-b-2 border-gray last:border-0',
  position: 'relative flex items-center justify-center',
  font: 'text-center font-sans text-l',
};

// TODO: Добавить метод определения центральной точки
export const ZoomButton = JSX<ZoomButtonProps>(({ yandexMaps, direction = 'in' }) => {
  const iconName = direction === 'in' ? 'PlusIcon' : 'MinusIcon';
  const changeZoom = () => {
    const currentZoom = yandexMaps.current.getZoom();
    const newZoom = direction === 'in' ? currentZoom + 1 : currentZoom - 1;
    yandexMaps.current.setZoom(newZoom, { checkZoomRange: true });
  };

  return (
    <div
      onClick={changeZoom}
      className={`${Object.values(styles).join(' ')} bg-white select-none cursor-pointer w-12 h-12`}
    >
      <Icon name={iconName} width="20" height="16" />
    </div>
  );
});
