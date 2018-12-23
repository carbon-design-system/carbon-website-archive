import PropTypes from 'prop-types';
import React from 'react';
import { CodeSnippet } from 'carbon-components-react';

const TypeSpec = ({ children, token, description }) => {
  return (
    <div className="ibm--row type-spec">
      <div className="type-spec__example ibm--offset-lg-4 ibm--col-lg-8 ibm--col-md-5">
        <div className={`bx--type-${token}`}>{description}</div>
      </div>
      <div className="type-spec__details ibm--col-lg-4 ibm--col-md-3">
        <h4>{token}</h4>
        <div>{children}</div>
        <CodeSnippet type="inline">${token}</CodeSnippet>
      </div>
    </div>
  );
};

TypeSpec.propTypes = {
  /**
   * Token name
   */
  token: PropTypes.string,

  /**
   * Sample text and description
   */
  description: PropTypes.string,
};

export default TypeSpec;
