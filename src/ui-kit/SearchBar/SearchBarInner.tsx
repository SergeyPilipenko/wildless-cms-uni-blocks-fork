import { JSX } from '@redneckz/uni-jsx';
import { useSearch } from '../../hooks/useSearch';
import { Button } from '../Button/Button';
import { Img } from '../Img/Img';

export interface SearchBarInnerProps {
  isMobile?: boolean;
  className?: string;
}

export const SearchBarInner = JSX<SearchBarInnerProps>(({ className, isMobile = false }) => {
  const { term, setTerm } = useSearch();

  const LoupeIconClassName = isMobile ? 'w-5 h-5' : 'w-6 h-6';
  const SearchBarLabelClassName = isMobile ? 'text-s' : 'text-l-light';
  const SearchBarInputClassName = isMobile ? ' placeholder-transparent' : 'h-full';
  const inputPlaceholder = isMobile ? 'some search' : undefined;

  return (
    <form className={`font-sans relative ${className}`}>
      <div className="absolute rounded h-full flex items-center justify-center pl-4 max-w-[170px] gap-3.5 pointer-events-none">
        <div className={LoupeIconClassName}>
          <Img image="LoupeIcon" width="24" height="24" />
        </div>
        {term ? null : (
          <label
            htmlFor="search-bar-input"
            className={`text-secondary-text ${SearchBarLabelClassName}`}
          >
            Поиск по сайту
          </label>
        )}
      </div>
      <input
        id="search-bar-input"
        className={`h-12 pl-12 w-full peer text-l text-black border border-solid rounded-md box-border
              outline-none pr-[6%] border-main-stroke hover:border-primary-hover active:border-primary-text focus:border-primary-text ${SearchBarInputClassName}`}
        value={term}
        onChange={(e) => setTerm(e.target.value as string)}
        type="text"
        name="search-bar-input"
        placeholder={inputPlaceholder}
      />
      {isMobile ? (
        <button
          className="visible peer-placeholder-shown:invisible absolute top-2 right-3 w-6 h-6 p-1 bg-transparent cursor-pointer border-none"
          onClick={(e) => {
            e.preventDefault();
            setTerm('');
          }}
        >
          <Img image="CloseIcon" width="24" height="24" />
        </button>
      ) : (
        <Button
          version="primary"
          text="Найти"
          className="invisible peer-focus:visible absolute top-[3px] right-1"
          onClick={(ev) => {
            ev?.preventDefault();
            console.log('click');
          }}
        >
          <div className="text-s px-9 py-2.5">Найти</div>
        </Button>
      )}
    </form>
  );
});
