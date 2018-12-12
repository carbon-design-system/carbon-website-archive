import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'carbon-components-react';
import { Link } from 'gatsby';
import classnames from 'classnames';

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
        <div className="ibm--col-lg-12 ibm--offset-lg-4">
          <Link to={href} className="feature-tile">
            <div className="tile__img">{children}</div>
            <div className="feature-tile__tile">
              <div className="bx--aspect-ratio bx--aspect-ratio--16x9">
                <div className="bx--aspect-ratio--object">
                  <div className="feature-tile__info">
                    <p className="feature-tile__label">{label}</p>
                    <p className="feature-tile__title">{title}</p>
                    <Icon className="feature-tile__icon" name="icon--arrow--right" description={`Go to ${title}`} />
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
