import { NearbyOffices, WorkScheduleWeek } from './OfficeMapContent';
import { Icon } from '../../ui-kit/Icon/Icon';

export const renderCurrentDaySchedule = ({ lunchHour, status, workTime }: WorkScheduleWeek) => {
  const hasTime = /\d+/gi.test(lunchHour as string);
  const lunchHourText = hasTime ? `Перерыв ${lunchHour}` : lunchHour;

  return status ? (
    <div className="flex">
      <div className="p-3 border rounded-md text-m flex items-center cursor-pointer text-primary-main border-green-light mr-4">
        {workTime ? workTime : null}
      </div>
      <div className="p-3 border rounded-md text-m flex items-center cursor-pointer text-golden border-golden">
        {lunchHour ? lunchHourText : null}
      </div>
    </div>
  ) : (
    <div className="flex">
      <div className="p-3 border rounded-md text-m flex items-center cursor-pointer text-error border-error">
        Выходной
      </div>
    </div>
  );
};

export const renderNearbyOffice = ({ icon, title, distance, time }: NearbyOffices, inx: number) => (
  <div className="flex mr-4" key={`nearbyOffice${inx}`}>
    <Icon name={icon} width="16" height="16" asSVG className="mr-1" />
    {title ? <span className="text-m">{title}&nbsp;</span> : null}
    <span className="text-m-light">
      {distance ? ` (${distance})` : null}
      {time ? `, ${time}` : null}
    </span>
  </div>
);
export const renderDay = (
  { title, status, workTime, lunchHour, description }: WorkScheduleWeek,
  inx: number,
) => (
  <div
    className="flex flex-col pb-3 border-b border-solid border-main-divider mb-3 last:border-0"
    key={`day${inx}`}
  >
    <div className="flex justify-between items-center w-full pb-1 text-l text-primary-text">
      <div>{title}</div>
      {status ? null : <div className="text-m-light text-error">Выходной</div>}
      {status && workTime ? <div>{workTime}</div> : null}
    </div>
    {status && lunchHour ? renderLunchHour(lunchHour) : null}
    {description ? (
      <div className="pb-1 text-s-light text-secondary-text">{description}</div>
    ) : null}
  </div>
);

const renderLunchHour = (lunchHour: string) => {
  const hasTime = /\d+/gi.test(lunchHour);

  return hasTime ? (
    <div className="flex justify-between items-center w-full pb-1 text-m-light text-error">
      <div>Перерыв</div>
      <div>{lunchHour}</div>
    </div>
  ) : (
    <div className="flex justify-between items-center w-full pb-1 text-m-light text-primary-main">
      <div>{lunchHour}</div>
    </div>
  );
};
