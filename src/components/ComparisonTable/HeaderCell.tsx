import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { BORDER_CLASSES, GRADIENT } from './constants';

export interface HeaderCellProps {
  icon?: Picture;
  image?: Picture;
  title?: string;
  link?: LinkProps;
  isFillGradient?: boolean;
}

export const HeaderCell = JSX<HeaderCellProps>(({ icon, image, title, link }) => (
  <div
    className={`w-80 box-border flex flex-col items-center rounded-t-md border-b-0 px-7 pt-7 pb-[46px] ${BORDER_CLASSES} ${GRADIENT}`}
    role="columnheader"
  >
    {icon && !image?.src && (
      <Img
        className="h-[63px] w-[63px] min-w-[63px] min-h-[63px] mb-4"
        image={icon}
        width="63"
        height="63"
      />
    )}
    {image?.src && <Img className="mb-[18px]" image={image} />}
    {title ? (
      <Heading headingType="h4" as="h3" className="text-center text-white" title={title} />
    ) : null}
    {link?.text && (
      <div className="mt-auto w-full">
        <Button
          href={link.href}
          target={link.target}
          className="mt-4 w-full text-primary-main bg-white hover:bg-secondary-hover active:bg-secondary-active"
        >
          <div className="font-medium text-xs py-[11px]">{link.text}</div>
        </Button>
      </div>
    )}
  </div>
));
