// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useRef, useState } from '@redneckz/uni-jsx/lib/hooks';
import ymaps from 'yandex-maps';
import { renderClusterer } from './renderClusterer';
import { renderOpenMap } from './renderOpenMap';
import { renderSearchField } from './renderSearchField';
import { renderUserGeolocation } from './renderUserGeolocation';
import { useYandexMaps } from './useYandexMaps';
import { Icon } from '../Icon/Icon';
import { ZoomButton } from './ZoomButton';
import { MockPoints, mockPoints } from './mockPoints';

interface YandexMapProps {
  points: number[][];
  className?: string;
  zoom?: number;
  showSearchField?: boolean;
}

const FULLSCREEN_STYLES = {
  border: 'border border-transparent rounded-md ',
  position: 'absolute flex items-center justify-center',
  size: 'w-12 h-12',
  focus: 'focus:border-primary-focus focus:border',
  font: 'text-center font-sans',
  active: 'active:bg-primary-active',
  hover: 'hover:bg-primary-hover',
  other: 'select-none cursor-pointer',
};

// TODO: Поле для поиска: невыяснено среди каких данных делать поиск (искать в имени офиса, в адресе, метро и т.д.).
//       Сейчас реализован поиск среди тестовых данных
// TODO: Также выяснить что делать когда ничего не найдено
// TODO: На макетах также когда есть поле поиска нет кнопки открыть на карте.
export const YandexMap = JSX<YandexMapProps>(
  ({ points, className = '', zoom = 5, showSearchField = false }) => {
    const map = useRef<ymaps.Map | null>(null);

    const yandexMaps = useYandexMaps();

    const [isFullScreen, setIsFullScreen] = useState();
    const [pointsToRender, setPointsToRender] = useState<number[][]>(normalizePoints(mockPoints));

    const pointsCenter = getCenterPoint(points);

    useEffect(() => {
      if (!map?.current) {
        yandexMaps?.ready(() => {
          map.current = new yandexMaps.Map('map', {
            center: pointsCenter,
            zoom,
            controls: [],
            suppressMapOpenBlock: true,
          });
          renderClusterer(yandexMaps, map.current, pointsToRender);
        });
      }
    }, [yandexMaps, map, pointsToRender]);

    useEffect(() => {
      if (map.current && pointsToRender && yandexMaps) {
        const newPoints = pointsToRender.length < 1 ? normalizePoints(mockPoints) : pointsToRender;
        renderClusterer(yandexMaps, map.current, newPoints);
      }
    }, [map, pointsToRender, yandexMaps]);

    if (!yandexMaps) {
      return null;
    }

    const toggleFullscreen = () => {
      const container = map.current.container;
      if (!isFullScreen) {
        container.enterFullscreen();
      } else {
        container.exitFullscreen();
      }
      setIsFullScreen(container.isFullscreen());
    };

    const zIndex = isFullScreen ? 'z-[100000]' : 'z-10';

    const updatePointsToRender = (newPoints: MockPoints | null) => {
      if (newPoints) {
        const normalizedPoints = normalizePoints(newPoints);
        setPointsToRender(normalizedPoints);
      }
    };

    return (
      <div id="map" className={`${isFullScreen ? '' : 'relative'} w-full ${className}`}>
        <div className={`absolute flex left-2 top-4 w-[50%] ${zIndex}`}>
          {showSearchField
            ? renderSearchField(mockPoints, yandexMaps, updatePointsToRender)
            : renderOpenMap(pointsCenter)}
        </div>
        <div
          className={`${Object.values(FULLSCREEN_STYLES).join(
            ' ',
          )} ${zIndex} right-2 top-4 bg-white`}
          onClick={toggleFullscreen}
        >
          <Icon name="FullScreenIcon" width="16" height="16" />
        </div>
        <div
          className={`absolute right-2 top-52 z-10 w-12 overflow-hidden border border-transparent rounded-md ${zIndex}`}
        >
          <ZoomButton yandexMaps={map} />
          <ZoomButton yandexMaps={map} direction="out" />
        </div>
        {renderUserGeolocation(map.current, yandexMaps, `right-2 top-80 ${zIndex}`)}
      </div>
    );
  },
);

const getCenterPoint = (points: number[][]) => [
  getArraySumAndAverage(mapByIndex(points, 0)),
  getArraySumAndAverage(mapByIndex(points, 1)),
];

const mapByIndex = (arr: number[][], index: number) => arr.map((a) => a[index]);

const getArraySumAndAverage = (arr: number[][]) => arr.reduce((a, b) => a + b) / arr.length;

const normalizePoints = (points: number[][]) => (points ? points.map((_) => _.coords) : null);
