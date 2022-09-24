import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../../ui-kit/Img/Img';
import { SearchBar } from '../../ui-kit/SearchBar/SearchBar';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import type { DispositionItem } from './HeaderContent';

export interface HeaderBurgerProps {
  context: ContentPageContext;
  onClick: () => void;
  burgerSubMenu?: DispositionItem[];
  defaultLocation?: string;
  children?: any;
}

export const HeaderBurger = JSX<HeaderBurgerProps>(
  ({ context, burgerSubMenu, onClick, defaultLocation = '', children }) => {
    const [city, getCity] = context.useGeolocation(defaultLocation);

    return (
      <div className="absolute top-0 left-0 w-full h-full bg-white p-4 box-border z-20">
        <button
          className="absolute top-4 right-4 border-none bg-transparent cursor-pointer"
          onClick={onClick}
        >
          <Img image="CloseIcon" width="24" height="24" asSVG />
        </button>
        <button
          onClick={getCity}
          className="flex items-center text-sm text-secondary-text p-0 mb-4 bg-transparent cursor-pointer"
        >
          <Img
            image="GeolocationIcon"
            width="20"
            height="20"
            className="text-primary-main box-border mr-2"
            asSVG
          />
          {city}
        </button>
        {children}
        <div className="mb-7">{burgerSubMenu?.map(renderBurgerSubMenuItem)}</div>
        <SearchBar context={context} className="grow" />
      </div>
    );
  },
);

const renderBurgerSubMenuItem = (menu: DispositionItem, i: number) => {
  const { icon, href, text } = menu;

  return (
    <a key={`headerSubMenu-${i}`} href={href} className="flex text-sm mb-4 hover:text-primary-main">
      {icon ? (
        <Img className="text-primary-main pr-1" image={icon} width="24" height="24" asSVG />
      ) : null}
      <span className="pl-0.5 font-medium">{text}</span>
    </a>
  );
};
