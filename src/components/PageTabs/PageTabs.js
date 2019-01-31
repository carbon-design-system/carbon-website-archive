import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classNames from 'classnames';
import ChevronDownGlyph from '@carbon/icons-react/lib/chevron--down/index';

export default class PageTabs extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    slug: PropTypes.string,
    currentTab: PropTypes.string,
  };

  state = {
    dropdownHidden: true,
  };

  getTabs() {
    return React.Children.map(this.props.children, tab => tab);
  }

  getTabAt = index => {
    return (
      this[`tab${index}`] || React.Children.toArray(this.props.children)[index]
    );
  };

  setTabAt = (index, tabRef) => {
    this[`tab${index}`] = tabRef;
  };

  // following functions (handle*) are Props on Tab.js, see Tab.js for parameters
  handleTabClick = onSelectionChange => {
    return (index, label, evt) => {
      evt.preventDefault();
      this.selectTabAt(index, onSelectionChange);
      this.setState({
        dropdownHidden: true,
      });
    };
  };

  handleTabKeyDown = onSelectionChange => {
    return (index, label, evt) => {
      const key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        this.selectTabAt(index, onSelectionChange);
        this.setState({
          dropdownHidden: true,
        });
      }
    };
  };

  handleTabAnchorFocus = onSelectionChange => {
    return index => {
      const tabCount = React.Children.count(this.props.children) - 1;
      let tabIndex = index;

      if (index < 0) {
        tabIndex = tabCount;
      } else if (index > tabCount) {
        tabIndex = 0;
      }

      const tab = this.getTabAt(tabIndex);

      if (tab) {
        this.selectTabAt(tabIndex, onSelectionChange);
        if (tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      }
    };
  };

  handleDropdownClick = () => {
    this.setState({
      dropdownHidden: !this.state.dropdownHidden,
    });
  };

  selectTabAt = (index, onSelectionChange) => {
    if (this.state.selected !== index) {
      this.setState({
        selected: index,
      });
      if (typeof onSelectionChange === 'function') {
        onSelectionChange(index);
      }
    }
  };

  render() {
    const {
      tabs,
      slug,
      currentTab,
      className,
      role,
      ariaLabel,
      triggerHref,
      onSelectionChange,
      ...other
    } = this.props;

    const linkSlug = slug.substring(0, slug.lastIndexOf(currentTab));
    const pageTabs = tabs.map(tab => (
      <li
        key={tab}
        className={
          tab
            .toLowerCase()
            .split(' ')
            .join('-') === currentTab
            ? 'selected'
            : ''
        }
        key={tab}>
        <Link
          to={`${linkSlug}${tab
            .toLowerCase()
            .split(' ')
            .join('-')}`}>
          {tab}
        </Link>
      </li>
    ));

    const tabsWithProps = pageTabs.map((tab, index) => {
      const tabPanelIndex = index === this.state.selected ? 0 : -1;
      const tabIndex = !this.state.dropdownHidden ? 0 : tabPanelIndex;
      const newTab = React.cloneElement(tab, {
        index,
        selected: index === this.state.selected,
        handleTabClick: this.handleTabClick(onSelectionChange),
        handleTabAnchorFocus: this.handleTabAnchorFocus(onSelectionChange),
        tabIndex,
        ref: e => {
          this.setTabAt(index, e);
        },
        handleTabKeyDown: this.handleTabKeyDown(onSelectionChange),
      });

      return newTab;
    });

    const selectedTab = this.getTabAt(this.state.selected);
    const selectedLabel = selectedTab ? selectedTab.props.label : '';

    const classes = {
      tabs: classNames(`ibm--tabs`, className),
      tablist: classNames(`ibm--tabs__nav`, {
        [`ibm--tabs__nav--hidden`]: this.state.dropdownHidden,
      }),
    };

    return (
      <div className="page-tabs">
        <div className="ibm--grid">
          <div className="ibm--row">
            <div className="ibm--col-lg-12 ibm--offset-lg-4 ibm--col-bleed">
              {/* <nav>
                <ul className="page-tabs__list">{pageTabs}</ul>
              </nav> */}
              <nav {...other} className={classes.tabs} role={role}>
                <div
                  role="listbox"
                  aria-label={ariaLabel}
                  tabIndex={0}
                  className={`ibm--tabs-trigger`}
                  onClick={this.handleDropdownClick}
                  onKeyPress={this.handleDropdownClick}>
                  <a
                    tabIndex={-1}
                    className={`ibm--tabs-trigger-text`}
                    href={triggerHref}
                    onClick={this.handleDropdownClick}>
                    {selectedLabel}
                  </a>
                  <ChevronDownGlyph aria-hidden />
                </div>
                {/* <ul role="tablist" className={classes.tablist}>
                  {tabsWithProps}
                </ul> */}
                <ul className="page-tabs__list">{pageTabs}</ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
