import { JSX } from '@redneckz/uni-jsx';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { UniBlockProps } from '../../types';
import type { BonusContent } from './BonusContent';
import { Headline } from '../Headline/Headline';

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
          {bonusItems
            ? bonusItems.map((_, i) => {
                return (
                  <div
                    key={String(i)}
                    className="flex-grow w-[49%] border border-gray pl-9 pt-9 pr-6 pb-6 mb-[14px] mx-[7px] even:mr-0 odd:ml-0 last:odd:mx-0"
                  >
                    <div className="flex justify-between w-full">
                      <div className="mr-4">
                        <div className="text-h4">{_.title}</div>
                        <div className="text-xl-light mt-[14px] max-w-[488px]">{_.description}</div>
                      </div>
                      {_.bonusCount ? (
                        <div className="relative -bottom-3 h-auto flex items-end mt-14 shrink-0">
                          <span className="font-mohave -tracking-[5px] text-title-extra bg-clip-text text-transparent bg-green-to-yellow -mb-7">
                            {_.bonusCount}
                          </span>
                          <span className="text-h2 bg-clip-text text-transparent bg-green-to-yellow">
                            {_.bonusName}
                          </span>
                        </div>
                      ) : null}
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
