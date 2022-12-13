import { JSX } from '@redneckz/uni-jsx';
import { Router, useRouter } from '../../hooks/useRouter';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { TopMenuItem } from '../../model/SitemapProps';
import { projectSettings } from '../../ProjectSettings';
import { isTopItemActive } from '../../services/sitemap/isTopItemActive';
import type { SitemapDataProps } from '../../services/sitemap/SitemapProps';
import { useSWRResource } from '../../services/sitemap/useSWRResource';
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
    bgColor = 'bg-white',
    className = '',
    defaultLocation = 'Москва',
    logo,
    showSubMenu = true,
    ...rest
  }) => {
    const router = useRouter();

    const { topItems } = useSWRResource<SitemapDataProps>(
      projectSettings.SITEMAP || 'sitemap',
      rest.page?.fallback,
    );

    const activeTopItem = showSubMenu ? getActiveItem(topItems, router) : null;

    const topMenu = topItems?.map((_, i) => (
      <TopItem
        key={String(i)}
        active={_ === activeTopItem}
        aria-label={_.text}
        bgColor={bgColor}
        {..._}
      />
    ));

    return (
      <BlockWrapper
        tag="header"
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
            <HeaderSubMenu subItems={activeTopItem.items} bgColor={bgColor} />
          ) : null}
        </div>
      </BlockWrapper>
    );
  },
);

const getActiveItem = (topItems: TopMenuItem[] | undefined, router: Router) => {
  const [firstPortal] = topItems || [];

  // Если по слагу невозможно понять к какому подпорталу этот слаг относиться, то выбираем первый подпортал.
  return topItems?.find(isTopItemActive(router)) || firstPortal;
};
