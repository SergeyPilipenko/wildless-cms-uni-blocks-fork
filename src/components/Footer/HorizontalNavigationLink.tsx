import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { LinkProps } from '../../model/LinkProps';

interface HorizontalNavigationLinkProps extends LinkProps {
  className: string;
  index: number;
  onClick: () => void;
}

export const HorizontalNavigationLink = JSX<Partial<HorizontalNavigationLinkProps>>(
  ({ className = '', index, text, ...rest }) => {
    const link = useLink();
    const { href, target, onClick } = link(rest);

    return (
      <a
        className={`text-secondary-text hover:text-primary-main inline-block no-underline ${className}`}
        href={href}
        target={target}
        onClick={onClick}
      >
        {text || `Документ ${index}`}
      </a>
    );
  },
);
