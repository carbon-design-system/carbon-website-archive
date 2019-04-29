import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
const { prefix } = settings;

import { Launch20, ArrowRight24 } from '@carbon/icons-react';

const AspectRatioTile = ({
  ratio,
  marginTop,
  theme,
  hoverDark,
  contentOnHover,
  backgroundColor,
  image,
  transparentImage,
  subtitle,
  title,
  identityIcon,
  actionIcon,
  link,
  target,
  children,
}) => {
  const windowWidth = document.body.clientWidth;

  const calcRatio = ratio => {
    switch (ratio) {
      case '1:1':
        return '100%';
      case '2:1':
        return '50%';
      case '4:1':
        return windowWidth > 672 ? '25%' : '50%';
      case '6:1':
        return windowWidth > 1056
          ? '16.67%'
          : windowWidth > 672
          ? '25%'
          : '50%';
      case '1:2':
        return '200%';
      case '3:1':
        return '33.33%';
      case '3:2':
        return '66.66%';
      case '4:3':
        return '75%';
      case '16:9':
        return '56.25%';
      default:
        return '50%';
    }
  };

  const getActionIcon = type => {
    switch (type) {
      case 'resources':
        return <Launch20 aria-label="Open resource" />;
      case 'article':
        return <ArrowRight24 aria-label="Go to content" />;
      case 'no-icon':
        return null;
      default:
        return <ArrowRight24 aria-label="Go to content" />;
    }
  };

  const ratioStyle = {
    paddingBottom: calcRatio(ratio),
    marginTop: marginTop ? marginTop : 0,
  };

  const backgroundStyle = {
    backgroundColor: backgroundColor ? backgroundColor : null,
    backgroundImage: image ? `url(${image})` : null,
  };

  const transparentImageStyle = {
    backgroundImage: transparentImage ? `url(${transparentImage})` : null,
  };

  return (
    <>
      {children ? (
        <div
          className={
            theme === 'dark'
              ? `${prefix}--aspect-ratio-tile ${prefix}--aspect-ratio-tile__dark`
              : `${prefix}--aspect-ratio-tile`
          }
          style={ratioStyle}
          href={link}
          target={target}>
          <div
            className={`${prefix}--aspect-ratio-tile-background`}
            style={backgroundStyle}
          />
          <div className={`${prefix}--aspect-ratio-tile-nested-content`}>
            {children}
          </div>
        </div>
      ) : (
        <a
          className={
            theme === 'dark'
              ? `${prefix}--aspect-ratio-tile ${prefix}--aspect-ratio-tile__dark`
              : `${prefix}--aspect-ratio-tile`
          }
          style={ratioStyle}
          href={link}
          target={target}>
          <div
            className={
              hoverDark
                ? `${prefix}--aspect-ratio-tile-hover ${prefix}--aspect-ratio-tile-hover__dark`
                : `${prefix}--aspect-ratio-tile-hover`
            }
          />
          <div
            className={`${prefix}--aspect-ratio-tile-background`}
            style={backgroundStyle}
          />
          <div
            className={
              contentOnHover
                ? `${prefix}--aspect-ratio-tile-content ${prefix}--aspect-ratio-tile-content-on-hover-only`
                : `${prefix}--aspect-ratio-tile-content`
            }
            style={transparentImageStyle}>
            <div className={`${prefix}--aspect-ratio-tile-title`}>
              <div className={`${prefix}--type-body-long-01`}>{subtitle}</div>
              <div className={`${prefix}--type-expressive-heading-03`}>
                {title}
              </div>
            </div>
            {identityIcon ? (
              <div className={`${prefix}--aspect-ratio-tile-identity-icon`}>
                <img src={identityIcon} alt="identity-icon" />
              </div>
            ) : null}
            <div
              className={`${prefix}--aspect-ratio-tile-action-icon`}
              style={{ fill: theme === 'dark' ? '#ffffff' : '#282828' }}>
              {getActionIcon(actionIcon)}
            </div>
          </div>
        </a>
      )}
    </>
  );
};

AspectRatioTile.propTypes = {
  ratio: PropTypes.string.isRequired,
  theme: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actionIcon: PropTypes.string,
  identityIcon: PropTypes.string,
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  transparentImage: PropTypes.string,
  hoverDark: PropTypes.bool,
  contentOnHover: PropTypes.bool,
  link: PropTypes.string,
  target: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node,
};

export default AspectRatioTile;
