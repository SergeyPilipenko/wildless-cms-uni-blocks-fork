import type { BlockVersion } from '../../model/BlockVersion';
import type { VNode } from '../../model/VNode';
import { Button } from '../../ui-kit/Button/Button';
import { renderItems } from './renderItems';
import type { Step } from './StepsBlockContent';
import type { StyleType } from './StepsBlockStyleMaps';

export const renderStepContent =
  ({
    styleMap,
    isMainButton,
    version,
  }: {
    styleMap: StyleType;
    isMainButton: boolean;
    version: BlockVersion;
  }) =>
  (step: Step, i: number, { length }: { length: number }): VNode => {
    const { label, description, button, items, isDotted } = step;

    const contentMarginClass = label && (description || items) ? 'mt-2' : '';

    return (
      <div
        key={String(i)}
        className={`relative flex flex-col items-center text-center whitespace-pre-line overflow-hidden ${getContainerWidth(
          length,
        )}`}
      >
        <div className={`${button?.text ? 'mb-8' : ''}  text-center`}>
          {renderStepLabel(label)}
          <div className={`${contentMarginClass} flex flex-col items-center`}>
            {renderStepDescription({
              description,
              className: styleMap.description,
            })}
            {renderItems({
              items,
              isDotted,
              version,
              className: getItemsClasses({ className: 'text-left', description, styleMap }),
            })}
          </div>
        </div>
        {button?.text && !isMainButton ? (
          <Button
            className="box-border py-3 h-12 w-full max-w-[240px] mt-auto"
            version={version}
            {...button}
          >
            {button?.text}
          </Button>
        ) : null}
      </div>
    );
  };

const renderStepLabel = (label?: string): VNode =>
  label ? <div className="text-h6">{label}</div> : null;

const renderStepDescription = ({
  description,
  className = '',
}: {
  description?: string;
  className?: string;
}): VNode => (description ? <div className={className}>{description}</div> : null);

const getItemsClasses = ({
  className,
  description,
  styleMap,
}: {
  className?: string;
  description?: string;
  styleMap: StyleType;
}): string =>
  [description ? styleMap.description : 'text-h6', description ? 'mt-0.5' : '', className].join(
    ' ',
  );

const getContainerWidth = (length: number): string => (length < 5 ? 'w-[276px]' : 'w-[210px]');
