import { JSX } from '@redneckz/uni-jsx';
import { SizeVersion } from '../../model/SizeVersion';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { Step, StepsBlockContent } from './StepsBlockContent';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

export const StepsBlock = JSX<StepsBlockProps>(
  ({ className, title, description, steps, size = 'normal' }) => {
    return (
      <section
        className={`box-border font-sans text-primary-text bg-white px-4 py-6 flex flex-col ${
          className || ''
        }`}
      >
        {title && <Heading type="h3" className="text-center" text={title} />}
        {description && <p className={`text-m-md text-center ${title && 'mt-2'}`}>{description}</p>}
        {steps?.length ? (
          <div className={`box-border py-0.5 mb-0.5 mt-5`}>
            <div className="flex flex-col justify-between gap-x-[101px]">
              {steps.map((step, i) => renderStepTitle({ step, size, i, length: steps.length }))}
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
}

const renderStepTitle = (params: RenderStepTitleParams) => {
  const { step, size, i, length } = params;

  const isLastStep = length - 1 === i;
  const margin = size === 'normal' ? 'ml-[34px]' : 'ml-[24px]';

  return (
    <div key={String(i)}>
      <div key={String(i)} className="flex flex-row text-center relative">
        <div>
          {renderIconArea(step, size, i)}
          {!isLastStep && <div className={`min-h-8 h-full w-[2px] bg-secondary-light ${margin}`} />}
        </div>
        <div className="flex flex-col justify-center relative">
          {step.label && (
            <div className="font-medium text-m-title-xs m-0 text-left">{step.label}</div>
          )}
          {step.description && (
            <div
              className={`font-normal text-sm text-secondary-text text-left ${
                step.label ? 'mt-1' : ''
              }`}
            >
              {step.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const renderIconArea = (step: Step, size: SizeVersion, i: number) => {
  const iconAreaSize =
    size === 'normal'
      ? 'h-[70px] w-[70px] min-w-[70px] min-h-[70px]'
      : 'h-[50px] w-[50px] min-w-[50px] min-h-[50px]';

  const iconSize = size === 'normal' ? '38' : '27';
  const iconTextSize = size === 'normal' ? 'text-m-title' : 'text-m-title-xs';

  return (
    <div
      className={`${iconAreaSize} bg-secondary-light rounded-full z-10 mr-3 flex justify-center content-center`}
    >
      <span className={`font-medium text-secondary-text self-center ${iconTextSize}`}>
        {(step.icon && <Icon name={step.icon} width={iconSize} height={iconSize} />) || i + 1}
      </span>
    </div>
  );
};
