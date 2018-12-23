import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { ArrowRight24 } from '@carbon/icons-react';

export default class FeatureTile extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    label: PropTypes.string,
    margin: PropTypes.string,
  };

  render() {
    const { children, title, label, href, margin } = this.props;

    const classNames = classnames({
      'ibm--row': true,
      'feature-tile--margin': margin === 'true',
    });

    return (
      <div class={classNames}>
        <div className="ibm--col-lg-12 ibm--offset-lg-4 flex-wrap ibm--col-bleed">
          <Link to={href} className="feature-tile">
            <div className="tile__img">{children}</div>
            <div className="feature-tile__tile">
              <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
                <div className="bx--aspect-ratio--object">
                  <div className="feature-tile__info">
                    <p className="feature-tile__label">{label}</p>
                    <p className="feature-tile__title">{title}</p>
                    <ArrowRight24
                      aria-label={`Go to ${title}`}
                      className="feature-tile__icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
