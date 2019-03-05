import React from 'react';
import PropTypes from 'prop-types';
import { runInDebugContext } from 'vm';
import classnames from 'classnames';
import { ContentSwitcher, Switch } from 'carbon-components-react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import colorSpecs from '../../data/guidelines/color-palettes';

const PALETTES = colorSpecs['color-palettes']
const WHITE = PALETTES.white[0]
const BLACK = PALETTES.black[100]
const CUTOFF_POINT_FOR_DARK_TEXT = 50
const ALERTS = {
  green: {
    '50': PALETTES.green[50],
  },
  yellow: {
    '20': PALETTES.yellow[20],
  },
  orange: {
    '40': PALETTES.orange[40],
  },
  red: {
    '60': PALETTES.red[60],
  },
}

const ColorSwatch = ({name, hex, txtcolor, value}) => {
  return (<div key={name}
    className='color-swatch ibm-type-mono bx--type-body-long-01'
    style={{backgroundColor: hex, color: txtcolor}}>
      <span className='color-name'>{name}</span>
      <span className='color-value'>{value}</span>
  </div>)
}

const hexToRgb = hex => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const formatValueString = (colorObj, format) => {
  switch ( format ) {
    case 'rgb':
      return (`r${hexToRgb(colorObj.hex).r}` +
              ` g${hexToRgb(colorObj.hex).g}` +
              ` b${hexToRgb(colorObj.hex).b}`)
    case 'hex':
    case 'cmyk':
      return  colorObj[format].replace(/^#/, '').toLowerCase()
    case 'pms':
      return colorObj[format]
    default:
      return colorObj[format]
  }
}

const ColorPalette = ({key, palette, paletteObj, format, showBW}) => {
  const BlackSwatch = showBW ? (
    <ColorSwatch name='black' 
                    hex={BLACK.hex} 
                    txtcolor={WHITE.hex} 
                    value={formatValueString(BLACK, format)} />
  ) : null
  const WhiteSwatch = showBW ? (
    <ColorSwatch name='white' 
                    hex={WHITE.hex} 
                    txtcolor={BLACK.hex} 
                    value={formatValueString(WHITE, format)} />
  ) : null
  return (<div key={key} className='color-palette'>
    {BlackSwatch}
    {Object.keys(paletteObj)
    .reverse()
    .map((grade, i) => {
      const hex = paletteObj[grade].hex
      const txtcolor = parseInt(grade) > CUTOFF_POINT_FOR_DARK_TEXT ? '#ffffff' : '#000000'
      const formatStr = formatValueString(paletteObj[grade], format)
      console.log(palette, grade, formatStr)
      return <ColorSwatch name={`${palette} ${grade}`} 
                        hex={hex} 
                        txtcolor={txtcolor} 
                        value={formatStr} /> 
    })}
    {WhiteSwatch}
  </div>)
}

const colors_palettes = ['red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green']
const gray_palettes = ['cool Gray','gray','warm Gray']

export default class ColorSpecsTable extends React.Component {
  static propTypes = {};

  state = {
    format: 'hex',
    sticky: false,
    mobile: false,
  };

  componentDidMount() {
    if (window.innerWidth < 500) {
      this.setState({
        mobile: true,
      });
    }
    this.addResizeListener();
    this.addScrollListener();
  }

  addScrollListener() {
    document.addEventListener('scroll', e => {
      let stickyPoint = this.state.mobile ? 436 : 450;
      if (window.scrollY >= stickyPoint) {
        this.setState({
          sticky: true,
        });
      } else if (window.scrollY < stickyPoint) {
        this.setState({
          sticky: false,
        });
      }
    });
  }

  addResizeListener() {
    window.addEventListener('resize', e => {
      if (window.innerWidth < 500) {
        this.setState({
          mobile: true,
        });
      } else if (window.innerWidth > 500) {
        this.setState({
          mobile: false,
        });
      }
    });
  }

  switchFormat = format => {
    this.setState({
      format: format.name,
    });
  };

  render() {
    const formatSwitcherClasses = classnames(
      'color-palettes__format-switcher',
      {
        'color-palettes__format-switcher--sticky': this.state.sticky,
      }
    );
    return (
      <>
        <div className="ibm--row">
          <div className="ibm--col-lg-4 ibm--col-md-4 ibm--offset-lg-4 ibm--col-bleed">
            <ContentSwitcher
              className={formatSwitcherClasses}
              onChange={this.switchFormat}>
              <Switch name="hex" text='HEX'/>
              <Switch name="rgb" text='RGB' />
              <Switch name="pms" text='PMS' />
              <Switch name="cmyk" text='CMYK' />
            </ContentSwitcher>
          </div>
        </div>
        <div className="ibm--row color-palettes" >
          <div className="ibm--col-lg-12 ibm--col-md-8 ibm--offset-lg-4 ibm--col-bleed">
            {colors_palettes.map(id => {
              return <ColorPalette key={id} palette={id} paletteObj={PALETTES[id]} format={this.state.format} />
            })}
          </div> 
        </div>
        <div className="ibm--row color-palettes" >
          <div className="ibm--col-lg-12 ibm--col-md-8 ibm--offset-lg-4 ibm--col-bleed">
            {gray_palettes.map(id => {
              return <ColorPalette key={id} palette={id} paletteObj={PALETTES[id]} format={this.state.format} showBW />
            })}
          </div> 
        </div>
      </>
    );
  }
}
