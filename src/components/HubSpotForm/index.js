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

export class HubSpotForm extends React.Component {
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
    const { className, title, description, isLight } = this.props;
    const { isLoaded } = this.state;

    return (
      <div className="w-full">
        {title && <h2 className="text-3xl text-center">{title}</h2>}
        {description && <div className="flex justify-center flex-wrap items-center pb-12 md:pb-12">
          <div
            className="font-default opacity-75 text-xl max-w-lg mt-4 md:mt-6 mx-auto text-center"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>}

        <div
          id="hubspot-form"
          className={cn('mx-auto', className, {
            'bg-white shadow rounded p-16 md:p-4 md:overflow-hidden': !isLight
          })}
          style={{ display: isLoaded ? 'block' : 'none', maxWidth: 600 }}
        />
      </div>
    );
  }
}
