import { mobileContext } from '../../react/setup-fixture';

import type { ContentPageDef } from '../../model/ContentPageDef';
import { Blocks } from '../Blocks';
import { ContentPage } from './ContentPage';
import { normalizePage } from './normalizePage';

import data from './ContentPage.page.json';

export default {
  default: (
    <ContentPage
      className="bg-secondary-text"
      context={mobileContext}
      blocksRegistry={Blocks}
      data={normalizePage(Blocks)(data as ContentPageDef)}
    />
  ),
};
