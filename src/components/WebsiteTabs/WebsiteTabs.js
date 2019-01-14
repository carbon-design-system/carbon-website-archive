import React from 'react';
import { Tabs } from 'carbon-components-react';

/**
 * remove wrapper elements from internal content:
 * - ibm-row // row-wrapper divs generated in Markdown.js
 * - ibm-row > ibm--col* // column dives that are direct children to rows, which would be generated & placed in Markdown.js
 * */

export default class WebsiteTabs extends React.Component {
  render() {
    let tabChildren = [];

    this.props.children.forEach(child => {
      if (child.type && child.type.displayName == 'Tab') {
        tabChildren.push(child);
      }
    });

    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-12 ibm--offset-lg-4 website-tabs">
          <Tabs>{tabChildren}</Tabs>
        </div>
      </div>
    );
  }
}
