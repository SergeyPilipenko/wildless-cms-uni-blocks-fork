import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { LinkProps } from '../../model/LinkProps';
import type {
  ContentPageContext,
  HandlerDecorator,
  Router,
} from '../ContentPage/ContentPageContext';

const DOT_BG_COLORS_MAP: Record<BgColorVersion, string> = {
  'bg-white': 'bg-primary-text',
  transparent: 'bg-white',
};

interface DropdownMenuProps extends UniBlockProps {
  menuVisible: boolean;
  toggleMenu: () => void;
  menuItems: LinkProps[];
  bgColor?: BgColorVersion;
  context: ContentPageContext;
  activeSubItem?: LinkProps;
}

export const DropdownMenu = JSX<DropdownMenuProps>((props) => {
  const { menuVisible, toggleMenu, menuItems, bgColor, context, activeSubItem } = props;

  const { useRouter, handlerDecorator } = context;
  const router = useRouter();

  return (
    <div
      className={`absolute w-52 -top-4 right-0 pt-4 z-40 ${
        menuVisible ? 'bg-white rounded-md shadow-blue-gray/24' : ''
      }`}
    >
      <button
        className="flex justify-between items-center cursor-pointer h-6 ml-6"
        onClick={toggleMenu}
        aria-label={`${menuVisible ? 'Скрыть другие разделы' : 'Показать другие разделы'}`}
      >
        {Array(3).fill(bgColor).map(renderDot)}
      </button>
      <div
        className={`flex flex-col rounded-md bg-white p-6 pb-2 ${menuVisible ? '' : 'hidden'}`}
        aria-hidden={!menuVisible}
      >
        {renderDotsSubMenuItems({ menuItems, router, handlerDecorator, activeSubItem })}
      </div>
    </div>
  );
});

type DotsSubMenuItemsProps = {
  menuItems: LinkProps[];
  router: Router;
  handlerDecorator: HandlerDecorator | undefined;
  activeSubItem?: LinkProps;
};

const renderDotsSubMenuItems = ({
  menuItems,
  router,
  handlerDecorator,
  activeSubItem,
}: DotsSubMenuItemsProps) => {
  const isActive = (item: LinkProps) => item === activeSubItem;

  return menuItems?.map((_) => (
    <a
      key={_.href}
      {...useLink({ router, handlerDecorator }, _)}
      className={`text-l-light pb-4 hover:text-primary-main ${
        isActive(_) ? 'text-primary-main' : ''
      }`}
    >
      {_.text}
    </a>
  ));
};

const renderDot = (bgColor: BgColorVersion, i: number) => (
  <div key={String(i)} className={`w-[3px] h-[3px] rounded mr-1 ${DOT_BG_COLORS_MAP[bgColor]}`} />
);
