import type { Picture } from '../../../model/Picture';

export const getButtonAriaLabel = (icon: Picture | undefined) => icon?.alt || icon?.title || '';
