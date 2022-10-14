import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import type { UniBlockProps } from '../../types';
import type { NavigationContent } from './NavigationContent';
import { NavigationItem } from './NavigationItem';

export interface NavigationProps extends NavigationContent, UniBlockProps {}

export const Navigation = JSX<NavigationProps>(
  ({ className, context, title, buttons, ...rest }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    const activeButton = findActiveSubItem(router)(buttons);

    return (
      <BlockWrapper
        context={context}
        className={`font-sans text-primary-text rounded-[40px] flex items-center justify-between ${
          className || ''
        }`}
        {...rest}
      >
        <h2 className="text-xl font-medium m-0">{title}</h2>
        {buttons?.length ? (
          <div className="flex rounded-md overflow-hidden bg-white">
            {buttons
              .filter(({ text }) => text)
              .map((button, i) => (
                <NavigationItem
                  key={String(i)}
                  className="first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md"
                  isActive={button === activeButton}
                  {...useLink({ router, handlerDecorator }, button)}
                />
              ))}
          </div>
        ) : null}
      </BlockWrapper>
    );
  },
);
