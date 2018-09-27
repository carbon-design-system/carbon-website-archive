import React from 'react';
import { Icon } from 'carbon-components-react';

export default class GlobalSearch extends React.Component {
  componentDidMount() {
    if (
      typeof window === `undefined` || // eslint-disable-line no-undef
      typeof window.docsearch === `undefined` // eslint-disable-line no-undef
    ) {
      console.warn(`Search has failed to load and now is being disabled`);
    }
    // eslint-disable-next-line no-undef
    window.docsearch({
      apiKey: `296ea0c1d0e96b2b04900d0f4d1a6329`,
      indexName: `carbondesignsystem`,
      inputSelector: `#doc-search`,
      //set this to true if you need to debug css
      debug: false, 
    });
  }

  render() {
    return (
      <div className="bx--search bx--search--sm" role="search">
        <Icon
          name="icon--search"
          description="Search Maginfier"
          className="bx--search-magnifier"
        />
        <label htmlFor="doc-search" className="bx--label">
          Search
        </label>
        <input
          aria-label="Search"
          type="text"
          className="bx--search-input"
          id="doc-search"
          placeholder="Search"
        />
      </div>
    );
  }
}
