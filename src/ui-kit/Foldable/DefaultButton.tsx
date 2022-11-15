import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../Img/Img';
import { FoldButtonProps } from './FoldButtonProps';

export const DefaultButton = JSX<FoldButtonProps>(({ icon, label, dataTheme = '', onClick }) => {
  return (
    <button
      className="border-none bg-primary-main hover:bg-primary-hover px-0 py-5 mb-[1px] w-full font-sans text-white flex justify-center cursor-pointer"
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
  );
});
