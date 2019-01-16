import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

const WebsiteSwitcher = (props) => {
  const { isSwitcherOpen, isSwitcherFinal, links } = props;

  const classNames = classnames(`${prefix}--website-switcher`, {
    [`${prefix}--website-switcher--expanded`]: isSwitcherOpen
  });

  return (
    <div className={classNames}>
      <ul className={`${prefix}--website-switcher__list`}>
        <li className={`${prefix}--website-switcher-list__item ${prefix}--website-switcher-list__item--current`}>
          IBM Design System
        </li>
        {links &&
          links.map((link, i) => {
            return (
              <li 
                key={i}
                className={`${prefix}--website-switcher-list__item`}>
                <a
                  className={`${prefix}--website-switcher-list__item-link`}
                  href={link.href}
                  aria-label={link.linkText}>
                  {link.linkText}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

WebsiteSwitcher.propTypes = {
  /**
   * Specify an array of links
   */
  links: PropTypes.array,
};

export default WebsiteSwitcher;
