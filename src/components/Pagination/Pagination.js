import React from 'react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import navigation from '../../data/navigation/navigation.json';

export default class Pagination extends React.Component {
  renderPaginationLinks = (prev, prevName, next, nexName) => {
    return (
      <>
        {prev && (
          <Link className="pagination-link pagination-link-previous" to={prev}>
            <span className="target-page-direction">Previous Page</span>
            <span className="target-page-name">{prevName}</span>
          </Link>
        )}
        {next && (
          <Link className="pagination-link pagination-link-next" to={next}>
            <span className="target-page-direction">Next Page</span>
            <span className="target-page-name">{nexName}</span>
          </Link>
        )}
      </>
    );
  };

  tabNameToUrl = string => {
    return string.toLowerCase().replace(' ', '-');
  };

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

  render() {
    return (
      <Location>
        {({ location }) => {
          const tabs = this.props.tabs;
          const currentTab = this.props.currentTab;
          const slug = this.props.slug;
          let prevPage;
          let prevPageName;
          let nextPage;
          let nextPageName;

          console.log('\n\n\n\n📃 Pagination.js:');
          console.log('Location location: ');
          console.log(location);
          console.log('slug = ' + slug);

          // logic to find previous and next sections, and assign prev/next

          // tabs aren't in navigation. so lets first check if we have any sibling tabs to go to thru props, before we bother looking at the navigation data
          if (tabs !== null) {
            let slugPrefix = slug.substr(1).split('/');
            slugPrefix.length = slugPrefix.length - 1;
            slugPrefix = slugPrefix.join('/');
            tabs.forEach((tab, index) => {
              if (this.tabNameToUrl(tab) === currentTab) {
                if (tabs[index - 1]) {
                  prevPage =
                    '/' + slugPrefix + '/' + this.tabNameToUrl(tabs[index - 1]);
                  prevPageName = tabs[index - 1];
                }
                if (tabs[index + 1]) {
                  nextPage =
                    '/' + slugPrefix + '/' + this.tabNameToUrl(tabs[index + 1]);
                  nextPageName = tabs[index + 1];
                }
              }
            });
          }

          // if prevPage or nextPage are still undefined, that means we need to look elsewere in navigation
          // identify top level section by breaking on match
          // query if there is subnav
          // link to either last subpage, or just the top-level page

          if (prevPage === undefined) {
            let prevSection;
            const slugPrefix = slug.substr(1).split('/')[0];
            console.log(`slugPrefix: ${slugPrefix}`);

            // first lets find the previous top-level section bc we'll need it no matter what
            for (let section in navigation) {
              console.log(`CHECKING SECTION: ${section}`);
              if (section === slugPrefix) {
                console.log('this is the current section!!');
                break;
              }
              prevSection = section; // only assigns if not a match, and this loop is broken out of once there is a match, so we end up with the previous section
            }
            console.log(`prevSection: ${prevSection}`);

            // let's find if there is a previous section, and check the subnav in it
            let prevSubnav;
            console.log(`prevSubnav: ${prevSubnav}`);
            if (
              prevSection !== undefined &&
              typeof navigation[prevSection]['sub-nav'] === 'object'
            ) {
              for (let subPage in navigation[prevSection]['sub-nav']) {
                // walking up to the last one
                prevSubnav = subPage;
              }
            }
            console.log(prevSubnav);

            console.log(
              `prevSection: ${prevSection} /  prevSubnav = ${prevSubnav}`
            );

            if (prevPage !== undefined) {
              prevPage = '/' + prevSection;
              prevPageName = this.tabUrlToName(prevSection);
            }
            if (prevSubnav !== undefined) {
              prevPage = prevPage + '/' + prevSubnav;
              prevPageName = this.tabUrlToName(prevSubnav);
            }
          }

          //
          //
          //
          //
          //
          //
          //

          // if still undefined, that means we need to look elsewere in navigation:
          // if (prevPage === undefined) {
          //   for (let section in navigation) {
          //     const slugPrefix = slug.substr(1).split('/')[0];
          //     if (typeof navigation[section]['sub-nav'] === 'object') {
          //       // first check to see if this page has a subnav to look there
          //       for (let subPage in navigation[section]['sub-nav']) {
          //         const destinationString = '/' + section + '/' + subPage;
          //         if (destinationString === slug) {
          //           break;
          //         } else {
          //           prevPage = '/' + section + '/' + subPage;
          //         }
          //         if (subPage === slugPrefix) {
          //           break;
          //         }
          //       }
          //     } else {
          //       prevPage = '/' + section;
          //     }
          //     prevPageName = this.tabUrlToName(prevPage);
          //     // we want to break out of this once we find a match, because that means we're no longer previous
          //     if (section === slugPrefix) {
          //       break;
          //     }
          //   }
          // }

          /*
          if (prevPage === undefined || nextPage === undefined) {
            // if still === '', that means we need to look elsewere in navigation:
            console.log(">>> else if (prevPage === '' || nextPage === '') >>");
            for (let section in navigation) {
              if (typeof navigation[section]['sub-nav'] === 'object') {
                // first check to see if this page has a subnav to look there
                for (let subPage in navigation[section]['sub-nav']) {
                  // look at all the tabs here
                  // check if this is the current page?
                  // if it's not the current page, that means we haven't gotten to it yet
                  // so assign prevPage here
                  // if (isCurrentPage) {
                  //   prevPage = subPage;
                  // } else {
                  // }
                }
              } else {
                // no subnav, lets look here to see if there are tabs
              }
            }
          }
          */

          return (
            <div className="pagination-controls">
              {this.renderPaginationLinks(
                prevPage,
                prevPageName,
                nextPage,
                nextPageName
              )}
            </div>
          );
        }}
      </Location>
    );
  }
}
