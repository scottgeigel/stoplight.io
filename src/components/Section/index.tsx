import cn from 'classnames';
import * as React from 'react';

import { slugify } from 'src/utils/text';

export interface ISection {
  id?: string;
  className?: string;
  noPadding?: boolean;
  style?: object;
}

export const Section: React.FunctionComponent<ISection> = ({ id, children, className, noPadding, style }) => {
  return (
    <section
      id={slugify(id)}
      className={cn(className, 'relative md:px-0 z-5', {
        'py-40 md:py-24': !noPadding,
      })}
      style={style}
    >
      {children}
    </section>
  );
};
