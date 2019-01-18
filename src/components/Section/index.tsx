import cn from 'classnames';
import * as React from 'react';

import { slugify } from 'src/utils/text';

export interface ISection {
  id?: string;
  rootClassName?: string;
  paddingClassName?: string;
  bgClassName?: string;
}

export const Section: React.FunctionComponent<ISection> = ({
  id,
  children,
  rootClassName,
  paddingClassName,
  bgClassName,
}) => {
  return (
    <section
      id={slugify(id)}
      className={cn(rootClassName, paddingClassName, bgClassName, 'relative md:px-0', {
        'py-40 md:py-24': !paddingClassName,
        'z-1': !bgClassName,
        'z-5': bgClassName,
      })}
      style={bgClassName ? { boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)' } : undefined}
    >
      {children}
    </section>
  );
};
