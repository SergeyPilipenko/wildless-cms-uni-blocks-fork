import { isSSR } from '../../utils/isSSR';

const isClient = !isSSR();

export const headerSubMenuObserver = isClient
  ? new IntersectionObserver(
      (entries) => {
        const createArrays = (selectors) =>
          selectors.map((_) => Array.from(window.document.querySelectorAll(_)));

        const headerSubMenuButtonElement = window.document.querySelector(
          '[data-header-submenu-visible=toggled]',
        );
        const [headerSubMenuItems, dotsHeaderSubMenuItems] = createArrays([
          '[data-item-name=header-submenu]',
          '[data-item-name=dots-header-submenu]',
        ]);

        const visibilityList = {};
        entries.forEach((_) => {
          visibilityList[_.target.toString()] = _.isIntersecting;
        });
        const isHeaderSubMenuButtonShow = toggleVisibilityInItems(
          visibilityList,
          dotsHeaderSubMenuItems,
          'hidden',
        );
        toggleVisibilityInItems(visibilityList, headerSubMenuItems, 'invisible');
        if (headerSubMenuButtonElement) {
          isHeaderSubMenuButtonShow
            ? headerSubMenuButtonElement.classList.remove('hidden')
            : headerSubMenuButtonElement.classList.add('hidden');
        }
      },
      { root: window.document, threshold: 1.0 },
    )
  : undefined;

// TODO: add types
const toggleVisibilityInItems = (visibilityList, items, className) => {
  const isReversed = className !== 'hidden';
  return items.some((_) => {
    const key = _.toString();
    const option = isReversed ? !visibilityList[key] : visibilityList[key];
    key in visibilityList ? _.classList.toggle(className, option) : null;
    return isReversed ? _.classList.contains('hidden') : !_.classList.contains('hidden');
  });
};
