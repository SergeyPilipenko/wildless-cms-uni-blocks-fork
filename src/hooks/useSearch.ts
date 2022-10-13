import { useState } from '@redneckz/uni-jsx/lib/hooks';

export const useSearch = () => {
  const [term, setTerm] = useState('');

  return {
    term,
    setTerm: (text: string) => setTerm(text),
  };
};
