import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Img } from '../../ui-kit/Img/Img';
import { Headline } from '../Headline/Headline';
import type { BonusContent, BonusCountDef, BonusImageDef } from './BonusContent';

export interface BonusProps extends BonusContent, UniBlockProps {}

export const Bonus = JSX<BonusProps>((props) => {
  const { context, className = '', title, description, bonusItems, ...rest } = props;

  return (
    <BlockWrapper
      className={`font-sans bg-white p-[50px] pb-9 ${className}`}
      context={context}
      {...rest}
    >
      <div className="container">
        <Headline
          context={context}
          className="!p-0"
          title={title}
          description={description}
          headlineVersion="M"
          align="center"
        />
        <div className="flex flex-wrap w-full mt-9">
          {bonusItems?.length
            ? bonusItems.map((_, i) => {
                return (
                  <div
                    key={String(i)}
                    className="flex-grow w-[49%] border border-gray pl-9 pt-9 pr-6 pb-6 mb-3 mx-2 even:mr-0 odd:ml-0 last:odd:mx-0"
                  >
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-between mr-4">
                        <div>
                          <div className="text-h4">{_.title}</div>
                          <div className="text-xl-light mt-2 max-w-[488px]">{_.description}</div>
                        </div>
                        {_?.buttons?.length ? (
                          <ButtonSection context={context} buttons={_?.buttons} />
                        ) : null}
                      </div>
                      {_.bonusItemContent?.bonusType
                        ? renderBonusItemContent(_.bonusItemContent)
                        : null}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </BlockWrapper>
  );
});

const renderBonusItemContent = (bonusItemContent: BonusImageDef | BonusCountDef) => (
  <div>
    {bonusItemContent.bonusType === 'count'
      ? renderBonusCount(bonusItemContent as BonusCountDef)
      : renderBonusImage(bonusItemContent as BonusImageDef)}
  </div>
);

const renderBonusCount = (_: BonusCountDef) => (
  <div className="relative -bottom-3 h-auto flex items-end mt-14 shrink-0">
    {_.bonusCount ? (
      <span className="font-mohave -tracking-[5px] text-title-extra bg-clip-text text-transparent bg-green-to-yellow -mb-7">
        {_.bonusCount}
      </span>
    ) : null}
    {_.bonusName ? (
      <span className="text-h2 bg-clip-text text-transparent bg-green-to-yellow">
        {_.bonusName}
      </span>
    ) : null}
  </div>
);

const renderBonusImage = (_: BonusImageDef) =>
  _.image ? (
    <Img className={`w-[50px] h-[50px] min-w-[50px] p-3 rounded-full`} image={_.image} />
  ) : null;
