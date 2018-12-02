import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'gatsby';
import Layout from '../components/Layouts';
import { ClickableTile } from 'carbon-components-react';

import sketchIcon from '../content/homepage/images/sketch-icon.svg';
import githubIcon from '../content/homepage/images/github-icon.svg';
import codepenIcon from '../content/homepage/images/codepen-icon.svg';
import sandboxIcon from '../content/homepage/images/sandbox-icon.svg';

import '../polyfills';

const { GATSBY_CARBON_ENV } = process.env;
const isInternal = GATSBY_CARBON_ENV == 'internal';

const sectionHeader = isInternal ? (
  <section>
    Internal Only Content 
  </section>
) : (
  <section>
    External Only Content
  </section>
);

class IndexPage extends React.Component {
  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  render() {
    return (
      <Layout>
        <div className="page_md component-docs bx--row">
<<<<<<< HEAD
            <div class="ibm--col-lg-12 ibm--offset-lg-4">
=======
            <div class="ibm--col-lg-12 bx--offset-lg-4">
>>>>>>> v10
                {sectionHeader}
                {isInternal ? 'IBM Design System' : 'Carbon Design System'}
            </div>
        </div>
        
      </Layout>
    );
  }
}

export default IndexPage;
