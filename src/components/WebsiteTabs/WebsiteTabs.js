import React from 'react';
import { Tabs } from 'carbon-components-react';
import classnames from 'classnames';

/**
 * remove wrapper elements from internal content:
 * - ibm-row // row-wrapper divs generated in Markdown.js
 * - ibm-row > ibm--col* // column dives that are direct children to rows, which would be generated & placed in Markdown.js
 * */

export default class WebsiteTabs extends React.Component {
  constructor() {
    super();
    // this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      displayTabsAtSmallerBreakpoints: false,
    };
    this.tabChildren = [];
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions = () => {
    let shouldShowTabs = false;
    if (window.innerWidth <= 500) {
      if (this.tabChildren.length > 0 && this.tabChildren.length <= 2) {
        shouldShowTabs = true;
      }
    } else if (window.innerWidth <= 768) {
      if (this.tabChildren.length > 0 && this.tabChildren.length <= 3) {
        shouldShowTabs = true;
      }
    }
    this.setState({ displayTabsAtSmallerBreakpoints: shouldShowTabs });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.tabChildren = this.props.children.filter(child => {
      return child.type && child.type.displayName === 'Tab';
    });
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const classNames = classnames({
      'website-tabs': true,
      'bp-tabs-shown': this.state.displayTabsAtSmallerBreakpoints,
      'bp-tabs-not-shown': !this.state.displayTabsAtSmallerBreakpoints,
    });

    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-12 ibm--offset-lg-4">
          <div className={classNames}>
            <Tabs>{this.tabChildren}</Tabs>
          </div>
        </div>
      </div>
    );
  }
}
