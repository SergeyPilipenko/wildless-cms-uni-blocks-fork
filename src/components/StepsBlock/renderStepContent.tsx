import { Button } from '../../ui-kit/Button/Button';
import type { BlockVersion } from '../../model/BlockVersion';
import type { HandlerDecorator, Router } from '../ContentPage/ContentPageContext';
import type { Step } from './StepsBlockContent';
import type { StyleType } from './StepsBlockStyleMaps';
import { renderItems } from './renderItems';
import { useLink } from '../../hooks/useLink';

export const renderStepContent =
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
  (step: Step, i: number, { length }: { length: number }) => {
    const { label, description, button, items, isDotted } = step;

    const additionalMarginClass = `${button?.text ? 'mb-8' : ''} ${step?.label ? 'mt-2' : 'mt-4'}`;
    const widthContainer = length < 5 ? 'w-[276px]' : 'w-[210px]';

    return (
      <div
        key={String(i)}
        className={`flex flex-col items-center text-center relative
        whitespace-pre-line overflow-hidden ${widthContainer}`}
      >
        {renderStepLabel(label)}
        {renderStepDescription({
          description,
          className: `${styleMap.description} ${additionalMarginClass}`,
        })}
        {renderItems({ items, isDotted, version, className: styleMap.description })}
        {button?.text && !isMainButton ? (
          <Button
            className="box-border py-3 h-12 w-full max-w-[240px] mt-auto"
            {...useLink({ router, handlerDecorator }, button)}
            version={version}
          >
            {button.text}
          </Button>
        ) : null}
      </div>
    );
  };

const renderStepLabel = (label?: string) =>
  label ? <div className="text-x6 m-0 mt-4">{label}</div> : null;

const renderStepDescription = ({
  description,
  className = '',
}: {
  description?: string;
  className?: string;
}) => (description ? <div className={className}>{description}</div> : null);
