import * as React from 'react';

export interface IImage {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FunctionComponent<IImage> = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};
