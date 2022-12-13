import { JSX } from '@redneckz/uni-jsx';
import { renderButton } from '../../ui-kit/Button/ButtonSection';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { BusinessCardItemProps, BusinessCardProps } from './BusinessBlockContent';

export const BusinessCard = JSX<BusinessCardProps>((props) => {
  const { title, image, cardItems, button } = props;

  return (
    <div className="border-color-stroke border p-9 w-1/2">
      {image ? (
        <div className="flex justify-center">
          {image?.src ? <Img className="mb-5" image={image} /> : null}
          {image?.icon ? <Img image={image} asSVG /> : null}
        </div>
      ) : null}
      {title ? <Heading headingType="h4" title={title} className="mb-6" /> : null}
      {cardItems?.length ? <ul>{cardItems.map((_, i) => renderItem(_, String(i)))}</ul> : null}
      {button?.text ? renderButton({ button, buttonClassName: 'mt-6' }) : null}
    </div>
  );
});

const renderItem = (item: BusinessCardItemProps, key: string) => {
  const { icon, text } = item;

  return (
    <li key={key} className="flex items-center gap-3.5 mb-3 last:mb-0">
      {icon?.icon ? (
        <Img
          className={`w-12 h-12 min-w-12 p-3 rounded-full bg-main-divider`}
          image={icon.icon}
          asSVG
        />
      ) : null}
      {icon?.src ? <Img image={icon.icon} /> : null}
      <span className="text-xl-light">{text}</span>
    </li>
  );
};
