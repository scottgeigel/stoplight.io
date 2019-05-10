import React, { Component } from 'react';

import { About } from 'src/containers/About';
import { Form } from 'src/containers/Form';
import { Home } from 'src/containers/Home';
import { Landing } from 'src/containers/Landing';
import { Pricing } from 'src/containers/Pricing';
import { Subpage } from 'src/containers/Subpage';
import { List } from 'src/containers/Lists';

import Settings from 'src/components/Settings';

import { convertMarkdownToHTML } from 'src/utils/markdown';

import { config } from './config';

const templates = {
  settings: Settings,

  form: Form,
  about: About,
  home: Home,
  pricing: Pricing,

  lists: List,
  author: List,
  landings: Landing,

  subpage: Subpage,
  caseStudy: Subpage,
  blogPost: Subpage,
};

import appStyles from '!css-loader!./styles.css';

class Admin extends Component {
  componentDidMount() {
    if (typeof window === 'undefined') {
      return;
    }

    window.netlify = require('netlify-cms');
    window.CMS = window.netlify.default;

    window.netlifyIdentity = require('netlify-identity-widget');
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        window.netlifyIdentity.open('login'); // open the modal to the login tab
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      }
    });

    window.netlifyIdentity.init();
    window.netlify.init({ config });

    window.CMS.registerPreviewStyle(appStyles.toString(), { raw: true });

    const FontawesomeWidget = require('netlify-cms-widget-fontawesome');
    window.CMS.registerWidget('fontawesome-solid', FontawesomeWidget.Solid, FontawesomeWidget.Preview);
    window.CMS.registerWidget('fontawesome-brand', FontawesomeWidget.Brands, FontawesomeWidget.Preview);

    Object.keys(templates).forEach(collectionName => {
      window.CMS.registerPreviewTemplate(collectionName, ({ entry }) => {
        const Template = templates[collectionName];

        const props = entry.getIn(['data']).toJS();

        return <Template {...convertMarkdownToHTML(props, { includeToc: props.includeToc })} />;
      });
    });

    // Hack to make this work
    document.getElementById('root').remove();
  }

  render() {
    return <div />;
  }
}

export default Admin;
