import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { Icon } from 'carbon-components-react';

export default class DoDontExample extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /** title for the caption (optional) */
    title: PropTypes.string,
    /** description for the card caption (optional) */
    description: PropTypes.string,
    /** text displayed in the example card */
    text: PropTypes.string,
    /** path to the image displayed in the example card, starting under `src` folder. e.g.: `content/guidelines/content/img-test.svg` */
    imgpath: PropTypes.string,
    /** mark card as true? if not defined, card will be marked as false */
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
    const { children, title, description, text, imgpath, correct } = this.props;

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
