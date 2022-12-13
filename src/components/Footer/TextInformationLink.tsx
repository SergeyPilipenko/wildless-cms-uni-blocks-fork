import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { LinkProps } from '../../model/LinkProps';

interface TextInformationLinkProps extends LinkProps {
  className: string;
  index: number;
  onClick: () => void;
}

export const TextInformationLink = JSX<Partial<TextInformationLinkProps>>(
  ({ className = '', index, ...rest }) => {
    const link = useLink();
    const { href, target, text, onClick } = link(rest);

    return (
      <a
        className={`text-xs-light text-secondary-text visited:text-secondary-text hover:text-primary-main inline-block no-underline max-w-[292px] ${className}`}
        href={href}
        target={target}
        onClick={onClick}
      >
        {text || `Документ ${index}`}
      </a>
    );
  },
);
