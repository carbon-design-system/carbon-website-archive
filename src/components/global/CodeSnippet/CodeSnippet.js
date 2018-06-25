import React from 'react';
import PropTypes from 'prop-types';
import { CodeSnippet } from 'carbon-components-react';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-scss';

require('prismjs/themes/prism.css');

export default class Snippet extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  componentDidMount() {
    console.log(Prism);
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { children } = this.props;
    return <CodeSnippet type="multi">{children}</CodeSnippet>;
  }
}
