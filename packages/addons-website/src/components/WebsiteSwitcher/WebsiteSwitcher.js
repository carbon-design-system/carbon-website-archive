import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

const WebsiteSwitcher = (props) => {
  const { isSwitcherOpen, isSwitcherFinal } = props;

  const classNames = classnames(`${prefix}--website-switcher`, {
    [`${prefix}--website-switcher--expanded`]: isSwitcherOpen
  });

  return (
    <div className={classNames}>
      <ul className={`${prefix}--website-switcher__list`}>
        <li className={`${prefix}--website-switcher-list__item ${prefix}--website-switcher-list__item--current`}>
          IBM Design System
        </li>
        <li className={`${prefix}--website-switcher-list__item`}>
          <a className={`${prefix}--website-switcher-list__item-link`} tabIndex="0" href="#">
            IBM Design System
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WebsiteSwitcher;
