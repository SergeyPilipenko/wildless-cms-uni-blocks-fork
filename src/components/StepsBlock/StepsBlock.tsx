import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { checkIsIconRenderable } from '../../utils/checkIsIconRenderable';
import { joinList } from '../../utils/joinList';
import { renderStepContent } from './renderStepContent';
import type { Step, StepsBlockContent } from './StepsBlockContent';
import type { StyleType } from './StepsBlockStyleMaps';
import { STEPS_BLOCK_STYLE_MAPS } from './StepsBlockStyleMaps';

export interface StepsBlockProps extends StepsBlockContent, UniBlockProps {}

const getLineOpacity = (showLines: boolean) => (showLines ? '' : 'opacity-0');

const getPaddingX = (steps: number) => (steps < 5 ? 'px-[88px]' : 'px-[55px]');

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
    const paddingX = getPaddingX(steps.length);

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
          <Heading headingType="h3" className="max-w-[752px] text-center" title={title} />
        ) : null}
        {steps?.length ? (
          <div className={`box-border ${titleMargin}`}>
            <div className={`flex items-center ${paddingX}`}>
              {joinList(<div className={`h-0.5 w-full bg-secondary-light ${lineOpacity}`} />)(
                steps.map(renderStepIcon(styleMap)),
              )}
            </div>
            <div className={`flex justify-between ${shortGaps ? 'gap-x-3' : 'gap-x-[101px]'}`}>
              {steps.map(
                renderStepContent({
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
            className="mt-8 min-w-[240px]"
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
          className={`h-[100px] w-[100px] min-w-[100px] min-h-[100px] rounded-full p-[26px] box-border z-10 flex justify-center items-center
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
