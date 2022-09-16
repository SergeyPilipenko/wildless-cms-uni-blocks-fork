import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';
import { Img } from '../../ui-kit/Img/Img';
import { Heading } from '../../ui-kit/Heading/Heading';

export interface HeaderCellProps {
  icon?: Picture;
  image?: Picture;
  title?: string;
  subtitle?: string;
  isFillGradient?: boolean;
  link?: LinkProps;
}

export const HeaderCell = JSX<HeaderCellProps>(
  ({ icon, image, title, subtitle, isFillGradient }) => (
    <div role="columnheader" scope="col">
      {icon ? (
        <Img
          className="h-[63px] w-[63px] min-w-[63px] min-h-[63px] mb-4"
          image={icon}
          width="63"
          height="63"
        />
      ) : null}
      {image?.src && (
        <div className="mb-3.5">
          <Img image={image} />
        </div>
      )}
      {title ? (
        <Heading
          headingType="h4"
          className={`${isFillGradient ? 'text-white' : ''}`}
          title={title}
        />
      ) : null}
      {subtitle ? (
        <div
          className={`text-m-sm mb-3.5 ${isFillGradient ? 'text-white' : 'text-secondary-text/80'}`}
        >
          {subtitle}
        </div>
      ) : null}
    </div>
  ),
);
