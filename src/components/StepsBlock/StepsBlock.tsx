import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { joinList } from '../../utils/joinList';
import type { Step, StepsBlockContent } from './StepsBlockContent';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

export const StepsBlock = JSX<StepsBlockProps>(
  ({ className = '', title, showLines = true, steps = [], button, anchor = null }) => {
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
          <div className={`box-border ${title ? 'mt-9' : ''}`}>
            <div className="flex items-center px-[88px]">
              {joinList(
                <div
                  className={`h-0.5 w-full bg-secondary-light ${!showLines ? 'opacity-0' : ''}`}
                />,
              )(steps.map(renderStepIcon))}
            </div>
            <div className={`flex justify-between ${shortGaps ? 'gap-x-3' : 'gap-x-[101px]'}`}>
              {steps.map((step, i) => renderStepTitle(step, i, Boolean(button?.text)))}
            </div>
          </div>
        ) : null}
        {button?.text ? (
          <Button
            className="box-border mt-8 py-3 h-12 w-full max-w-[240px]"
            version="primary"
            href="#"
          >
            {button.text}
          </Button>
        ) : null}
      </section>
    );
  },
);

const renderStepIcon = (step: Step, i: number) => {
  return (
    <div key={String(i)} className="flex flex-col items-center text-center relative">
      <div className="h-[100px] w-[100px] min-w-[100px] min-h-[100px] bg-secondary-light rounded-full p-[26px] box-border z-10">
        {(step.icon?.icon && <Img image={step.icon} width="48" height="48" />) || (
          <span className="font-normal text-title-sm text-secondary-text">{i + 1}</span>
        )}
      </div>
    </div>
  );
};

const renderStepTitle = (step: Step, i: number, isMainButton: boolean) => {
  return (
    <div
      key={String(i)}
      className="flex flex-col items-center justify-between text-center relative w-[276px] whitespace-pre-line overflow-hidden"
    >
      <div>
        {step.label && <div className="font-normal text-xl m-0 mt-4">{step.label}</div>}
        {step.description && (
          <div
            className={`font-light text-base text-secondary-text ${step.label ? 'mt-2' : 'mt-4'}`}
          >
            {step.description}
          </div>
        )}
      </div>
      {step?.button?.text && !isMainButton ? (
        <Button
          className="box-border mt-8 py-3 h-12 w-full max-w-[240px]"
          version="primary"
          href={step.button?.href}
        >
          {step.button.text}
        </Button>
      ) : null}
    </div>
  );
};
