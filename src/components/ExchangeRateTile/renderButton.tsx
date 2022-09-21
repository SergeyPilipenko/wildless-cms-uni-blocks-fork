import { Button } from '../../ui-kit/Button/Button';

export function renderButton() {
  return (
    <Button
      className="box-border mt-3.5 py-3 h-12 w-full"
      version="primary"
      href="https://coins.rshb.ru/exchange"
      target="_blank"
    >
      Купить валюту
    </Button>
  );
}
