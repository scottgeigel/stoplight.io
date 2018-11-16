import React from 'react';
import cn from 'classnames';
import { withSiteData, withRouteData, Head } from 'react-static';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Popup from '@components/Popup';
import Portal from '@components/Portal';
import Link from '@components/Link';

export const headerHeightClass = 'h-20';

const onClickFunctions = {
  intercom: () => {
    if (window.Intercom) {
      window.Intercom.show();
    }
  },
};

const DropdownItem = (item, index) => {
  return (
    <Link
      key={index}
      to={item.href}
      className={cn('flex px-3 text-black hover:opacity-75 cursor-pointer', {
        'pt-6': index > 0,
      })}
      onClick={e => {
        if (item.onClick && onClickFunctions[item.onClick]) {
          e.preventDefault();

          onClickFunctions[item.onClick]();
        }
      }}
    >
      <div className={cn('flex items-center', item.subtitle ? 'w-12 mr-6' : 'w-8 mr-3')}>
        {item.icon && (
          <FontAwesomeIcon
            className={cn(item.titleColor && `text-${item.titleColor}`)}
            icon={item.icon}
            size={item.subtitle ? '2x' : 'lg'}
          />
        )}
      </div>

      <div className="flex-1">
        <div className={cn('text-lg font-bold', item.titleColor && `text-${item.titleColor}`)}>
          {item.title}
        </div>

        {item.subtitle && <div className="text-base opacity-75">{item.subtitle}</div>}
      </div>
    </Link>
  );
};

const HeaderDropdown = ({ width, title, links }) => {
  if (!links || !links.length) return null;

  return (
    <Popup
      width={width}
      posX="center"
      posY="bottom"
      renderTrigger={attributes => (
        <div
          className="flex select-none cursor-default text-white py-2 px-4 mx-2 font-semibold"
          {...attributes}
        >
          <div className="flex-1 mr-2">{title}</div>
        </div>
      )}
      renderContent={() => (
        <div className="bg-white rounded-lg shadow-lg p-6">{links.map(DropdownItem)}</div>
      )}
    />
  );
};

const HeaderButton = ({ title, href, icon, dark }) => {
  return (
    <Link
      key="2"
      to={href}
      className="text-lg font-semibold py-2 px-4 ml-6 flex items-center border rounded text-white hover:text-white border-lighten-300 hover:border-lighten-500 bg-lighten-50 whitespace-no-wrap"
    >
      {title} {icon && <FontAwesomeIcon icon={icon} className="ml-3" />}
    </Link>
  );
};

const Desktop = ({ items }) => {
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center text-lg">
      {items.map((item, index) => {
        if (item.links && item.links.length) {
          return <HeaderDropdown key={index} {...item} />;
        }

        if (item.isButton) {
          return <HeaderButton key={index} {...item} />;
        }

        return (
          <Link
            key={index}
            to={item.href}
            className="text-white hover:opacity-85 hover:text-white py-2 px-4 mx-2 font-semibold"
            onClick={e => {
              if (item.onClick && onClickFunctions[item.onClick]) {
                e.preventDefault();

                onClickFunctions[item.onClick]();
              }
            }}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

const MobileLink = item => {
  return (
    <Link
      to={item.href}
      className="w-1/2 py-3"
      onClick={e => {
        if (item.onClick && onClickFunctions[item.onClick]) {
          e.preventDefault();

          onClickFunctions[item.onClick]();
        }
      }}
    >
      {item.title}
    </Link>
  );
};

class Mobile extends React.Component {
  state = {
    showMenu: false,
  };

  render() {
    const { items = [] } = this.props;
    const { showMenu } = this.state;

    const [main, ...extras] = items;

    return (
      <div className="hidden sm:flex flex-1 justify-end">
        <FontAwesomeIcon
          icon={['fas', 'bars']}
          className="cursor-pointer ml-3 text-white"
          size="2x"
          onClick={() => this.setState({ showMenu: true })}
        />

        {showMenu && (
          <Portal>
            <div className="absolute pin z-10 flex flex-col">
              <div
                className="relative m-4 pt-6 bg-white rounded"
                onClick={() => this.setState({ showMenu: false })}
              >
                <div className="px-6">
                  <div className="absolute pin-t pin-r p-4 flex items-center">
                    <FontAwesomeIcon
                      icon={['fas', 'times']}
                      className="cursor-pointer text-grey"
                      size="lg"
                      onClick={() => this.setState({ showMenu: false })}
                    />
                  </div>

                  {main && (
                    <div className="text-md">
                      <div className="pb-3 uppercase font-bold text-grey-darker">{main.title}</div>
                      <div className="flex flex-wrap">
                        {main.links &&
                          main.links.map((product, index) => {
                            return (
                              <Link
                                key={index}
                                to={product.href}
                                className="w-full flex items-center text-black py-4"
                                onClick={e => {
                                  if (product.onClick && onClickFunctions[product.onClick]) {
                                    e.preventDefault();

                                    onClickFunctions[product.onClick]();
                                  }
                                }}
                              >
                                {product.icon && (
                                  <FontAwesomeIcon
                                    className={cn(
                                      product.titleColor && `text-${product.titleColor}`
                                    )}
                                    icon={product.icon}
                                    // size="sm"
                                  />
                                )}

                                <div className="flex-1 ml-3">
                                  <div
                                    className={cn(
                                      'font-bold',
                                      product.titleColor && `text-${product.titleColor}`
                                    )}
                                  >
                                    {product.title}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap border-t mt-4 py-4 font-bold text-black text-md">
                    {extras &&
                      extras.map((item, index) => {
                        if (item.links) {
                          return item.links.map((item, index) => (
                            <MobileLink key={index} {...item} />
                          ));
                        }

                        return <MobileLink key={index} {...item} />;
                      })}
                  </div>
                </div>
              </div>
              <div className="flex-grow" onClick={() => this.setState({ showMenu: false })} />
            </div>
          </Portal>
        )}
      </div>
    );
  }
}

const Header = ({ header, meta }) => {
  if (!header) return null;

  const elems = [
    <header key="header" className="absolute z-10 pin-t pin-l pin-r">
      <div className="container">
        <nav className={cn(headerHeightClass, 'flex items-center')}>
          <Link to="/" className="text-white hover:opacity-75 hover:text-white text-2xl font-bold">
            Stoplight
          </Link>

          <Desktop items={header.items} />

          <Mobile items={header.items} />
        </nav>
      </div>
    </header>,
  ];

  if (meta) {
    elems.push(
      <Head key="meta">
        <title>{meta.title}</title>
      </Head>
    );
  }

  return elems;
};

export default withSiteData(withRouteData(Header));
