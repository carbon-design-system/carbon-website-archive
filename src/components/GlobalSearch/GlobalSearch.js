import React from 'react';
import { Close20, Search20 } from '@carbon/icons-react';

export default class GlobalSearch extends React.Component {
  state = {
    inputValue: '',
  };

  componentDidMount() {
    if (
      typeof window === `undefined` || // eslint-disable-line no-undef
      typeof window.docsearch === `undefined` // eslint-disable-line no-undef
    ) {
      console.warn(`Search has failed to load and now is being disabled`);
    } else {
      // eslint-disable-next-line no-undef
      window.docsearch({
        apiKey: `671a2a5c1da5f9eceec680cd79d751b2`,
        indexName: `next_carbondesignsystem`,
        inputSelector: `#doc-search`,
        //set this to true if you need to debug css
        debug: false,
      });
    }
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
          placeholder="Search by element, component, or token, etc"
          value={this.state.inputValue}
          onChange={evt => this.setState({ inputValue: evt.target.value })}
        />
        <button
          className="bx--search-close"
          title="Clear search input"
          aria-label="Clear search input"
          onClick={() => this.setState({ inputValue: '' })}>
          <Close20 description="Search Clear" className="bx--search-clear" />
        </button>
      </div>
    );
  }
}
