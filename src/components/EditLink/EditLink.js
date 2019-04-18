import React from 'react';
import PropTypes from 'prop-types';
import { repository } from '../../../package.json';

export default class EditLink extends React.Component {
  render() {
    const { repositoryUrl, slug, fileType } = this.props;
    const href = `${repositoryUrl}tree/master/src/content${slug}.${fileType}`;

    return (
      <div className="bx--row edit-link-container">
        <div className="bx--offset-lg-4 bx--col">
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
