import React from 'react';
import { Close20, Search20 } from '@carbon/icons-react';

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
      <div className="bx--search bx--search--lg bx--search--dark" role="search">
        <Search20
          description="Search Maginfier"
          className="bx--search-magnifier"
        />
        <label htmlFor="doc-search" className="bx--label">
          Search by element, component, or token, etc
        </label>
        <input
          aria-label="Search"
          type="text"
          className="bx--search-input"
          id="doc-search"
          placeholder="Search"
        />
        <Close20
          description="Search Clear"
          className="bx--search-close"
        />
      </div>
    );
  }
}

  // <div data-search role="search" class="bx--search bx--search--lg">
  //   <label id="search-input-label-1" class="bx--label" for="search__input-1">Search</label>
  //   <input class="bx--search-input" type="text" id="search__input-1" placeholder="Search">
  //     <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--search-magnifier" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M15 14.3L10.7 10c1.9-2.3 1.6-5.8-.7-7.7S4.2.7 2.3 3 .7 8.8 3 10.7c2 1.7 5 1.7 7 0l4.3 4.3.7-.7zM2 6.5C2 4 4 2 6.5 2S11 4 11 6.5 9 11 6.5 11 2 9 2 6.5z"></path></svg>
  //   <button class="bx--search-close bx--search-close--hidden" title="Clear search
  //       input" aria-label="Clear search input">
  //       <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--search-clear" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z"></path></svg>
  //   </button>
  // </div>