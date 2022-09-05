import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { LinkProps } from '../../model/LinkProps';
import type { UniBlockProps } from '../../types';
import { MediaButton } from './MediaButton';

export interface SocialMediaProps extends UniBlockProps {
  media?: Omit<LinkProps, 'text'>[];
}

export const SocialMedia = JSX<SocialMediaProps>(({ className = '', media, context, children }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <div>
      <div className={`flex gap-2.5 mb-1.5 ${className}`}>
        {media?.map((_, index) => (
          <MediaButton key={String(index)} {...useLink({ router, handlerDecorator }, _)} />
        ))}
      </div>
      <span className="font-light text-sm text-secondary-text">{children}</span>
    </div>
  );
});
