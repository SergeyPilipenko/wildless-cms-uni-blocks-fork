import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { LinkProps } from '../../model/LinkProps';
import { MediaButton } from './MediaButton';

export interface SocialMediaProps extends UniBlockProps {
  media?: Omit<LinkProps, 'text'>[];
  version?: BlockVersion;
}

export const SocialMedia = JSX<SocialMediaProps>(({ className, media, version, context }) => {
  const router = context.useRouter();
  const { handlerDecorator } = context;

  return (
    <div className={`flex gap-2 items-start justify-start pt-6 pb-6 ${className || ''}`}>
      {media?.map((_, index) => (
        <MediaButton
          key={String(index)}
          version={version}
          {...useLink({ router, handlerDecorator }, _)}
        />
      ))}
    </div>
  );
});
