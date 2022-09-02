import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Img } from '../Img/Img';

export const SearchBar = JSX<UniBlockProps>(({ className, context }) => {
  const { term, setTerm } = context.useSearch();
  return (
    <form className={`relative ${className || ''}`}>
      <div className="absolute rounded h-full flex items-center justify-center pl-4 max-w-[170px] gap-3.5 pointer-events-none">
        <div className="w-[20px] h-[20px]">
          <Img image="LoupeIcon" width="24" height="24" />
        </div>
        {!term && (
          <label
            htmlFor="search-bar-input"
            className="font-sans font-normal text-sm text-secondary-text"
          >
            Поиск по сайту
          </label>
        )}
      </div>
      <input
        id="search-bar-input"
        className={
          'h-12 pl-12 w-full peer placeholder-transparent font-sans font-normal text-base text-black border border-solid rounded box-border outline-none pr-[6%] border-main-divider focus:border-primary-text'
        }
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        name="search-bar-input"
        placeholder="some search"
      />
      <button
        className="visible peer-placeholder-shown:invisible absolute top-2 right-3 w-6 h-6 p-1 bg-transparent cursor-pointer border-none"
        onClick={(e) => {
          e.preventDefault();
          setTerm('');
        }}
      >
        <Img image="CloseIcon" width="24" height="24" />
      </button>
    </form>
  );
});
