import cn from 'classnames';
import * as React from 'react';
import { Head, withRouteData, withSiteData } from 'react-static';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'src/components/Link';
import { Popup } from 'src/components/Popup';
import { Portal } from 'src/components/Portal';

export const headerHeightClass = 'h-20';

const DropdownItem = (item, index) => {
  return (
    <Link
      key={index}
      to={item.href}
      className={cn('flex px-3 text-black hover:opacity-75 cursor-pointer', {
        'pt-6': index > 0,
      })}
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
        <div className={cn('text-lg font-bold', item.titleColor && `text-${item.titleColor}`)}>{item.title}</div>

        {item.subtitle && <div className="text-base opacity-75">{item.subtitle}</div>}
      </div>
    </Link>
  );
};

const HeaderDropdown = ({ width, title, links }) => {
  if (!links || !links.length) {
    return null;
  }

  return (
    <Popup
      width={width}
      posX="center"
      posY="bottom"
      renderTrigger={attributes => (
        <div className="flex select-none cursor-default text-white py-2 px-4 mx-2 font-semibold" {...attributes}>
          <div className="flex-1 mr-2">{title}</div>
        </div>
      )}
      renderContent={() => <div className="bg-white rounded-lg shadow-lg p-6">{links.map(DropdownItem)}</div>}
    />
  );
};

const HeaderButton = ({ title, href, icon }) => {
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
      {items &&
        items.length > 0 &&
        items.map((item, index) => {
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
            >
              {item.title}
            </Link>
          );
        })}
    </div>
  );
};

export interface IHeaderLink {
  title: string;
  icon: string;
  titleColor: string;
  href: string;
}

export interface IHeaderItem {
  title: string;
  href: string;
  links?: IHeaderLink[];
}

export interface IMobileHeader {
  items: IHeaderItem[];
}

class Mobile extends React.Component<IMobileHeader, { showMenu: boolean }> {
  public state = {
    showMenu: false,
  };

  public render() {
    const { items } = this.props;
    const { showMenu } = this.state;

    const [main, ...extras] = items || [];

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
              <div className="relative m-4 pt-6 bg-white rounded" onClick={() => this.setState({ showMenu: false })}>
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
                              <Link key={index} to={product.href} className="w-full flex items-center text-black py-4">
                                {product.icon && (
                                  <FontAwesomeIcon
                                    className={cn(product.titleColor && `text-${product.titleColor}`)}
                                    icon={product.icon}
                                    // size="sm"
                                  />
                                )}

                                <div className="flex-1 ml-3">
                                  <div className={cn('font-bold', product.titleColor && `text-${product.titleColor}`)}>
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
                      extras.length > 0 &&
                      extras.map((item, index) => {
                        if (item.links && item.links.length) {
                          return item.links.map((link, linkIndex) => (
                            <Link key={linkIndex} to={link.href} className="w-1/2 py-3">
                              {link.title}
                            </Link>
                          ));
                        }

                        return (
                          <Link key={index} to={item.href} className="w-1/2 py-3">
                            {item.title}
                          </Link>
                        );
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

export interface IHeader {
  header: {
    items: IHeaderItem[];
  };
  meta: any;
}

export const Header: React.FunctionComponent<IHeader> = ({ header, meta }) => {
  return (
    <React.Fragment>
      <Head key="meta">
        <title>{meta && meta.title}</title>
      </Head>
      <header key="header" className="absolute z-10 pin-t pin-l pin-r">
        <div className="container">
          <nav className={cn(headerHeightClass, 'flex items-center')}>
            <Link to="/" className="text-white hover:opacity-75 hover:text-white text-2xl font-bold">
              Stoplight
            </Link>

            <Desktop items={header && header.items} />

            <Mobile items={header && header.items} />
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default withSiteData(withRouteData(Header));
