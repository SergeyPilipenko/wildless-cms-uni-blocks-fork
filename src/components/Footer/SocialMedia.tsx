import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { LinkProps } from '../../model/LinkProps';
import type { UniBlockProps } from '../../types';
import { MediaButton } from './MediaButton';

export interface SocialMediaProps extends UniBlockProps {
  media?: Omit<LinkProps, 'text'>[];
}

export const SocialMedia = JSX<SocialMediaProps>(({ className, media, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;
  return (
    <div className={`flex items-end gap-2 pt-[30px] pb-7 ${className || ''}`}>
      {media?.map((_, index) => (
        <MediaButton key={String(index)} {...useLink({ router, handlerDecorator }, _)} />
      ))}
    </div>
  );
});
