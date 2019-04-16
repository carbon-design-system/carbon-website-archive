import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenewIcon from '@carbon/icons-react/es/renew/20';
import { settings } from 'carbon-components';

const { prefix } = settings;

class NonLatinScript extends React.Component {
  state = {
    customValue: null,
  };

  render() {
    const {
      typefaceName,
      value,
      rtl = false,
      className,
      disabled,
      comingSoonText,
      ImageTypeSample,
      customStyle,
    } = this.props;

    return (
      <div
        className={`${prefix}--non-latin-container ${prefix}--col-lg-12 ${prefix}--offset-lg-4`}>
        <div>
          <h3
            className={`${prefix}--type-body-long-01 ${prefix}--non-latin-typeface-name-heading`}>
            {typefaceName}
          </h3>
          {this.state.customValue !== null && (
            <button
              className={`${prefix}--type-body-long-01 ${prefix}--non-latin-button`}
              onClick={() => this.setState({ customValue: null })}>
              Reset <RenewIcon width={16} height={16} />
            </button>
          )}
        </div>
        {value && (
          <input
            disabled={disabled}
            className={classnames(
              `${prefix}--non-latin-type-example ${prefix}--type-display-03`,

              className,
              {
                rtl: rtl,
                [`${prefix}${customStyle}`]: customStyle !== undefined || '',
              }
            )}
            value={
              this.state.customValue !== null ? this.state.customValue : value
            }
            onChange={e => this.setState({ customValue: e.target.value })}
          />
        )}
        {ImageTypeSample && (
          <div
            className={classnames(
              `${prefix}--non-latin-type-example ${prefix}--type-display-03`,
              {
                rtl: rtl,
                [`${prefix}${customStyle}`]: customStyle !== undefined || '',
              }
            )}>
            <img className={`${prefix}--non-latin-image-type-sample`} />
            &nbsp;
          </div>
        )}
        {comingSoonText && (
          <div
            className={`${prefix}--type-caption-01 ${prefix}--non-latin-coming-soon-sticker`}>
            {comingSoonText}
          </div>
        )}
      </div>
    );
  }
}

NonLatinScript.propTypes = {
  // name of typeface
  typefaceName: PropTypes.string.isRequired,

  // value displayed in input
  value: PropTypes.string,

  // if type should be written right to left, default left to right
  rtl: PropTypes.bool,

  // if input should be disabled / non-interactive
  disabled: PropTypes.bool,

  // value of coming soon
  comingSoonText: PropTypes.string,

  // image string
  ImageTypeSample: PropTypes.string,

  // style to be applied to account for different language spacing
  customStyle: PropTypes.string,
};

export default NonLatinScript;
