import type { Picture } from '../../../model/Picture';
import { IconTitleMap } from '../../../icons/IconName';

export const getButtonAriaLabel = (icon: Picture | undefined) =>
  icon?.alt || icon?.title || IconTitleMap[icon?.icon ? icon.icon : ''];
