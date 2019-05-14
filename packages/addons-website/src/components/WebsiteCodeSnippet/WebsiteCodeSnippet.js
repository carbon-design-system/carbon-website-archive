import React from 'react';
import PropTypes from 'prop-types';
import { CodeSnippet } from 'carbon-components-react';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-scss';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class WebsiteCodeSnippet extends React.Component {
  static propTypes = {
    children: PropTypes.array,
  };

  state = {
    copied: false,
    multi: true,
  };

  componentDidMount() {
    Prism.highlightAll();
    if (this.codeRef) {
      if (this.codeRef.clientHeight > 20) {
        this.setState({ multi: true });
      } else {
        this.setState({ multi: false });
      }
    }
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    const { children } = this.props;
    const type = this.state.multi ? 'multi' : 'single';

    let textToCopy;
    if (children.props.children) {
      textToCopy = children.props.children.replace(/(\$ )+/g, '');
    }

    return (
      <div className={`${prefix}--row`}>
        <div
          className={`${prefix}--col-lg-8 ${prefix}--offset-lg-4 ${prefix}--no-gutter`}>
          <div className={`${prefix}--snippet--website`}>
            <CopyToClipboard
              text={textToCopy}
              onCopy={() => this.setState({ copied: true })}>
              <CodeSnippet type={type}>
                <div ref={element => (this.codeRef = element)}>{children}</div>
              </CodeSnippet>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    );
  }
}
