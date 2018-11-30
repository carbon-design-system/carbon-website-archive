import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({
  children,
  label,
  title
}) => {
  let labelContent =
    label !== title ? (
      <h4 className="page-header__label">{label}</h4>
    ) : (
      null
    );

  return (
    <div className="page-header carbon--grid-x">
      <div className="carbon--grid-x--grid">
        <div class="bx--row">
          <div class="bx--col-lg-12 bx--offset-lg-4">
            {labelContent}
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
