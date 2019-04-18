import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

const WebsiteSwitcher = props => {
  const { isSwitcherOpen, links } = props;

  const classNames = classnames(`${prefix}--website-switcher`, {
    [`${prefix}--website-switcher--expanded`]: isSwitcherOpen,
  });

  return (
    <nav className={classNames} aria-label="website switcher">
      <ul
        style={{ display: !isSwitcherOpen && 'none' }}
        className={`${prefix}--website-switcher__list`}>
        {links &&
          links.map((link, i) => {
            return (
              <li key={i} className={`${prefix}--website-switcher-list__item`}>
                <a
                  className={`${prefix}--website-switcher-list__item-link`}
                  tabIndex={isSwitcherOpen ? 0 : -1}
                  href={link.href}
                  aria-label={link.linkText}>
                  {link.linkText}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

WebsiteSwitcher.propTypes = {
  /**
   * Specify an array of links
   */
  links: PropTypes.array,
};

export default WebsiteSwitcher;
