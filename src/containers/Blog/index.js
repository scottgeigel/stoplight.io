import React from 'react';
import { withRouteData } from 'react-static';

import ListPage from '@templates/list-page';

const Blog = props => {
  return <ListPage {...props} />;
};

export default withRouteData(Blog);
