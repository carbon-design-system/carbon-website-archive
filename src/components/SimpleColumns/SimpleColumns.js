import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class SimpleColumns extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * gutter between columns
     */
    gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  render() {
    const { children, className } = this.props;

    const classNames = classnames({
      'simple-columns--wrapper': true,
      'simple-columns--use-gutter': true,
    });

    return (
      <div
        className={
          className !== undefined
            ? `${className} ${classNames}`
            : `${classNames}`
        }>
        {children}
      </div>
    );
  }
}
