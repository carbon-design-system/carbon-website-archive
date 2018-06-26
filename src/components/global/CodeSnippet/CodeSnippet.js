import React from 'react';
import PropTypes from 'prop-types';
import { CodeSnippet } from 'carbon-components-react';
import { CopToClipboard } from 'react-copy-to-clipboard';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-scss';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';

require('prismjs/themes/prism.css');

export default class Snippet extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    copied: false,
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  onClick = () => {
    console.log('clicked!');
  };

  render() {
    const { children } = this.props;
    return (
      <CopyToClipboard text={children[0].props.children[0]} onCopy={() => this.setState({ copied: true })}>
        <CodeSnippet onClick={this.onClick} type="multi">
          {children}
        </CodeSnippet>
      </CopyToClipboard>
    );
  }
}
