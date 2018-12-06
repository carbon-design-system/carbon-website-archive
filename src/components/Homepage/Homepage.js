import React from 'react';
import { Icon } from 'carbon-components-react';
import FeatureTile from '../FeatureTile';
import { Link } from 'gatsby';

export class Homepage extends React.Component {
  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  render() {
    const { GATSBY_CARBON_ENV } = process.env;
    const isInternal = GATSBY_CARBON_ENV == 'internal';

    // Banner image
    const bannerImg = require('../../content/homepage/images/homepage-placeholder-img.png');

    // Feature tiles images
    const gettingStartedDesigners = require('../../content/homepage/images/getting-started-designers.png');
    const gettingStartedDevelopers = require('../../content/homepage/images/getting-started-developers.png');

    const sectionHeader = isInternal ? (
      <section className="ibm--row homepage--header">
        <div className="ibm--col-lg-4 ibm--offset-lg-4">
          {' '}
          <h3 className="homepage--header__title">
            IBM Product <br />
            Design System
          </h3>
        </div>
        <img src={bannerImg} alt="IBM Product Design System banner image" />
      </section>
    ) : (
      <section className="ibm--row homepage--header">
        <div className="ibm--col-lg-4 ibm--offset-lg-4">
          {' '}
          <h3 className="homepage--header__title">
            Carbon <br />
            Design System
          </h3>
        </div>
        <img src={bannerImg} alt="Carbonn Design System banner image" />
      </section>
    );

    const introSection = (
      <div className="ibm--row homepage--intro">
        <div className="ibm--col-lg-4 ibm--offset-lg-4">
          <h3>
            {/*Formerly known <br /> as Carbon*/}
          </h3>
        </div>
        <div className="ibm--col-lg-8">
          <h2>
            <strong>Carbon Design System</strong> si amet finibus consectetur
            adipsicing elit.
          </h2>
          <h2>
            Our system is built on the{' '}
            <a href="https://www.ibm.com/design/language/">IBM Design Language</a>{' '}
            foundation as a resource for designers and developers. This collection
            of UI components, guidelines, code, and tooling ensures IBM products
            share a unified user experience.
          </h2>
        </div>
      </div>
    );
    return (
      <div>
        <span className="homepage--dots" />
        {sectionHeader}
        {introSection}
        <div className="ibm--row">
          <div className="ibm--col-lg-12 ibm--offset-lg-4">
            <h3 className="page-h3">Getting Started</h3>
            <FeatureTile
              href="/getting-started/designers"
              label="Start"
              title="Designing">
              <img src={gettingStartedDesigners} />
            </FeatureTile>
            <FeatureTile
              href="/getting-started/developers"
              label="Start"
              title="Developing">
              <img src={gettingStartedDevelopers} />
            </FeatureTile>
          </div>
        </div>
      </div>
    );
  }
}

export class HomepageFooter extends React.Component {
  render() { 
    return (       
      <div className="ibm--row homepage--footer">
        <div className="ibm--col-lg-4 ibm--offset-lg-4">
          <h3>
            Wondering how <br />
            to contribute?
          </h3>
        </div>
        <div className="ibm--col-lg-8">
          <div className="homepage--footer__info">
            <h2>
              We welcome all feedback, designs, or ideas in order to produce
              the best possible experience for our users. If you're interested
              in contributing, check out our contributing guidelines to get
              started.
            </h2>
            <Link to="/contributing" alt="Start contributing">
              Start contributing
              <Icon
                name="icon--arrow--right"
                alt="start contributing icon"
                width="20"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}