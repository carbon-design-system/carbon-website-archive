import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ContentSwitcher, Switch } from 'carbon-components-react';
import ColorPalette from '../ColorPalette';

const error_palettes = ['blue', 'gray']

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
      // console.log('scroll y ',window.scrollY)
      // let stickyPoint = this.state.mobile ? 436 : 450;
      let stickyPoint = this.state.mobile ? 520 : 470;
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
            {error_palettes.map(id => {
              return <ColorPalette key={id} palette={id} format={this.state.format} showBW />
            })}
            <ColorPalette key={'alert'} palette={'alert'} format={this.state.format} />
          </div> 
        </div>
      </>
    );
  }
}
