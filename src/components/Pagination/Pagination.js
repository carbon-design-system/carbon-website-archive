import React from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import navigation from '../../data/navigation/navigation.json';

export default class Pagination extends React.Component {
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
    let prevPageName;
    let nextPagePath;
    let nextPageName;

    /**
     *
     * Logic to find previous and next sections, and assign prev/next
     *
     *  */

    // tabs aren't in navigation. so lets first check if we have any sibling tabs to go to thru props, before we bother looking at the navigation data
    if (currentTabs !== null) {
      currentTabs.forEach((tab, index) => {
        if (this.tabNameToUrl(tab) === currentPage) {
          if (currentTabs[index - 1]) {
            prevPagePath =
              currentParentPath +
              '/' +
              this.tabNameToUrl(currentTabs[index - 1]);
            prevPageName = currentTabs[index - 1];
          }
          if (currentTabs[index + 1]) {
            nextPagePath =
              currentParentPath +
              '/' +
              this.tabNameToUrl(currentTabs[index + 1]);
            nextPageName = currentTabs[index + 1];
          }
        }
      });
    }

    /**
     * find the  previous sibling item in the current subnav
     * if the above didn't assign a value to prevPagePath,
     * that means we were either at the first tab, or that there are no tabs on the current page.
     */

    if (prevPagePath === undefined && currentHasSubnav) {
      console.log('TESTING OBJECT KEYS');
      const subnavArray = Object.keys(navigation[currentSection]['sub-nav']);
      console.log(subnavArray);
      console.log(
        subnavArray[this.getKeyByValue(subnavArray, currentSubnavItem)]
      );
      prevPagePath = `/${currentSection}/${
        subnavArray[this.getKeyByValue(subnavArray, currentSubnavItem) - 1]
      }`;
      // subnavArray.forEach((item, index) => {
      //   console.log(item);
      //   console.log(subnavArray[index]);
      //   console.log(navigation[currentSection]['sub-nav'][item]);
      //   console.log(navigation[currentSection]['sub-nav'][subnavArray[index]]);
      // });
    }

    // prevPagePath = `/${currentSection}/${subnavArray[index]}`;
    // prevPageName = `${this.tabUrlToName(
    //   currentSection
    // )}:  ${this.tabUrlToName(prevSubnavItem)}`;
    // for (let subnavItem in navigation[currentSection]['sub-nav']) {
    //   if (subnavItem === currentSubnav) {
    //     break;
    //   }
    //   prevSubnavItem = subnavItem; // this ends up getting assigned the previous subnav item!
    //   if (prevSubnavItem !== undefined) {
    //     console.log(`currentParentPath: ${currentParentPath}`);
    //     prevPagePath = `/${currentSection}/${prevSubnavItem}`;
    //     prevPageName = `${this.tabUrlToName(
    //       currentSection
    //     )}:  ${this.tabUrlToName(prevSubnavItem)}`;
    //   }
    // }

    // if (prevPagePath === undefined) {
    //   if (currentHasSubnav) {
    //     let prevSubnavItem;
    //     for (let subnavItem in navigation[currentSection]['sub-nav']) {
    //       if (subnavItem === currentSubnav) {
    //         break;
    //       }
    //       prevSubnavItem = subnavItem; // this ends up getting assigned the previous subnav item!
    //       if (prevSubnavItem !== undefined) {
    //         console.log(`currentParentPath: ${currentParentPath}`);
    //         prevPagePath = `/${currentSection}/${prevSubnavItem}`;
    //         prevPageName = `${this.tabUrlToName(
    //           currentSection
    //         )}:  ${this.tabUrlToName(prevSubnavItem)}`;
    //       }
    //     }
    //   }
    // }

    /**
     * find the next sibling in the current subnav
     */
    // if (nextPagePath === undefined) {
    //   if (currentHasSubnav) {
    //     let nextSubnavItem;
    //     console.log('LOOPING navigation > current subnav');
    //     let matcher;
    //     for (let subnavItem in navigation[currentSection]['sub-nav']) {
    //       console.log(subnavItem);
    //       nextSubnavItem = subnavItem; // this ends up getting assigned the next subnav item!
    //       if (matcher === currentSubnav) {
    //         break;
    //       }
    //       // if (nextSubnavItem !== undefined) {
    //       //   console.log(`currentParentPath: ${currentParentPath}`);
    //       //   nextPagePath = `/${currentSection}/${nextSubnavItem}`;
    //       //   nextPageName = `${this.tabUrlToName(
    //       //     currentSection
    //       //   )} >  ${this.tabUrlToName(prevSubnavItem)}`;
    //       // }
    //     }
    //   }
    // }

    return (
      <div className="pagination-controls">
        {this.renderPaginationLinks(
          prevPagePath,
          prevPageName,
          nextPagePath,
          nextPageName
        )}
      </div>
    );
  }
}
