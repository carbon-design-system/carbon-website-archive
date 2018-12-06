import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const GridWrapper = ({
  children, 
  col_lg, 
  flex
}) => {

  const rowClasses = classNames(
    `ibm--col-lg-${col_lg}`,
    'ibm--offset-lg-4',
    {
      'ibm--flex': flex,
    }
  );

  return (
    <div className="ibm--row">
      <div className={rowClasses}>
        {children}
      </div>
    </div>
  )
};

GridWrapper.propTypes = {
  children: PropTypes.node,

  /**
   * Specify the col width at large breakpoint, default is 12
  */
  col_lg: PropTypes.string,

  /**
   * Set to true to set display:flex | flexwrap: wrap to row
  */
  flex: PropTypes.string,
};

GridWrapper.defaultProps = {
  col_lg: '12',
};

export default GridWrapper;
