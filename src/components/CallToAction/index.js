import React from 'react';
import cn from 'classnames';

import Link from '@components/Link';

const CallToAction = ({ name, color = 'purple', className, href = 'https://next.stoplight.io' }) => {
  if (!name) {
    return null;
  }

  const cta = (
    <div
      className={`Button rounded shadow-md flex select-none inline-flex justify-center font-bold leading-reset h-xl text-xl rounded z-0 hover:z-5 border-transparent text-white hover:text-white bg-${color} hover:bg-${color}-light cursor-pointer solid`}
    >
      <div className="flex items-center px-6">{name}</div>
    </div>
  );

  return (
    <div className={cn(className)}>
      <Link to={href}>{cta}</Link>
    </div>
  );
};

export default CallToAction;
