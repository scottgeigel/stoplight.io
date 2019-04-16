import * as path from 'path';
import * as React from 'react';
import { getConfigVar } from 'src/utils/config';

export interface IImage {
  src: string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: any;
  background?: boolean;
  useDiv?: boolean;
}

export const Image: React.FunctionComponent<IImage> = ({ className, src, alt, style, size, background, useDiv }) => {
  if (src && path.isAbsolute(src) && size && getConfigVar('NODE_ENV') === 'production') {
    const extname = path.extname(src);
    src = `${src.replace(extname, '')}-${size}${extname}`;
  }

  if (background || useDiv) {
    style = {
      backgroundImage: src ? `url(${src})` : 'none',
      ...style,
    };

    if (!useDiv) {
      // Hide the actual src image so the background image is displayed
      style.objectPosition = '-99999px 99999px';
    }
  }

  if (useDiv) {
    return <div className={className} style={style} />;
  }

  return <img className={className} src={src} alt={alt || src} style={style} />;
};
