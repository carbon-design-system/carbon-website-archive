import React from 'react';
import { Tabs } from 'carbon-components-react';
import classnames from 'classnames';

export default class WebsiteTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      displayTabsAtSmallerBreakpoints: false,
    };
    this.tabChildren = [];
    this.displayTabsAtSmallerBreakpoints = false;
  }

  /**
   * check browser width. checking to see if when need to display
   * tabs or the default dropdown while at a smaller screen size
   */
  updateDimensions = () => {
    let shouldShowTabs = false;
    if (window.innerWidth < 500) {
      if (this.tabChildren.length <= 2) {
        shouldShowTabs = true;
      }
    } else if (window.innerWidth < 1056) {
      if (this.tabChildren.length <= 3) {
        shouldShowTabs = true;
      }
    }
    this.setState({ displayTabsAtSmallerBreakpoints: shouldShowTabs });
  };

  updateTabChildren = () => {
    this.tabChildren = this.props.children.filter(child => {
      return child.$$typeof !== undefined;
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateTabChildren();
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    this.updateTabChildren();

    const classNames = classnames({
      'website-tabs': true,
      'bp-tabs-shown': this.state.displayTabsAtSmallerBreakpoints,
      'bp-tabs-not-shown': !this.state.displayTabsAtSmallerBreakpoints,
    });

    return (
      <div className="bx--row">
        <div className="bx--col-lg-12 bx--offset-lg-4 bx--no-gutter">
          <div className={classNames}>
            <Tabs>{this.tabChildren}</Tabs>
          </div>
        </div>
      </div>
    );
  }
}
