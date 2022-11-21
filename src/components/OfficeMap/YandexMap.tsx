import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useRef } from '@redneckz/uni-jsx/lib/hooks';
import ymaps from 'yandex-maps';
import { renderClusterer } from '../SafeDepositRental/renderClusterer';
import { useYandexMaps } from '../SafeDepositRental/useYandexMaps';

interface YandexMapProps {
  point: number[];
}

export const YandexMap = JSX<YandexMapProps>(({ point }) => {
  const map = useRef<ymaps.Map | null>(null);

  const yandexMaps = useYandexMaps();

  useEffect(() => {
    yandexMaps?.ready(() => {
      map.current = new yandexMaps.Map('map', {
        center: point,
        zoom: 10,
      });
      renderClusterer(yandexMaps, map.current, [point]);
    });
  }, [map, point, yandexMaps]);

  useEffect(() => {
    if (map.current && point && yandexMaps) {
      renderClusterer(yandexMaps, map.current, [point]);
    }
  }, [map, point, yandexMaps]);

  if (!yandexMaps) {
    return null;
  }

  return (
    <div className="bg-white">
      <div id="map" className="h-[560px]" />
    </div>
  );
});
