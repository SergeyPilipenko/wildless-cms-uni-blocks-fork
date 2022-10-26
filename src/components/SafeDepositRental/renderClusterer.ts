declare let ymaps: any;

export function renderClusterer(Map, points) {
  Map.geoObjects.removeAll();

  const pointsList = points;

  const clusterIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="margin-top: -3px;">{{properties.geoObjects.length}}</div>',
  );

  const clusterer = new ymaps.Clusterer({
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
  });

  const geoObjects: any = [];

  for (let i = 0, len = pointsList.length; i < len; i++) {
    geoObjects[i] = new ymaps.Placemark(pointsList[i], null, {
      iconLayout: 'default#image',
      iconImageHref: 'icons/MapMarkerSingleIcon.svg',
      iconImageSize: [78, 84],
      iconImageOffset: [-35, -50],
    });
  }

  clusterer.add(geoObjects);

  Map.geoObjects.add(clusterer);

  Map.setBounds(ymaps.util.bounds.fromPoints(pointsList)).then(() => {
    if (Map.getZoom() > 10) {
      Map.setZoom(10);
    }
  });
}
