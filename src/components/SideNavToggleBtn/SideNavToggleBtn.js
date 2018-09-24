import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class SideNavToggleBtn extends React.Component {
  static propTypes = {
    onToggleBtnClick: PropTypes.func,
    isOpen: PropTypes.bool,
  };

  render() {
    const { onToggleBtnClick, isOpen } = this.props;

    const classNames = classnames({
      'side-nav-toggle-btn': true,
      'side-nav-toggle-btn--closed': !isOpen,
    });

    return (
      <button
        aria-label="Toggle Side Navigation"
        onClick={onToggleBtnClick}
        className={classNames}>
        <div>
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </button>
    );
  }
}
