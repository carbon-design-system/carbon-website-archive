import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from 'carbon-components-react';

class MotionExample extends Component {
  static propTypes = {
    type: PropTypes.string,
    correcttext: PropTypes.string,
    incorrecttext: PropTypes.string,
  };

  static defaultProps = {
    type: 'standard',
    correcttext: 'Easing',
    incorrecttext: 'No-Easing',
  };

  state = {
    playing: false,
    mouseover: false,
  };

  toggleMotionExample = () => {
    this.setState({
      playing: !this.state.playing,
      mouseover: false,
    });
  };

  overlayMouseOver = () => {
    if (this.state.playing) {
      this.setState({
        mouseover: true,
      });
    }
  };

  overlayMouseOut = () => {
    if (this.state.playing) {
      this.setState({
        mouseover: false,
      });
    }
  };

  render() {
    const { type, correcttext, incorrecttext } = this.props;

    const isSingleExample =
      type === 'standard' || type === 'ease-in' || type === 'ease-out';

    const containerClasses = classnames({
      'motion-example': true,
      'motion-example-easing--container': isSingleExample,
      paused: !this.state.playing,
    });

    const correctClassNames = classnames({
      'motion-example__element': true,
      [`${type}--correct`]: true,
    });

    const incorrectClassNames = classnames({
      'motion-example__element': true,
      [`${type}--incorrect`]: true,
    });

    const playIconClasses = classnames({
      'play-icon': true,
      hidden: this.state.playing,
    });

    const pauseIconClasses = classnames({
      'pause-icon': true,
      hidden: !this.state.playing,
    });

    const motionCurveClasses = classnames({
      'motion-example__curve': true,
      [`${type}`]: true,
    });

    const overlayClasses = classnames({
      'motion-example__overlay': true,
      'motion-example__overlay--hover': this.state.mouseover,
    });

    const correctInfo = correcttext ? (
      <p className="motion-example__correct-text">
        <Icon alt="correct" name="checkmark" description="correct example" />
        {correcttext}
      </p>
    ) : (
      ''
    );

    const incorrectInfo = incorrecttext ? (
      <p className="motion-example__incorrect-text">
        <Icon alt="incorrect" name="close" description="incorrect example" />
        {incorrecttext}
      </p>
    ) : (
      ''
    );

    let curveSvg;

    if (type === 'standard') {
      curveSvg = (
        <svg
          width="320px"
          height="320px"
          viewBox="0 0 320 320"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="standard-curve" fill="none" fillRule="evenodd">
            <path d="M308.613556,11.0327944 C46.9895515,7.38131987 149.49053,309.874432 11,309.874427" />
          </g>
          <polyline
            fill="none"
            points="10.8641341 10.9289277 10.8641341 312.930566 309.508426 312.930566"
          />
          <g id="standard-curve-2" fill="none" fillRule="evenodd">
            <path
              className="standard"
              d="M308.613556,11.0327944 C46.9895515,7.38131987 149.49053,309.874432 11,309.874427"
              strokeDasharray="465"
            />
          </g>
        </svg>
      );
    } else if (type === 'ease-out') {
      curveSvg = (
        <svg
          width="320px"
          height="320px"
          viewBox="0 0 320 320"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="out-curve" fill="none" fillRule="evenodd">
            <path d="M314.772644,10.4076925 C90.6179356,10.4076925 14.1472477,310.555156 14.1472477,310.555156" />
          </g>
          <polyline
            fill="none"
            points="10.8641341 10.9289277 10.8641341 312.930566 309.508426 312.930566"
          />
          <g id="out-curve-2" fill="none" fillRule="evenodd">
            <path
              className="ease-out"
              d="M314.772644,10.4076925 C90.6179356,10.4076925 14.1472477,310.555156 14.1472477,310.555156"
              strokeDasharray="456"
            />
          </g>
        </svg>
      );
    } else if (type === 'ease-in') {
      curveSvg = (
        <svg
          width="320px"
          height="320px"
          viewBox="0 0 320 320"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="in-curve" fill="none" fillRule="evenodd">
            <path d="M310.223828,10 C310.223828,10 88.1895065,310.22381 10,310.223828" />
          </g>
          <polyline
            fill="none"
            points="10.8641341 10.9289277 10.8641341 312.930566 309.508426 312.930566"
          />
          <g id="in-curve-2" fill="none" fillRule="evenodd">
            <path
              className="ease-in"
              d="M310.223828,10 C310.223828,10 88.1895065,310.22381 10,310.223828"
              strokeDasharray="429"
            />
          </g>
        </svg>
      );
    }

    const overlayContent = (
      <div
        className={overlayClasses}
        onClick={this.toggleMotionExample}
        onMouseOver={this.overlayMouseOver}
        onMouseOut={this.overlayMouseOut}>
        <button
          className="motion-example__button"
          aria-label="Play motion example">
          <svg
            width="99px"
            height="100px"
            viewBox="4 4 99 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <polygon
              className={playIconClasses}
              stroke="none"
              fillRule="evenodd"
              transform="translate(54.000000, 54.000000) rotate(-270.000000) translate(-54.000000, -54.000000) "
              points="54 5 103 103 5 103"
            />
            <g
              className={pauseIconClasses}
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd">
              <rect x="0" y="0" width="37" height="98" />
              <rect x="61" y="0" width="37" height="98" />
            </g>
          </svg>
        </button>
      </div>
    );
    const motionExampleContent = isSingleExample ? (
      <div className={containerClasses}>
        <div className="motion-example__easing-demo">
          <div className={motionCurveClasses}>{curveSvg}</div>
          <div className="motion-example__track">
            <div className=" motion-example__element" />
          </div>
        </div>
        {overlayContent}
      </div>
    ) : (
      <div className={containerClasses}>
        <div className="motion-example__track">
          <div className={correctClassNames} />
          {correctInfo}
        </div>
        <div className="motion-example__track">
          <div className={incorrectClassNames} />
          {incorrectInfo}
        </div>
        {overlayContent}
      </div>
    );
    return motionExampleContent;
  }
}

export default MotionExample;
