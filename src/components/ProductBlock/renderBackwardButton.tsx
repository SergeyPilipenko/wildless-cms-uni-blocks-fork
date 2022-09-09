import type { BlockVersion } from '../../model/BlockVersion';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';

export function renderBackwardButton(
  button: ButtonWithIconProps,
  version: BlockVersion,
  className: string,
) {
  return (
    <div className={`flex items-center ${className}`}>
      <Button
        version={version}
        rounded
        className="w-12 h-12 min-h-12 min-w-12 flex items-center justify-center mr-3"
        ariaLabel={button?.text}
      >
        <Img className="w-4 h-4" image={button?.icon || { icon: 'ArrowLeftIcon' }} asSVG />
      </Button>
      {button?.text ? <span className="text-m-md font-light">{button.text}</span> : null}
    </div>
  );
}
