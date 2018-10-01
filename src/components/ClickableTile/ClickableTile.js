import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ClickableTile } from 'carbon-components-react';

export default class ClickTile extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const {
      children,
      href,
      date,
      author,
      title,
      type,
      description,
    } = this.props;

    const classNames = classnames({
      tile: true,
      'tile--resource': type === 'resource',
      'tile--article': type === 'article',
    });

    if (type === 'resource') {
      return (
        <ClickableTile
          target="_blank"
          rel="noopener noreferrer"
          className={classNames}
          href={href}>
          <div className="tile__img">{children}</div>
          <div className="tile__info">
            <h5>{title}</h5>

            <div className="tile__caption">
              {description ? (
                <p className="tile__description">{description}</p>
              ) : null}
              {author ? <p className="tile__author">{author}</p> : null}
              {date ? <p className="tile__date">{date}</p> : null}
            </div>
          </div>
        </ClickableTile>
      );
    }

    if (type !== 'resource') {
      return (
        <ClickableTile
          target="_blank"
          rel="noopener noreferrer"
          className={classNames}
          href={href}>
          <div className="tile__img">{children}</div>
          <div className="tile__info">
            <h5>{title}</h5>

            <div className="tile__caption">
              {author ? <p className="tile__author">{author}</p> : null}
              {date ? <p className="tile__date">{date}</p> : null}
            </div>
          </div>
        </ClickableTile>
      );
    }
  }
}
