import { JSX } from '@redneckz/uni-jsx';
import { handlerDecorator } from '../../hooks/handlerDecorator';
import { useLikeService } from '../../hooks/useLikeService';
import { useRouter } from '../../hooks/useRouter';
import { LikeButton } from '../../ui-kit/Button/LikeButton';

interface LikeControlProps {
  className?: string;
}

export const LikeControl = JSX<LikeControlProps>(({ className = '' }) => {
  const router = useRouter();
  const likeService = useLikeService(router.pathname);

  return (
    <div
      className={`border-main border-2 border-solid bg-white flex w-[125px] items-center justify-center gap-3 p-2 font-sans ${className}`}
    >
      <LikeButton
        onClick={handlerDecorator(likeService.like)}
        ariaLabel="Поставить отметку «лайк»"
      />
      <LikeButton
        onClick={handlerDecorator(likeService.dislike)}
        className="rotate-180"
        ariaLabel="Поставить отметку «дизлайк»"
      />
      <span className="select-none">{likeService.likeCount}</span>
    </div>
  );
});
