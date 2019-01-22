import cn from 'classnames';
import * as React from 'react';

import { Link } from 'src/components/Link';

export interface IButton {
  href: string;
  title?: string;
  className?: string;
  color?: string;
  outlined?: boolean;
  shadow?: string;
}

export const Button: React.FunctionComponent<IButton> = ({
  className,
  color = 'purple',
  shadow,
  outlined,
  href,
  title,
  children,
}) => {
  return (
    <Link
      title={title}
      className={cn(
        className,
        `border-${color}`,
        `hover:border-${color}-dark`,
        `focus:border-${color}-dark`,
        `px-12 font-bold sm:w-full sm:mt-6 rounded-md py-3 flex justify-center select-none border-2 cursor-pointer`,
        {
          [`bg-${color} hover:bg-${color}-dark text-white`]: !outlined,
          [`text-${color}-dark hover:text-${color}-darker`]: outlined,
          [`shadow-${shadow}`]: shadow,
        }
      )}
      to={href}
    >
      {children || title}
    </Link>
  );
};
