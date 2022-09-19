import glob from 'glob';
import util from 'util';
import type { ContentPageDef } from '../types';
import type { TransformationOptions } from './TransformationOptions';
import { transformContentPage } from './transformContentPage';

const INDEX_PAGE_SLUG = 'index';
const find = util.promisify(glob);

const bySlug = (slug: string) => (content: ContentPageDef) => content.slug === slug;
const byCustomPageType = (type?: string) => (content: ContentPageDef) =>
  type ? content._customPageType === type : !content._customPageType;

const not =
  <Arg>(predicate: (_: Arg) => boolean) =>
  (_: Arg) =>
    !predicate(_);

export function ContentPageRepository({
  contentDir = 'content',
  publicDir = 'public',
}: Partial<TransformationOptions> = {}) {
  function listAllContentPages(): Promise<string[]> {
    return find(`${contentDir}/**/*.page.json`);
  }

  async function getAllContentPagesMap(): Promise<Record<string, ContentPageDef>> {
    const pagePaths = await listAllContentPages();
    const pages = await Promise.all(pagePaths.map(readPage));
    return pagePaths.reduce(
      (result, path, i) => ({
        ...result,
        [path]: pages[i],
      }),
      {},
    );
  }

  async function getAllContentPages(): Promise<ContentPageDef[]> {
    return Object.values(await getAllContentPagesMap());
  }

  async function getSecondaryContentPages(customPageType?: string) {
    const pages = await getAllContentPages();
    return pages.filter(not(bySlug(INDEX_PAGE_SLUG))).filter(byCustomPageType(customPageType));
  }

  async function getContentPageBySlug(slug: string): Promise<ContentPageDef | undefined> {
    const pages = await getAllContentPages();
    return pages.find(bySlug(slug));
  }

  async function getIndexPage() {
    return await getContentPageBySlug(INDEX_PAGE_SLUG);
  }

  const cache: Record<string, ContentPageDef> = {};
  async function readPage(filePath: string): Promise<ContentPageDef> {
    if (!(filePath in cache)) {
      cache[filePath] = await transformContentPage(filePath, {
        contentDir,
        publicDir,
      });
    }
    return cache[filePath];
  }

  return {
    listAllContentPages,
    getAllContentPagesMap,
    getAllContentPages,
    getContentPageBySlug,
    getSecondaryContentPages,
    getIndexPage,
    readPage,
  };
}
