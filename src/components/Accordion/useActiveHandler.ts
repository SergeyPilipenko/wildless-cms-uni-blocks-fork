import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { IconName } from '../../icons/IconName';
import { ActiveHandler } from '../../ui-kit/BlocksList/BlocksListProps';

export const useActiveHandler = ({ blocks, initialState = false }: ActiveHandler) => {
  const [isActive, setIsActive] = useState(initialState);
  const hasContent = blocks?.length;
  const icon: IconName = isActive ? 'MinusIcon' : 'PlusIcon';

  const handleToggle = (e) => {
    const currentTarget = e.currentTarget as HTMLElement;

    if (!currentTarget) {
      return;
    }

    setIsActive(!isActive);
    const contentBlock = currentTarget.nextSibling as HTMLElement;
    contentBlock.style.maxHeight = contentBlock.style.maxHeight
      ? ''
      : `${contentBlock.scrollHeight}px`;
  };

  return { isActive, hasContent, icon, handleToggle };
};
