import glob from 'glob';
import util from 'util';
import type { ContentPageDef } from '../model/ContentPageDef';
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

export class ContentPageRepository {
  public static readonly inst = new ContentPageRepository();

  private cache: Record<string, ContentPageDef> = {};

  constructor(
    private readonly options: TransformationOptions = {
      contentDir: 'content',
      publicDir: 'public',
    },
  ) {}

  async listAllContentPages(): Promise<string[]> {
    return find(`${this.options.contentDir}/**/*.page.json`);
  }

  async getAllContentPages(): Promise<ContentPageDef[]> {
    const pagePaths = await this.listAllContentPages();

    return Promise.all(pagePaths.map((_) => this.readPage(_)));
  }

  async getSecondaryContentPages(customPageType?: string): Promise<ContentPageDef[]> {
    const pages = await this.getAllContentPages();

    return pages.filter(not(bySlug(INDEX_PAGE_SLUG))).filter(byCustomPageType(customPageType));
  }

  async getContentPageBySlug(slug: string): Promise<ContentPageDef | undefined> {
    const pages = await this.getAllContentPages();

    return pages.find(bySlug(slug));
  }

  async getIndexPage(): Promise<ContentPageDef | undefined> {
    return this.getContentPageBySlug(INDEX_PAGE_SLUG);
  }

  async readPage(filePath: string): Promise<ContentPageDef> {
    if (!(filePath in this.cache)) {
      this.cache[filePath] = await transformContentPage(filePath, this.options);
    }

    return this.cache[filePath];
  }
}
