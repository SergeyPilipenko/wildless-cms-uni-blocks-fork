import ymaps from 'yandex-maps';
import { useExternalNS } from '../../hooks/useExternalNS';
import { projectSettings } from '../../ProjectSettings';

const YMAPS_NAMESPACE = 'ymaps';

export const useYandexMaps = () => {
  const url = `https://api-maps.yandex.ru/2.1/?apikey=${projectSettings.YANDEX_MAP_API_KEY}&lang=ru_RU`;

  const yandexMaps = useExternalNS<typeof ymaps>(YMAPS_NAMESPACE, url);

  return yandexMaps;
};
