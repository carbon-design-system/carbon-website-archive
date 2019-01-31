import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class Grid extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * set grid background color
     */
    background: PropTypes.string,

    /**
     * Specify a class name for grid wrapper
     */
    className: PropTypes.string,
  };

  render() {
    const { children, className, background, margin } = this.props;

    const classNames = classnames({
      background: true,
      'background--black': background === 'black',
      'background--white': background === 'white',
      'background--gray-10': background === 'gray-10',
      'background--gray-20': background === 'gray-20',
      'background--gray-80': background === 'gray-80',
      'background--gray-100': background === 'gray-100',
      'background--magenta-20': background === 'magenta-20',
      'background--inverse':
        (background === 'black') |
        (background === 'gray-100') |
        (background === 'gray-80'),
    });

    return (
      <div
        className={
          className !== undefined
            ? `${className} ${classNames}`
            : `${classNames}`
        }>
        <div className="ibm--grid">
          <div className="ibm--row">{children}</div>
        </div>
      </div>
    );
  }
}

export class Column extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * Specify the col width at small breakpoint
     */
    sm: PropTypes.string,
    /**
     * Specify the col width at medium breakpoint
     */
    md: PropTypes.string,
    /**
     * Specify the col width at large breakpoint
     */
    lg: PropTypes.string,
    /**
     * Specify the col offset at large breakpoint
     */
    offset_lg: PropTypes.string,
    /**
     * Specify the col offset at medium breakpoint
     */
    offset_md: PropTypes.string,
    /**
     * Specify a left border
     */
    border: PropTypes.string,
    /**
     * Specify a text align, default is left
     */
    text_align: PropTypes.string,
    /**
     * Specify an image bleed
     */
    bleed: PropTypes.boolean,
  };

  render() {
    const {
      children,
      sm,
      md,
      lg,
      offset_lg,
      offset_md,
      border,
      text_align,
      bleed,
    } = this.props;
    let classNames = '';
    if (border) classNames += `ibm--col-border `;
    if (text_align === 'right') classNames += `ibm--col-right `;
    if (lg) classNames += `ibm--col-lg-${lg} `;
    if (md) classNames += `ibm--col-md-${md} `;
    if (sm) classNames += `ibm--col-sm-${sm} `;
    if (offset_lg) classNames += `ibm--offset-lg-${offset_lg} `;
    if (offset_md) classNames += `ibm--offset-md-${offset_md} `;
    if (bleed) classNames += `ibm--col-bleed `;

    return <div className={classNames}>{children}</div>;
  }
}
