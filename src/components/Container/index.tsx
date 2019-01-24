import cn from 'classnames';
import * as React from 'react';

import { CallToAction, ICallToAction } from 'src/components/CallToAction';

export interface IContainer {
  className?: string;
  title?: string;
  description?: string;
  cta?: ICallToAction;
  style?: object;
}

export const Container: React.FunctionComponent<IContainer> = ({ className, children, title, style, cta }) => {
  return (
    <div className={cn('container', className)} style={style}>
      {title && <h2 className="text-center text-3xl mb-20 md:mb-14">{title}</h2>}

      {children}

      {cta && <CallToAction className="mt-24 md:mt-14 text-center" {...cta} />}
    </div>
  );
};
