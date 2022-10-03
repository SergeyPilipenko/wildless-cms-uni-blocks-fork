import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../../model/LinkProps';

interface HorizontalNavigationLinkProps extends LinkProps {
  className: string;
  index: number;
  onClick: (ev: MouseEvent) => any;
}

export const HorizontalNavigationLink = JSX<Partial<HorizontalNavigationLinkProps>>(
  ({ className = '', index, text, href, target, onClick }) => (
    <a
      className={`font-sans text-secondary-text hover:text-primary-main inline-block no-underline ${className}`}
      href={href}
      target={target}
      onClick={onClick}
    >
      {text || `Документ ${index}`}
    </a>
  ),
);
