import * as React from 'react';
import { Link as StaticLink } from 'react-static';

const stoplightNext = /next\.stoplight\.io/;

export interface ILink {
  to?: string;
  className?: string;
  title?: string;
  disabled?: boolean;
  style?: object;
}

const getUTMParams = () => {
  const query: string[] = [];

  let utm = localStorage.getItem('utm') || '';

  const referrer = localStorage.getItem('referrer') || '';
  if (referrer) {
    query.push(`utm_source=${referrer}`);

    // Override UTM source with referrer
    if (utm) {
      utm.split('&').forEach(param => {
        if (/utm_source/.test(param)) {
          utm = utm.replace(param, '');
        }
      });
    }
  }

  if (utm) {
    query.push(utm.replace(/^\?/, ''));
  }

  return query;
};

export const Link: React.FunctionComponent<ILink> = ({ to, children, disabled, ...props }) => {
  let href = to;

  if (!to) {
    return <div {...props}>{children}</div>;
  } else if (disabled) {
    return <a {...props}>{children}</a>;
  } else if (typeof href === 'string') {
    href = href.trim(); // Make sure there aren't any trailing white spaces

    if (href.startsWith('#')) {
      return (
        <a {...props} href={href}>
          {children}
        </a>
      );
    } else if (typeof localStorage !== 'undefined' && stoplightNext.test(href)) {
      return (
        <a
          {...props}
          href={href}
          onClick={e => {
            const utm = getUTMParams();

            if (utm.length) {
              e.preventDefault();
              href += `?${utm.join('&')}`;
              window.location.href = href;
            }
          }}
        >
          {children}
        </a>
      );
    }
  }

  return (
    <StaticLink {...props} to={href}>
      {children}
    </StaticLink>
  );
};
