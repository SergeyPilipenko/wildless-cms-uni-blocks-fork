import type { StyleType } from './StepsBlockStyleMaps';

export const renderItems = (items?: string[], styleMap?: StyleType, isDotted = true) =>
  items ? (
    <div className={`mt-4 ${styleMap?.description}`} role="list">
      {items.map((_) => (
        <div className="items-start mt-1 first:mt-0" role="listitem">
          {isDotted ? (
            <div
              className={`rounded-full inline-block mr-3 mb-1 w-1.5 h-1.5 min-w-1.5 min-h-1.5 ${styleMap?.dot}`}
            />
          ) : null}
          <span>{_}</span>
        </div>
      ))}
    </div>
  ) : null;
