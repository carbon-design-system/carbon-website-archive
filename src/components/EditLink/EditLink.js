import React from 'react';
import PropTypes from 'prop-types';
import { repository } from '../../../package.json';

export default class EditLink extends React.Component {
  render() {
    const {repositoryUrl, slug, fileType} = this.props;
    const href = `${repositoryUrl}tree/master/src/content${slug}.${fileType}`;

    return (
      <div className="ibm--row edit-link-container">
        <div className="ibm--offset-lg-4 ibm--col">
          <a className="edit-link" href={href}>
            Edit this page on GitHub
          </a>
        </div>
      </div>
    );
  }
}

EditLink.propTypes = {
  repositoryUrl: PropTypes.string,
  fileType: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

EditLink.defaultProps = {
  repositoryUrl: repository.url,
  fileType: 'mdx',
};
