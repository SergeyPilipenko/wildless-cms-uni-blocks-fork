import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';

export function renderProposal(monthlyPayment: number, rate: number) {
  return (
    <div className="box-border h-fit p-9 bg-primary-main rounded-md text-white">
      <div className="text-base mb-[18px]">Наше предложение</div>
      <div className="text-sm opacity-60">Ежемесячный платёж</div>
      <div className="text-lg mb-3">{addSpacesBetweenNumbers(Math.round(monthlyPayment))} ₽</div>
      <div className="text-sm opacity-60">Ставка</div>
      <div className="text-lg">{rate} %</div>
    </div>
  );
}
