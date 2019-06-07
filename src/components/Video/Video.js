import React from 'react';
import PropTypes from 'prop-types';

export default class Vimeo extends React.Component {
  static propTypes = {
    vimeoId: PropTypes.string,
  };

  render() {
    const { vimeoId } = this.props;

    return (
      <div className="gatsby-resp-iframe-wrapper">
        <div className="embedVideo-container">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}`}
            width="640"
            height="360"
            frameBorder="0"
            webkitallowFullScreen
            mozallowFullScreen
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}
