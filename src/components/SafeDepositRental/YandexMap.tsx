import { JSX } from '@redneckz/uni-jsx';
import { useEffect } from '@redneckz/uni-jsx/lib/hooks';
import { Heading } from '../../ui-kit/Heading/Heading';
import { renderClusterer } from './renderClusterer';

declare let ymaps: any;

interface YandexMapProps {
  points: number[][];
}

let Map = null;

export const YandexMap = JSX<YandexMapProps>(({ points }) => {
  useEffect(() => {
    ymaps.ready(() => {
      Map = new ymaps.Map('map', {
        center: points[0],
        zoom: 10,
      });
      renderClusterer(Map, points);
    });
  }, []);

  if (Map && points) {
    renderClusterer(Map, points);
  }

  return (
    <div className="pt-12 mt-1 bg-white">
      <Heading title="Офисы на карте" headingType="h3" className="mb-8 text-center" />
      <div id="map" className="h-[640px]" />
    </div>
  );
});
