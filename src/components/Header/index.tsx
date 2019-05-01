import cn from 'classnames';
import * as React from 'react';
import Headroom from 'react-headroom';
import { Head, withRouteData, withSiteData } from 'react-static';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'src/components/Link';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const headerHeightClass = 'h-20';

export interface IHeaderLink {
  title: string;
  icon: string;
  titleColor: string;
  href: string;
}

export interface IHeaderItem {
  title: string;
  href: string;
  isButton?: boolean;
  hideMobile?: boolean;
  className?: string;
  links?: IHeaderLink[];
  width?: number;
  icon?: IconProp;
}

export interface IHeader {
  header: {
    items: IHeaderItem[];
  };
  meta: any;
  color?: string;
}

export interface IHeaderState {
  unpinned: boolean;
}

class Header extends React.Component<IHeader, IHeaderState> {
  public state: IHeaderState = {
    unpinned: false,
  };

  constructor(props) {
    super(props);

    this.onUnpin = this.onUnpin.bind(this);
    this.onUnfix = this.onUnfix.bind(this);
  }

  public onUnpin() {
    this.setState({ unpinned: true });
  }

  public onUnfix() {
    this.setState({ unpinned: false });
  }

  public render() {
    const { header, meta, color } = this.props;
    const { unpinned } = this.state;
    const bgClassName = unpinned ? `bg-${color || 'black'}` : '';
    let headerItems = (header && header.items) || [];

    if (headerItems.length) {
      if (unpinned) {
        headerItems = headerItems.slice();
      }

      // Sign In / Sign Up is impure as it breaks configuration -> rendering flow
      // Keeping it small
      for (let i = 0; i < headerItems.length; i++) {
        const item = headerItems[i];
        if (item.title === 'Sign In') {
          item.className = 'sign-in-link';
          if (unpinned) {
            headerItems[i] = {
              ...item,
              title: 'Sign Up',
              className: `${item.className || ''} alternate--signup`,
            };
          }
          break;
        }
      }
    }

    return (
      <React.Fragment>
        <Head key="meta">
          <title>{meta && meta.title}</title>
        </Head>
        <header key="header" className="absolute z-40 pin-t pin-l pin-r">
          <Headroom
            disableInlineStyles={true}
            downTolerance={65}
            onUnpin={this.onUnpin}
            onUnfix={this.onUnfix}
            className={cn(bgClassName)}
          >
            <div className="container">
              <nav className={cn(headerHeightClass, 'flex items-center')}>
                <Link to="/" className="text-white hover:opacity-75 hover:text-white text-2xl font-bold">
                  Stoplight
                </Link>

                <Desktop items={headerItems} />

                <Mobile items={headerItems} />
              </nav>
            </div>
          </Headroom>
        </header>
      </React.Fragment>
    );
  }
}

export default withSiteData(withRouteData(Header));
