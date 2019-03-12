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
  colSm,
  colMd,
  colLg,
  offsetLg,
  offsetMd,
  offsetSm,
  noGutterSm,
  noGutterMd,
  noGutterLg,
  noGutterLeftSm,
  noGutterLeftMd,
  noGutterLeftLg,
  className,
}) => {
  const colClasses = classnames({
    'ibm--no-gutter-sm': noGutterSm,
    'ibm--no-gutter-md': noGutterMd,
    'ibm--no-gutter-lg': noGutterLg,
    'ibm--no-gutter--left--sm': noGutterLeftSm,
    'ibm--no-gutter--left--md': noGutterLeftMd,
    'ibm--no-gutter--left--lg': noGutterLeftLg,
    [`ibm--offset-sm-${offsetSm}`]: offsetSm,
    [`ibm--offset-md-${offsetMd}`]: offsetMd,
    [`ibm--offset-lg-${offsetLg}`]: offsetLg,
    [`ibm--col-lg-${colLg}`]: colLg,
    [`ibm--col-lg-${colMd}`]: colMd,
    [`ibm--col-lg-${colSm}`]: colSm,
    [`${className} `]: className,
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
  colSm: PropTypes.string,
  /**
   * Specify the col width at medium breakpoint
   */
  colMd: PropTypes.string,
  /**
   * Specify the col width at large breakpoint
   */
  colLg: PropTypes.string,
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
   * Specify a no-gutter class
   */
  noGutterSm: PropTypes.boolean,
  /**
   * Specify a no-gutter class
   */
  noGutterMd: PropTypes.boolean,
  /**
   * Specify a no-gutter class
   */
  noGutterLg: PropTypes.boolean,
  /**
   * Specify a no-gutter class at small breakpoint
   */
  noGutterLeftSm: PropTypes.boolean,
  /**
   * Specify a no-gutter class at medium breakpoint
   */
  noGutterLeftMd: PropTypes.boolean,
  /**
   * Specify a no-gutter class at large breakpoint
   */
  noGutterLeftLg: PropTypes.boolean,
  /**
   * Specify a class name for column
   */
  className: PropTypes.string,
};
