import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import navigation from '../../data/navigation/navigation.json';

export default class Pagination extends React.Component {
  static propTypes = {
    /**
     * array of tabs on this current page
     */
    currentTabs: PropTypes.array,
    /**
     * the lower-case slug-friendly name of the page
     */
    currentPage: PropTypes.string,
    /**
     * the full slug of the current page*/
    slug: PropTypes.string,
  };

  /**
   * e.g.converts "Item Name" to "item-name"
   */
  tabNameToUrl = string => {
    return string.toLowerCase().replace(' ', '-');
  };

  /**
   * e.g. converts "item-name" to "Item Name"
   */
  tabUrlToName = string => {
    if (string.charAt(0) === '/') {
      string = string.substr(1);
    }
    let newString = string
      .split('/')
      .pop()
      .split('-')
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
    return newString.join(' ');
  };

  getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  };

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
    const currentTabs = this.props.currentTabs;
    const currentPage = this.props.currentPage;
    const slug = this.props.slug;
    let currentParentPath = slug.split('/');
    currentParentPath.length = currentParentPath.length - 1;
    currentParentPath = currentParentPath.join('/');
    const currentSection = slug.substr(1).split('/')[0];
    const currentHasSubnav =
      typeof navigation[currentSection]['sub-nav'] === 'object';
    let currentSubnavItem;
    if (currentHasSubnav) {
      currentSubnavItem = slug.substr(1).split('/')[1];
    }
    //TODO: add checks for if page is internal
    console.log('\n\n\n\n📃 Pagination.js:');
    console.log('Gatsby <Location> location: ');
    console.log(location);
    console.log(`currentTabs: ${currentTabs}`);
    console.log(`currentPage: ${currentPage}`);
    console.log(`slug: ${slug}`);
    console.log(`currentParentPath: ${currentParentPath}`);
    console.log(`currentSection: ${currentSection}`);
    console.log(`currentHasSubnav: ${currentHasSubnav}`);
    console.log(`currentSubnavItem: ${currentSubnavItem}`);

    let prevPagePath;
    let prevPageTitle;
    let nextPagePath;
    let nextPageTitle;

    /**
     * Neighboring tabs:
     * tabs aren't in navigation. so lets first check if we have any sibling tabs to go to thru props, before we bother looking at the navigation data
     */
    if (currentTabs !== null) {
      currentTabs.forEach((tab, index) => {
        if (this.tabNameToUrl(tab) === currentPage) {
          if (currentTabs[index - 1]) {
            prevPagePath =
              currentParentPath +
              '/' +
              this.tabNameToUrl(currentTabs[index - 1]);
            prevPageTitle = currentTabs[index - 1];
          }
          if (currentTabs[index + 1]) {
            nextPagePath =
              currentParentPath +
              '/' +
              this.tabNameToUrl(currentTabs[index + 1]);
            nextPageTitle = currentTabs[index] + ': ' + currentTabs[index + 1];
          }
        }
      });
    }

    /**
     * find the previous and next siblings in the  subnav
     * if the above didn't assign a value to prevPagePath,
     * that means we were either at the first tab, or that there are no tabs on the current page.
     */
    if (
      currentHasSubnav &&
      (prevPagePath === undefined || nextPagePath === undefined)
    ) {
      const subnavArray = Object.keys(navigation[currentSection]['sub-nav']);
      const currentSubnavIndex = this.getKeyByValue(
        subnavArray,
        currentSubnavItem
      );

      if (prevPagePath === undefined && currentSubnavIndex > 0) {
        const prevPathSlugPart = subnavArray[currentSubnavIndex - 1];
        const prevTitle =
          navigation[currentSection]['sub-nav'][
            subnavArray[currentSubnavIndex - 1]
          ].title;
        prevPagePath = `/${currentSection}/${prevPathSlugPart}`;
        prevPageTitle = `${prevTitle}`;
      }

      if (
        nextPagePath === undefined &&
        currentSubnavIndex < subnavArray.length - 1
      ) {
        const nextPathSlugPart =
          subnavArray[parseInt(currentSubnavIndex, 10) + 1];
        const nextTitle =
          navigation[currentSection]['sub-nav'][
            subnavArray[parseInt(currentSubnavIndex, 10) + 1]
          ].title;
        nextPagePath = `/${currentSection}/${nextPathSlugPart}`;
        nextPageTitle = `${nextTitle}`;
      }
    }

    /**
     * if still undefined, we need to look in other sections
     */
    if (prevPagePath === undefined) {
      const sectionArray = Object.keys(navigation);
      const currentSectionIndex = this.getKeyByValue(
        sectionArray,
        currentSection
      );
      const prevSection = sectionArray[parseInt(currentSectionIndex) - 1];
      const prevSectionObject = navigation[prevSection];
      prevPagePath = `${prevSection}`;
      prevPageTitle = prevSectionObject.title;

      const prevHasSubnav = typeof prevSectionObject['sub-nav'] === 'object';
      let prevSubnavArray = Object.keys(prevSectionObject['sub-nav']);
      let prevSubnavTarget;
      if (prevHasSubnav) {
        prevSubnavTarget = prevSubnavArray[prevSubnavArray.length - 1];
      }
      if (prevSubnavTarget !== undefined) {
        prevPagePath += `/${prevSubnavTarget}`;
        prevPageTitle += `: ${
          prevSectionObject['sub-nav'][prevSubnavTarget].title
        }`;
      }
    }

    return (
      <div className="pagination-controls">
        {this.renderPaginationLinks(
          prevPagePath,
          prevPageTitle,
          nextPagePath,
          nextPageTitle
        )}
      </div>
    );
  }
}
