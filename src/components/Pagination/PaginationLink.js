import React from 'react';
import { Link } from 'gatsby';

export default class PaginationLink extends React.Component {
  renderPaginationLinks = (prevPath, prevName, nextPath, nexName) => {
    return (
      <>
        {prevPath && (
          <Link
            className="pagination-link pagination-link-previous"
            to={prevPath}>
            <span className="target-page-direction">Previous:</span>
            <span className="target-page-name">{prevName}</span>
          </Link>
        )}
        {nextPath && (
          <Link className="pagination-link pagination-link-next" to={nextPath}>
            <span className="target-page-direction">Next:</span>
            <span className="target-page-name">{nexName}</span>
          </Link>
        )}
      </>
    );
  };

  render() {
    return '';
  }
}
