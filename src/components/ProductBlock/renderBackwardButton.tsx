import { Img } from '../../ui-kit/Img/Img';
import { Button } from '../../ui-kit/Button/Button';
import type { BlockVersion } from '../../model/BlockVersion';

const backwardBgStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-primary-main',
  secondary: 'bg-white',
};

const backwardIconStyleMap: Record<BlockVersion, string> = {
  primary: 'text-white',
  secondary: 'text-primary-text',
};

export function renderBackwardButton(text: string, version: BlockVersion, className: string) {
  return (
    <div className={`flex items-center ${className}`}>
      <Button
        rounded
        className={`w-12 h-12 min-h-12 max-h-12 flex items-center justify-center mr-3 ${backwardBgStyleMap[version]}`}
      >
        <Img
          className={`w-4 h-4 min-w-4 min-h-4 rounded-full box-border ${backwardIconStyleMap[version]}`}
          image={{ icon: 'ArrowLeftIcon' }}
          color="none"
          width="24"
          height="24"
          asSVG
        />
      </Button>
      {text ? <span className="text-m-md">{text}</span> : null}
    </div>
  );
}
