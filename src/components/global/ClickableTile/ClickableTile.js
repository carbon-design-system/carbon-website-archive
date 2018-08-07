import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ClickableTile } from 'carbon-components-react';

export default class ClickTile extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const {
      children,
      href,
      date,
      author,
      title,
    } = this.props;
   
    return (    
      <ClickableTile
        target="_blank"
        className="page__tile"
        href={href}
      >
        <div className="page__tile-icon">
          {children}
        </div>
        <div className="page__tile-info">
          <h5>{title}</h5>

          <div className="page__tile-caption">
            { author
              ? <p>{author}</p>
              : null
            }
            { date
              ? <p>{date}</p>
              : null
            }
          </div>
        </div>
      </ClickableTile>
    );
  }
}
