import React, { Component } from 'react';
import { Icon } from 'carbon-components-react';
import ClickTile from '../ClickableTile';
import TileGroup from '../TileGroup';
import FeatureTile from '../FeatureTile';

const { GATSBY_CARBON_ENV } = process.env;
const isInternal = GATSBY_CARBON_ENV == 'internal';

const sketchIcon = require('../../content/homepage/images/sketch-icon.svg');
const bannerImg = require('../../content/homepage/images/homepage-placeholder-img.png');
const gettingStartedDesigners = require('../../content/homepage/images/getting-started-designers.png');
const gettingStartedDevelopers = require('../../content/homepage/images/getting-started-developers.png');

const sectionHeader = isInternal ? (
  <section className="homepage--header">
    <img src={bannerImg} alt="IBM Product Design System banner image" />
  </section>
) : (
  <section className="homepage--header">
    <img src={bannerImg} alt="IBM Product Design System banner image" />
  </section>
);

const introSection = (
  <div className="ibm--row homepage--intro">
    <div className="ibm--col-lg-4 ibm--offset-lg-4">
      <h3>
        Formerly known <br /> as Carbon
      </h3>
    </div>
    <div className="ibm--col-lg-8">
      <h2>
        <strong>IBM Product Design System</strong> si amet finibus consectetur
        adipsicing elit.
      </h2>
      <h2>
        Our system is built on the <a href="#">IBM Design Language</a>{' '}
        foundation as a resource for designers and developers. This collection
        of UI components, guidelines, code, and tooling ensures IBM products
        share a unified user experience.
      </h2>
    </div>
  </div>
);

class Homepage extends Component {
  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  render() {
    return (
      <div>
        {sectionHeader}
        {introSection}
        <div className="ibm--row homepage--section">
          <div className="ibm--col-lg-12 ibm--offset-lg-4">
            <h3>Getting Started</h3>
            <FeatureTile href="#" label="Start" title="Designing">
              <img src={gettingStartedDesigners} />
            </FeatureTile>
            <FeatureTile href="#" label="Start" title="Developing">
              <img src={gettingStartedDevelopers} />
            </FeatureTile>
          </div>
        </div>
        <div className="ibm--row homepage--section">
          <div className="ibm--col-lg-12 ibm--offset-lg-4">
            <h3>Other Resources</h3>
            <p>
              The Component Libraries give developers a collection of re-usable
              React components they can use for building websites and user
              interfaces. See a <a href="#">complete list of resources.</a>
            </p>
            <TileGroup maxWidth="640px">
              <ClickTile title="Product Design Kit" type="resource" href="#">
                <img src={sketchIcon} />
              </ClickTile>
              <ClickTile title="Component Library" type="resource" href="#">
                <img src={sketchIcon} />
              </ClickTile>
              <ClickTile title="Theming Sandbox" type="resource" href="#">
                <img src={sketchIcon} />
              </ClickTile>
              <ClickTile title="Theming Sandbox" type="resource" href="#">
                <img src={sketchIcon} />
              </ClickTile>
            </TileGroup>
          </div>
        </div>
        <div className="ibm--row homepage--section">
          <div className="ibm--col-lg-12 ibm--offset-lg-4">
            <h3>Latest Articles</h3>
            <TileGroup>
              <ClickTile
                title="Article 1"
                author="Medium"
                type="article"
                href="#"
                excerpt="The economic health report of global countries">
                <img src="https://source.unsplash.com/random/320x180" />
              </ClickTile>
              <ClickTile
                title="Article 2"
                author="Medium"
                type="article"
                href="#"
                excerpt="The economic health report of global countries">
                <img src="https://source.unsplash.com/random/320x180" />
              </ClickTile>
              <ClickTile
                title="Article 3"
                author="Medium"
                type="article"
                href="#"
                excerpt="The economic health report of global countries">
                <img src="https://source.unsplash.com/random/320x180" />
              </ClickTile>
            </TileGroup>
          </div>
        </div>
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
              <a href="#" alt="Start contributing">
                Start contributing
                <Icon
                  name="icon--arrow--right"
                  alt="start contributing icon"
                  width="20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
