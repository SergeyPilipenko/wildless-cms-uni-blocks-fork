import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { checkIsIconRenderable } from '../../utils/checkIsIconRenderable';
import { joinList } from '../../utils/joinList';
import type { Step, StepsBlockContent } from './StepsBlockContent';
import type { StyleType } from './StepsBlockStyleMaps';
import { getStyleMap } from './StepsBlockStyleMaps';

import { BlockWrapper } from '../../ui-kit/BlockWrapper';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

export const StepsBlock = JSX<StepsBlockProps>(
  ({
    className = '',
    title,
    showLines = true,
    steps = [],
    button,
    version = 'primary',
    ...rest
  }) => {
    const styleMap = getStyleMap(version);
    const shortGaps = steps.length > 3;
    const stepGap = shortGaps ? 'gap-x-3' : 'gap-x-[101px]';
    const lineOpacity = showLines ? '' : 'opacity-0';

    return (
      <BlockWrapper
        className={[
          'box-border font-sans text-primary-text bg-white',
          shortGaps ? 'px-20' : 'px-[70px]',
          'py-[50px] flex flex-col items-center',
          styleMap.background,
          styleMap.title,
          className,
        ].join(' ')}
        {...rest}
      >
        {title ? (
          <Heading
            headingType="h3"
            as="h2"
            className="max-w-[47rem] text-center mb-9"
            title={title}
          />
        ) : null}
        {steps?.length ? (
          <div className="box-border">
            <div className="flex items-center px-[88px]">
              {joinList(<div className={`h-0.5 w-full bg-secondary-light ${lineOpacity}`} />)(
                steps.map(renderStepIcon(styleMap)),
              )}
            </div>
            <div className={`flex justify-between whitespace-pre-line ${stepGap}`}>
              {steps.map(renderStepTitle(styleMap, Boolean(button?.text)))}
            </div>
          </div>
        ) : null}
        {button?.text ? (
          <Button className="mt-8 w-full max-w-[240px]" version="primary" {...button} />
        ) : null}
      </BlockWrapper>
    );
  },
);

const renderStepIcon =
  (styleMap: StyleType) =>
  ({ icon }: Step, i: number) => {
    return (
      <div key={String(i)} className="flex flex-col items-center text-center">
        <div
          className={`h-[100px] w-[100px] min-w-[100px] min-h-[100px] rounded-full p-[26px] box-border z-10 flex justify-center items-center ${styleMap.iconBackground}`}
        >
          {checkIsIconRenderable(icon) ? (
            <Img image={icon} width="48" height="48" asSVG />
          ) : (
            <span className={`text-h4 ${styleMap.iconText}`}>{i + 1}</span>
          )}
        </div>
      </div>
    );
  };

const renderStepTitle = (styleMap: StyleType, isMainButton: boolean) => (step: Step, i: number) => {
  return (
    <div
      key={String(i)}
      className="flex flex-col items-center justify-between text-center w-[276px] overflow-hidden"
    >
      <div>
        {step.label ? <div className="text-xl m-0 mt-4">{step.label}</div> : null}
        {step.description ? (
          <div className={`text-l ${styleMap.description} ${step.label ? 'mt-2' : 'mt-4'}`}>
            {step.description}
          </div>
        ) : null}
      </div>
      {step?.button?.text && !isMainButton ? (
        <Button
          className="mt-8 py-4 w-full max-w-[240px]"
          version="primary"
          href={step?.button?.href}
        >
          {step.button.text}
        </Button>
      ) : null}
    </div>
  );
};
