import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { Icon } from 'carbon-components-react';

export default class Example extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.string,
    correct: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  };

  renderCaption = (title, description) => {
    if (title || description) {
      return (
        <div className="example__caption">
          {title && <h6 className="example__title">{title}</h6>}
          {description && <p className="example__description">{description}</p>}
        </div>
      );
    }
  };

  render() {
    const { children, title, description, text, correct } = this.props;

    const wrapperClassNames = classnames({
      example: true,
      'example--correct': correct,
      'example--incorrect': !correct,
    });

    const icon = correct ? 'icon--checkmark' : 'icon--close';
    const iconClassNames = classnames({
      example__icon: true,
      'example__icon--correct': correct,
      'example__icon--incorrect': !correct,
    });

    return (
      <div className={wrapperClassNames}>
        <div className="example-card">
          {/* <Icon name={icon} className={iconClassNames} /> */}
          <div className="example__content">
            {text ? <p className="example__text">{text}</p> : null}
            {children}
          </div>
        </div>
        {this.renderCaption(title, description)}
      </div>
    );
  }
}
