import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Icon } from '../../ui-kit/Icon/Icon';
import { joinList } from '../../utils/joinList';
import type { Step, StepsBlockContent } from './StepsBlockContent';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

export const StepsBlock = JSX<StepsBlockProps>(
  ({ className = '', title, showLines = true, steps = [], anchor = null }) => {
    const shortGaps = steps.length > 3;

    return (
      <section
        className={[
          'box-border font-sans text-primary-text bg-white',
          shortGaps ? 'px-20' : 'px-[70px]',
          'py-[50px] flex flex-col items-center',
          className,
        ].join(' ')}
        id={anchor}
      >
        <Heading headingType="h2" className="max-w-[47rem] text-center" title={title} />
        {steps?.length ? (
          <div className={`box-border py-0.5 mb-0.5 ${title ? 'mt-9' : ''}`}>
            <div className="flex items-center px-[88px]">
              {joinList(
                <div
                  className={`h-0.5 w-full bg-secondary-light ${!showLines ? 'opacity-0' : ''}`}
                />,
              )(steps.map(renderStepIcon))}
            </div>
            <div className={`flex justify-between ${shortGaps ? 'gap-x-3' : 'gap-x-[101px]'}`}>
              {steps.map(renderStepTitle)}
            </div>
          </div>
        ) : null}
      </section>
    );
  },
);

const renderStepIcon = (step: Step, i: number) => {
  return (
    <div key={String(i)} className="flex flex-col items-center text-center relative">
      <div className="h-[100px] w-[100px] min-w-[100px] min-h-[100px] bg-secondary-light rounded-full p-[26px] box-border z-10">
        {(step.icon && <Icon name={step.icon} width="48" height="48" />) || (
          <span className="font-medium text-title-sm text-secondary-text">{i + 1}</span>
        )}
      </div>
    </div>
  );
};

const renderStepTitle = (step: Step, i: number) => {
  return (
    <div
      key={String(i)}
      className="flex flex-col items-center text-center relative w-[276px] whitespace-pre-line overflow-hidden"
    >
      {step.label && <div className="font-medium text-xl m-0 mt-4">{step.label}</div>}
      {step.description && (
        <div className={`font-normal text-sm text-secondary-text ${step.label ? 'mt-2' : 'mt-4'}`}>
          {step.description}
        </div>
      )}
    </div>
  );
};
