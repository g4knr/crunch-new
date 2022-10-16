import { createElement } from './createElement';

export const loadMultipleScripts = (callback, toLoad) => {
  let loaded = 0;
  const scriptLoaded = () => {
    loaded += 1;
    if (loaded === toLoad.length) callback();
  };

  toLoad.forEach(({ location, src }) => {
    createElement('script', location, {
      src,
      scriptLoaded,
    });
  });
};
