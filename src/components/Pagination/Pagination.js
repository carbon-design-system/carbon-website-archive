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
  titleToSlug = string => {
    return string.toLowerCase().replace(' ', '-');
  };

  /**
   * e.g. converts "item-name" to "Item Name"
   */
  slugToTitle = string => {
    if (string.charAt(0) === '/') {
      string = string.substr(1);
    }
    let newString = string
      .split('/')
      .pop()
      .split('-')
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
    return newString.join(' ');
  };

  slugToTitleWithPath = string => {
    if (string.charAt(0) === '/') {
      string = string.substr(1);
    }
    let newString = string
      .split('/')
      .map(word => {
        return this.slugToTitle(word);
      })
      .join(': ');
    return newString;
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

  //TODO: when linking to other section or subnav, check for tabs inside the markdown file
  //TODO: add checks for if page is internal

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

    let prevPagePath, prevPageTitle, nextPagePath, nextPageTitle;

    console.log('\n\n\n\n ☸️ Pagination.js');
    console.group();
    console.log('currentTabs:');
    console.log(currentTabs);
    console.log('currentPage:');
    console.log(currentPage);
    console.log('currentPage:');
    console.log(currentPage);
    console.groupEnd();

    /**
     * Neighboring tabs:
     * tabs aren't in navigation. so lets first check
     * if we have any sibling tabs to go to thru in props,
     * before we bother looking at the navigation data
     */
    if (currentTabs) {
      currentTabs.forEach((tab, index) => {
        if (this.titleToSlug(tab) === currentPage) {
          if (currentTabs[index - 1]) {
            prevPagePath =
              currentParentPath +
              '/' +
              this.titleToSlug(currentTabs[index - 1]);
          }
          if (currentTabs[index + 1]) {
            nextPagePath =
              currentParentPath +
              '/' +
              this.titleToSlug(currentTabs[index + 1]);
          }
        }
      });
    }

    /**
     * if we have/are in a subnav, we need to
     * find the previous and next siblings in the  subnav
     * if the above didn't assign a value to prevPagePath,
     * that means we were either at the first tab, or that there are no tabs on the current page.
     */
    if (
      currentHasSubnav &&
      (prevPagePath === undefined || nextPagePath === undefined)
    ) {
      const currentSubnavArray = Object.keys(
        navigation[currentSection]['sub-nav']
      );
      const currentSubnavIndex = this.getKeyByValue(
        currentSubnavArray,
        currentSubnavItem
      );
      console.group();
      console.log('currentSubnavArray:');
      console.log(currentSubnavArray);
      console.log('currentSubnavItem:');
      console.log(currentSubnavItem);
      console.log('currentSubnavIndex:');
      console.log(currentSubnavIndex);

      if (prevPagePath === undefined && currentSubnavIndex > 0) {
        const prevPathSlugPart = currentSubnavArray[currentSubnavIndex - 1];
        prevPagePath = `/${currentSection}/${prevPathSlugPart}`;
        // const prevTitle =
        //   navigation[currentSection]['sub-nav'][
        //     currentSubnavArray[currentSubnavIndex - 1]
        //   ].title;
      }

      if (
        nextPagePath === undefined &&
        currentSubnavIndex < currentSubnavArray.length - 1
      ) {
        console.log('next subnav');
        const nextPathSlugPart =
          currentSubnavArray[parseInt(currentSubnavIndex, 10) + 1];
        nextPagePath = `/${currentSection}/${nextPathSlugPart}`;
      }
      console.groupEnd();
    }

    /**
     * if still undefined, we need to look in other sections
     */
    const sectionArray = Object.keys(navigation);
    const currentSectionIndex = this.getKeyByValue(
      sectionArray,
      currentSection
    );
    if (prevPagePath === undefined) {
      const prevSection = sectionArray[parseInt(currentSectionIndex) - 1];
      const prevSectionObject = navigation[prevSection];
      if (prevSection) {
        prevPagePath = `${prevSection}`;
        const prevHasSubnav = typeof prevSectionObject['sub-nav'] === 'object';
        let prevSubnavTarget;
        if (prevHasSubnav) {
          let prevSubnavArray = Object.keys(prevSectionObject['sub-nav']);
          prevSubnavTarget = prevSubnavArray[prevSubnavArray.length - 1];
        }
        if (prevSubnavTarget !== undefined) {
          prevPagePath += `/${prevSubnavTarget}`;
        }
      }
    }

    if (nextPagePath === undefined) {
      const nextSection = sectionArray[parseInt(currentSectionIndex) + 1];
      const nextSectionObject = navigation[nextSection];
      if (nextSection) {
        nextPagePath = `${nextSection}`;
        const nextHasSubnav = typeof nextSectionObject['sub-nav'] === 'object';
        let nextSubnavTarget;
        if (nextHasSubnav) {
          let nextSubnavArray = Object.keys(nextSectionObject['sub-nav']);
          nextSubnavTarget = nextSubnavArray[0];
        }
        if (nextSubnavTarget !== undefined) {
          nextPagePath += `/${nextSubnavTarget}`;
        }
      }
    }

    prevPageTitle = this.slugToTitleWithPath(prevPagePath);
    nextPageTitle = this.slugToTitleWithPath(nextPagePath);

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
