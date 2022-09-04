export const headerSubMenuObserver = new IntersectionObserver(
  (entries) => {
    const headerSubMenuButtonElement = window.document.querySelector(
      '[data-header-submenu-visible=toggled]',
    );
    const headerSubMenuItems = Array.from(
      window.document.querySelectorAll('[data-item-name=header-submenu]'),
    );
    const dotsHeaderSubMenuItems = Array.from(
      window.document.querySelectorAll('[data-item-name=dots-header-submenu]'),
    );
    const visibilityList = {};
    entries.forEach((j) => {
      visibilityList[String(j.target.toString())] = j.isIntersecting;
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
);

const toggleVisibilityInItems = (visibilityList, items, className) => {
  const isReversed = className !== 'hidden';
  return items.some((item) => {
    const key = item.toString();
    const option = isReversed ? !visibilityList[key] : visibilityList[key];
    key in visibilityList ? item.classList.toggle(className, option) : null;
    return isReversed ? item.classList.contains('hidden') : !item.classList.contains('hidden');
  });
};
