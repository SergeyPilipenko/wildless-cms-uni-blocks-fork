export function renderButton(number: number, i: number, handleClick: (number: number) => void) {
  return (
    <button
      key={String(i)}
      className="bg-secondary-light rounded-3xl h-10 w-[75px] box-border mr-2 flex items-center justify-center cursor-pointer border-none"
      onClick={() => handleClick(number)}
    >
      <span className="font-semibold text-sm">
        {number} {number === 1 ? 'год' : number > 4 ? 'лет' : 'года'}
      </span>
    </button>
  );
}
