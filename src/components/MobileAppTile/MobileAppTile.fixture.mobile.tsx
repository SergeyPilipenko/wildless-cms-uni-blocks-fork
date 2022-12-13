import '../../react/setup-fixture';

import { MobileAppTile as MobileAppTileMobile } from './MobileAppTile.mobile';

export default {
  default: (
    <div className="container grid grid-cols-12">
      <MobileAppTileMobile
        title="Мобильное приложение!"
        description="Загрузить для IOS и Android"
      />
    </div>
  ),
};
