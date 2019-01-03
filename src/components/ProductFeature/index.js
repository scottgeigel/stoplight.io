import React from 'react';
import cn from 'classnames';

import Link from '@components/Link';

import { slugify } from '@utils/text';

export function ProductFeature(props) {
  const { title, titleURL, description, image, isReversed, titleColor, isLast } = props;

  return [
    <a key="anchor" name={slugify(title)} />,
    <div
      key="content"
      className={cn('flex items-center py-12 md:pb-0', {
        'flex-row': !isReversed,
        'flex-row-reverse': isReversed,
      })}
    >
      <div
        className={cn('flex flex-col flex-1 w-1/2 md:w-100', {
          'pr-24 md:pr-0': !isReversed,
          'pl-18 md:pl-0': isReversed,
        })}
      >
        <h2 className={cn('max-w-sm mb-10 text-3xl', `text-${titleColor || 'grey-darkest'}`)}>
          {titleURL ? (
            <Link to={titleURL} className={`text-${titleColor || 'grey-darkest'}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div
          className={cn('mb-12 pb-12 md:pb-0 max-w-md leading-loose text-lg', {
            'md:mb-0': isLast,
          })}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="flex-1 w-1/2 md:hidden relative">
        <div
          className="bg-center bg-cover bg-no-repeat h-128 w-128 rounded-full"
          style={{ backgroundImage: `url(${image})`, boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)' }}
        />
      </div>
    </div>,
  ];
}
