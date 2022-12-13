import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { LinkProps } from '../../model/LinkProps';
import { MediaButton } from './MediaButton';

export interface SocialMediaProps {
  className?: string;
  media?: Omit<LinkProps, 'text'>[];
  version?: BlockVersion;
}

export const SocialMedia = JSX<SocialMediaProps>(({ className = '', media, version }) => (
  <div className={`flex gap-2 items-start justify-start pt-6 pb-6 ${className}`}>
    {media?.map((_, index) => (
      <MediaButton key={String(index)} version={version} {..._} />
    ))}
  </div>
));
