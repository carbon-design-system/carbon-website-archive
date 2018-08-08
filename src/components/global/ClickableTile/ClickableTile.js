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
        className="tile"
        href={href}
      >
        <div className="tile__img">
          {children}
        </div>
        <div className="tile__info">
          <h5>{title}</h5>

          <div className="tile__caption">
            { author
              ? <p class="tile__author">{author}</p>
              : null
            }
            { date
              ? <p class="tile__date">{date}</p>
              : null
            }
          </div>
        </div>
      </ClickableTile>
    );
  }
}
