import React from 'react';
import cn from 'classnames';

function handleHubspotFormCallback(e) {
  if (e.data.type === 'hsFormCallback' && e.data.eventName === 'onFormSubmit') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'Hubspot Demo Form',
      formId: e.data.id,
    });
  }
}

export class HubSpotFormLight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    if (window.hbspt) {
      this.createForm();
    } else {
      this.loadScript();
    }

    window.addEventListener('message', handleHubspotFormCallback);
  }

  componentWillUnmount() {
    window.removeEventListener('message', handleHubspotFormCallback);
  }

  createForm = () => {
    const { portalId, formId } = this.props;

    if (!window.hbspt || !portalId || !formId) {
      return;
    }

    window.hbspt.forms.create({
      target: '#hubspot-form',
      portalId,
      formId,
    });

    this.setState({ isLoaded: true });
  };

  loadScript = () => {
    const script = document.createElement(`script`);
    script.defer = true;
    script.onload = () => {
      this.createForm();
    };
    script.src = `//js.hsforms.net/forms/v2.js`;

    document.head.appendChild(script);
  };

  render() {
    const { className } = this.props;
    const { isLoaded } = this.state;

    return (
      <div
        id="hubspot-form"
        className={cn('mx-auto', className)}
        style={{ display: isLoaded ? 'block' : 'none', maxWidth: 600 }}
      />
    );
  }
}
