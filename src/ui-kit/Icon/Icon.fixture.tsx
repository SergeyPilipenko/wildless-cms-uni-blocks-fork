import { IconMap } from '../../icons/IconName';
import '../../react/setup-fixture';
import { Icon } from './Icon';

export default {
  'all (as img)': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-6 gap-8">
        {Object.values(IconMap).map((icon) => (
          <div key={icon} className="flex flex-col items-center gap-3">
            <div>{icon}</div>
            <Icon className="my-auto" name={icon} width="64" />
          </div>
        ))}
      </div>
    </div>
  ),
  'all (as svg)': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-6 gap-8">
        {Object.values(IconMap).map((icon) => (
          <div key={icon} className="flex flex-col items-center gap-3">
            <div>{icon}</div>
            <Icon className="my-auto" name={icon} width="64" asSVG />
          </div>
        ))}
      </div>
    </div>
  ),
  'all (as svg) black': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-6 gap-8">
        {Object.values(IconMap).map((icon) => (
          <div key={icon} className="flex flex-col items-center gap-3">
            <div>{icon}</div>
            <Icon className="my-auto" name={icon} iconVersion="black" width="64" asSVG />
          </div>
        ))}
      </div>
    </div>
  ),
  'all (as svg) white': (
    <div className="w-[1280px]">
      <div className="grid grid-cols-6 gap-8">
        {Object.values(IconMap).map((icon) => (
          <div key={icon} className="flex flex-col items-center gap-3 bg-primary-main">
            <div className="text-white">{icon}</div>
            <Icon className="my-auto" name={icon} iconVersion="white" width="64" asSVG />
          </div>
        ))}
      </div>
    </div>
  ),
};
