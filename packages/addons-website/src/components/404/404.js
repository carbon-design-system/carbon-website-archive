import React from 'react';
import { settings } from 'carbon-components';
const { prefix } = settings;

class FourOhFour extends React.Component {
  render() {
    if (typeof document !== 'undefined') {
      document.body.style.background = '#282828';
    }
    return (
      <div className="page-content fourohfour">
        <div className={`${prefix}--grid`}>
          <div className={`${prefix}--row`}>
            <div
              className={`${prefix}--col-lg-12 ${prefix}--offset-lg-4 fourohfour-body`}>
              <div className="fourohfour-body">
                <h2 className="fourohfour-body__heading">
                  Something's wrong...
                </h2>
                <p className="fourohfour-body__text">
                  Sorry, we cannot find the page you are looking for.
                </p>
                <p className="fourohfour-body__text">
                  Maybe some of these most visited links will help you?
                </p>
                {this.props.children}
                <h5 className="fourohfour-body__404">404</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
