import cn from 'classnames';
import * as React from 'react';
import { Image } from 'src/components/Image';
import { Link } from 'src/components/Link';

export interface IHeroAuthor {
  className?: string;
  name?: string;
  path?: string;
  image?: string;
  meta?: string;
}

export const HeroAuthor: React.FunctionComponent<IHeroAuthor> = ({ className, name, path = '', image, meta }) => {
  if (!image && !name && !meta) return null;
  return (
    <Link to={path} disabled={!path} className={cn(className, 'flex items-center')}>
      {image && (
        <Image
          className="mr-2 rounded-full h-16 w-16 bg-center bg-contain bg-no-repeat"
          src={image}
          alt="author"
          background
          size="sm"
        />
      )}
      <div>
        {name && <div>{name}</div>}
        {meta && <div className="opacity-85 text-sm">{meta}</div>}
      </div>
    </Link>
  );
};
