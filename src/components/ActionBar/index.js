import React from 'react';
import cn from 'classnames';
import { SiteData } from 'react-static';

import Button from '@components/Button';

export function ActionBar({ enabled, text, buttons, className }) {
  if (!enabled) {
    return null;
  }

  return (
    <div className="container">
      <div
        className={cn(
          className,
          'p-12 flex sm:flex-col sm:justify-center sm:items-between flex-wrap items-center shadow rounded'
        )}
      >
        {text && <div className="flex-1 font-bold text-grey-darker">{text}</div>}

        {buttons && (
          <div className="flex-1 flex justify-end sm:justify-center sm:items-between sm:flex-wrap">
            {buttons.map((button, index) => {
              return <Button key={index} className={index > 0 && 'ml-4 sm:ml-0'} {...button} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default props => {
  return (
    <SiteData
      render={({ actionBar }) => {
        return <ActionBar {...Object.assign({}, actionBar, props)} />;
      }}
    />
  );
};
