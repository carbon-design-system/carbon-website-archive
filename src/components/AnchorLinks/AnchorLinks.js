import React from 'react';
import classnames from 'classnames';

export class AnchorLinks extends React.Component {
  render() {
    const isColumn =
      React.Children.toArray(this.props.children[1].props.children).filter(
        child => child.type === 'li'
      ).length > 6;

    const classNames = classnames({
      'anchor-links': true,
      'anchor-links--small': this.props.small,
      'anchor-links--column': isColumn,
    });
    return <div className={classNames}>{this.props.children}</div>;
  }
}
