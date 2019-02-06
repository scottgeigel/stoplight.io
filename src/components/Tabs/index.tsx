import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Link } from '../Link';

export interface ITab {
  href: string;
  title: string;
  isActive?: boolean;
}

export interface ITabs {
  tabs: ITab[];
}

export const Tab: React.FunctionComponent<ITab> = ({ isActive, href, title }) => {
  return (
    <Link
      className={cn('whitespace-no-wrap border-4 border-b-0 rounded-lg', {
        'border-lighten-300': isActive,
        'text-white border-transparent': !isActive,
      })}
      to={href}
    >
      <div className={cn('py-4 px-6 font-semibold', { 'bg-white text-black': isActive })}>{title}</div>
    </Link>
  );
};

export const Tabs: React.FunctionComponent<ITabs> = withRouteData(({ tabs, path }) => {
  const reg = new RegExp(`^${path}$`);

  return (
    <div className="container relative z-5 sm:m-0 sm:p-0">
      <div className="flex flex-no-wrap justify-center sm:justify-start w-full sm:overflow-auto scrolling-touch">
        {tabs.map(tab => (
          <Tab key={tab.href} isActive={reg.test(tab.href)} {...tab} />
        ))}
      </div>
    </div>
  );
});
