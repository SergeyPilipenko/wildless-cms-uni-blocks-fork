import type { BlockVersion } from '../../model/BlockVersion';
import { Button } from '../../ui-kit/Button/Button';
import type { BackwardButtonProps } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';

export function renderBackwardButton(
  button: BackwardButtonProps,
  version: BlockVersion,
  className: string,
) {
  const { text, href, target, onClick } = button;
  const iconVersion = version === 'primary' ? 'white' : 'black';
  const backwardIcon = button?.icon || { icon: 'ArrowLeftIcon' };

  return (
    <div className={`flex items-center cursor-pointer ${className}`} onClick={onClick}>
      <Button
        version={version}
        rounded
        className="w-12 h-12 min-h-12 min-w-12 flex items-center justify-center mr-3"
        ariaLabel={text}
        href={href}
        target={target}
      >
        <Img
          className="w-4 h-4"
          image={{ ...backwardIcon, iconVersion: backwardIcon.iconVersion || iconVersion }}
          asSVG
        />
      </Button>
      {text ? <span className="text-m">{text}</span> : null}
    </div>
  );
}
