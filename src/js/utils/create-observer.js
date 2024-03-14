function createObserver(className) {
  if (typeof className !== 'string') {
    throw new Error('Invalid argument: className should be a string');
  }
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  };
  return new IntersectionObserver(handleIntersection);
}

export default createObserver;
