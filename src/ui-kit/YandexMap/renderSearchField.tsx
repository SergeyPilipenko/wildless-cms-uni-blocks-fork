import { Icon } from '../Icon/Icon';
import type { MockPoints } from './mockPoints';
import ymaps from 'yandex-maps';
const styles = {
  border: 'border border-transparent rounded-md',
  position: 'relative flex items-center',
  font: 'text-center font-sans',
  shadow: 'shadow-[0_4px_25px_rgba(0,0,0,0.07)]',
};

export const renderSearchField = (
  points: MockPoints[],
  yandexMaps: ymaps.Map,
  updatePointsToRender: (any: MockPoints[] | null) => void,
) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target?.value ? e.target?.value.toLowerCase() : '';
    if (value) {
      const searchResult = points.filter((_: MockPoints) => {
        const textLowerCase = _.text.toLowerCase();
        if (textLowerCase.indexOf(value) > -1) {
          return _;
        }

        return null;
      });
      updatePointsToRender(searchResult);
    } else {
      updatePointsToRender(null);
    }
  };

  return (
    <div className={`${Object.values(styles).join(' ')} bg-white py-3 pl-11 pr-4 w-full`}>
      <Icon
        name="LoupeIcon"
        iconVersion="black"
        width="20"
        height="20"
        asSVG
        className="absolute left-4"
      />
      <input
        type="text"
        placeholder="Введите адрес или метро"
        onChange={onChange}
        className="border-0 focus:border-0 outline-0 w-full"
      />
    </div>
  );
};
