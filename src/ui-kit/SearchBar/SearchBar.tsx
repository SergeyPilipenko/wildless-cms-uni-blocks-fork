import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { SearchBarInner } from './SearchBarInner';

export const SearchBar = JSX<UniBlockProps>(({ className = '', context }) => {
  return <SearchBarInner context={context} className={className} />;
});
