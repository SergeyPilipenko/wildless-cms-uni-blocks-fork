import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../types';
import type { HandlerDecorator, Router } from '../ContentPage/ContentPageContext';
import type { BlockVersion } from '../../model/BlockVersion';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { checkIsIconRenderable } from '../../utils/checkIsIconRenderable';
import { joinList } from '../../utils/joinList';
import type { Step, StepsBlockContent } from './StepsBlockContent';
import type { StyleType } from './StepsBlockStyleMaps';
import { STEPS_BLOCK_STYLE_MAPS } from './StepsBlockStyleMaps';

import { BlockWrapper } from '../../ui-kit/BlockWrapper';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

const getLineOpacity = (showLines: boolean) => (showLines ? '' : 'opacity-0');

export const StepsBlock = JSX<StepsBlockProps>(
  ({
    className = '',
    showLines = true,
    steps = [],
    button,
    version = 'primary',
    context,
    ...rest
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    const { title } = rest;
    const styleMap = STEPS_BLOCK_STYLE_MAPS[version];
    const shortGaps = steps.length > 3;
    const lineOpacity = getLineOpacity(showLines);
    const titleMargin = title ? 'mt-9' : '';

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
        context={context}
        {...rest}
      >
        {title ? (
          <Heading headingType="h2" className="max-w-[752px] text-center" title={title} />
        ) : null}
        {steps?.length ? (
          <div className={`box-border ${titleMargin}`}>
            <div className="flex items-center px-[88px]">
              {joinList(<div className={`h-0.5 w-full bg-secondary-light ${lineOpacity}`} />)(
                steps.map(renderStepIcon(styleMap)),
              )}
            </div>
            <div className={`flex justify-between ${shortGaps ? 'gap-x-3' : 'gap-x-[101px]'}`}>
              {steps.map(
                renderStepTitle({
                  styleMap,
                  isMainButton: Boolean(button?.text),
                  version,
                  router,
                  handlerDecorator,
                }),
              )}
            </div>
          </div>
        ) : null}
        {button?.text ? (
          <Button
            className="mt-8 w-full max-w-[240px]"
            version="primary"
            {...useLink({ router, handlerDecorator }, button)}
          />
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
          className={`h-[100px] w-[100px] min-w-[100px] min-h-[100px] rounded-full p-[26px] box-border z-10 
            ${styleMap.iconBackground} ${styleMap.title}`}
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

const renderStepTitle =
  ({
    styleMap,
    isMainButton,
    version,
    router,
    handlerDecorator,
  }: {
    styleMap: StyleType;
    isMainButton: boolean;
    version: BlockVersion;
    router: Router;
    handlerDecorator?: HandlerDecorator;
  }) =>
  (step: Step, i: number) => {
    const additionalMarginClass = step?.label ? 'mt-2' : 'mt-4';

    return (
      <div
        key={String(i)}
        className="flex flex-col items-center justify-between text-center relative w-[276px] 
        whitespace-pre-line overflow-hidden"
      >
        {step?.label ? (
          <div className="font-normal text-xl-light m-0 mt-4">{step.label}</div>
        ) : null}
        {step?.description ? (
          <div className={`font-light text-base ${styleMap.description} ${additionalMarginClass}`}>
            {step.description}
          </div>
        ) : null}
        {step.button?.text && !isMainButton ? (
          <Button
            className="box-border mt-8 py-3 h-12 w-full max-w-[240px]"
            {...useLink({ router, handlerDecorator }, step.button)}
            version={version}
          >
            {step.button.text}
          </Button>
        ) : null}
      </div>
    );
  };
