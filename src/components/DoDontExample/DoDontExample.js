import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CheckmarkFilled24, CloseFilled16 } from '@carbon/icons-react';
// need to update to CloseFilled24 once that exists

export default class DoDontExample extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /** title for the caption (optional) */
    label: PropTypes.string,
    /** description for the card caption (optional) */
    description: PropTypes.string,
    /** text displayed in the example card */
    text: PropTypes.string,
    /** path to the image displayed in the example card, starting under `src` folder. e.g.: `content/guidelines/content/img-test.svg` */
    imgpath: PropTypes.string,
    /** mark card as true? if not defined, card will be marked as false */
    correct: PropTypes.string,
    /** default to false, set to true for dark background */
    dark: PropTypes.string,
    /** default to false, set true to have a full-width example card */
    full_width: PropTypes.string,
  };

  renderCaption = (label, description) => {
    if (label || description) {
      return (
        <div className="example__caption">
          {label && <p className="example__title">{label}</p>}
          {description && <p className="example__description">{description}</p>}
        </div>
      );
    }
  };

  render() {
    const { children, label, description, text, dark, full_width } = this.props;

    let correct = this.props.correct;

    // our gatsby setup converts many values to strings. cleanse:
    if (correct === 'true') {
      correct = true;
    } else if (correct === 'false') {
      correct = false;
    }

    const wrapperClassNames = classnames({
      example: true,
      'example--full-width': full_width,
      'example--correct': correct,
      'example--incorrect': !correct,
      'example--dark': dark,
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
          <div className="example-card__content">
            {correct ? (
              <CheckmarkFilled24 className={iconClassNames} />
            ) : (
              <CloseFilled16 className={iconClassNames} />
            )}
            <div className="example__content">
              {children}
              {text ? <p className="example__text">{text}</p> : null}
            </div>
          </div>
        </div>
        {this.renderCaption(label, description)}
      </div>
    );
  }
}
