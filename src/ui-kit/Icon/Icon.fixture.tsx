import '../../setup-fixture';
import { Icon } from './Icon';

import { IconMap } from '../../icons/IconName';

export default {
  all: (
    <div className="w-[1280px]">
      <div className="grid grid-cols-6 gap-8">
        {Object.values(IconMap).map((icon) => (
          <div key={icon} className="flex flex-col items-center gap-3">
            <div>{icon}</div>
            <Icon name={icon} width="64" />
          </div>
        ))}
      </div>
    </div>
  ),
};
