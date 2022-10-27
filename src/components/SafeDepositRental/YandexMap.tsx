import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useRef } from '@redneckz/uni-jsx/lib/hooks';
import { Heading } from '../../ui-kit/Heading/Heading';
import { renderClusterer } from './renderClusterer';

declare let ymaps: any;

interface YandexMapProps {
  points: number[][];
}

export const YandexMap = JSX<YandexMapProps>(({ points }) => {
  const map = useRef(null);

  useEffect(() => {
    ymaps.ready(() => {
      map.current = new ymaps.Map('map', {
        center: points[0],
        zoom: 10,
      });

      renderClusterer(map.current, points);
    });
  }, []);

  if (map.current && points) {
    renderClusterer(map.current, points);
  }

  return (
    <div className="pt-12 mt-1 bg-white">
      <Heading title="Офисы на карте" headingType="h3" className="mb-8 text-center" />
      <div id="map" className="h-[640px]" />
    </div>
  );
});
