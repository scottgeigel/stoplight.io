import React from 'react';
import cn from 'classnames';

export function Section({ id, children, rootClassName, paddingClassName, bgClassName }) {
  return (
    <section
      id={id}
      className={cn(rootClassName, 'relative md:px-0', {
        'py-40 md:py-24': !paddingClassName,
        [paddingClassName]: paddingClassName,
        'z-1': !bgClassName,
        'z-5': bgClassName,
        [bgClassName]: bgClassName,
      })}
      style={bgClassName ? { boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)' } : undefined}
    >
      {children}
    </section>
  );
}
