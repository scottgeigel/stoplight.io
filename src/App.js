import React from 'react';
import Routes from 'react-static-routes';
import { Router } from 'react-static';

import Analytics from 'src/components/Analytics';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import 'src/styles/app.css';
import 'src/styles/app.scss';

const AppContent = () => {
  return [<Header key="1" />, <Routes key="2" />, <Footer key="3" />];
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <Analytics>
          <AppContent />
        </Analytics>
      </Router>
    );
  }
}

export default App;
