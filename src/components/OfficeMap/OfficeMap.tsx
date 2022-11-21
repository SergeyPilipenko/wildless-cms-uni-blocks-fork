import { JSX } from '@redneckz/uni-jsx';
import { useOfficeMap } from '../../hooks/useOfficeMap';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Icon } from '../../ui-kit/Icon/Icon';
import { OFFICE_MAP } from './mockOfficeMap';
import type { NearbyOffices, OfficeMapProps, WorkScheduleWeek } from './OfficeMapContent';
import { renderCurrentDaySchedule, renderDay, renderNearbyOffice } from './renderFunctions';
import { YandexMap } from './YandexMap';

export const OfficeMap = JSX<UniBlockProps>(({ className = '' }) => {
  const resultOfficeMap = useOfficeMap('063') || OFFICE_MAP;
  const { name, address, gpsLatitude, gpsLongitude, workSchedule } =
    resultOfficeMap as OfficeMapProps;
  const {
    workTime,
    lunchHour,
    workTimeSaturday,
    lunchHourSaturday,
    workingMonday,
    workingTuesday,
    workingWednesday,
    workingThursday,
    workingFriday,
    workingSaturday,
    workingSunday,
  } = workSchedule;
  const point = gpsLatitude && gpsLongitude ? [gpsLatitude, gpsLongitude] : null;

  const workScheduleWeek: WorkScheduleWeek[] = [
    { title: 'Понедельник', status: workingMonday, workTime, lunchHour },
    { title: 'Вторник', status: workingTuesday, workTime, lunchHour },
    { title: 'Среда', status: workingWednesday, workTime, lunchHour },
    {
      title: 'Четверг',
      status: workingThursday,
      workTime,
      lunchHour: '13:00 - 14:00', // Добавлено для проверки
      description: 'Не работает прием денег с 17:00 до 19:00', // Добавлено для проверки
    },
    { title: 'Пятница', status: workingFriday, workTime, lunchHour },
    {
      title: 'Суббота',
      status: workingSaturday,
      workTime: workTimeSaturday,
      lunchHour: lunchHourSaturday,
    },
    { title: 'Воскресенье', status: workingSunday },
  ];
  // Добавлено для проверки
  const nearbyOffices: NearbyOffices[] = [
    { title: 'Деловой центр', time: '1 мин', distance: '~30 м.', icon: 'MetroIcon' },
    { title: 'Выставочная', time: '5 мин', distance: '~120 м.', icon: 'MetroIcon' },
    { title: 'Деловой центр', time: '8 мин', distance: '~350 м.', icon: 'MetroIcon' },
  ];
  const currentWeekDayInd = new Date().getDay();
  const currentWeekDay =
    currentWeekDayInd > 0 ? workScheduleWeek[currentWeekDayInd - 1] : workScheduleWeek[6];

  return (
    <div className={`flex flex-col font-sans bg-white w-full ${className}`}>
      <div className="flex flex-col px-12 pt-12">
        <div className="flex justify-between">
          <div className="text-h2">{name}</div>
          {renderCurrentDaySchedule(currentWeekDay)}
        </div>
        <div className="flex text-l-light pt-4">
          <Icon name="GeolocationIcon" width="24" height="24" asSVG className="pr-1" />
          {address}
        </div>
        <div className="flex pt-4">{nearbyOffices.map(renderNearbyOffice)}</div>
      </div>
      <div className="flex justify-between pt-8">
        <div className="flex-grow h-full bg-gray">{point ? <YandexMap point={point} /> : null}</div>
        <div className="w-[434px] pl-9 pr-12 pb-14">
          <div className="flex flex-col">{workScheduleWeek.map(renderDay)}</div>
        </div>
      </div>
    </div>
  );
});
