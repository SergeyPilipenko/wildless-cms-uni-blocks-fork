/* eslint-disable react-hooks/rules-of-hooks */
import '../../react/setup-fixture';

import type { ContentPageDef } from '../../model/ContentPageDef';
import { Blocks } from '../Blocks';
import { ContentPage } from './ContentPage';
import { normalizePage } from './normalizePage';
import { useContentPageData } from './useContentPageData';

export default {
  default: () => {
    const data = useContentPageData(Blocks);

    return (
      <ContentPage blocksRegistry={Blocks} data={normalizePage(Blocks)(data as ContentPageDef)} />
    );
  },
};
