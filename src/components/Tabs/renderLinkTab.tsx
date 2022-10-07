import type { LinkProps } from '../../model/LinkProps';
import {
  INACTIVE_LINK_CLASSES,
  INACTIVE_TEXT_CLASSES,
  LINK_CLASSES,
  TEXT_CLASSES,
} from './tabItemClasses';

export interface RenderLinkTabProps extends LinkProps {
  active?: boolean;
  onClick?: () => void;
  i: number;
}

export const renderLinkTab = ({ text, onClick, href, target = '_self', i }: RenderLinkTabProps) => (
  <a
    key={String(i)}
    className={`${LINK_CLASSES} ${INACTIVE_LINK_CLASSES}`}
    target={target}
    href={href}
    onClick={onClick}
  >
    <span className={`${TEXT_CLASSES} ${INACTIVE_TEXT_CLASSES}`}>{text}</span>
  </a>
);
