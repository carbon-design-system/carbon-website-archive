import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
const { prefix } = settings;

const InputRange = ({ step, min, max, value, onChange }) => (
  <input
    type="range"
    step={step || 1}
    min={min}
    max={max}
    value={value}
    // style={{'--track-width': `${trackWidth}%`}}
    style={{'--track-width': `${(value - min) / (max - min) * 100}%`}}
    onChange={onChange}
    className={`${prefix}--input-range`}
  />
);

InputRange.propTypes = {
  // input step
  step: PropTypes.number,

  // input min
  min: PropTypes.number.isRequired,

  // input max
  max: PropTypes.number.isRequired,

  // input value
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // onChange function
  onChange: PropTypes.func.isRequired,
};

export default InputRange;
