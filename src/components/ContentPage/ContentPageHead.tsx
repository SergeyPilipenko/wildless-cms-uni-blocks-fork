import { JSX } from '@redneckz/uni-jsx';
import { VNode as _VNode } from '../../model/VNode';
import type { ContentPageMeta } from '../../types';
export interface ContentPageHeadProps {
  HeadComponent: <Props, Context, VNode = _VNode>(props: Props, context?: Context) => VNode;
  data: ContentPageMeta;
}

export const ContentPageHead = JSX<ContentPageHeadProps>(({ HeadComponent, data, children }) => {
  const { title, main, og, twitter, jsonLd } = data;
  const { description, keywords, canonical, robots } = main || {};

  return (
    <HeadComponent>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords.join(',')} /> : null}
      {robots ? <meta name="robots" content={robots.join(',')} /> : null}
      {renderOpenGraph(og)}
      {renderTwitter(twitter)}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {jsonLd ? <script type="application/ld+json">{jsonLd}</script> : null}
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
