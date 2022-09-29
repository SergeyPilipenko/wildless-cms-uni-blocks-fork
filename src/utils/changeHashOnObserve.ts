export const changeHashOnObserve = (entries: IntersectionObserverEntry[]) => {
  if (!entries.length) {
    return;
  }
  const [entry] = entries;

  if (entry.isIntersecting) {
    // Here must be logic for block intersection event
  }
};
