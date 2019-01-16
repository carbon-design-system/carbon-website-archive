import React from 'react';
import { Tabs } from 'carbon-components-react';
import classnames from 'classnames';

/**
 * remove wrapper elements from internal content:
 * - ibm-row // row-wrapper divs generated in Markdown.js
 * - ibm-row > ibm--col* // column dives that are direct children to rows, which would be generated & placed in Markdown.js
 * */

export default class WebsiteTabs extends React.Component {
  render() {
    let tabChildren = this.props.children.filter(child => {
      return child.type && child.type.displayName === 'Tab';
    });

    console.log('!! WebsiteTabs !!');

    const showTabsAtSmallSize = () => {
      let shouldShowTabs = false;
      console.log('show tabs??');
      console.log(window.innerWidth);
      console.log(tabChildren.length);
      if (window.innerWidth <= 500) {
        console.log('📱📱📱 small breakpoint!!');
        if (tabChildren.length <= 2) {
          shouldShowTabs = true;
        }
      } else if (window.innerWidth <= 768) {
        console.log('🖥🖥🖥🖥 medium breakpoint!!');
        if (tabChildren.length <= 3) {
          shouldShowTabs = true;
        }
      }
      return shouldShowTabs;
    };

    const classNames = classnames({
      'website-tabs': true,
      'bp-tabs-shown': showTabsAtSmallSize(),
      'bp-tabs-not-shown': !showTabsAtSmallSize(),
    });

    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-12 ibm--offset-lg-4">
          <div className={classNames}>
            <Tabs>{tabChildren}</Tabs>
          </div>
        </div>
      </div>
    );
  }
}
