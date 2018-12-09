import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PageHeader = ({
  children,
  label,
  title
}) => {
  let labelContent =
    label != null ? (
      <div className="ibm--row page-header__label-row">
        <div className="ibm--col-lg-6 ibm--offset-lg-4">
          <p className="page-header__label">{label}</p>
        </div>
      </div>
    ) : (
      null
    );

  const classNames = classnames( 'page-header', {
    'page-header--md': label != null,
  });
  
  return (
    <div className={classNames}>
      <div className="ibm--grid">
        {labelContent}
        <div className="ibm--row">
          <div className="ibm--col-lg-12 ibm--offset-lg-4">
            <h1 id="page-title" className="page-header__title">
              {title}
            </h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

PageHeader.propTypes = {
  /**
   * Pass in the children that will be rendered within the PageHeader
   */
  children: PropTypes.node,

  /**
   * Specify the label to go above the title of the page
   */
  label: PropTypes.string,

   /**
   * Specify the title for the page
   */
  title: PropTypes.string,
};

export default PageHeader;
