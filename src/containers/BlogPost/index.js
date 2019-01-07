import React from 'react';
import { withRouteData } from 'react-static';

import SubPage from '@templates/subpage';

const BlogPost = props => {
  return <SubPage {...props} />;
};

export default withRouteData(BlogPost);
