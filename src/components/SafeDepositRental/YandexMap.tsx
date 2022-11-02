import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useRef } from '@redneckz/uni-jsx/lib/hooks';
import ymaps from 'yandex-maps';
import { Heading } from '../../ui-kit/Heading/Heading';
import { renderClusterer } from './renderClusterer';
import { useYandexMaps } from './useYandexMaps';

interface YandexMapProps {
  points: number[][];
}

export const YandexMap = JSX<YandexMapProps>(({ points }) => {
  const map = useRef<ymaps.Map | null>(null);

  const yandexMaps = useYandexMaps();

  useEffect(() => {
    yandexMaps?.ready(() => {
      map.current = new yandexMaps.Map('map', {
        center: points[0],
        zoom: 10,
      });
      renderClusterer(yandexMaps, map.current, points);
    });
  }, [yandexMaps]);

  useEffect(() => {
    if (map.current && points && yandexMaps) {
      renderClusterer(yandexMaps, map.current, points);
    }
  }, [map, points, yandexMaps]);

  if (!yandexMaps) {
    return null;
  }

  return (
    <div className="pt-12 mt-1 bg-white">
      <Heading title="Офисы на карте" headingType="h3" className="mb-8 text-center" />
      <div id="map" className="h-[640px]" />
    </div>
  );
});
