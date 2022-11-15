import { ColorPalette } from '../../model/ContentPageDef';
import { Picture } from '../../model/Picture';
import { IconName } from '../Icon/IconProps';

export interface FoldButtonProps {
  className?: string;
  hasContent?: boolean;
  primaryIcon?: Picture;
  icon: IconName;
  label: string;
  onClick: (e: any) => void;
  dataTheme?: ColorPalette;
}
