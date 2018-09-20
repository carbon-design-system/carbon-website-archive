import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from 'carbon-components-react';

export default class Example extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    text: PropTypes.string,
    correct: PropTypes.bool,
  };

  render() {
    const { children, title, text, correct } = this.props;

    const icon = correct ? 'icon--checkmark' : 'icon--close';
    const iconClassNames = classnames({
      example__icon: true,
      'example__icon--correct': correct,
      'example__icon--incorrect': !correct,
    });

    return (
      <div className="example">
        <p className="example__title">
          <Icon name={icon} className={iconClassNames} />
          {title}
        </p>
        <div className="example__content">
          {text ? <p className="example__text">{text}</p> : null}
          {children}
        </div>
      </div>
    );
  }
}
