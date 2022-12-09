import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../model/LinkProps';

export interface BreadcrumbProps extends LinkProps {
  className?: string;
  onClick?: () => void;
}

export const Breadcrumb = JSX<BreadcrumbProps>(
  ({ text, href, target, onClick, className = '', children }) =>
    href ? (
      <a className={`no-underline ${className}`} href={href} target={target} onClick={onClick}>
        <span className={className}>{text || children}</span>
      </a>
    ) : (
      <span className={className}>{text || children}</span>
    ),
);
