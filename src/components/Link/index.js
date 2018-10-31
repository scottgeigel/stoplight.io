import React from 'react';
import { Link } from 'react-static';

const stoplightNext = /next\.stoplight\.io/;

// Make sure there aren't any trailing white spaces
export default ({ to, children, ...props }) => {
  let href = to;

  if (typeof href === 'string') {
    href = href.trim();

    if (href.startsWith('#')) {
      return (
        <a {...props} href={href}>
          {children}
        </a>
      );
    } else if (typeof localStorage !== 'undefined' && stoplightNext.test(href)) {
      const query = [];

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

      if (query.length) {
        href += `?${query.join('&')}`;
      }
    }
  }

  return (
    <Link {...props} to={href}>
      {children}
    </Link>
  );
};
