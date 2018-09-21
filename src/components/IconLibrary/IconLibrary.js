import React from 'react';
import { Search } from 'carbon-components-react';
import icons from 'carbon-icons';
import IconCard from '../IconCard';
import IconEmptyState from '../IconEmptyState';

export default class IconLibrary extends React.Component {
  static defaultProps = {
    currentPage: 'library',
  };

  state = {
    searchValue: '',
    iconSearchResults: [],
  };

  filterIconsByName = (icons, name) =>
    icons.filter(icon => icon.name.includes(name));

  filterIconsByTag = (icons, tag) =>
    icons.filter(icon => icon.tags.join('').includes(tag));

  handleSearch = (icons, searchValue) => {
    const searchVal = searchValue.toLowerCase();
    const namedIcons = this.filterIconsByName(icons, searchVal);
    // const taggedIcons = this.filterIconsByTag(icons, searchVal);
    const searchResults = namedIcons
      // .concat(taggedIcons)
      .filter((icon, index, self) => index === self.indexOf(icon));

    return searchResults;
  };

  handleChange = evt => {
    const searchValue = evt.target.value.trim();
    this.setState({
      searchValue,
      iconSearchResults: this.handleSearch(icons, searchValue),
    });
  };

  render() {
    const initialIcons = (
      <div style={{ marginTop: '70px' }}>
        <h2>UI icons</h2>
        <div className="icon-container">
          {this.renderIconCards(iconsToShow)}
        </div>
      </div>
    );

    const serviceIcons = (
      <div style={{ marginTop: '70px' }}>
        <h2>Service icons</h2>
        <div className="icon-container">
          {this.renderIconCards(
            icons.filter(icon => serviceIconNames.indexOf(icon.name) !== -1)
          )}
        </div>
      </div>
    );

    const searchResults = (
      <div style={{ marginTop: '70px' }}>
        <h2>Search results</h2>
        <div className="icon-container">
          {this.state.iconSearchResults.length > 0 ? (
            this.renderIconCards(this.state.iconSearchResults)
          ) : (
            <IconEmptyState />
          )}
        </div>
      </div>
    );

    return (
      <div className="page iconography">
        <div className="icon-container">
          <Search
            small
            onChange={this.handleChange}
            onKeyUp={this.handleClearInput}
            placeHolderText="Search icon library"
            aria-label="Icon library search"
            value={this.state.searchValue}
            labelText="Icon library search"
          />
        </div>
        {this.state.searchValue.length > 0 ? (
          searchResults
        ) : (
          <React.Fragment>
            {initialIcons}
            {serviceIcons}
          </React.Fragment>
        )}
      </div>
    );
  }

  renderIconCards(icons) {
    return icons.map(icon => {
      if (!icon.name.includes('glyph')) {
        return (
          <IconCard
            key={icon.id}
            name={icon.name}
            viewBox={icon.viewBox}
            width={icon.width.toString()}
            height={icon.height.toString()}
            svgString={toSVG(icon)}
          />
        );
      }
    });
  }
}

const serviceIconNames = [
  'icon--api',
  'icon--app-services',
  'icon--applications',
  'icon--block-chain',
  'icon--cf-apps',
  'icon--console',
  'icon--containers',
  'icon--crash',
  'icon--dashboard',
  'icon--devices',
  'icon--devops',
  'icon--finance',
  'icon--financial',
  'icon--functions',
  'icon--hpa',
  'icon--hpa--stress',
  'icon--spa—stress',
  'icon--infrastructure',
  'icon--integration',
  'icon--not',
  'icon--menu',
  'icon--mobile',
  'icon--network',
  'icon--open-whisk',
  'icon--pa',
  'icon--pa-stress',
  'icon--portfolio',
  'icon--predictive',
  'icon--schematics',
  'icon--security',
  'icon--services',
  'icon--storage',
  'icon--watson',
  'icon--whisk',
  'icon--iot',
  'icon--pa--stress',
];

const deprecatedIcons = [
  'icon--start',
  'icon--upload',
  'icon--warning',
  'icon--stop',
  'icon--play',
  'icon-—pause',
  'icon--info',
  'icon--help',
  'icon--folder',
  'icon--favorite',
  'icon--error',
  'icon--dollars',
  'icon--data',
  'icon--header--notification',
  'icon--header--notifciation',
  'icon--header--ticket',
  'icon--header--docs',
  'icon--header--contact',
  'icon--pause',
  'icon--start--outline',
  'icon--apis',
  'icon--cloud-foundry',
  'icon--apps',
];

const iconsToShow = icons.filter(icon => {
  if (icon.name.includes('glyph')) {
    return false;
  }
  if (deprecatedIcons.indexOf(icon.name) !== -1) {
    return false;
  }
  if (serviceIconNames.indexOf(icon.name) !== -1) {
    return false;
  }
  return true;
});

function printAttributes(attrs) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ');
}

function toSVG(icon) {
  const { svgData, width, height, viewBox } = icon;
  const svg = children =>
    `<svg ${printAttributes({ width, height, viewBox })}>${children}</svg>`;
  const paths = svgData.paths
    .map(path => `<path d="${path.d}"></path>`)
    .join('');

  if (!svgData.g) {
    return svg(paths);
  }

  return svg(`<g ${printAttributes(svgData.g)}>${paths}</g>`);
}
