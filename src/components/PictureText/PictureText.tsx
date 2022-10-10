import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { PictureTextBenefit, PictureTextContent } from './PictureTextContent';

import { BlockVersion } from '../../model/BlockVersion';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';

export interface PictureTextProps extends PictureTextContent, UniBlockProps {}

const pictureTextStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const PictureText = JSX<PictureTextProps>(
  ({
    className = '',
    title,
    image,
    benefits,
    version = 'primary',
    directionRight = false,
    ...rest
  }) => {
    return (
      <BlockWrapper
        className={`relative font-sans p-14 ${pictureTextStyleMap[version]} ${className}`}
        {...rest}
      >
        <Heading headingType="h2" className="text-center" title={title} />
        <div className={'flex justify-center mt-9'}>
          {image?.src && <Img className={directionRight ? 'order-2 ml-6' : 'mr-6'} image={image} />}
          {benefits?.length ? (
            <div className="flex flex-col">
              {benefits.map((_, i) => renderBenefit(_, i, version))}
            </div>
          ) : null}
        </div>
      </BlockWrapper>
    );
  },
);

function renderBenefit(benefit: PictureTextBenefit, i: number, version: string) {
  return (
    <div key={String(i)} className="flex flex-row mb-8">
      {benefit.icon ? (
        <Img
          className="w-[48px] h-[48px] bg-main rounded-full box-border p-[12px]"
          image={benefit.icon}
          width="48"
          height="48"
          asSVG
        />
      ) : null}
      <div className="flex gap-1 flex-col h-full ml-5 max-w-[490px]">
        {benefit?.label ? (
          <div className={`text-xl m-0 ${version === 'primary' ? 'text-primary-text' : ''}`}>
            {benefit.label}
          </div>
        ) : null}
        {benefit?.description ? (
          <div className={`text-s ${version === 'primary' ? 'text-secondary-text' : ''}`}>
            {benefit.description}
          </div>
        ) : null}
      </div>
    </div>
  );
}
