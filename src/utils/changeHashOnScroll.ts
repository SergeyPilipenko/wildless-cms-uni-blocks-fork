import { Router } from '../components/ContentPage/ContentPageContext';

export const changeHashOnScroll = (router: Router, blocks: NodeListOf<Element> | null) => {
  blocks?.forEach((block) => {
    const currentHash = globalThis.location.hash;
    const anchorHash = `#${block?.id}`;

    if (currentHash === anchorHash) return;

    const position = block?.getBoundingClientRect();
    if (position && position.top > 0 && position.top < 150) {
      router.replace(`#${block?.id}`);
    }
  });
};
