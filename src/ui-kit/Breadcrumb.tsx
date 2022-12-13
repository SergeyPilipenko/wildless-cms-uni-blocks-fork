import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../hooks/useLink';
import type { LinkProps } from '../model/LinkProps';

export interface BreadcrumbProps extends LinkProps {
  className?: string;
  onClick?: () => void;
}

export const Breadcrumb = JSX<BreadcrumbProps>(({ className = '', children, ...props }) => {
  const link = useLink();
  const { text, href, target, onClick } = link(props);

  return href ? (
    <a className={`no-underline ${className}`} href={href} target={target} onClick={onClick}>
      <span className={className}>{text || children}</span>
    </a>
  ) : (
    <span className={className}>{text || children}</span>
  );
});
