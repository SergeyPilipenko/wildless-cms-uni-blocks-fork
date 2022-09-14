import { ButtonSection } from '../../ui-kit/Button/ButtonSection';

export function renderButtonSection(context, buttons) {
  return buttons?.length ? (
    <ButtonSection context={context} buttons={buttons} className="flex flex-col mt-7 gap-2" />
  ) : null;
}
