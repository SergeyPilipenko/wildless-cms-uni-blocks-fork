import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';

export function renderButtonSection(buttons?: ButtonWithIconProps[]) {
  return buttons?.length ? (
    <ButtonSection buttons={buttons} className="flex flex-col mt-7 gap-2" />
  ) : null;
}
