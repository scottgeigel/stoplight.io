import React, { Component } from 'react';

import { About } from '@containers/About';
import { CaseStudies } from '@containers/CaseStudies';
import { CaseStudy } from '@containers/CaseStudy';
import { Form } from '@containers/Form';
import { Home } from '@containers/Home';
import { Landing } from '@containers/Landing';
import { Pricing } from '@containers/Pricing';
import { Subpage } from '@containers/Subpage';

import Settings from '@components/Settings';

import { Renderer as MarkdownRenderer } from '@utils/markdown';

import { config } from './config';

const convertMarkdownToHTML = data => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === 'object') {
        data[key] = convertMarkdownToHTML(data[key]);
      } else if (key === 'description' || key === 'body') {
        data[key] = MarkdownRenderer(data[key]);
      }
    }
  }

  return data;
};

const templates = {
  about: About,
  'case-studies': CaseStudies,
  'case-study': CaseStudy,
  hubspot: Form,
  home: Home,
  landings: Landing,
  pricing: Pricing,
  subpage: Subpage,

  settings: Settings,
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

        return <Template {...convertMarkdownToHTML(entry.getIn(['data']).toJS())} />;
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
