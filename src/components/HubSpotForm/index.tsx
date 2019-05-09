import cn from 'classnames';
import * as React from 'react';

export interface IHubSpotForm {
  portalId: string;
  formId: string;
  className?: string;
  style?: object;
}
export interface IHubSpotFormState {
  isLoaded: boolean;
}

export class HubSpotForm extends React.Component<IHubSpotForm, IHubSpotFormState> {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  public componentDidMount() {
    if ((window as any).hbspt) {
      this.createForm();
    } else {
      this.loadScript();
    }

    window.addEventListener('message', handleHubspotFormCallback);
  }

  public componentWillUnmount() {
    window.removeEventListener('message', handleHubspotFormCallback);
  }

  public createForm = () => {
    const { portalId, formId } = this.props;

    if (!(window as any).hbspt || !portalId || !formId) {
      return;
    }

    (window as any).hbspt.forms.create({
      target: '#hubspot-form',
      portalId,
      formId,
    });

    this.setState({ isLoaded: true });
  };

  public loadScript = () => {
    const script = document.createElement(`script`);
    script.defer = true;
    script.onload = () => {
      this.createForm();
    };
    script.src = `//js.hsforms.net/forms/v2.js`;

    document.head.appendChild(script);
  };

  public render() {
    const { className, style } = this.props;
    const { isLoaded } = this.state;

    return (
      <div
        id="hubspot-form"
        className={cn('bg-white shadow rounded mx-auto md:overflow-hidden', className)}
        style={{ display: isLoaded ? 'block' : 'none', maxWidth: 600, ...style }}
      />
    );
  }
}

function handleHubspotFormCallback(e) {
  if (e.data.type === 'hsFormCallback' && e.data.eventName === 'onFormSubmit') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'Hubspot Demo Form',
      formId: e.data.id,
    });
  }
}
