import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { LikeButton } from '../../ui-kit/Button/LikeButton';

export const LikeControl = JSX<UniBlockProps>(({ className, context, anchor = null }) => {
  const likeService = context.useLikeService();

  return (
    <div
      className={`border-main border-2 border-solid bg-white flex w-[125px] items-center justify-center gap-3 p-2 font-sans ${
        className || ''
      }`}
      id={anchor}
    >
      <LikeButton onClick={likeService.like} ariaLabel="Поставить отметку «лайк»" />
      <LikeButton
        onClick={likeService.dislike}
        className="rotate-180"
        ariaLabel="Поставить отметку «дизлайк»"
      />
      <span className="select-none">{likeService.likeCount}</span>
    </div>
  );
});
