import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Link } from '../Link';

export interface ITab {
  href: string;
  title: string;
  color: string;
  isActive?: boolean;
}

export interface ITabs {
  tabs: ITab[];
  color: string;
}

export const Tab: React.FunctionComponent<ITab> = ({ isActive, href, title, color }) => {
  return (
    <Link
      className={cn('whitespace-no-wrap border-4 border-b-0 rounded-lg', {
        [`bg-white text-black border-${color}-light`]: isActive,
        'text-white border-transparent': !isActive,
      })}
      to={href}
    >
      <div className="py-4 px-6 font-semibold">{title}</div>
    </Link>
  );
};

export const Tabs: React.FunctionComponent<ITabs> = withRouteData(({ tabs, color, path }) => {
  const reg = new RegExp(`^${path}$`);

  return (
    <div className="container relative z-5 sm:m-0 sm:p-0">
      <div className="flex flex-no-wrap justify-center sm:justify-start w-full overflow-auto scrolling-touch">
        {tabs.map(tab => (
          <Tab key={tab.href} isActive={reg.test(tab.href)} color={color} {...tab} />
        ))}
      </div>
    </div>
  );
});
