import React from 'react';
import { Location } from '@reach/router';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Button, Icon } from 'carbon-components-react';

import GlobalSearch from '../GlobalSearch/GlobalSearch';
import SideNavItem from './SideNavItem';
import navigation from '../../data/navigation/navigation.json';

export default class SideNav extends React.Component {
  renderNavItems = (nav, loc) =>
    Object.keys(nav).map(item => {
      const { GATSBY_CARBON_ENV } = process.env;
      const hideInternal =
        GATSBY_CARBON_ENV !== 'internal' && nav[item].internal;

      if (hideInternal) {
        return '';
      }
      return (
        <SideNavItem
          itemSlug={item}
          item={nav[item]}
          key={item}
          location={loc}
        />
      );
    });

    handleSkip = evt => {
      if (evt.which === 13) {
        document.activeElement.blur();
        document.querySelector('#maincontent').focus();
      }
    };

  render() {
    const { GATSBY_CARBON_ENV } = process.env;
    const isInternal = GATSBY_CARBON_ENV == 'internal';

    const { isOpen, isFinal } = this.props;

    const classNames = classnames({
      'side-nav': true,
      'side-nav__closed': !isOpen,
      'side-nav__closed--final': isFinal && !isOpen,
    });

    const classNamesClickToClose = classnames({
      'side-nav-click-to-close': true,
      'side-nav-click-to-close__closed': !isOpen,
      'side-nav-click-to-close__closed--final': isFinal && !isOpen,
    });

    return (
      <Location>
        {({ location }) => {
          const navItems = this.renderNavItems(navigation, location);
          return (
            <>
              <div
                className={classNamesClickToClose}
                onClick={() => {
                  this.props.clickToClose();
                }}
              />
              <a id="skip-to-content" href="#maincontent" className="skip-to-content" onKeyDown={this.handleSkip}>
                Skip to main content
              </a>
              <nav className={classNames}>
                <div className="side-nav--header">
                  
                  {isInternal ? (
                    <Link to="/" className="side-nav__logo">
                      IBM <span>Product Design</span>
                    </Link>
                  ) : (
                    <>
                      <Link to="/" className="side-nav__logo">
                        <span>Carbon</span> Design System
                      </Link>
                      <GlobalSearch />
                    </>
                  )}
                </div>
                <div className="side-nav--items">
                  <ul role="menu" className="side-nav__nav-items">{navItems}</ul>
                  <div className="side-nav__links">
                    <Button
                      className="side-nav__link"
                      kind="secondary"
                      icon="icon--arrow--right"
                      iconDescription="Arrow right"
                      href="https://github.com/ibm/carbon-design-kit">
                      Design Kit
                    </Button>
                    <Link
                      to="/resources#github"
                      className="side-nav__link bx--btn bx--btn bx--btn--secondary">
                      GitHub Repos
                      <Icon
                        className="bx--btn__icon"
                        name="icon--arrow--right"
                        description="Arrow right"
                      />
                    </Link>
                  </div>
                </div>
              </nav>
            </>
          );
        }}
      </Location>
    );
  }
}
