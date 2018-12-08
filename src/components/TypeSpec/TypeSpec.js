import PropTypes from 'prop-types';
import React from 'react';
import { CodeSnippet } from 'carbon-components-react';

const TypeSpec = ({
  children,
  token, 
  type, 
  size,
  weight,
  line_height,
  letter_spacing
}) => {

  return (
    <div className="ibm--row type-spec">
      <div className="type-spec__example ibm--offset-lg-4 ibm--col-lg-8 ibm--col-md-5">
        <div className={`bx--type-${token}`}>
          {children}

          
        </div>
      </div>
      <div className="type-spec__details ibm--col-lg-4 ibm--col-md-3">
        <h4>{token}</h4>
        <p>
          Type: {type}<br />
          Size: {size}<br />
          Line height: {line_height}<br />
          Weight: {weight}<br />
          Letter-spacing: {letter_spacing}
        </p>
        <CodeSnippet type="inline">${token}</CodeSnippet>
      </div>
    </div>
  )
};

TypeSpec.propTypes = {
  /**
   * Token name
  */
 token: PropTypes.string,

 /**
   * Token type | mono or sans
  */
 type: PropTypes.string,

 /**
   * Token font size
  */
 size: PropTypes.string,

 /**
   * Token font weight
  */
 weight: PropTypes.string,

 /**
   * Token line height
  */
 line_height: PropTypes.string,

 /**
   * Token letter spacing
  */
 letter_spacing: PropTypes.string,
};

TypeSpec.defaultProps = {
  type: 'IBM Plex Sans',
  size: '16px / 1rem',
  line_height: '16px / 1rem',
  weight: '400 / Regular',
  letter_spacing: '.16px'
};

export default TypeSpec;
