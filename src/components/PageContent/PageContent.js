import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'carbon-components-react';

export default class PageContent extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <div className="page-content">{children}</div>;
  }
}
 