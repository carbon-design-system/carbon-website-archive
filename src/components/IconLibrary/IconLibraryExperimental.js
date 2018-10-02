import React from 'react';
import { Search, Loading } from 'carbon-components-react';
import icons from 'carbon-icons';
import IconEmptyState from '../IconEmptyState';

const sizes = ['16', '32', 'Glyph'];

/**
 * Provides support for our experimental icon library, `@carbon/icons-react`,
 * at the /experimental/iconography/library route
 */
export default class IconLibraryExperimental extends React.Component {
  state = {
    /**
     * The error if an error occurs while loading icons
     */
    errorLoadingIcons: null,

    /**
     * Icon data that we load from `@carbon/icons-react`
     */
    icons: null,

    /**
     * Initialize as loading by default since we need to fetch all the icons
     */
    isLoading: true,

    /**
     * Initialize with empty string value for search
     */
    searchValue: '',
  };

  /**
   * Filter the current icon set by the given search value. Will shortcircuit if
   * searchValue is an empty string as all icons will be visible with that
   * query.
   */
  filterIcons = () => {
    this.setState(state => {
      const { icons, searchValue } = state;
      const filteredIcons = Object.keys(icons).filter(icon => {
        return (
          searchValue === '' || icon.toLowerCase().indexOf(searchValue) !== -1
        );
      });
      return {
        filteredIcons,
        sections: createIconSections(icons, filteredIcons),
      };
    });
  };

  /**
   * Handle the `onChange` event from the Search component. We take the value of
   * the event and set it as the searchValue, we then defer an update with
   * `filterIcons` after the state has changed.
   */
  handleOnChange = event => {
    const searchValue = event.target.value.trim().toLowerCase();
    this.setState(
      {
        searchValue,
      },
      () => {
        this.filterIcons();
      }
    );
  };

  /**
   * When our component mounts, we need to fetch the icon data from
   * `@carbon/react`
   */
  componentDidMount() {
    import('@carbon/icons-react')
      .then(icons => {
        const filteredIcons = Object.keys(icons);
        this.setState({
          icons,
          filteredIcons,
          sections: createIconSections(icons, filteredIcons),
          isLoading: false,
          error: null,
        });
      })
      .catch(error => {
        this.setState({
          errorLoadingIcons: error,
          isLoading: false,
          icons: null,
        });
      });
  }

  render() {
    const {
      errorLoadingIcons,
      filteredIcons,
      icons,
      isLoading,
      searchValue,
      sections,
    } = this.state;

    const search = (
      <div>
        <Search
          small
          onChange={this.handleOnChange}
          placeHolderText="Search icon library"
          aria-label="Icon library search"
          value={this.state.searchValue}
          labelText="Icon library search"
        />
      </div>
    );

    if (isLoading) {
      return (
        <div className="page iconography--experimental">
          {search}
          {isLoading && <Loading />}
        </div>
      );
    }

    if (errorLoadingIcons) {
      console.error(errorLoadingIcons);
      return (
        <div className="page iconography--experimental">
          <h3>Yikes! Looks like something went wrong.</h3>
          <p>
            We're still working out some problems in our experimental website.
            If you can, we'd appreciate it if you could make an issue on{' '}
            <a
              href="https://github.com/carbon-design-system/carbon-website-gatsby"
              rel="noopener noreferrer"
              target="_blank">
              our repo
            </a>{' '}
            to make sure that this gets fixed!
          </p>
        </div>
      );
    }

    if (filteredIcons.length === 0) {
      return (
        <div className="page iconography--experimental">
          {search}
          <IconEmptyState />
        </div>
      );
    }

    return (
      <div className="page iconography--experimental">
        {search}
        {sections}
      </div>
    );
  }
}

/**
 * Takes a flat object where the keys are icon names and transforms them into an
 * object where each key is a size and the value is an array of icons at that
 * size.
 */
function groupIconsBySize(icons) {
  return Object.keys(icons).reduce((acc, iconName) => {
    const [group] = sizes.filter(size => iconName.indexOf(size) !== -1);
    const friendlyName = iconName.replace(group, '');
    const details = {
      name: iconName,
      friendlyName,
      group,
      Component: icons[iconName],
    };

    if (acc[group]) {
      return {
        ...acc,
        [group]: acc[group].concat(details),
      };
    }

    return {
      ...acc,
      [group]: [details],
    };
  }, {});
}

/**
 * Creates all the sections for the icons but filters by what icons are
 * available in filteredIcons. We use this method as part of our state
 * transformations above, instead of in the render method, because including
 * this in render causes noticeable jank in the UI. If we instead perform work
 * after the state transition for the search bar, then we get less noticeable
 * lag on the input.
 */
function createIconSections(icons, filteredIcons) {
  const groups = groupIconsBySize(icons);
  return Object.keys(groups)
    .filter(size => {
      if (!Array.isArray(groups[size])) {
        return false;
      }
      if (groups[size].length === 0) {
        return false;
      }
      return true;
    })
    .map(size => (
      <section key={size} className="icon-size">
        <header>
          <h2>{isNaN(size) ? size : `${size}x${size}`}</h2>
        </header>
        <div className="icon-container">
          {groups[size]
            .filter(icon => filteredIcons.indexOf(icon.name) !== -1)
            .map(renderIcon)}
        </div>
      </section>
    ));
}

/**
 * Renders an individual icon
 */
function renderIcon(icon) {
  return (
    <div key={icon.name} className="icon">
      <div className="icon__card">
        <icon.Component />
      </div>
      <h5 className="icon__card-title" title={icon.friendlyName}>
        {icon.friendlyName}
      </h5>
      <span className="icon__card-details" title={icon.name}>
        {icon.name}
      </span>
    </div>
  );
}
