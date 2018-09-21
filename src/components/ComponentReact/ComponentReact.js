import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { MultiSelect } from 'carbon-components-react';

const items = [
  {
    id: 'item-1',
    text: 'Item 1',
  },
  {
    id: 'item-2',
    text: 'Item 2',
  },
  {
    id: 'item-3',
    text: 'Item 3',
  },
  {
    id: 'item-4',
    text: 'Item 4',
  },
];

class ComponentReactExample extends Component {
  static propTypes = {
    name: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
  };

  componentDidMount() {
    this.addReactComponent();
  }

  addReactComponent = () => {
    const reactComponent = {
      MultiSelect,
    };
    let NewComponent;
    if (this.props.variation === 'MultiSelect.Filterable') {
      NewComponent = reactComponent.MultiSelect.Filterable;
      ReactDOM.render(
        <NewComponent
          items={items}
          itemToString={item => (item ? item.text : '')}
          onChange={() => {}}
          placeholder="Filter"
        />,
        this.comp
      );
    } else if (this.props.variation === 'MultiSelect') {
      NewComponent = reactComponent[this.props.variation];
      ReactDOM.render(
        <NewComponent
          items={items}
          itemToString={item => (item ? item.text : '')}
          label="MultiSelect Label"
        />,
        this.comp
      );
    } else if (this.props.variation === 'MultiSelect.Inline') {
      NewComponent = reactComponent.MultiSelect;
      ReactDOM.render(
        <NewComponent
          items={items}
          itemToString={item => (item ? item.text : '')}
          label="MultiSelect Label"
          type="inline"
        />,
        this.comp
      );
    } else {
      ReactDOM.render(<NewComponent />, this.comp);
    }
  };

  render() {
    const { name, component, variation } = this.props;
    const componentLink = `http://react.carbondesignsystem.com/?selectedKind=${component}&selectedStory=${variation}`;
    return (
      <div className="component-variation">
        <h2 className="component-variation__name">{name}</h2>
        <p>
          This component is currently only available in{' '}
          <a
            href="https://github.com/ibm/carbon-components-react"
            target="_blank">
            our React library
          </a>
          .
        </p>
        <div>
          <div className="svg--sprite" aria-hidden="true" />
          <div className="component-example__live component-example__live--light">
            <div className="component-example__live--rendered">
              <div ref={comp => (this.comp = comp)} />
            </div>
            <a
              href={componentLink}
              className="component-example__view-full-render"
              rel="noopener noreferrer">
              View on React Storybook
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentReactExample;
