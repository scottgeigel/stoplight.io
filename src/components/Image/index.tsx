import * as React from 'react';

export interface IImage {
  src: string;
  alt?: string;
  className?: string;

  style?: any;
}

export const Image: React.FunctionComponent<IImage> = ({ className, src, alt, style }) => {
  return <img className={className} src={src} alt={alt || src} style={style} />;
};
