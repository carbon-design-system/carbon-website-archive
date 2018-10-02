import React from 'react';
import { Search, Loading } from 'carbon-components-react';
import icons from 'carbon-icons';
import IconCard from '../IconCard';
import IconEmptyState from '../IconEmptyState';

const sizes = ['16', '32', 'Glyph'];

// TODO: add support for filtering from search value
// TODO: figure out how to remove jank from search input

export default class IconLibraryExperimental extends React.Component {
  state = {
    errorLoadingIcons: null,
    icons: null,
    isLoading: true,
    searchValue: '',
  };

  handleOnChange = event => {
    this.setState({
      searchValue: event.target.value.trim().toLowerCase(),
    });
  };

  componentDidMount() {
    import('@carbon/icons-react')
      .then(icons => {
        this.setState({
          icons,
          sections: createIconSections(icons),
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
    // TODO: check if error loading icons
    const {
      errorLoadingIcons,
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
            We're still working out some kinds in our experimental website. If
            you can, we'd appreciate it if you could make an issue on{' '}
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

    return (
      <div className="page iconography--experimental">
        {search}
        {sections}
      </div>
    );
  }
}

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

function createIconSections(icons) {
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
        <div className="icon-container">{groups[size].map(renderIcon)}</div>
      </section>
    ));
}

function renderIcon(icon) {
  return (
    <div key={icon.name} className="icon">
      <div className="icon__card">
        <icon.Component />
      </div>
      <h5>{icon.friendlyName}</h5>
      <span>{icon.name}</span>
    </div>
  );
}

function sleep(ms = 2000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
