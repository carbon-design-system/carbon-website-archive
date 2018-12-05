import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from 'carbon-components-react';
import { Link } from 'gatsby';

export default class FeatureTile extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    label: PropTypes.string,
  };

  render() {
    const { children, title, label, href } = this.props;

    return (
      <Link to={href} className="feature-tile">
        {children}
        <div className="feature-tile__info">
          <p className="feature-tile__label">{label}</p>
          <p className="feature-tile__title">{title}</p>
          <Icon name="icon--arrow--right" description={`Go to ${title}`} />
        </div>
      </Link>
    );
  }
}
