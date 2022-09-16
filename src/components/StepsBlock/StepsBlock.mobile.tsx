import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { SizeVersion } from '../../model/SizeVersion';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { Step, StepsBlockContent } from './StepsBlockContent';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

type StyleType = {
  background: string;
  title: string;
  description: string;
  iconBackground: string;
  iconConnector: string;
};

const STEPS_SIZE_MAP: Record<SizeVersion, string> = {
  normal: 'h-[70px] w-[70px] min-w-[70px] min-h-[70px]',
  small: 'h-[50px] w-[50px] min-w-[50px] min-h-[50px]',
};

const STEPS_TILE_DESCRIPTION_HEIGHT_MAP: Record<SizeVersion, string> = {
  normal: 'min-h-[70px]',
  small: 'min-h-[50px]',
};

const STEPS_BLOCK_STYLE_MAPS: Record<BlockVersion, StyleType> = {
  primary: {
    background: 'bg-white',
    title: 'text-primary-text',
    description: 'text-secondary-text',
    iconBackground: 'bg-secondary-light',
    iconConnector: 'bg-secondary-light',
  },
  secondary: {
    background: 'bg-primary-main',
    title: 'text-white',
    description: 'text-white/80',
    iconBackground: 'bg-white/30',
    iconConnector: 'bg-white',
  },
};

const styleMaps = (version: BlockVersion): StyleType => STEPS_BLOCK_STYLE_MAPS[version];

export const StepsBlock = JSX<StepsBlockProps>(
  ({ className, title, description, steps, size = 'normal', version = 'primary' }) => {
    const style = styleMaps(version);
    return (
      <section
        className={`box-border font-sans bg-white px-4 py-6 flex flex-col
        ${style.background} ${style.title} ${className || ''}`}
      >
        {title ? (
          <Heading headingType="h3" className={`text-center ${style.title}`} title={title} />
        ) : null}
        {description ? (
          <p className={`text-m-md text-center ${style.description} ${title && 'mt-2'}`}>
            {description}
          </p>
        ) : null}
        {steps?.length ? (
          <div className={`box-border py-0.5 mb-0.5 mt-5`}>
            <div className="flex flex-col justify-between gap-x-[101px]">
              {steps.map((step, i) =>
                renderStepTitle({ step, size, i, length: steps.length, version: version }),
              )}
            </div>
          </div>
        ) : null}
      </section>
    );
  },
);

interface RenderStepTitleParams {
  step: Step;
  size: SizeVersion;
  i: number;
  length: number;
  version: BlockVersion;
}

const renderStepTitle = (params: RenderStepTitleParams) => {
  const { step, size, i, length, version } = params;
  const isLastStep = length - 1 === i;
  const margin = size === 'normal' ? 'ml-[34px]' : 'ml-[24px]';
  const style = styleMaps(version);

  return (
    <div key={String(i)}>
      <div key={String(i)} className="flex flex-row text-center relative">
        <div className="overflow-hidden">
          {renderIconArea(params)}
          {isLastStep ? null : (
            <div className={`min-h-8 h-full w-[2px] ${style.iconConnector} ${margin}`} />
          )}
        </div>
        <div
          className={`flex flex-col justify-center h-fit ${STEPS_TILE_DESCRIPTION_HEIGHT_MAP[size]}`}
        >
          {step.label ? (
            <div className="font-medium text-m-title-xs m-0 text-left">{step.label}</div>
          ) : null}
          {step.description ? (
            <div
              className={`font-normal text-sm ${style.description} text-left ${
                step.label ? 'mt-1' : ''
              }`}
            >
              {step.description}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const renderIconArea = (params: RenderStepTitleParams) => {
  const { step, size, i, version } = params;
  const style = styleMaps(version);
  const iconAreaSize = STEPS_SIZE_MAP[size];

  const iconSize = size === 'normal' ? '38' : '27';
  const iconTextSize = size === 'normal' ? 'text-m-title' : 'text-m-title-xs';

  return (
    <div
      className={`${iconAreaSize} ${style.iconBackground} rounded-full z-10 mr-3 flex justify-center content-center`}
    >
      <span className={`font-medium flex self-center ${style.title} ${iconTextSize}`}>
        {(step.icon?.icon && <Img image={step.icon} width={iconSize} height={iconSize} asSVG />) ||
          i + 1}
      </span>
    </div>
  );
};
