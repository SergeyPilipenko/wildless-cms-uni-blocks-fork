import type { BlockVersion } from '../../model/BlockVersion';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';

export function renderItems(items: string[] = [], version?: BlockVersion) {
  return (
    <section className="max-w-[600px] mt-5" role="list">
      {items.map((_, i) => (
        <BlockItem key={String(i)} className="mt-2.5 first:mt-0" text={_} version={version} />
      ))}
    </section>
  );
}
