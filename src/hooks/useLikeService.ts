import { useCallback, useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { LikeAPI } from '../api/LikeAPI';

const ASSIST_BASE_URL = process.env.NEXT_PUBLIC_ASSIST_BASE_URL || '';
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID || '';

const api = LikeAPI(PROJECT_ID, ASSIST_BASE_URL);

export function useLikeService(pagePath: string) {
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    (async () => {
      const [likeData] = await api.getLikeCount(pagePath);
      setLikeCount(likeData?.value || 0);
    })();
  }, [pagePath]);

  const like = useCallback(async () => {
    setLikeCount(await api.like(pagePath));
  }, [pagePath]);

  const dislike = useCallback(async () => {
    setLikeCount(await api.dislike(pagePath));
  }, [pagePath]);

  return {
    likeCount,
    like,
    dislike,
  };
}
