import React, { Component } from 'react';

class LayerTypes extends Component {
  render() {
    return (
      <div className="layer-types">
        <div className="layer-types__layer-0">
          <p>0</p>
          <p>Base</p>
        </div>
        <div className="layer-types__layer-1">
          <p>1</p>
          <p>Flat</p>
        </div>
        <div className="layer-types__layer-2">
          <p>2</p>
          <p>Raised</p>
        </div>
        <div className="layer-types__layer-8">
          <p>8</p>
          <p>Overlay</p>
        </div>
        <div className="layer-types__layer-12">
          <p>12</p>
          <p>Sticky nav</p>
        </div>
        <div className="layer-types__layer-16">
          <p>16</p>
          <p>Temporary nav</p>
        </div>
        <div className="layer-types__layer-24">
          <p>24</p>
          <p>Pop-out</p>
        </div>
      </div>
    );
  }
}

export default LayerTypes;
