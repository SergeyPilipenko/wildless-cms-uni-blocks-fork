/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Icon } from '../Icon/Icon';
import ymaps from 'yandex-maps';

const styles = {
  focus: 'focus:border-primary-focus focus:border',
  hover: 'hover:bg-primary-hover',
  active: 'active:bg-primary-active',
  border: 'border border-transparent rounded-md',
  position: 'absolute flex items-center justify-center',
  font: 'text-center font-sans',
};

export const renderUserGeolocation = (
  map: ymaps.Map,
  yandexMaps: typeof ymaps,
  className: string,
) => {
  const setUserGeoLocation = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yandexMaps.geolocation
      .get({
        provider: 'yandex',
        autoReverseGeocode: true,
        mapStateAutoApply: true,
      })
      .then(function (result) {
        map.geoObjects.add(result.geoObjects);
      });
  };

  return (
    <div
      className={`select-none cursor-pointer py-4 w-12 bg-white ${Object.values(styles).join(
        ' ',
      )} ${className}`}
      onClick={setUserGeoLocation}
    >
      <Icon name="UserGeoLocationIcon" width="20" height="16" />
    </div>
  );
};
