import _get from 'lodash.get';

export const getConfigVar = (path: string) => {
  if (typeof window !== 'undefined') {
    return _get(window, `__SL.${path}`);
  }

  return _get(process.env, path);
};
