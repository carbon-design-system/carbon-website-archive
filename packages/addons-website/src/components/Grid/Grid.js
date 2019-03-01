import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Grid = ({ children, className }) => {
  const classNames = classnames({
    'ibm--grid': true,
  });

  return (
    <div
      className={
        className !== undefined ? `${className} ${classNames}` : `${classNames}`
      }>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node,

  /**
   * Specify a class name for row
   */
  className: PropTypes.string,
};

export const Row = ({ children, className }) => {
  const classNames = classnames({
    'ibm--row': true,
  });

  return (
    <div
      className={
        className !== undefined ? `${className} ${classNames}` : `${classNames}`
      }>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node,

  /**
   * Specify a class name for row
   */
  className: PropTypes.string,
};

export const Column = ({
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
}) => {
  const colClasses = classnames({
    'ibm--bleed-sm': bleedSm,
    'ibm--bleed-md': bleedMd,
    'ibm--bleed-lg': bleedLg,
    'ibm--bleed-left-sm': bleedLeftSm,
    'ibm--bleed-left-md': bleedLeftMd,
    'ibm--bleed-left-lg': bleedLeftLg,
    [`ibm--offset-sm-${offsetSm}`]: offsetSm,
    [`ibm--offset-md-${offsetMd}`]: offsetMd,
    [`ibm--offset-lg-${offsetLg}`]: offsetLg,
    [`ibm--col-lg-${lg}`]: lg,
    [`ibm--col-lg-${md}`]: md,
    [`ibm--col-lg-${sm}`]: sm,
    [`${className} `]: className,
  });

  return <div className={colClasses}>{children}</div>;
};

Column.defaultProps = {
  lg: '12',
  bleed: false,
};

Column.propTypes = {
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
