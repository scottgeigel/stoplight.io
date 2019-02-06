import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { init as initIcons } from 'src/utils/fontawesome';

// Your top level component
import App from './App';

// TODO: dynamically build this list by extracting used icons from yaml data files.
// might be unreliable to scan all data file structures and extract used icon names, so perhaps another data file where all used icons must be defined?
// or a util function to recurse through object and pull out all "icon" properties (JSON.stringify?)
initIcons();

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById('root')
    );
  };

  // Render!
  render(App);
  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default));
  }
}

// Export your top level component as JSX (for static rendering)
export default App;
