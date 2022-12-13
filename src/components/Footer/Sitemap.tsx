import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { Fallback } from '../../model/Fallback';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { LinkProps } from '../../model/LinkProps';
import { projectSettings } from '../../ProjectSettings';
import { mergeTopItems } from '../../services/sitemap/mergeTopItems';
import type { SitemapDataProps, TopMenuItem } from '../../services/sitemap/SitemapProps';
import { useSWRResource } from '../../services/sitemap/useSWRResource';
import type { HandlerDecorator, Router } from '../ContentPage/ContentPageContext';

export interface SitemapProps extends UniBlockProps {
  items?: TopMenuItem[];
  fallback?: Fallback;
}

interface RenderColumnProps {
  menuItem: TopMenuItem;
  index: number;
  router: Router;
  handlerDecorator?: HandlerDecorator;
}

export const Sitemap = JSX<SitemapProps>(({ className = '', items, fallback, context }) => {
  const sitemap = useSWRResource<SitemapDataProps>(projectSettings.SITEMAP || 'sitemap', fallback);
  const mergedItems = mergeTopItems(sitemap.topItems, items);
  const linkParams = {
    router: context.useRouter(),
    handlerDecorator: context.handlerDecorator,
  };

  return (
    <div className={`flex flex-grow items-start justify-between gap-[54px] xl:gap-5 ${className}`}>
      {mergedItems?.map((_, i) => renderColumn({ menuItem: _, index: i, ...linkParams }))}
    </div>
  );
});

const renderColumn = ({ menuItem, index, router, handlerDecorator }: RenderColumnProps) => {
  const { text, href, items, target } = menuItem;

  return (
    <div key={String(index)} className="flex flex-col w-1/5 last:w-1/4 gap-3.5">
      <a
        className="block leading-5 text-l text-primary-text hover:text-primary-main no-underline"
        href={href}
        target={target || '_self'}
      >
        {text || `Раздел ${index}`}
      </a>
      {items?.map((_, i) => (
        <ColumnItem key={String(i)} {...useLink({ router, handlerDecorator }, _)} index={i} />
      ))}
    </div>
  );
};

interface ColumnItemProps extends LinkProps {
  index?: number;
}

const ColumnItem = JSX<ColumnItemProps>(({ text, href, target, index }) => (
  <a
    className="block text-l-light text-secondary-text hover:text-primary-main no-underline"
    href={href}
    target={target || '_self'}
  >
    {text || `Раздел ${index}`}
  </a>
));
