import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ClickableTile, Icon } from 'carbon-components-react';

export default class ClickTile extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    excerpt: PropTypes.string,
    dark: PropTypes.bool,
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
      excerpt,
      dark,
    } = this.props;

    const classNames = classnames({
      tile: true,
      'tile--resource': type === 'resource',
      'tile--article': type === 'article',
      'tile--dark': dark,
    });

    if (type === 'resource') {
      return (
        <ClickableTile
          target="_blank"
          rel="noopener noreferrer"
          className={classNames}
          href={href}>
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
          <div className="tile__img">{children}</div>
          <div className="tile__link-icon">
            <Icon
              name="icon--launch"
              width="20"
              height="20"
              description="Launch the resource"
            />
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
            {author ? <p className="tile__author">{author}</p> : null}
            <span className="tile__divider">-</span>
            <div className="tile__caption">
              {date ? <p className="tile__date">{date}</p> : null}
              {excerpt ? <p className="tile__excerpt">{excerpt}</p> : null}
            </div>
          </div>
        </ClickableTile>
      );
    }
  }
}
