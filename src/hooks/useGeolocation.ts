import { useCallback, useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { DaDataAPI } from '../api/DaDataAPI';

const DaData = DaDataAPI('https://10.80.4.9');

export function useGeolocation(defaultLocation: string): [string, () => void] {
  const [city, setCity] = useState(defaultLocation);

  useEffect(() => {
    setCity(globalThis?.localStorage.getItem('location') || defaultLocation);
  }, [defaultLocation]);

  const getCity = useCallback(() => {
    DaData.getFetcherAddress().then((_) => {
      const location = _ || defaultLocation;
      globalThis?.localStorage.setItem('location', location);
      setCity(location);
    });
  }, [defaultLocation]);

  return [city, getCity];
}
