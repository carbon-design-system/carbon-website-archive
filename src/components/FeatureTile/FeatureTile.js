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

    return <div>{title}</div>;
  }
}
