import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { PictureTextContent } from './PictureTextContent';
import type { BlockVersion } from '../../model/BlockVersion';
import type { BenefitItemProps } from '../../ui-kit/BenefitItem/BenefitItemProps';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Img } from '../../ui-kit/Img/Img';
import { BenefitItem } from '../../ui-kit/BenefitItem/BenefitItem';
import { Headline } from '../Headline/Headline';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { VersionStyleMap } from '../../model/BlockVersion';

export interface PictureTextProps extends PictureTextContent, UniBlockProps {}

export const PictureText = JSX<PictureTextProps>(
  ({
    className = '',
    context,
    title,
    description,
    image,
    benefits,
    version = 'primary',
    sum,
    monthLimit,
    directionRight = false,
    ...rest
  }) => {
    return (
      <BlockWrapper
        className={`relative font-sans p-14 ${VersionStyleMap[version]} ${className}`}
        context={context}
        {...rest}
      >
        <Headline
          context={context}
          className="!p-0"
          title={title}
          description={description}
          headlineVersion="M"
          bgColorHeadline={version}
          align="center"
        />
        <div className={'flex justify-center gap-[122px] mt-[30px]'}>
          {image?.src && <Img className={directionRight ? 'order-2 ml-6' : 'mr-6'} image={image} />}
          <div className="w-[558px] m-auto">
            {benefits?.length ? (
              <div className="flex flex-col gap-4">{benefits.map(renderBenefit(version))}</div>
            ) : null}
            {renderInsuranceSumMonth(sum, monthLimit)}
          </div>
        </div>
      </BlockWrapper>
    );
  },
);

const renderBenefit = (version: BlockVersion) => (benefit: BenefitItemProps, i: number) =>
  (
    <BenefitItem
      key={String(i)}
      icon={benefit.icon}
      label={benefit.label}
      description={benefit.description}
      version={version}
    />
  );

function renderInsuranceSumMonth(sum?: number, monthLimit?: number) {
  return sum || monthLimit ? (
    <div className="bg-main-divider rounded-md flex mt-7 gap-6 px-5 py-4">
      {Number.isFinite(sum) ? renderValueBlock('Страховая сумма:', sum, Boolean(monthLimit)) : null}
      {Number.isFinite(monthLimit)
        ? renderValueBlock('Ежемесячный лимит:', monthLimit, Boolean(sum))
        : null}
    </div>
  ) : null;
}

function renderValueBlock(title: string, sum = 0, isAnotherBlock = false) {
  const widthStyle = isAnotherBlock ? 'w-fit' : 'w-full';

  return (
    <div className={`flex justify-between items-center gap-2 w-full ${widthStyle}`}>
      <span className="text-secondary-text text-l-light">{title}</span>
      <span className="text-primary-main text-h6">{addSpacesBetweenNumbers(sum)} ₽</span>
    </div>
  );
}
