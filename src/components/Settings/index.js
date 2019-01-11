import React from 'react';

import { Header } from '../Header';
import { ActionBar } from '../ActionBar';
import { Footer } from '../Footer';

// Only used for admin panel
export default ({ header, actionBar, footer }) => {
  return (
    <div className="bg-black">
      <Header key="header" header={header} />
      <div style={{ height: 100 }} />
      <ActionBar key="actionBar" {...actionBar} />
      <div style={{ height: 100 }} />
      <Footer key="footer" footer={footer} />
    </div>
  );
};
