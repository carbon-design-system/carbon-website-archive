import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
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
    htmlFile: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
    hideViewFullRender: PropTypes.bool,
    codepenSlug: PropTypes.string,
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
        <NewComponent items={items} itemToString={item => (item ? item.text : '')} onChange={() => {}} placeholder="Filter" />,
        this.comp
      );
    } else if (this.props.variation === 'MultiSelect') {
      NewComponent = reactComponent[this.props.variation];
      ReactDOM.render(
        <NewComponent items={items} itemToString={item => (item ? item.text : '')} label="MultiSelect Label" />,
        this.comp
      );
    } else if (this.props.variation === 'MultiSelect.Inline') {
      NewComponent = reactComponent.MultiSelect;
      ReactDOM.render(
        <NewComponent items={items} itemToString={item => (item ? item.text : '')} label="MultiSelect Label" type="inline" />,
        this.comp
      );
    } else {
      ReactDOM.render(<NewComponent />, this.comp);
    }
  };

  render() {
    const { component, variation } = this.props;
    const classNames = classnames({
      'component-example__live--rendered': true,
      [`${component}`]: true,
    });
    let selectedKind = '';
    let selectedStory = '';
    if (variation.indexOf('.') > -1) {
      selectedKind = variation.split('.')[0];
      selectedStory = variation.split('.')[1].toLowerCase();
    } else {
      selectedKind = variation;
    }
    const componentLink = `http://react.carbondesignsystem.com/?selectedKind=${selectedKind}&selectedStory=${selectedStory}`;
    return (
      <div>
        <div className="svg--sprite" aria-hidden="true" />
        <div className="component-example__live component-example__live--light">
          <div className={classNames}>
            <div ref={comp => (this.comp = comp)} />
          </div>
          <Link className="component-example__view-full-render" target="_blank" to={componentLink}>
            View on React Storybook
          </Link>
        </div>
      </div>
    );
  }
}

export default ComponentReactExample;
