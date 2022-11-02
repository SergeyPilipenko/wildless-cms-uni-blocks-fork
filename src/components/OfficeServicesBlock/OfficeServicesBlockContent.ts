import type { IconProps } from '../../model/Picture';
import type { LabelProps, TitleProps } from '../../model/HeadlineType';

export type OfficeServicesBlockList = LabelProps & IconProps;

/**
 * @title Офисные услуги
 */
export type OfficeServicesBlockContent = TitleProps & {
  /** @title Список услуг */
  servicesList?: OfficeServicesBlockList[];
};
