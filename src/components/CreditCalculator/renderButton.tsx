import { tableFunc } from '../../utils/tableFunc';

const func = tableFunc<number, string>([
  [(_) => _ === 1, 'год'],
  [(_) => _ <= 4, 'года'],
  [() => true, 'лет'],
]);

export function renderButton(number: number, i: number, handleClick: (number: number) => void) {
  const string = func(number);

  return (
    <button
      key={String(i)}
      className="bg-secondary-light rounded-3xl h-10 w-[75px] box-border mr-2 flex items-center justify-center cursor-pointer border-none"
      onClick={() => handleClick(number)}
    >
      <span className="font-semibold text-sm">
        {number} {string}
      </span>
    </button>
  );
}
