const styles = {
  focus: 'focus:border-primary-focus focus:border',
  hover: 'hover:bg-primary-hover',
  active: 'active:bg-primary-active',
  border: 'border border-transparent rounded-md',
  position: 'flex items-center justify-center',
  font: 'text-center font-sans',
};

export const renderOpenMap = (pointsCenter: number[]) => {
  const getYandexMapUrl = () => {
    return `https://yandex.ru/maps/?ll=${[pointsCenter[1], pointsCenter[0]]}&z=10&l=map`;
  };

  return (
    <a
      className={`select-none cursor-pointer px-9 h-12 bg-white bg-primary-main text-white ${Object.values(
        styles,
      ).join(' ')}`}
      href={getYandexMapUrl()}
      target="_blank"
    >
      Открыть на карте
    </a>
  );
};
