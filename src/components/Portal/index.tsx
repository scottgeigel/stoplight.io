import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IPortal {
  children: any;
  className?: string;
}

export class Portal extends React.PureComponent<IPortal> {
  private el?: HTMLDivElement;

  constructor(props: any) {
    super(props);

    if (typeof document === 'undefined') return;

    this.el = document.createElement('div');

    if (props.className) {
      this.el.className = props.className;
    }
  }

  public componentDidMount() {
    if (!this.el) return;

    document.body.appendChild(this.el);
  }

  public componentWillUnmount() {
    if (!this.el) return;

    document.body.removeChild(this.el);
  }

  public render() {
    if (!this.el) return null;

    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
