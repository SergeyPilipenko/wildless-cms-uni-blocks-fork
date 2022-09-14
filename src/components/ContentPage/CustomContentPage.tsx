import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageDef, CustomPageTemplate, UniBlockProps } from '../../types';
import { style2className } from '../../utils/style2className';
import { ContentPageContext } from './ContentPageContext';

interface PageDecoratorProps<VNode> {
  pageClassName: string;
  pageTemplate: CustomPageTemplate;
  render: (props: { pageClassName: string; pageTemplate: CustomPageTemplate }) => VNode;
}

export type PageDecorator<VNode = any> = (
  props: PageDecoratorProps<VNode>,
  index?: number | string,
) => any;

export interface PageTemplate {
  name: string;
  template: any;
}

export type PageTemplatesRegistry = Record<string, PageTemplate>;

export interface CustomContentPageProps extends UniBlockProps {
  pageTemplatesRegistry: PageTemplatesRegistry;
  data: ContentPageDef;
  pageDecorator?: PageDecorator;
}

export interface RenderPageFunc {
  pageTemplate: CustomPageTemplate;
  pageClassName: string;
  pageDecorator: PageDecorator;
  pageTemplatesRegistry: PageTemplatesRegistry;
  context: ContentPageContext;
}

const defaultPageDecorator: PageDecorator = ({ pageClassName, pageTemplate, render }) =>
  render({ pageClassName, pageTemplate });

export const CustomContentPage = JSX<CustomContentPageProps>(
  ({
    className = '',
    context,
    pageTemplatesRegistry,
    data: { style: pageStyle, customPageTmpl: pageTemplate },
    pageDecorator = defaultPageDecorator,
  }) => {
    return pageTemplate
      ? renderPage({
          pageTemplate,
          pageClassName: `${style2className(pageStyle)} ${className}`,
          pageDecorator,
          pageTemplatesRegistry,
          context,
        })
      : null;
  },
);

function renderPage({
  pageTemplate,
  pageClassName,
  pageDecorator,
  pageTemplatesRegistry,
  context,
}: RenderPageFunc) {
  const { type } = pageTemplate;
  if (!(type && type in pageTemplatesRegistry) || !pageTemplatesRegistry[type].template) {
    throw new Error(`No page template with "${type}" is registered`);
  }

  const { template: PageComponent } = pageTemplatesRegistry[type];
  return pageDecorator({
    pageClassName,
    pageTemplate,
    render: (props) => {
      const { content } = props.pageTemplate;
      return <PageComponent className={props.pageClassName} context={context} {...content} />;
    },
  });
}
