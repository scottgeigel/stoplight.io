import React from 'react';
import { withRouteData } from 'react-static';

import SubPage from '@templates/subpage';

const CaseStudy = props => {
  return <SubPage {...props} />;
};

export default withRouteData(CaseStudy);
