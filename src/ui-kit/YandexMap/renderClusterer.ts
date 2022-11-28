// TODO: Fix
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import ymaps from 'yandex-maps';

export function renderClusterer(yandexMaps: typeof ymaps, map: ymaps.Map, points: number[][]) {
  map.geoObjects.removeAll();

  const clusterIconContentLayout = yandexMaps.templateLayoutFactory.createClass(
    '<div style="margin-top: -3px;">{{properties.geoObjects.length}}</div>',
  );

  const clusterer = new yandexMaps.Clusterer({
    clusterIcons: [
      {
        href: 'icons/MapMarkerClusterIcon.svg',
        size: [78, 84],
        offset: [-35, -50],
      },
    ],
    clusterIconContentLayout,
    clusterHideIconOnBalloonOpen: false,
    geoObjectHideIconOnBalloonOpen: false,
  } as ymaps.IClustererOptions);

  const geoObjects = points.map(
    (point) =>
      new yandexMaps.Placemark(
        point,
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: 'icons/MapMarkerSingleIcon.svg',
          iconImageSize: [78, 84],
          iconImageOffset: [-35, -50],
        },
      ),
  );

  clusterer.add(geoObjects);

  map.geoObjects.add(clusterer as any);

  // TODO: Fix
  // @ts-ignore
  map.setBounds(yandexMaps.util.bounds.fromPoints(points)).then(() => {
    if (map.getZoom() > 10) {
      map.setZoom(10);
    }
  });
}
