import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { isTopItemActive } from '../../services/sitemap/isTopItemActive';
import { mergeTopItems } from '../../services/sitemap/mergeTopItems';
import { useSitemap } from '../../services/sitemap/useSitemap';
import type { Fallback } from '../../model/Fallback';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Logo } from '../../ui-kit/Logo/Logo';
import { TopItem } from '../../ui-kit/TopItem/TopItem';
import type { HeaderContent } from './HeaderContent';
import { HeaderSecondaryMenu } from './HeaderSecondaryMenu';
import { HeaderSubMenu } from './HeaderSubMenu';

const BORDER_COLORS: Record<BgColorVersion, string> = {
  'bg-white': 'bg-main-divider',
  transparent: 'bg-main-divider opacity-30',
};

export interface HeaderProps extends HeaderContent, UniBlockProps {}

export const Header = JSX<HeaderProps>(
  ({
    className = '',
    defaultLocation = 'Москва',
    showSubMenu = true,
    bgColor = 'bg-white',
    context,
    topItems,
    logo,
    page,
    ...rest
  }) => {
    const router = context.useRouter();
    const fallback: Fallback | undefined = page?.fallback;
    const sitemap = useSitemap(fallback);
    const { handlerDecorator } = context;

    const mergedItems = mergeTopItems(sitemap.topItems, topItems);
    const [firstPortal] = mergedItems;
    const activeTopItem = showSubMenu
      ? mergedItems.find(isTopItemActive(router)) || firstPortal // Если по слагу невозможно понять к какому подпорталу этот слаг относиться, то выбираем первый подпортал.
      : null;
    const topMenu = mergedItems.map((_, i) => (
      <TopItem
        key={String(i)}
        active={_ === activeTopItem}
        {...useLink({ router, handlerDecorator }, _)}
        aria-label={_.text}
        bgColor={bgColor}
      />
    ));

    return (
      <BlockWrapper
        tag="header"
        context={context}
        className={`pt-6 px-20 ${bgColor} ${className} ${
          showSubMenu && activeTopItem?.items?.length ? 'pb-4' : 'pb-5'
        }`}
        {...rest}
      >
        <div className="container">
          <div className="flex items-center">
            <Logo className="mr-8" bgColor={bgColor} logo={logo} />
            {topMenu}
            <HeaderSecondaryMenu
              className="ml-auto"
              defaultLocation={defaultLocation}
              bgColor={bgColor}
            />
          </div>
          <div className={`mt-6 h-[1px] ${BORDER_COLORS[bgColor]}`} />
          {showSubMenu && activeTopItem?.items?.length ? (
            <HeaderSubMenu context={context} subItems={activeTopItem.items} bgColor={bgColor} />
          ) : null}
        </div>
      </BlockWrapper>
    );
  },
);
