import type { LinkProps } from '../model/LinkProps';
import { adjustHref } from '../utils/adjustHref';
import { isURL } from '../utils/url';
import { handlerDecorator } from './handlerDecorator';
import { useRouter } from './useRouter';

interface ClickHandler {
  onClick(ev?: { preventDefault: () => void }): void;
}

export function useLink(): <L extends Partial<LinkProps & ClickHandler>>(
  props: L,
) => L & ClickHandler {
  const router = useRouter();

  return (props) => {
    const href = adjustHref(props.href, router);

    return {
      ...props,
      href,
      'aria-label': props.text,
      onClick: handlerDecorator((ev?: { preventDefault: () => void }) => {
        props.onClick && props.onClick(ev);
        const isLocalHref = href && !isURL(href);
        const isLocalTarget = !props.target || props.target === '_self';
        if (isLocalHref && isLocalTarget) {
          ev?.preventDefault();
          router.push(href);
        }
      }, props),
    };
  };
}
