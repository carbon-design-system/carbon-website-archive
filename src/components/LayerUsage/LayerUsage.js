import React, { Component } from 'react';

class LayerUsage extends Component {
  render() {
    const layerUsageImage = require('../../content/guidelines/layer/images/layer-usage-604.png');

    return (
      <div className="layer-usage">
        <ul className="layer-usage__descriptions">
          <li>
            <p>Overlay - 8</p>
            <p>
              Detail page header <br />
              (on scroll)
            </p>
          </li>
          <li>
            <p>Raised - 2</p>
            <p>Module</p>
          </li>
          <li>
            <p>Flat - 1</p>
            <p>Interior left nav</p>
          </li>
          <li>
            <p>Base - 0</p>
            <p />
          </li>
        </ul>
        <img src={layerUsageImage} alt="layer usage" />
      </div>
    );
  }
}

export default LayerUsage;
