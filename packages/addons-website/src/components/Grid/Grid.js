import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Grid = ({ children, className }) => {
  return <div className={classnames('ibm--grid', className)}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node,

  /**
   * Specify a class name for row
   */
  className: PropTypes.string,
};

export const Row = ({ children, className }) => {
  return <div className={classnames('ibm--row', className)}>{children}</div>;
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
  colSm,
  colMd,
  colLg,
  offsetLg,
  offsetMd,
  offsetSm,
  noGutterSm,
  noGutterMd,
  noGutterLg,
  noGutterSmLeft,
  noGutterMdLeft,
  noGutterLgLeft,
  className,
}) => {
  const colClasses = classnames({
    'ibm--no-gutter-sm': noGutterSm,
    'ibm--no-gutter-md': noGutterMd,
    'ibm--no-gutter-lg': noGutterLg,
    'ibm--no-gutter-sm--left': noGutterSmLeft,
    'ibm--no-gutter-md--left': noGutterMdLeft,
    'ibm--no-gutter-lg--left': noGutterLgLeft,
    [`ibm--offset-sm-${offsetSm}`]: offsetSm,
    [`ibm--offset-md-${offsetMd}`]: offsetMd,
    [`ibm--offset-lg-${offsetLg}`]: offsetLg,
    [`ibm--col-lg-${colLg}`]: colLg,
    [`ibm--col-md-${colMd}`]: colMd,
    [`ibm--col-sm-${colSm}`]: colSm,
    [className]: className,
  });

  return <div className={colClasses}>{children}</div>;
};

Column.defaultProps = {
  colLg: '12',
  bleed: false,
};

Column.propTypes = {
  children: PropTypes.node,
  /**
   * Specify the col width at small breakpoint
   */
  colSm: PropTypes.number,
  /**
   * Specify the col width at medium breakpoint
   */
  colMd: PropTypes.number,
  /**
   * Specify the col width at large breakpoint
   */
  colLg: PropTypes.number,
  /**
   * Specify the col offset at large breakpoint
   */
  offsetLg: PropTypes.number,
  /**
   * Specify the col offset at medium breakpoint
   */
  offsetMd: PropTypes.number,
  /**
   * Specify the col offset at small breakpoint
   */
  offsetSm: PropTypes.number,
  /**
   * Specify a no-gutter class
   */
  noGutterSm: PropTypes.bool,
  /**
   * Specify a no-gutter class
   */
  noGutterMd: PropTypes.bool,
  /**
   * Specify a no-gutter class
   */
  noGutterLg: PropTypes.bool,
  /**
   * Specify a no-gutter class at small breakpoint
   */
  noGutterSmLeft: PropTypes.bool,
  /**
   * Specify a no-gutter class at medium breakpoint
   */
  noGutterMdLeft: PropTypes.bool,
  /**
   * Specify a no-gutter class at large breakpoint
   */
  noGutterLgLeft: PropTypes.bool,
  /**
   * Specify a class name for column
   */
  className: PropTypes.string,
};
