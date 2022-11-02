import { useCallback, useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';

export const getNS = <NS>(_: string): NS | undefined => (globalThis as any)[_];

export function useExternalNS<NS>(namespaceName: string, url: string): NS | undefined {
  const [externalNS, setExternalNS] = useState<NS>();

  const setNS = useCallback(() => setExternalNS(getNS<NS>(namespaceName)), [namespaceName]);

  useEffect(() => {
    const script = document.getElementById(url);

    if (script) {
      if (getNS<NS>(namespaceName)) {
        setNS();
      } else {
        script.addEventListener('load', setNS);

        return () => {
          script.removeEventListener('load', setNS);
        };
      }
    } else {
      const newScript = document.createElement('script');

      newScript.src = url;
      newScript.async = true;
      newScript.id = url;
      newScript.addEventListener('load', setNS);

      document.head.appendChild(newScript);

      return () => {
        document.head.removeChild(newScript);

        setExternalNS(undefined);
      };
    }

    return undefined;
  }, [namespaceName, url]);

  return externalNS;
}
