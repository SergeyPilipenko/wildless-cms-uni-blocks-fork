import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../../model/LinkProps';

interface TextInformationLinkProps extends LinkProps {
  className: string;
  index: number;
  onClick: (ev: MouseEvent) => any;
}

export const TextInformationLink = JSX<Partial<TextInformationLinkProps>>(
  ({ className = '', index, text, href, target, onClick }) => (
    <a
      className={`font-sans text-xs text-secondary-text visited:text-secondary-text hover:text-primary-text inline-block no-underline max-w-[292px] ${
        className
      }`}
      href={href}
      target={target}
      onClick={onClick}
    >
      {text || `Документ ${index}`}
    </a>
  ),
);
