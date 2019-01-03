import React from 'react';
import cn from 'classnames';

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
    const { className, title, description } = this.props;
    const { isLoaded } = this.state;

    return (
      <div>
        <h2 className="text-3xl text-center">{title}</h2>
        <div className="flex justify-center flex-wrap items-center pb-12 md:pb-12">
          <div
            className="font-default opacity-75 text-xl max-w-lg mt-4 md:mt-6 mx-auto text-center"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div
          id="hubspot-form"
          className={cn('bg-white shadow rounded p-16 mx-auto', className)}
          style={{ display: isLoaded ? 'block' : 'none', width: 600 }}
        />
      </div>
    );
  }
}
