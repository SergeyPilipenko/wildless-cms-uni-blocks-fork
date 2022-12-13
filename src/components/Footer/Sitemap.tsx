import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { Fallback } from '../../model/Fallback';
import type { LinkProps } from '../../model/LinkProps';
import { projectSettings } from '../../ProjectSettings';
import { mergeTopItems } from '../../services/sitemap/mergeTopItems';
import type { SitemapDataProps, TopMenuItem } from '../../services/sitemap/SitemapProps';
import { useSWRResource } from '../../services/sitemap/useSWRResource';

export interface SitemapProps {
  className?: string;
  items?: TopMenuItem[];
  fallback?: Fallback;
}

export const Sitemap = JSX<SitemapProps>(({ className = '', items, fallback }) => {
  const link = useLink();

  const sitemap = useSWRResource<SitemapDataProps>(projectSettings.SITEMAP || 'sitemap', fallback);
  const mergedItems = mergeTopItems(sitemap.topItems, items);

  return (
    <div className={`flex flex-grow items-start justify-between gap-[54px] xl:gap-5 ${className}`}>
      {mergedItems?.map((_, i) => renderColumn(link(_), i))}
    </div>
  );
});

const renderColumn = (menuItem: TopMenuItem & { onClick: () => void }, index: number) => {
  const { text, items, href, target, onClick } = menuItem;

  return (
    <div key={String(index)} className="flex flex-col w-1/5 last:w-1/4 gap-3.5">
      <a
        className="block leading-5 text-l text-primary-text hover:text-primary-main no-underline"
        href={href}
        target={target || '_self'}
        onClick={onClick}
      >
        {text || `Раздел ${index}`}
      </a>
      {items?.map((_, i) => (
        <ColumnItem key={String(i)} {..._} index={i} />
      ))}
    </div>
  );
};

interface ColumnItemProps extends LinkProps {
  index?: number;
}

const ColumnItem = JSX<ColumnItemProps>(({ text, index, ...rest }) => {
  const link = useLink();
  const { href, target, onClick } = link(rest);

  return (
    <a
      className="block text-l-light text-secondary-text hover:text-primary-main no-underline"
      href={href}
      target={target || '_self'}
      onClick={onClick}
    >
      {text || `Раздел ${index}`}
    </a>
  );
});
