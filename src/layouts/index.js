import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import classnames from 'classnames';

import SideNav from '../components/global/SideNav';
import SideNavToggleBtn from '../components/global/SideNavToggleBtn';

import './index.scss';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  state = {
    isOpen: true,
    isFinal: false,
  };

  onToggleBtnClick = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
      setTimeout(() => {
        this.setState({
          isFinal: true,
        });
      }, 5);
    } else {
      this.setState({
        isFinal: false,
      });
      setTimeout(() => {
        this.setState({
          isOpen: true,
        });
      }, 5);
    }
  };

  render() {
    const { children, data } = this.props;
    const classNames = classnames('container', {
      'container--expanded': !this.state.isOpen,
    });

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        />
        <SideNavToggleBtn onToggleBtnClick={this.onToggleBtnClick} isOpen={this.state.isOpen} />
        <SideNav isFinal={this.state.isFinal} isOpen={this.state.isOpen} />
        <div className={classNames}>{children()}</div>
      </div>
    );
  }
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
