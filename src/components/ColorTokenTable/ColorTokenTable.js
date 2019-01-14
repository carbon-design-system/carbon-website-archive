import React from 'react';
import PropTypes from 'prop-types';
import { runInDebugContext } from 'vm';
import classnames from 'classnames';
import {
  ContentSwitcher,
  Switch,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';

import colorTokens from '../../data/guidelines/color-tokens';

import { themes } from '@carbon/themes';

export default class ColorTokenTable extends React.Component {
  static propTypes = {};

  state = {
    theme: 'white',
  };

  switchTheme = theme => {
    this.setState({
      theme: theme.name,
    });
  };

  renderValue = (token, tokenInfo) => {
    const currentTheme = this.state.theme;
    console.log(themes);
    let newFormattedToken = token.replace('$', '');
    newFormattedToken = newFormattedToken.split('-');
    newFormattedToken = `${newFormattedToken[0]}${newFormattedToken[1]
      .charAt(1)
      .toUpperCase() + newFormattedToken[1].substring(1)}`;
    console.log(newFormattedToken);
    const formattedToken = token.replace('$', '').replace('-', '');
    // const value = tokenInfo.value;
    return (
      <div className="color-token-value">
        <ul>
          {/* <li>{value[currentTheme].name}</li> */}
          <li>—</li>
          <li>{themes[currentTheme][formattedToken]}</li>
        </ul>
        <div>
          <div
            className="color-token-value__block"
            style={{
              backgroundColor: themes[currentTheme][formattedToken],
              border:
                themes[currentTheme][formattedToken] === '#ffffff' &&
                '1px solid #BEBEBE',
            }}
          />
          <OverflowMenu floatingMenu={false}>
            <CopyToClipboard text={themes[currentTheme][formattedToken]}>
              <OverflowMenuItem itemText="Copy hex" />
            </CopyToClipboard>
            <CopyToClipboard text={token}>
              <OverflowMenuItem itemText="Copy token" />
            </CopyToClipboard>
          </OverflowMenu>
        </div>
      </div>
    );
  };

  renderToken = (token, tokenInfo, key) => {
    const roles = tokenInfo.role.map((role, i) => {
      return (
        <li key={i}>
          {role}
          {i !== tokenInfo.role.length - 1 && ';'}
        </li>
      );
    });
    return (
      <tr key={key}>
        <td>
          <code>{token}</code>
        </td>
        <td>
          <ul>{roles}</ul>
        </td>
        <td>{this.renderValue(token, tokenInfo)}</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="ibm--row color-token-table">
        <div className="ibm--col-lg-12 ibm--offset-lg-4 ibm--col-bleed">
          <ContentSwitcher
            className="color-token-table__theme-switcher"
            onChange={this.switchTheme}>
            <Switch name="white" text="White" />
            <Switch name="g10" text="Gray 10" />
            <Switch name="g100" text="Gray 100" />
            <Switch name="g90" text="Gray 90" />
          </ContentSwitcher>
        </div>
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h3 className="page-h3">Core color tokens</h3>
        </div>
        <div className="ibm--col-lg-12 ibm--offset-lg-4 ibm--col-bleed">
          <table className="page-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Role</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(colorTokens['core-tokens']).map((token, i) => {
                console.log(colorTokens['core-tokens'][token]);
                return this.renderToken(
                  token,
                  colorTokens['core-tokens'][token],
                  i
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h3 className="page-h3">Support color tokens</h3>
        </div>
        <div className="ibm--col-lg-12 ibm--offset-lg-4 ibm--col-bleed">
          <table className="page-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Role</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(colorTokens['core-tokens']).map((token, i) => {
                return this.renderToken(
                  token,
                  colorTokens['core-tokens'][token],
                  i
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h3 className="page-h3">Interactive color tokens</h3>
        </div>
        <div className="ibm--col-lg-12 ibm--offset-lg-4 ibm--col-bleed">
          <table className="page-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Role</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(colorTokens['interaction-tokens']).map(
                (token, i) => {
                  return this.renderToken(
                    token,
                    colorTokens['interaction-tokens'][token],
                    i
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
