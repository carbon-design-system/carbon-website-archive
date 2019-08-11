import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
const { prefix } = settings;

const PALETTES = {
  black: {
    '100': {
      hex: '#000000',
      pms: 'Black 6',
      cmyk: 'c75 m68 y67 k90',
    },
  },
  blue: {
    '10': {
      hex: '#EDF4FF',
      pms: '657',
      cmyk: 'c5 m2 y0 k0',
    },
    '20': {
      hex: '#C9DEFF',
      pms: '2707',
      cmyk: 'c18 m7 y0 k0',
    },
    '30': {
      hex: '#97C1FF',
      pms: '2128',
      cmyk: 'c36 m16 y0 k0',
    },
    '40': {
      hex: '#6EA6FF',
      pms: '2381',
      cmyk: 'c52 m29 y0 k0',
    },
    '50': {
      hex: '#408bfc',
      pms: '2727',
      cmyk: 'c64 m39 y0 k0',
    },
    '60': {
      hex: '#0062FF',
      pms: '2132',
      cmyk: 'c80 m60 y0 k0',
    },
    '70': {
      hex: '#054ADA',
      pms: 'Dark Blue',
      cmyk: 'c91 m76 y1 k0',
    },
    '80': {
      hex: '#0530AD',
      pms: 'Reflex Blue',
      cmyk: 'c100 m91 y9 k1',
    },
    '90': {
      hex: '#061f80',
      pms: '280',
      cmyk: 'c100 m93 y31 k29',
    },
    '100': {
      hex: '#051243',
      pms: '282',
      cmyk: 'c100 m95 y37 k49',
    },
  },
  'cool gray': {
    '10': {
      hex: '#F2F4F8',
      pms: 'Cool Gray 1',
      cmyk: 'c3 m2 y2 k0',
    },
    '20': {
      hex: '#d5d9e0',
      pms: 'Cool Gray 2',
      cmyk: 'c13 m9 y10 k0',
    },
    '30': {
      hex: '#B9BFC7',
      pms: 'Cool Gray 3',
      cmyk: 'c25 m20 y21 k0',
    },
    '40': {
      hex: '#9FA5AD',
      pms: 'Cool Gray 4',
      cmyk: 'c38 m30 y31 k0',
    },
    '50': {
      hex: '#868D95',
      pms: 'Cool Gray 6',
      cmyk: 'c47 m39 y39 k4',
    },
    '60': {
      hex: '#697077',
      pms: 'Cool Gray 7',
      cmyk: 'c57 m48 y48 k15',
    },
    '70': {
      hex: '#50565B',
      pms: 'Cool Gray 8',
      cmyk: 'c63 m55 y55 k30',
    },
    '80': {
      hex: '#373D42',
      pms: 'Cool Gray 9',
      cmyk: 'c68 m61 y60 k49',
    },
    '90': {
      hex: '#242a2e',
      pms: 'Cool Gray 10',
      cmyk: 'c71 m64 y64 k68',
    },
    '100': {
      hex: '#13171A',
      pms: 'Cool Gray 11',
      cmyk: 'c73 m67 y65 k79',
    },
  },
  cyan: {
    '10': {
      hex: '#E3F6FF',
      pms: '9421',
      cmyk: 'c9 m0 y0 k0',
    },
    '20': {
      hex: '#B3E6FF',
      pms: '2905',
      cmyk: 'c26 m0 y0 k0',
    },
    '30': {
      hex: '#6CCAFF',
      pms: '2190',
      cmyk: 'c48 m5 y0 k0',
    },
    '40': {
      hex: '#30B0FF',
      pms: '299',
      cmyk: 'c62 m18 y0 k0',
    },
    '50': {
      hex: '#1191e6',
      pms: '2192',
      cmyk: 'c72 m32 y0 k0',
    },
    '60': {
      hex: '#0072C3',
      pms: '2194',
      cmyk: 'c86 m52 y0 k0',
    },
    '70': {
      hex: '#0058A1',
      pms: '2195',
      cmyk: 'c96 m71 y5 k0',
    },
    '80': {
      hex: '#003D73',
      pms: '300',
      cmyk: 'c100 m83 y29 k14',
    },
    '90': {
      hex: '#002b50',
      pms: '301',
      cmyk: 'c100 m84 y40 k39',
    },
    '100': {
      hex: '#07192B',
      pms: '302',
      cmyk: 'c91 m78 y54 k68',
    },
  },
  gray: {
    '10': {
      hex: '#F3F3F3',
      pms: '656',
      cmyk: 'c4 m2 y1 k0',
    },
    '20': {
      hex: '#DCDCDC',
      pms: '650',
      cmyk: 'c15 m10 y7 k0',
    },
    '30': {
      hex: '#BEBEBE',
      pms: '537',
      cmyk: 'c27 m18 y15 k0',
    },
    '40': {
      hex: '#A4A4A4',
      pms: '2162',
      cmyk: 'c40 m30 y26 k0',
    },
    '50': {
      hex: '#8C8C8C',
      pms: '2163',
      cmyk: 'c50 m38 y34 k2',
    },
    '60': {
      hex: '#6F6F6F',
      pms: '2164',
      cmyk: 'c61 m48 y43 k13',
    },
    '70': {
      hex: '#565656',
      pms: '2165',
      cmyk: 'c68 m56 y51 k29',
    },
    '80': {
      hex: '#3D3D3D',
      pms: '2166',
      cmyk: 'c73 m63 y56 k47',
    },
    '90': {
      hex: '#282828',
      pms: '7545',
      cmyk: 'c76 m66 y60 k64',
    },
    '100': {
      hex: '#171717',
      pms: '7546',
      cmyk: 'c76 m68 y63 k78',
    },
  },
  green: {
    '10': {
      hex: '#DAFBE4',
      pms: '9540',
      cmyk: 'c10 m0 y11 k0',
    },
    '20': {
      hex: '#9DEEB2',
      pms: '2253',
      cmyk: 'c27 m0 y33 k0',
    },
    '30': {
      hex: '#56D679',
      pms: '352',
      cmyk: 'c49 m0 y62 k0',
    },
    '40': {
      hex: '#3DBB61',
      pms: '7479',
      cmyk: 'c72 m0 y84 k0',
    },
    '50': {
      hex: '#24a148',
      pms: '7481',
      cmyk: 'c81 m10 y100 k0',
    },
    '60': {
      hex: '#198038',
      pms: '7482',
      cmyk: 'c86 m25 y100 k12',
    },
    '70': {
      hex: '#10642A',
      pms: '7733',
      cmyk: 'c88 m35 y100 k29',
    },
    '80': {
      hex: '#054719',
      pms: '7734',
      cmyk: 'c86 m43 y100 k50',
    },
    '90': {
      hex: '#01330f',
      pms: '7484',
      cmyk: 'c82 m50 y89 k66',
    },
    '100': {
      hex: '#081B09',
      pms: '627',
      cmyk: 'c75 m56 y75 k80',
    },
  },
  magenta: {
    '10': {
      hex: '#FFF0F6',
      pms: '2050',
      cmyk: 'c0 m6 y0 k0',
    },
    '20': {
      hex: '#FFCFE1',
      pms: '2036',
      cmyk: 'c0 m23 y0 k0',
    },
    '30': {
      hex: '#FFA0C2',
      pms: '1905',
      cmyk: 'c0 m47 y2 k0',
    },
    '40': {
      hex: '#FA75A6',
      pms: '190',
      cmyk: 'c0 m69 y15 k0',
    },
    '50': {
      hex: '#EE538B',
      pms: '1915',
      cmyk: 'c0 m82 y15 k0',
    },
    '60': {
      hex: '#D12765',
      pms: '214',
      cmyk: 'c14 m97 y41 k0',
    },
    '70': {
      hex: '#A11950',
      pms: '227',
      cmyk: 'c29 m100 y51 k14',
    },
    '80': {
      hex: '#760A3A',
      pms: '228',
      cmyk: 'c37 m100 y56 k37',
    },
    '90': {
      hex: '#57002b',
      pms: '7651',
      cmyk: 'c44 m97 y56 k55',
    },
    '100': {
      hex: '#2A0A16',
      pms: '518',
      cmyk: 'c60 m78 y61 k77',
    },
  },
  orange: {
    '40': {
      hex: '#FC7B1E',
      pms: '2655',
      cmyk: 'c42 m54 y0 k0',
    },
  },
  purple: {
    '10': {
      hex: '#F7F1FF',
      pms: '9023',
      cmyk: 'c2 m5 y0 k0',
    },
    '20': {
      hex: '#E6D6FF',
      pms: '9361',
      cmyk: 'c9 m16 y0 k0',
    },
    '30': {
      hex: '#D0B0FF',
      pms: '2635',
      cmyk: 'c21 m31 y0 k0',
    },
    '40': {
      hex: '#BB8EFF',
      pms: '2645',
      cmyk: 'c34 m44 y0 k0',
    },
    '50': {
      hex: '#a66efa',
      pms: '2655',
      cmyk: 'c42 m54 y0 k0',
    },
    '60': {
      hex: '#8A3FFC',
      pms: '2665',
      cmyk: 'c58 m72 y0 k0',
    },
    '70': {
      hex: '#6E32C9',
      pms: '2090',
      cmyk: 'c74 m90 y0 k0',
    },
    '80': {
      hex: '#4F2196',
      pms: '2091',
      cmyk: 'c85 m100 y0 k0',
    },
    '90': {
      hex: '#38146b',
      pms: '2685',
      cmyk: 'c94 m100 y30 k20',
    },
    '100': {
      hex: '#1E1033',
      pms: '275',
      cmyk: 'c88 m92 y46 k60',
    },
  },
  red: {
    '10': {
      hex: '#FFF0F1',
      pms: '706',
      cmyk: 'c0 m6 y2 k0',
    },
    '20': {
      hex: '#FCD0D3',
      pms: '1767',
      cmyk: 'c0 m22 y8 k0',
    },
    '30': {
      hex: '#FFA4A9',
      pms: '1775',
      cmyk: 'c0 m45 y20 k0',
    },
    '40': {
      hex: '#FF767C',
      pms: '1777',
      cmyk: 'c0 m68 y39 k0',
    },
    '50': {
      hex: '#FB4B53',
      pms: '1787',
      cmyk: 'c0 m85 y62 k0',
    },
    '60': {
      hex: '#DA1E28',
      pms: '185',
      cmyk: 'c8 m100 y100 k0',
    },
    '70': {
      hex: '#A51920',
      pms: '200',
      cmyk: 'c23 m100 y100 k18',
    },
    '80': {
      hex: '#750E13',
      pms: '201',
      cmyk: 'c31 m100 y98 k43',
    },
    '90': {
      hex: '#570408',
      pms: '188',
      cmyk: 'c38 m93 y84 k61',
    },
    '100': {
      hex: '#2C080A',
      pms: '504',
      cmyk: 'c54 m77 y68 k69',
    },
  },
  teal: {
    '10': {
      hex: '#DBFBFB',
      pms: '9040',
      cmyk: 'c11 m0 y3 k0',
    },
    '20': {
      hex: '#92eeee',
      pms: '317',
      cmyk: 'c27 m0 y5 k0',
    },
    '30': {
      hex: '#20D5D2',
      pms: '7471',
      cmyk: 'c56 m0 y20 k0',
    },
    '40': {
      hex: '#00BAB6',
      pms: '3252',
      cmyk: 'c74 m1 y36 k0',
    },
    '50': {
      hex: '#009c98',
      pms: '326',
      cmyk: 'c80 m16 y43 k0',
    },
    '60': {
      hex: '#007D79',
      pms: '7716',
      cmyk: 'c87 m32 y53 k10',
    },
    '70': {
      hex: '#006161',
      pms: '7717',
      cmyk: 'c90 m43 y56 k25',
    },
    '80': {
      hex: '#004548',
      pms: '2238',
      cmyk: 'c92 m54 y59 k43',
    },
    '90': {
      hex: '#003137',
      pms: '3165',
      cmyk: 'c92 m62 y59 k57',
    },
    '100': {
      hex: '#081A1C',
      pms: '2217',
      cmyk: 'c82 m65 y64 k77',
    },
  },
  'warm gray': {
    '10': {
      hex: '#F7F3F1',
      pms: 'Warm Gray 1',
      cmyk: 'c2 m3 y3 k0',
    },
    '20': {
      hex: '#E0DBDA',
      pms: 'Warm Gray 2',
      cmyk: 'c11 m10 y10 k0',
    },
    '30': {
      hex: '#C1BCBB',
      pms: 'Warm Gray 3',
      cmyk: 'c25 m22 y21 k0',
    },
    '40': {
      hex: '#A7A2A2',
      pms: 'Warm Gray 4',
      cmyk: 'c37 m31 y31 k0',
    },
    '50': {
      hex: '#8F8B8B',
      pms: 'Warm Gray 6',
      cmyk: 'c46 m40 y39 k4',
    },
    '60': {
      hex: '#726E6E',
      pms: 'Warm Gray 7',
      cmyk: 'c55 m50 y48 k15',
    },
    '70': {
      hex: '#595555',
      pms: 'Warm Gray 8',
      cmyk: 'c61 m57 y55 k30',
    },
    '80': {
      hex: '#403C3C',
      pms: 'Warm Gray 9',
      cmyk: 'c66 m62 y60 k50',
    },
    '90': {
      hex: '#2b2828',
      pms: 'Warm Gray 11',
      cmyk: 'c69 m65 y64 k67',
    },
    '100': {
      hex: '#1A1717',
      pms: '438',
      cmyk: 'c71 m67 y65 k79',
    },
  },
  white: {
    '0': {
      hex: '#ffffff',
      pms: '–',
      cmyk: 'c0 m0 y0 k0',
    },
  },
  yellow: {
    '20': {
      hex: '#FDD13A',
      pms: '2645',
      cmyk: 'c34 m44 y0 k0',
    },
  },
};
const WHITE = PALETTES.white[0];
const BLACK = PALETTES.black[100];
const CUTOFF_POINT_FOR_DARK_TEXT = 50;
const ALERTS = {
  alert: {
    '50': PALETTES.green[50],
    '20': PALETTES.yellow[20],
    '40': PALETTES.orange[40],
    '60': PALETTES.red[60],
  },
};

