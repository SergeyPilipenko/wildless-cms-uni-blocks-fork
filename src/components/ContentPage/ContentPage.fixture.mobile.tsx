import { mobileContext } from '../../setup-fixture';

import type { ContentPageDef } from '../../types';
import { Blocks } from '../Blocks';
import { ContentPage } from './ContentPage';
import { toMobilePage } from './toMobilePage';

import data from './ContentPage.page.json';

export default {
  default: (
    <ContentPage
      className="bg-secondary-text"
      context={mobileContext}
      blocksRegistry={Blocks}
      data={toMobilePage(data as ContentPageDef)}
    />
  ),
};
