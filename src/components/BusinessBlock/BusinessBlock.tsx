import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BusinessBlockContent } from './BusinessBlockContent';
import { BusinessCard } from './BusinessCard';

export interface BusinessBlockProps extends BusinessBlockContent, UniBlockProps {}

export const BusinessBlock = JSX<BusinessBlockProps>((props) => {
  const { context, className = '', title, cards, ...rest } = props;

  return (
    <BlockWrapper
      className={`font-sans bg-white p-[50px] pb-9 ${className}`}
      context={context}
      {...rest}
    >
      <Heading headingType="h3" title={title} className="text-center mb-8" />
      <div className="flex gap-5">
        {cards?.length ? cards.map((_, i) => <BusinessCard key={String(i)} {..._} />) : null}
      </div>
    </BlockWrapper>
  );
});
