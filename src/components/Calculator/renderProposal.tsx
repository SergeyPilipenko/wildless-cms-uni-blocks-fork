import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';
import { Button } from '../../ui-kit/Button/Button';

export function renderProposal(monthlyPayment: number) {
  return (
    <div className="box-border ">
      <div className="text-l-light">Ежемесячный платёж</div>
      <div className="text-h3 mb-3">{addSpacesBetweenNumbers(Math.round(monthlyPayment))} ₽</div>
      <Button className="mt-[50px] w-full" text="Отправить заявку" version="primary" href="#" />
    </div>
  );
}
