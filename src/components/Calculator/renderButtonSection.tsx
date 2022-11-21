import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';

export function renderButtonSection(context: ContentPageContext, buttons?: ButtonWithIconProps[]) {
  return buttons?.length ? (
    <ButtonSection context={context} buttons={buttons} className="flex flex-col mt-7 gap-2" />
  ) : null;
}
