import React from 'react';
import { withSiteData } from 'react-static';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from '@components/Link';

const onClickFunctions = {
  intercom: () => {
    if (window.Intercom) {
      window.Intercom.show();
    }
  },
};

export function Footer({ footer }) {
  if (!footer) {
    return null;
  }

  const { columns, social, legal } = footer || {};

  return [
    <footer key="footer" className="bg-black py-12 border-t-4 border-lighten-300">
      <nav className="container mx-auto flex flex-col items-center">
        <div className="py-4">
          <Link to="/">
            <img className="h-16 hover:opacity-75" src="/images/robot-dude.svg" alt="Logo" />
          </Link>
        </div>

        {columns && (
          <div className="flex flex-wrap justify-between py-8 w-3/5 sm:w-full">
            {columns.map((column, index) => {
              return (
                <div key={index}>
                  <div className="font-bold text-grey-light py-2">{column.title}</div>

                  {column.links &&
                    column.links.map((link, columnIndex) => {
                      return (
                        <Link
                          key={columnIndex}
                          to={link.href}
                          className="cursor-pointer text-grey hover:text-grey-lighter block py-2"
                          onClick={e => {
                            if (link.onClick && onClickFunctions[link.onClick]) {
                              e.preventDefault();

                              onClickFunctions[link.onClick]();
                            }
                          }}
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap justify-between py-8 w-3/5 sm:w-full">
          <Link className="block text-grey pr-4" to="/">
            &copy; {new Date().getFullYear()} Stoplight
          </Link>

          {legal && (
            <div className="flex-1 text-center">
              {legal.map((link, index) => {
                const elems = [
                  <Link key={index} to={link.href} className="text-grey hover:text-grey-lighter">
                    {link.title}
                  </Link>,
                ];

                if (index > 0) {
                  elems.unshift(
                    <span key={`${index}-sep`} className="mx-2">
                      |
                    </span>
                  );
                }

                return elems;
              })}
            </div>
          )}

          {social && (
            <div>
              {social.map((link, index) => {
                const elems = [
                  <Link key={index} to={link.href} className="text-grey hover:text-grey-lighter">
                    <FontAwesomeIcon icon={link.icon} size="lg" />
                  </Link>,
                ];

                if (index > 0) {
                  elems.unshift(<span key={`${index}-sep`} className="mx-3" />);
                }

                return elems;
              })}
            </div>
          )}
        </div>
      </nav>
    </footer>,
  ];
}

export default withSiteData(Footer);
