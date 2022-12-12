import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { SizeVersion } from '../../model/SizeVersion';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { checkIsIconRenderable } from '../../utils/checkIsIconRenderable';
import { getIconWithVersion } from '../../utils/getIconWithVersion';
import type { Step, StepsBlockContent } from './StepsBlockContent';
import { STEPS_BLOCK_STYLE_MAPS } from './StepsBlockStyleMaps';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

const STEPS_SIZE_MAP: Record<SizeVersion, string> = {
  normal: 'h-[70px] w-[70px] min-w-[70px] min-h-[70px]',
  small: 'h-[50px] w-[50px] min-w-[50px] min-h-[50px]',
};

const STEPS_TILE_DESCRIPTION_HEIGHT_MAP: Record<SizeVersion, string> = {
  normal: 'min-h-[70px]',
  small: 'min-h-[50px]',
};

export const StepsBlock = JSX<StepsBlockProps>(
  ({
    className,
    title,
    description,
    showLines = true,
    steps,
    size = 'normal',
    version = 'primary',
  }) => {
    const styleMap = STEPS_BLOCK_STYLE_MAPS[version];

    return (
      <section
        className={`box-border font-sans bg-white px-4 py-6 flex flex-col
        ${styleMap.background} ${styleMap.title} ${className || ''}`}
      >
        {title ? (
          <Heading headingType="h3" className={`text-center ${styleMap.title}`} title={title} />
        ) : null}
        {description ? (
          <p className={`text-m-light text-center ${styleMap.description} ${title ? 'mt-2' : ''}`}>
            {description}
          </p>
        ) : null}
        {steps?.length ? (
          <div className={`box-border py-0.5 mb-0.5 mt-5`}>
            <div className="flex flex-col justify-between gap-x-[101px]">
              {steps.map(renderStepTitle(size, version, showLines))}
            </div>
          </div>
        ) : null}
      </section>
    );
  },
);

const renderStepTitle =
  (size: SizeVersion, version: BlockVersion, showLines: boolean) =>
  (step: Step, i: number, steps: Step[]) => {
    const isLastStep = steps.length - 1 === i;
    const margin = size === 'normal' ? 'ml-[34px]' : 'ml-6';
    const styleMap = STEPS_BLOCK_STYLE_MAPS[version];

    return (
      <div key={String(i)}>
        <div className="flex flex-row text-center relative">
          <div className="overflow-hidden flex-shrink-0">
            {renderIconArea(size, version)(step, i)}
            {isLastStep ? null : (
              <div
                className={`min-h-8 h-full w-[2px] ${
                  showLines ? styleMap.iconConnector : ''
                } ${margin}`}
              />
            )}
          </div>
          <div
            className={`flex flex-col justify-center h-fit ${STEPS_TILE_DESCRIPTION_HEIGHT_MAP[size]}`}
          >
            {step.label ? (
              <div className="text-m-title-xs font-medium m-0 text-left mb-1">{step.label}</div>
            ) : null}
            {step.description ? (
              <div className={`text-s ${styleMap.description} text-left`}>{step.description}</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

const renderIconArea = (size: SizeVersion, version: BlockVersion) => (step: Step, i: number) => {
  const styleMap = STEPS_BLOCK_STYLE_MAPS[version];
  const iconAreaSize = STEPS_SIZE_MAP[size];

  const iconSize = size === 'normal' ? '38' : '27';
  const iconTextSize = size === 'normal' ? 'text-m-title' : 'text-m-title-xs';

  return (
    <div
      className={`${iconAreaSize} ${styleMap.iconBackground} rounded-full z-10 mr-3 flex justify-center content-center`}
    >
      <span className={`font-medium flex self-center ${styleMap.title} ${iconTextSize}`}>
        {checkIsIconRenderable(step?.icon) ? (
          <Img
            image={getIconWithVersion({ ...step.icon }, version)}
            width={iconSize}
            height={iconSize}
            asSVG
          />
        ) : (
          <span>{i + 1}</span>
        )}
      </span>
    </div>
  );
};
