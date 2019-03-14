import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const GridWrapper = ({
  children,
  col_lg,
  col_md,
  col_sm,
  flex,
  bleed,
  className,
}) => {
  const rowClasses = classNames(
    `ibm--col-lg-${col_lg}`,
    `ibm--col-md-${col_md}`,
    `ibm--col-sm-${col_sm}`,
    'ibm--offset-lg-4',
    {
      'flex-wrap': flex,
      'ibm--col-bleed': bleed,
    },
    className
  );

  return (
    <div className="ibm--row">
      <div className={rowClasses}>{children}</div>
    </div>
  );
};

GridWrapper.propTypes = {
  children: PropTypes.node,

  /**
   * Specify the col width at large breakpoint, default is 12
   */
  col_lg: PropTypes.string,

  /**
   * Specify the col width at medium breakpoint, default is 8
   */
  col_md: PropTypes.string,

  /**
   * Specify the col width at small breakpoint, default is 4
   */
  col_sm: PropTypes.string,

  /**
   * Set to true to set display:flex | flexwrap: wrap to row
   */
  flex: PropTypes.string,

  /**
   * Set to true to remove col padding
   */
  bleed: PropTypes.string,
};

GridWrapper.defaultProps = {
  col_lg: '12',
  col_md: '8',
  col_sm: '4',
};

export default GridWrapper;
