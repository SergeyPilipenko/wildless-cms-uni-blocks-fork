import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { GracePeriodContent } from './GracePeriodContent';

import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';

export interface GracePeriodProps extends GracePeriodContent, UniBlockProps {}

export const GracePeriod = JSX<GracePeriodProps>(
  ({ className = '', title, description, calendar, anchor = null }) => {
    return (
      <section className={`bg-white p-16 pt-12 ${className}`} id={anchor}>
        <Heading headingType="h2" className="text-center" title={title} />
        <div className="font-light text-base-md text-center mt-3">{description}</div>
        {calendar ? renderCalendar(calendar) : null}
      </section>
    );
  },
);

const renderCalendar = (calendar) => {
  const colCount =
    calendar.reduce(
      (accumulator, currentValue) =>
        currentValue?.month?.length ? accumulator + currentValue.month.length : accumulator,
      0,
    ) || 1;
  const colSize = 100 / colCount;

  const mappedCalendar = calendar
    .filter((_) => _?.month?.length)
    .map((_) => ({
      ..._,
      flexBasis: `${_.month.length * colSize}%`,
    }));

  return (
    <div className="w-full flex flex-col justify-center mt-14">
      <div className="flex w-full mb-3 font-light text-m-title-md text-center">
        {mappedCalendar.map((_) => renderMonthNames(_, colSize))}
      </div>
      <div className="flex w-full">
        {mappedCalendar.map((_, ind) => (
          <div
            key={`monthItem-${ind}`}
            className="pr-3 mr-3 border-r border-r-gray/100 last:border-r-0 last:pr-0 last:mr-0"
            style={{ flexBasis: _.flexBasis }}
          >
            <div className="flex">{renderMonthImages(_)}</div>
            <div className="font-light text-sm text-primary-text mt-3">
              <span>{_.blackText}</span>&thinsp;
              <span className="text-primary-main">{_.greenText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderMonthNames = (item, colSize) =>
  item.month.map((_) => (
    <div key={`monthName-${_.name}`} style={{ flexBasis: `${colSize}%` }}>
      {_.name}
    </div>
  ));
const renderMonthImages = (item) =>
  item.month.map((_) =>
    _.image?.src ? (
      <div
        key={`monthImage-${_.image.src}`}
        className="max-h-[207px] border-r-[1px] pr-3 mr-3 border-r-gray/100 last:border-r-0 last:pr-0 last:mr-0"
      >
        <Img image={_.image} className="flex" />
      </div>
    ) : null,
  );
