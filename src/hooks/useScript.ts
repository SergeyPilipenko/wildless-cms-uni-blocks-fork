import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';

export type ScriptStatus = 'idle' | 'loading' | 'ready' | 'error';
export interface UseScriptOptions {
  shouldPreventLoad?: boolean;
  removeOnUnmount?: boolean;
}

const cachedScriptStatuses: Record<string, ScriptStatus | undefined> = {};

function getScriptNode(src: string) {
  const node: HTMLScriptElement | null = document.querySelector(`script[src="${src}"]`);
  const status = node?.getAttribute('data-status') as ScriptStatus | undefined;

  return {
    node,
    status,
  };
}

function getScriptStatus(type) {
  return type === 'load' ? 'ready' : 'error';
}

function getInitialValueStatus(src: string | null, options?: UseScriptOptions) {
  if (!src || options?.shouldPreventLoad) {
    return 'idle';
  }

  if (typeof window === 'undefined') {
    return 'loading';
  }

  return cachedScriptStatuses[src] ?? 'loading';
}

export function useScript(src: string | null, options?: UseScriptOptions): ScriptStatus {
  const [status, setStatus] = useState<ScriptStatus>(getInitialValueStatus(src, options));

  // eslint-disable-next-line complexity
  useEffect(() => {
    if (!src || options?.shouldPreventLoad) {
      return undefined;
    }

    const cachedScriptStatus = cachedScriptStatuses[src];
    if (cachedScriptStatus === 'ready' || cachedScriptStatus === 'error') {
      setStatus(cachedScriptStatus);

      return undefined;
    }

    const script = getScriptNode(src);
    let scriptNode = script.node;

    if (!scriptNode) {
      scriptNode = document.createElement('script');
      scriptNode.src = src;
      scriptNode.async = true;
      scriptNode.setAttribute('data-status', 'loading');
      document.body.appendChild(scriptNode);

      const setAttributeFromEvent = (event: Event) => {
        const scriptStatus: ScriptStatus = getScriptStatus(event.type);

        scriptNode?.setAttribute('data-status', scriptStatus);
      };

      scriptNode.addEventListener('load', setAttributeFromEvent);
      scriptNode.addEventListener('error', setAttributeFromEvent);
    } else {
      setStatus(script.status ?? cachedScriptStatus ?? 'loading');
    }

    const setStateFromEvent = (event: Event) => {
      const newStatus = getScriptStatus(event.type);
      setStatus(newStatus);
      cachedScriptStatuses[src] = newStatus;
    };

    scriptNode.addEventListener('load', setStateFromEvent);
    scriptNode.addEventListener('error', setStateFromEvent);

    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener('load', setStateFromEvent);
        scriptNode.removeEventListener('error', setStateFromEvent);
      }

      if (scriptNode && options?.removeOnUnmount) {
        scriptNode.remove();
      }
    };
  }, [src, options?.shouldPreventLoad, options?.removeOnUnmount]);

  return status;
}
