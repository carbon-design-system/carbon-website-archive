import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class PageTabs extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    slug: PropTypes.string,
    currentTab: PropTypes.string,
  };

  render() {
    const { tabs, slug, currentTab } = this.props;
    let linkSlug = slug.substring(0, slug.indexOf(currentTab));
    let pageTabs = [];
    tabs.forEach(tab => {
      pageTabs.push(
        <li className={tab.toLowerCase().replace(' ', '-') === currentTab ? 'selected' : ''} key={tab}>
          <Link to={`${linkSlug}${tab.toLowerCase().replace(' ', '-')}`}>{tab}</Link>
        </li>
      );
    });
    return (
      <nav className="page-tabs">
        <ul className="page-tabs__list">{pageTabs}</ul>
      </nav>
    );
  }
}
