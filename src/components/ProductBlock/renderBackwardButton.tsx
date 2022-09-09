import type { BlockVersion } from '../../model/BlockVersion';
import { Button } from '../../ui-kit/Button/Button';
import { Img } from '../../ui-kit/Img/Img';

const backwardBgStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-primary-main group hover:bg-white active:bg-primary-active',
  secondary: 'bg-white group hover:bg-primary-main active:bg-primary-active',
};

const backwardIconStyleMap: Record<BlockVersion, string> = {
  primary: 'text-white group-hover:text-primary-main',
  secondary: 'text-primary-text group-hover:text-white',
};

export function renderBackwardButton(text: string, version: BlockVersion, className: string) {
  return (
    <div className={`flex items-center ${className}`}>
      <Button
        rounded
        className={`w-12 h-12 min-h-12 max-h-12 flex items-center justify-center mr-3 ${backwardBgStyleMap[version]}`}
        ariaLabel={text}
      >
        <Img
          className={`w-4 h-4 min-w-4 min-h-4 rounded-full box-border ${backwardIconStyleMap[version]}`}
          image={{ icon: 'ArrowLeftIcon' }}
          width="24"
          height="24"
          asSVG
        />
      </Button>
      {text ? <span className="text-m-md font-light">{text}</span> : null}
    </div>
  );
}
