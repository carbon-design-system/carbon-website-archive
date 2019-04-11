import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const Grid = ({ children, className }) => {
  return (
    <div className={classnames('bx--grid', className)}>
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
  return (
    <div className={classnames('bx--row', className)}>
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
  noGutterSmLeft,
  noGutterMdLeft,
  noGutterLgLeft,
  className,
}) => {
  const colClasses = classnames({
    'bx--no-gutter-sm': noGutterSm,
    'bx--no-gutter-md': noGutterMd,
    'bx--no-gutter-lg': noGutterLg,
    'bx--no-gutter-sm--left': noGutterSmLeft,
    'bx--no-gutter-md--left': noGutterMdLeft,
    'bx--no-gutter-lg--left': noGutterLgLeft,
    [`bx--offset-sm-${offsetSm}`]: offsetSm,
    [`bx--offset-md-${offsetMd}`]: offsetMd,
    [`bx--offset-lg-${offsetLg}`]: offsetLg,
    [`bx--col-lg-${colLg}`]: colLg,
    [`bx--col-md-${colMd}`]: colMd,
    [`bx--col-sm-${colSm}`]: colSm,
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
