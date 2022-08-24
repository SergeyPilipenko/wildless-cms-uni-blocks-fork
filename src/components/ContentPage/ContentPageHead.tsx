import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageMeta } from '../../types';

export interface ContentPageHeadProps {
  HeadComponent: <Props, Context, VNode>(props: Props, context?: Context) => VNode;
  data: ContentPageMeta;
}

export const ContentPageHead = JSX<ContentPageHeadProps>(({ HeadComponent, data, children }) => {
  const { title, main, og, twitter, jsonLd } = data;
  const { description, keywords, canonical, robots } = main || {};
  return (
    <HeadComponent>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(',')} />}
      {robots && <meta name="robots" content={robots.join(',')} />}
      {renderOpenGraph(og)}
      {renderTwitter(twitter)}
      {canonical && <link rel="canonical" href={canonical} />}
      {jsonLd && <script type="application/ld+json">{jsonLd}</script>}
      {children}
    </HeadComponent>
  );
});

function renderOpenGraph(og: Record<string, string> | undefined) {
  return og
    ? Object.entries(og).map(([key, value]) => (
        <meta key={key} property={`og:${key}`} content={value} />
      ))
    : null;
}

function renderTwitter(twitter: Record<string, string> | undefined) {
  return twitter
    ? Object.entries(twitter).map(([key, value]) => (
        <meta key={key} name={`twitter:${key}`} content={value} />
      ))
    : null;
}
