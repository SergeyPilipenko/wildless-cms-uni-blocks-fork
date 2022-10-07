import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { LinkProps } from '../../model/LinkProps';
import { mergeTopItems } from '../../services/sitemap/mergeTopItems';
import type { TopMenuItem } from '../../services/sitemap/SitemapProps';
import { useSitemap } from '../../services/sitemap/useSitemap';
import type { UniBlockProps } from '../../types';

export interface SitemapProps extends UniBlockProps {
  items?: TopMenuItem[];
}

export const Sitemap = JSX<SitemapProps>(({ className = '', items, context }) => {
  const sitemap = useSitemap(context.useAsyncData);
  const mergedItems = mergeTopItems(sitemap.topItems, items);
  const linkParams = {
    router: context.useRouter(),
    handlerDecorator: context.handlerDecorator,
  };

  return (
    <div className={`flex items-start justify-between gap-[54px] xl:gap-5 ${className}`}>
      {mergedItems?.map((_, i) => renderColumn(_, i, linkParams))}
    </div>
  );
});

const renderColumn = (c: TopMenuItem, index: number, { router, handlerDecorator }) => {
  const { text, href, items, target } = c;

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
