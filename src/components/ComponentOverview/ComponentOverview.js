import React from 'react';
import { Link } from "gatsby";

class ComponentOverview extends React.Component {
  renderItems = (currentItem) => {  

    const component = currentItem.item;
  
    let componentUrl
    if (component === 'Multiselect') {
      componentUrl = '/components/dropdown'
    } 
    else {
      componentUrl = `/components/${component.toLowerCase().replace(' ', '-')}`
    }

    let componentImg;
    if (component === 'Accordion') {
      componentImg = require('../../content/components/overview/images/Accordion.svg');
    }
    else if (component === 'Breadcrumb') {
      componentImg = require('../../content/components/overview/images/Breadcrumb.svg');
    }
    else if (component === 'Button') {
      componentImg = require('../../content/components/overview/images/Button.svg');
    }
    else if (component === 'Checkbox') {
      componentImg = require('../../content/components/overview/images/Checkbox.svg');
    }
    else if (component === 'Code Snippet') {
      componentImg = require('../../content/components/overview/images/Code Snippet.svg');
    }
    else if (component === 'Content Switcher') {
      componentImg = require('../../content/components/overview/images/Content Switcher.svg');
    }
    else if (component === 'Data Table') {
      componentImg = require('../../content/components/overview/images/Data Table.svg');
    }
    else if (component === 'Date Picker') {
      componentImg = require('../../content/components/overview/images/Date Picker.svg');
    }
    else if (component === 'Dropdown' || component === 'Multiselect') {
      componentImg = require('../../content/components/overview/images/Dropdown.svg');
    }
    else if (component === 'File Uploader') {
      componentImg = require('../../content/components/overview/images/File Uploader.svg');
    }
    else if (component === 'Form') {
      componentImg = require('../../content/components/overview/images/Form.svg');
    }
    else if (component === 'Link') {
      componentImg = require('../../content/components/overview/images/Link.svg');
    }
    else if (component === 'List') {
      componentImg = require('../../content/components/overview/images/List.svg');
    }
    else if (component === 'Loading') {
      componentImg = require('../../content/components/overview/images/Loading.svg');
    }
    else if (component === 'Notification') {
      componentImg = require('../../content/components/overview/images/Notification.svg');
    }
    else if (component === 'Number Input') {
      componentImg = require('../../content/components/overview/images/Number Input.svg');
    }
    else if (component === 'Overflow Menu') {
      componentImg = require('../../content/components/overview/images/Overflow Menu.svg');
    }
    else if (component === 'Pagination') {
      componentImg = require('../../content/components/overview/images/Pagination.svg');
    }
    else if (component === 'Progress Indicator') {
      componentImg = require('../../content/components/overview/images/Progress Indicator.svg');
    }
    else if (component === 'Radio Button') {
      componentImg = require('../../content/components/overview/images/Radio Button.svg');
    }
    else if (component === 'Search') {
      componentImg = require('../../content/components/overview/images/Search.svg');
    }
    else if (component === 'Modal') {
      componentImg = require('../../content/components/overview/images/Modal.svg');
    }
    else if (component === 'Select') {
      componentImg = require('../../content/components/overview/images/Select.svg');
    }
    else if (component === 'Slider') {
      componentImg = require('../../content/components/overview/images/Slider.svg');
    }
    else if (component === 'Structured List') {
      componentImg = require('../../content/components/overview/images/Structured List.svg');
    }
    else if (component === 'Tabs') {
      componentImg = require('../../content/components/overview/images/Tabs.svg');
    }
    else if (component === 'Tags') {
      componentImg = require('../../content/components/overview/images/Tag.svg');
    }
    else if (component === 'Text Input') {
      componentImg = require('../../content/components/overview/images/Text Input.svg');
    }
    else if (component === 'Tile') {
      componentImg = require('../../content/components/overview/images/Tile.svg');
    }
    else if (component === 'Toggle') {
      componentImg = require('../../content/components/overview/images/Toggle.svg');
    }
    else if (component === 'Tooltip') {
      componentImg = require('../../content/components/overview/images/Tooltip.svg');
    }
    else {
      componentImg = require('../../content/components/overview/images/NoImage.svg');
    }
    
    return (
      <li className="component-item">
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
    const content = (
      <ul className="flex-container">
        {Object.keys(componentList.items).map(item => {
          return this.renderItems(componentList.items[item]);
        })}      
      </ul>
    );
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default ComponentOverview;

