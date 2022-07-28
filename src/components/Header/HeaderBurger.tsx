import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import { SearchBar } from '../../ui-kit/SearchBar/SearchBar';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import type { SubMenuItem } from './HeaderContent';

export interface HeaderBurgerProps {
  context: ContentPageContext;
  onClick: () => void;
  burgerSubMenu?: SubMenuItem[];
  defaultLocation?: string;
  children?: any;
}

export const HeaderBurger = JSX<HeaderBurgerProps>(
  ({ context, burgerSubMenu, onClick, defaultLocation = '', children }) => {
    const [city, getCity] = context.useGeolocation(defaultLocation);

    return (
      <div className="absolute top-0 left-0 w-full h-full bg-white p-4">
        <button className="absolute top-4 right-4" onClick={onClick}>
          <Icon name="CloseIcon" width="24" height="24" asSVG />
        </button>
        <Button onClick={getCity} className="flex items-center text-sm text-secondary-text mb-4">
          <Icon name="GeolocationIcon" width="24" height="24" className="box-border mr-2" asSVG />
          {city}
        </Button>
        {children}
        <div className="mb-7">{burgerSubMenu?.map(renderBurgerSubMenuItem)}</div>
        <SearchBar context={context} className="grow" />
      </div>
    );
  },
);

const renderBurgerSubMenuItem = (menu: SubMenuItem, i: number) => {
  const { icon, href, text } = menu;
  return (
    <a key={`headerSubMenu-${i}`} href={href} className="flex text-sm mb-4">
      {icon ? <Icon className="pr-1" name={icon} width="24" height="24" asSVG /> : null}
      <span className="pl-0.5 font-medium">{text}</span>
    </a>
  );
};
