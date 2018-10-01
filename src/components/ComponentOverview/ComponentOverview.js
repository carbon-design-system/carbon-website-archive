import React from 'react';
import { Link } from 'gatsby';

class ComponentOverview extends React.Component {
  renderItems = currentItem => {
    const component = currentItem.item;

    let componentUrl;
    if (component === 'Multiselect') {
      componentUrl = '/components/dropdown';
    } else if (component === 'UI Shell') {
      componentUrl = '/experimental/ui-shell';
    } else {
      componentUrl = `/components/${component.toLowerCase().replace(' ', '-')}`;
    }

    let componentImg;
    try {
      componentImg = require(`../../content/components/overview/images/${component}.svg`);
    } catch (e) {
      componentImg = require('../../content/components/overview/images/NoImage.svg');
    }

    return (
      <li className="component-item" key={component}>
        <div className="flex-item">
          <Link to={componentUrl}>
            <img src={componentImg} alt={component} />
            <p className="component-name">{component}</p>
          </Link>
        </div>
      </li>
    );
  };

  render() {
    const componentList = require('../../data/components.json'); // eslint-disable-line
    return (
      <div>
        <ul className="flex-container">
          {Object.keys(componentList.items).map(item => {
            return this.renderItems(componentList.items[item]);
          })}
        </ul>
      </div>
    );
  }
}

export default ComponentOverview;
