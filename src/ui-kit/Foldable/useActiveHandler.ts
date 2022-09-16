import { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { IconName } from '../../icons/IconName';

export const foldableBlockClassNames = 'transition-all duration-300 max-h-0 overflow-hidden';

export interface ActiveHandler {
  context: ContentPageContext;
  initialState?: boolean;
}

export const useActiveHandler = ({ context, initialState = false }: ActiveHandler) => {
  const [isActive, setIsActive] = context.useState(initialState);
  const icon: IconName = isActive ? 'ArrowUpIcon' : 'ArrowDownIcon';

  const handleToggle = (e: MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLElement;

    if (!currentTarget) {
      return;
    }

    setIsActive(!isActive);
    const wrapperBlock = currentTarget.previousSibling as HTMLElement;
    const contentBlock = wrapperBlock.getElementsByClassName(
      foldableBlockClassNames,
    )[0] as HTMLElement;

    contentBlock.style.maxHeight = contentBlock.style.maxHeight
      ? ''
      : `${contentBlock.scrollHeight}px`;
  };

  return { icon, handleToggle, isActive };
};
