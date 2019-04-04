import React from 'react';
import { withRouter } from 'react-static';

class Analytics extends React.Component {
  componentDidMount() {
    if (typeof window === 'undefined') {
      return;
    }

    /**
     * If you navigate to index.html with JS disabled, you will see the correct page is loaded.
     * But the route data needed to mount this page won't be found since it's key'd by pathname.
     * We can get around this by removing index.html from the history state.
     */
    if (/\/index\.html/.test(window.location.pathname)) {
      this.props.history.replace(window.location.pathname.replace('/index.html', ''));
    }

    if (window.Intercom) {
      window.Intercom('boot');
    }

    this.sendPageView(this.props.location);
    this.props.history.listen(this.sendPageView);
  }

  componentWillUnmount() {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.Intercom) {
      window.Intercom('shutdown');
    }
  }

  sendPageView = location => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window._hsq) {
      const _hsq = (window._hsq = window._hsq || []);
      _hsq.push(['setPath', location.pathname]);
      _hsq.push(['trackPageView']);
    }

    if (window.Intercom) {
      window.Intercom('update');
    }
  };

  render() {
    return this.props.children;
  }
}

export default withRouter(Analytics);
