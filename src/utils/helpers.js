const mediaQueryFunc = (e, screen, func) => {
  const mediaQuery = window.matchMedia(`(max-width: ${screen}px)`);
  func(mediaQuery.matches);
  const handleMediaQueryChange = (event) => {
    func(event.matches);
  };

  mediaQuery.addEventListener(e, handleMediaQueryChange);

  return () => {
    mediaQuery.removeEventListener(e, handleMediaQueryChange);
  };
};

export default { mediaQueryFunc };
