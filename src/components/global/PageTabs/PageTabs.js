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
    console.log(slug);
    console.log(currentTab);
    console.log(linkSlug);
    tabs.forEach(tab => {
      pageTabs.push(
        <li className={tab === currentTab ? 'selected' : ''} key={tab}>
          <Link to={`${linkSlug}${tab.replace(' ', '-')}`}>{tab}</Link>
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
