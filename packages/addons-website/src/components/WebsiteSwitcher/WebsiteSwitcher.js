import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

const { prefix } = settings;

const WebsiteSwitcher = (props) => {
  const { isSwitcherOpen, isSwitcherFinal } = props;

  const classNames = classnames(`${prefix}--website-switcher`, {
    [`${prefix}--website-switcher--closed`]: !isSwitcherOpen
  });

  return (
    <div className={classNames}>
      <ul className={`${prefix}--website-switcher__list`}>
        <li className={`${prefix}--switcher-list__item`}>
          <a className={`${prefix}--switcher-list__item-link`} tabIndex="0" href="#">
            IBM Design System
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WebsiteSwitcher;
