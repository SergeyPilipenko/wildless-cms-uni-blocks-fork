/* eslint-disable react-hooks/rules-of-hooks */
import { mobileContext } from '../../react/setup-fixture';

import type { ContentPageDef } from '../../model/ContentPageDef';
import { Blocks } from '../Blocks';
import { ContentPage } from './ContentPage';
import { normalizePage } from './normalizePage';
import { useContentPageData } from './useContentPageData';

export default {
  default: () => {
    const data = useContentPageData(Blocks);

    return (
      <ContentPage
        context={mobileContext}
        blocksRegistry={Blocks}
        data={normalizePage(Blocks)(data as ContentPageDef)}
      />
    );
  },
};
