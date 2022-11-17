import { JSX } from '@redneckz/uni-jsx';
import type { ColorPalette } from '../../model/ContentPageDef';
import type { IconName } from '../Icon/IconProps';
import { Img } from '../Img/Img';
import type { FoldablePartProps } from './FoldablePartProps';

interface DefaultFoldButtonProps {
  className?: string;
  label: string;
  icon: IconName;
  dataTheme?: ColorPalette;
  onClick?: () => void;
}

export const DefaultFoldButton = JSX<DefaultFoldButtonProps>(
  ({ className, label, icon, dataTheme = '', onClick }) => (
    <button
      className={`border-none bg-primary-main hover:bg-primary-hover px-0 py-5 mb-[1px] w-full font-sans text-white flex justify-center cursor-pointer ${
        className || ''
      }`}
      data-theme={dataTheme}
      onClick={onClick}
    >
      <span className="text-h4 pr-3">{label}</span>
      {icon ? (
        <Img
          image={{
            icon,
            iconVersion: 'white',
          }}
          className="flex-shrink-0 my-auto"
          width="20"
          height="20"
          asSVG
        />
      ) : null}
    </button>
  ),
);

export const renderDefaultFoldButton = ({ isUnfolded, onToggle }: FoldablePartProps) => {
  const labels = ['Развернуть', 'Скрыть'];
  const icons: IconName[] = ['ArrowDownIcon', 'ArrowUpIcon'];

  return (
    <DefaultFoldButton
      icon={icons[Number(isUnfolded)]}
      label={labels[Number(isUnfolded)]}
      onClick={onToggle}
    />
  );
};
