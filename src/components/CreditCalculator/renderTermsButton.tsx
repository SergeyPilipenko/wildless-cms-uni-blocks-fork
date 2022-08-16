import { Button } from '../../ui-kit/Button/Button';

export function renderTermsButton() {
  return (
    <div className="flex items-center">
      <Button className="mr-3" text="Отправить заявку" version="primary" href="#" />
      <div
        className="w-80 text-2xs leading-4 text-secondary-text"
        aria-label="Соглашение на обработку персональных данных"
      >
        Отправляя заявку, вы соглашаетесь на обработку персональных данных соответственно
        требованиям ФЗ «О персональных данных»
      </div>
    </div>
  );
}
