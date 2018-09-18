import React from 'react';
import { Search} from 'carbon-components-react';

export default class GlobalSearch extends React.Component {
  componentDidMount() {
    if (
      typeof window === `undefined` || // eslint-disable-line no-undef
      typeof window.docsearch === `undefined` // eslint-disable-line no-undef
    ) {
      console.warn(`Search has failed to load and now is being disabled`)
    }
     // eslint-disable-next-line no-undef
    window.docsearch({
      apiKey: `296ea0c1d0e96b2b04900d0f4d1a6329`,
      indexName: `carbondesignsystem`,
      inputSelector: `#doc-search`,
      debug: false,
    })
  }

  render() {
    return (
      <div>
        <Search
          name=""
          value=""
          labelText="Search"
          closeButtonLabelText="Close"
          placeHolderText="Search"
          id="doc-search"
          small
        />
      </div>
    );
  }
}

