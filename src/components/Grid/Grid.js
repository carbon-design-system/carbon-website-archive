import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class Row extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Specify a class name for row
     */
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    const classNames = classnames({
      'ibm--row': true,
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
    offsetLg: PropTypes.string,
    /**
     * Specify the col offset at medium breakpoint
     */
    offsetMd: PropTypes.string,
    /**
     * Specify the col offset at small breakpoint
     */
    offsetSm: PropTypes.string,
    /**
     * Specify a column bleed class
     */
    bleedSm: PropTypes.boolean,
    /**
     * Specify a column bleed class
     */
    bleedMd: PropTypes.boolean,
    /**
     * Specify a column bleed class
     */
    bleedLg: PropTypes.boolean,
    /**
     * Specify a column bleed class at small breakpoint
     */
    bleedLeftSm: PropTypes.boolean,
    /**
     * Specify a column bleed class at medium breakpoint
     */
    bleedLeftMd: PropTypes.boolean,
    /**
     * Specify a column bleed class at large breakpoint
     */
    bleedLeftLg: PropTypes.boolean,
    /**
     * Specify a class name for column
     */
    className: PropTypes.string,
  };

  static defaultProps = {
    offsetLg: '4',
    lg: '12',
    bleed: false,
  };

  render() {
    const {
      children,
      sm,
      md,
      lg,
      offsetLg,
      offsetMd,
      offsetSm,
      bleedSm,
      bleedMd,
      bleedLg,
      bleedLeftSm,
      bleedLeftMd,
      bleedLeftLg,
      className,
    } = this.props;

    let colClasses = '';
    if (lg) colClasses += `ibm--col-lg-${lg} `;
    if (md) colClasses += `ibm--col-md-${md} `;
    if (sm) colClasses += `ibm--col-sm-${sm} `;
    if (offsetLg) colClasses += `ibm--offset-lg-${offsetLg} `;
    if (offsetMd) colClasses += `ibm--offset-md-${offsetMd} `;
    if (offsetSm) colClasses += `ibm--offset-sm-${offsetSm} `;
    if (bleedSm) colClasses += `ibm--bleed-sm `;
    if (bleedMd) colClasses += `ibm--bleed-md `;
    if (bleedLg) colClasses += `ibm--bleed-lg `;
    if (bleedLeftSm) colClasses += `ibm--bleed-left-sm `;
    if (bleedLeftMd) colClasses += `ibm--bleed-left-md `;
    if (bleedLeftLg) colClasses += `ibm--bleed-left-lg `;
    if (className) colClasses += className;

    return <div className={colClasses}>{children}</div>;
  }
}
