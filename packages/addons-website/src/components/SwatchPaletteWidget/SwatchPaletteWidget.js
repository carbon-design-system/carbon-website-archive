import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContentSwitcher, Switch } from 'carbon-components-react';
import { settings } from 'carbon-components';
const { prefix } = settings;

import SwatchPalette from './SwatchPalette';

const colorFormats = [
  {
    label: 'HEX',
    value: 'hex',
  },
  {
    label: 'RGB',
    value: 'rgb',
  },
  {
    label: 'PMS',
    value: 'pms',
  },
  {
    label: 'CMYK',
    value: 'cmyk',
  },
];

class SwatchPaletteWidget extends Component {
  state = {
    format: 'hex',
  };

  switchFormat = format => {
    this.setState({
      format: format.name,
    });
  };

  render() {
    // palettes is array of colors to be controlled by ContentSwitcher (see PALETTES object in SwatchPalette component)
    // add '-bw' to color name to get black and white bars appearing at top and bottom of color palette
    // top value sets top of sticky switcher buttons (only required if not zero)
    const { palettes, top } = this.props;

    return (
      <div className={`${prefix}--swatch-palettes-container`}>
        <div className="sticky-container" style={{ top: top ? top : '0px' }}>
          <div className={`${prefix}--row`}>
            <div
              className={`${prefix}--col-lg-4 ${prefix}--col-md-4 ${prefix}--offset-lg-4 ${prefix}--col-bleed`}>
              <ContentSwitcher
                className={`${prefix}--swatch-palettes__format-switcher`}
                onChange={this.switchFormat}>
                {colorFormats.map(format => {
                  return (
                    <Switch
                      key={format.value}
                      name={format.value}
                      text={format.label}
                    />
                  );
                })}
              </ContentSwitcher>
            </div>
          </div>
        </div>
        {palettes.map((palette, i) => {
          return (
            <div key={i} className={`${prefix}--row`}>
              <div
                className={`${prefix}--col-lg-12 ${prefix}--col-md-8 ${prefix}--offset-lg-4 ${prefix}--col-bleed ${prefix}--swatch-palettes`}>
                {palette.map(color => {
                  const col = color.split('-');
                  const showBW = col[1] === 'bw';
                  return (
                    <SwatchPalette
                      key={col[0]}
                      palette={col[0]}
                      format={this.state.format}
                      showBW={showBW}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

SwatchPaletteWidget.propTypes = {
  palettes: PropTypes.array.isRequired,
  top: PropTypes.string,
};

export default SwatchPaletteWidget;
