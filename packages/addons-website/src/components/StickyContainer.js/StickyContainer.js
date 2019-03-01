import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import classnames from 'classnames';
const { prefix } = settings;

class StickyContainer extends React.Component {
  render() {
    const { children, headerVisible, secondary } = this.props
    
    const stickyClass = classnames(
      `${prefix}--sticky-container`, {
        [`${prefix}--sticky-container-secondary`]: secondary,
        [`${prefix}--sticky-container-secondary-visible`]: headerVisible && secondary,
        [`${prefix}--sticky-container-secondary-hidden`]: !headerVisible && secondary,
      }
    )

    return <div className={stickyClass}>{children}</div>
  }
}

StickyContainer.propTypes = {
  
  // if page head is showing / hiding, toggle this on/off
  headerVisible: PropTypes.bool,

  // for items that are on pages that already have a sticky item
  secondary: PropTypes.bool
}

export default StickyContainer;