const Swatch = ({ name, hex, txtcolor, value }) => {
  return (
    <div
      key={name}
      className={`${prefix}--swatch ${prefix}--type-body-long-01`}
      style={{ backgroundColor: hex, color: txtcolor }}>
      <span className={`${prefix}--swatch-name`}>{name}</span>
      <span className={`${prefix}--swatch-value`}>{value}</span>
    </div>
  );
};

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
  switch (format) {
    case 'rgb':
      return (
        `r${hexToRgb(colorObj.hex).r}` +
        ` g${hexToRgb(colorObj.hex).g}` +
        ` b${hexToRgb(colorObj.hex).b}`
      );
    case 'hex':
    case 'cmyk':
      return colorObj[format].replace(/^#/, '').toLowerCase();
    case 'pms':
      return colorObj[format];
    default:
      return colorObj[format];
  }
};

const SwatchPalette = ({ palette, format, showBW }) => {
  const BlackSwatch = showBW ? (
    <Swatch
      name="black"
      hex={BLACK.hex}
      txtcolor={WHITE.hex}
      value={formatValueString(BLACK, format)}
    />
  ) : null;
  const WhiteSwatch = showBW ? (
    <Swatch
      name="white"
      hex={WHITE.hex}
      txtcolor={BLACK.hex}
      value={formatValueString(WHITE, format)}
    />
  ) : null;
  const paletteObj = palette !== 'alert' ? PALETTES[palette] : ALERTS[palette];
  return (
    <div key={palette} className={`${prefix}--swatch-palette`}>
      {BlackSwatch}
      {Object.keys(paletteObj)
        .reverse()
        .map(grade => {
          const hex = paletteObj[grade].hex;
          const txtcolor =
            parseInt(grade) > CUTOFF_POINT_FOR_DARK_TEXT
              ? '#ffffff'
              : '#000000';
          const formatStr = formatValueString(paletteObj[grade], format);
          return (
            <Swatch
              key={grade}
              name={`${palette} ${grade}`}
              hex={hex}
              txtcolor={txtcolor}
              value={formatStr}
            />
          );
        })}
      {WhiteSwatch}
    </div>
  );
};

SwatchPalette.propTypes = {
  palette: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  showBW: PropTypes.bool,
};

export default SwatchPalette;
