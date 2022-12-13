import { JSX } from '@redneckz/uni-jsx';
import { SearchBarInner, SearchBarInnerProps } from './SearchBarInner';

export const SearchBar = JSX<SearchBarInnerProps>((props) => (
  <SearchBarInner {...props} isMobile={true} />
));
