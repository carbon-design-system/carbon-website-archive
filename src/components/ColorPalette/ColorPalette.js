import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import colorSpecs from '../../data/guidelines/color-palettes';

const PALETTES = colorSpecs['color-palettes']
const WHITE = PALETTES.white[0]
const BLACK = PALETTES.black[100]
const CUTOFF_POINT_FOR_DARK_TEXT = 50
// const ALERTS = {
//   green: {
//     '50': PALETTES.green[50],
//   },
//   yellow: {
//     '20': PALETTES.yellow[20],
//   },
//   orange: {
//     '40': PALETTES.orange[40],
//   },
//   red: {
//     '60': PALETTES.red[60],
//   },
// }

const ALERTS = {
  alert: {
    '50': PALETTES.green[50],
    '20': PALETTES.yellow[20],
    '40': PALETTES.orange[40],
    '60': PALETTES.red[60],
  },
  // yellow: {
  //   '20': PALETTES.yellow[20],
  // },
  // orange: {
  //   '40': PALETTES.orange[40],
  // },
  // red: {
  //   '60': PALETTES.red[60],
  // },
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

const ColorPalette = ({key, palette, format, showBW}) => {
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
  const paletteObj = (palette!=='alert') ? PALETTES[palette] : ALERTS[palette]
  return (<div key={key} className='color-palette'>
    {BlackSwatch}
    {Object.keys(paletteObj)
    .reverse()
    .map((grade, i) => {
      const hex = paletteObj[grade].hex
      const txtcolor = parseInt(grade) > CUTOFF_POINT_FOR_DARK_TEXT ? '#ffffff' : '#000000'
      const formatStr = formatValueString(paletteObj[grade], format)
      // console.log(palette, grade, formatStr)
      return <ColorSwatch name={`${palette} ${grade}`} 
                    hex={hex} 
                    txtcolor={txtcolor} 
                    value={formatStr} /> 
    })}
    {WhiteSwatch}
  </div>)
}

export default ColorPalette