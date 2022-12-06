/* eslint-disable react-hooks/rules-of-hooks */
import { context } from '../../react/setup-fixture';

import type { BlockDecorator } from '../../model/BlockDecorator';
import type { ContentPageDef } from '../../model/ContentPageDef';
import { Blocks } from '../Blocks';
import { ContentPage } from './ContentPage';
import { normalizePage } from './normalizePage';
import { useContentPageData } from './useContentPageData';

const blockDecorator: BlockDecorator = ({ blockClassName, block, render }, i) => (
  <div
    key={i}
    className={`relative flex items-stretch ${blockClassName}`}
    onClick={() => console.log('Edit', block)}
  >
    {render({ block, blockClassName: `${blockClassName} w-full` })}
    <button
      className="absolute w-8 h-8 top-4 right-4 border rounded-full"
      onClick={(e) => {
        console.log('Delete', block);
        e.stopPropagation();
      }}
    >
      ╳
    </button>
  </div>
);

export default {
  default: () => {
    const data = useContentPageData(Blocks);

    return (
      <ContentPage
        className="bg-main"
        context={context}
        blocksRegistry={Blocks}
        data={normalizePage(Blocks)(data as ContentPageDef)}
      />
    );
  },
  editor: () => {
    const data = useContentPageData(Blocks);

    return (
      <div style={{ background: "url('grid.svg')", height: '100%' }}>
        <ContentPage
          className="bg-transparent"
          context={context}
          blocksRegistry={Blocks}
          data={normalizePage(Blocks)(data as ContentPageDef)}
          blockDecorator={blockDecorator}
        />
      </div>
    );
  },
};
