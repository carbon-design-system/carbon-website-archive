import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'gatsby';
import Layout from '../components/Layouts';
import { ClickableTile } from 'carbon-components-react';

import sketchIcon from '../content/homepage/images/sketch-icon.svg';
import githubIcon from '../content/homepage/images/github-icon.svg';
import codepenIcon from '../content/homepage/images/codepen-icon.svg';
import sandboxIcon from '../content/homepage/images/sandbox-icon.svg';
import componentsIll from '../content/homepage/images/components.png';
import gettingStartedIll from '../content/homepage/images/getting-started.png';
import resourcesIll from '../content/homepage/images/resources.png';
import styleIll from '../content/homepage/images/style.png';
import scatter from '../content/homepage/images/scatter.svg';

import '../polyfills';

const { GATSBY_CARBON_ENV } = process.env;
const isInternal = GATSBY_CARBON_ENV == 'internal';

const sectionHeader = isInternal ? (
  <section
    className="overview-page__banner overview-page__banner--internal"
    aria-label="overview page banner">
    <h1 className="banner__logo">
      Product Design
    </h1>
  </section>
) : (
  <section
    className="overview-page__banner"
    aria-label="overview page banner">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 823">
      <g fill="none" strokeWidth="2">
        <path
          d="M97.3 306.07c27.19 14.46 52 10.25 75.64-7.49l-17.81-30c-11.21 10.32-25.91 15.93-41.84 7.46-18.91-10.05-24.33-30.08-11.31-54.57l13.26-24.94c13-24.5 32.66-31.2 51.57-21.14 15.93 8.47 19.17 21.33 16.13 36.28l35.88-.38c2.43-30.7-8.83-51.54-36-66-39.93-21.23-81-5.95-109 46.61S57.37 284.84 97.3 306.07z"
          stroke="#0B21A8"
          opacity=".3"
        />
        <path
          data-name="Path"
          d="M70.82 291.99c27.19 14.46 52 10.25 75.64-7.49l-17.81-30c-11.21 10.32-25.91 15.93-41.84 7.46-18.91-10.05-24.33-30.08-11.31-54.57l13.26-24.94c13-24.5 32.66-31.2 51.57-21.14 15.93 8.47 19.17 21.33 16.13 36.28l35.88-.35c2.43-30.7-8.83-51.54-36-66-39.93-21.23-81-5.95-109 46.61s-16.46 92.91 23.48 114.14z"
          stroke="#0B21A8"
          opacity=".1"
        />
        <path
          data-name="Path"
          d="M117.99 317.08c27.19 14.46 52 10.25 75.64-7.49l-17.81-30c-11.21 10.32-25.91 15.93-41.84 7.46-18.91-10.05-24.33-30.08-11.31-54.57l13.26-24.94c13-24.5 32.66-31.2 51.57-21.14 15.93 8.47 19.17 21.33 16.13 36.28l35.88-.35c2.43-30.7-8.83-51.54-36-66-39.93-21.23-81-5.95-109 46.61s-16.45 92.9 23.48 114.14z"
          stroke="#0B21A8"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path d="M53.84351034 664.3264129l135.35957093-54.68881657 54.68881657 135.35957093-135.35957092 54.68881658z" />
        <path
          data-name="Rectangle-2"
          opacity=".3"
          d="M28.5999305 655.32682863l135.35957094-54.68881657L218.648318 735.997583 83.2887471 790.68639955z"
        />
        <path
          data-name="Rectangle-2"
          opacity=".1"
          d="M1.30727542 647.15849654l135.35957092-54.68881657 54.68881658 135.35957093L55.996092 782.51806747z"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path
          data-name="Rectangle-2"
          d="M1036.59884943 252.91132245l134.84475598-57.238203 57.23820302 134.84475597-134.84475598 57.238203z"
        />
        <path
          data-name="Rectangle-2"
          opacity=".3"
          d="M1045.19015696 227.4304784l134.844756-57.23820302 57.238203 134.84475598-134.84475598 57.238203z"
        />
        <path
          data-name="Rectangle-2"
          opacity=".1"
          d="M1052.2449 200.6052l134.7708-57.1311 57.1311 134.7708-134.7708 57.1311z"
          strokeWidth="1.9985"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path
          data-name="Rectangle-2"
          d="M1220.759993 667.64245583l129.00175408-57.43528137 57.43528137 129.00175407-129.00175408 57.43528137z"
        />
        <path
          data-name="Rectangle-2"
          opacity=".3"
          d="M1253.4022198 678.64557183l129.0017541-57.43528137 57.43528136 129.00175408-129.00175408 57.43528137z"
        />
        <path
          data-name="Rectangle-2"
          opacity=".1"
          d="M1293.25129392 693.23574483l129.00175408-57.43528137 57.43528137 129.00175408-129.00175408 57.43528137z"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path
          data-name="Rectangle-2"
          d="M326.96903197 217.8200386l89.4721883-127.7795274 127.7795274 89.47218832-89.4721883 127.7795274z"
        />
        <path
          data-name="Rectangle-2"
          opacity=".3"
          d="M324.28116742 170.27180653l89.4721883-127.7795274 127.7795274 89.47218832-89.4721883 127.7795274z"
        />
        <path
          data-name="Rectangle-2"
          opacity=".1"
          d="M309.8023 128.7689L398.7166.8571l127.9118 88.9143-88.9143 127.9118z"
          strokeWidth="1.9973"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <circle
          cx="330.25"
          cy="343.51"
          r="65.56"
          transform="translate(-94.02 125.42) rotate(-19)"
        />
        <circle
          data-name="Oval"
          cx="304.83"
          cy="331.11"
          r="65.56"
          transform="translate(-91.37 116.47) rotate(-19)"
          opacity=".3"
        />
        <circle
          data-name="Oval"
          cx="279.41"
          cy="318.71"
          r="65.56"
          transform="translate(-88.72 107.52) rotate(-19)"
          opacity=".1"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path d="M664.58 377.77l-163.43-31.24L610.9 220.28l53.68 157.49z" />
        <path
          data-name="Triangle"
          opacity=".3"
          d="M692.39 366.28l-163.42-31.23L638.72 208.8l53.67 157.48z"
        />
        <path
          data-name="Triangle"
          opacity=".1"
          d="M725.64 350.6l-163.42-31.23 109.75-126.25 53.67 157.48z"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path
          data-name="Triangle"
          d="M74.92 510.53l11.09-166.01 138.68 93.54-149.77 72.47z"
        />
        <path
          data-name="Triangle"
          opacity=".3"
          d="M89.71 536.74l11.09-166.01 138.68 93.54-149.77 72.47z"
        />
        <path
          data-name="Triangle"
          opacity=".1"
          d="M109.33 567.83l11.08-166.01 138.69 93.54-149.77 72.47z"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path
          data-name="Triangle"
          d="M1140.96 534.62l77.65-147.15 88.64 141.86-166.29 5.29z"
        />
        <path
          data-name="Triangle"
          opacity=".3"
          d="M1143.81 564.58l77.65-147.15 88.65 141.86-166.3 5.29z"
        />
        <path
          data-name="Triangle"
          opacity=".1"
          d="M1149.08 600.96l77.65-147.15 88.65 141.86-166.3 5.29z"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path d="M246.65 550.67l60.69-50.93 74.44 27.1 13.76 78.02-60.69 50.93-74.45-27.1-13.75-78.02z" />
        <path
          data-name="Polygon"
          opacity=".3"
          d="M286.13 542.09l60.69-50.93 74.45 27.1 13.76 78.02-60.69 50.92-74.45-27.09-13.76-78.02z"
        />
        <path
          data-name="Polygon"
          opacity=".1"
          d="M324 527.85l60.69-50.92 74.45 27.09 13.75 78.02-60.69 50.93-74.45-27.1L324 527.85z"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path
          data-name="Polygon"
          d="M1062.61 673.33h-82.18l-41.09-71.17 41.09-71.17h82.18l41.09 71.17-41.09 71.17z"
        />
        <path
          data-name="Polygon"
          opacity=".3"
          d="M1025.51 653.82h-82.18l-41.09-71.17 41.09-71.17h82.18l41.09 71.17-41.09 71.17z"
        />
        <path
          data-name="Polygon"
          opacity=".1"
          d="M985.93 639.88h-82.18l-41.09-71.17 41.09-71.17h82.18l41.1 71.17-41.1 71.17z"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <path
          data-name="Polygon"
          d="M753.93 90.33h99.99l49.99 86.59-49.99 86.59h-99.99l-50-86.59 50-86.59z"
        />
        <path
          data-name="Polygon"
          opacity=".3"
          d="M799.07 114.06h99.98l50 86.6-50 86.59h-99.98l-50-86.59 50-86.6z"
        />
        <path
          data-name="Polygon"
          opacity=".1"
          d="M843.05 121.65h99.98l50 86.59-50 86.59h-99.98l-50-86.59 50-86.59z"
        />
      </g>
      <g data-name="c1" fill="none" strokeWidth="2">
        <path
          data-name="Path"
          d="M563.82 784.63c27.68-13.5 38.88-36.08 38.4-65.59l-34.77-3.24c1.76 15.14-2.34 30.33-18.56 38.24-19.24 9.39-38.64 2-50.8-22.93l-12.38-25.39c-12.16-24.94-6-44.76 13.21-54.15 16.22-7.91 28.53-3 38.83 8.28l20.81-29.23c-23.41-20-46.89-23.15-74.57-9.65-40.65 19.83-52.44 62.06-26.35 115.56s65.55 67.92 106.18 48.1z"
          stroke="#0B21A8"
          opacity=".3"
        />
        <path
          data-name="Path"
          d="M536.88 797.78c27.68-13.5 38.88-36.08 38.4-65.59l-34.77-3.24c1.76 15.14-2.34 30.33-18.56 38.24-19.24 9.39-38.64 2-50.8-22.93l-12.33-25.41c-12.16-24.94-6-44.76 13.21-54.15 16.22-7.91 28.53-3 38.83 8.28l20.81-29.23c-23.41-20-46.89-23.15-74.57-9.65-40.65 19.83-52.44 62.06-26.35 115.56s65.48 67.94 106.13 48.12z"
          stroke="#0B21A8"
          opacity=".05"
        />
        <path
          data-name="Path"
          d="M584.9 774.35c27.68-13.5 38.88-36.08 38.4-65.59l-34.77-3.24c1.76 15.14-2.34 30.33-18.56 38.24-19.24 9.39-38.64 2-50.8-22.93l-12.35-25.4c-12.16-24.94-6-44.76 13.21-54.15 16.22-7.91 28.53-3 38.83 8.28l20.81-29.23c-23.41-20-46.89-23.15-74.57-9.65-40.68 19.83-52.47 62.06-26.38 115.51s65.53 68 106.18 48.16z"
          stroke="#0B21A8"
        />
      </g>
      <g fill="none" strokeWidth="2">
        <path
          data-name="Path"
          d="M1374.96 528.33c25.53 17.22 50.69 15.63 76 .46l-14.58-31.74c-12.23 9.09-27.43 13.14-42.39 3-17.75-12-21.06-32.46-5.54-55.46l15.8-23.42c15.51-23 35.74-27.61 53.49-15.64 15 10.09 16.84 23.22 12.25 37.77l35.72 3.4c5.62-30.28-3.4-52.18-28.92-69.4-37.5-25.29-80-14.39-113.25 35s-26.08 90.74 11.42 116.03z"
          stroke="#0B21A8"
          opacity=".3"
        />
        <path
          data-name="Path"
          d="M1350.09 511.56c25.53 17.22 50.69 15.63 76 .46l-14.58-31.74c-12.23 9.09-27.43 13.14-42.39 3-17.75-12-21.06-32.46-5.54-55.46l15.8-23.42c15.51-23 35.74-27.61 53.49-15.64 15 10.09 16.84 23.22 12.25 37.77l35.72 3.4c5.62-30.28-3.4-52.18-28.92-69.4-37.5-25.29-80-14.39-113.25 35s-26.07 90.73 11.42 116.03z"
          stroke="#0B21A8"
          opacity=".05"
        />
        <path
          data-name="Path"
          d="M1394.39 541.43c25.53 17.22 50.69 15.63 76 .46l-14.57-31.7c-12.23 9.09-27.43 13.14-42.39 3-17.75-12-21.06-32.46-5.54-55.46l15.8-23.42c15.51-23 35.74-27.61 53.49-15.64 15 10.09 16.84 23.22 12.25 37.77l35.72 3.4c5.62-30.28-3.4-52.18-28.92-69.4-37.5-25.29-80-14.39-113.25 35s-26.09 90.75 11.41 115.99z"
          stroke="#0B21A8"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <circle
          data-name="Oval"
          cx="1400.43"
          cy="210.27"
          r="79.61"
          transform="translate(1116.98 1596.97) rotate(-87)"
        />
        <circle
          data-name="Oval"
          cx="1374.91"
          cy="233.25"
          r="79.61"
          transform="translate(1069.84 1593.26) rotate(-87)"
          opacity=".3"
        />
        <circle
          data-name="Oval"
          cx="1349.38"
          cy="256.23"
          r="79.61"
          transform="translate(1022.7 1589.55) rotate(-87)"
          opacity=".1"
        />
      </g>
      <g fill="none" stroke="#0B21A8" strokeWidth="2">
        <circle
          data-name="Oval"
          cx="788.73"
          cy="678.37"
          r="79.61"
          transform="matrix(0.97, -0.26, 0.26, 0.97, -148.88, 226.44)"
        />
        <circle
          data-name="Oval"
          cx="758.98"
          cy="661.2"
          r="79.61"
          transform="matrix(0.97, -0.26, 0.26, 0.97, -145.45, 218.16)"
          opacity=".3"
        />
        <circle
          data-name="Oval"
          cx="729.24"
          cy="644.03"
          r="79.61"
          transform="matrix(0.97, -0.26, 0.26, 0.97, -142.01, 209.88)"
          opacity=".1"
        />
      </g>{' '}
      */}
    </svg>
    <h1 className="banner__logo">
      <span className="banner__logo--bold">Carbon</span> Design System
    </h1>
    <Link
      to="/components/overview"
      className="bx--btn bx--btn--secondary banner__cta-btn">
      Explore the system
    </Link>
  </section>
);

class IndexPage extends React.Component {
  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  handleClick = cat => {
    ReactGA.event({
      category: cat,
      action: 'Clicked link',
    });
  };

  interpolate = (a, b) => {
    return (
      (a = +a),
      (b -= a),
      t => {
        return a + b * t;
      }
    );
  };

  render() {
    return (
      <Layout>
        <main
          id="maincontent"
          role="main"
          className="overview-page"
          tabIndex="-1">
          {sectionHeader}
          <section
            aria-label="overview page section 1"
            className="overview-page__section">
            <ul className="overview-page__list">
              <li className="overview-page__list-item">
                <Link
                  to="/getting-started/designers"
                  aria-label="Getting started"
                  className="list-item__link">
                  <img src={gettingStartedIll} alt="" />

                  <div className="list-item__info">
                    <span className="list-item__heading">Getting Started</span>
                    <p>
                      Onboarding for designers and developers who are using
                      the system for the first time.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="overview-page__list-item">
                <Link
                  to="/guidelines/accessibility/overview"
                  aria-label="Guidelines"
                  className="list-item__link">
                  <img src={styleIll} alt="" />
                  <div className="list-item__info">
                    <span className="list-item__heading">Guidelines</span>
                    <p>
                      Guidance on usage and application for basic design
                      elements.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="overview-page__list-item">
                <Link
                  to="/components/overview"
                  aria-label="Components"
                  className="list-item__link">
                  <img src={componentsIll} alt="" />
                  <div className="list-item__info">
                    <span className="list-item__heading">Components</span>
                    <p>
                      A library of all components, comprised of code,
                      usage and style guidelines.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="overview-page__list-item">
                <Link
                  to="/resources"
                  aria-label="Resources"
                  className="list-item__link">
                  <img src={resourcesIll} alt="" />
                  <div className="list-item__info">
                    <span className="list-item__heading">Resources</span>
                    <p>
                      A helpful list of tools, links and downloads that will
                      improve a user's workflow.
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </section>
          <section
            aria-label="overview page section 2"
            className="overview-page__section overview-page__section--gray">
            <ul className="overview-page__list">
              <li className="overview-page__list-item">
                <ClickableTile
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ibm/carbon-design-kit"
                  className="overview-page__tile">
                  <div className="tile__icon">
                    <img src={sketchIcon} alt="" />
                  </div>
                  <div className="tile__info">
                    <p aria-label="Design Kit on GitHub">
                      {isInternal ? 'Design Kit' : 'Carbon Design Kit'}
                    </p>
                    <p>
                      A Sketch file containing core visual styles, components,
                      and patterns a designer needs to use to building product experiences.
                    </p>
                  </div>
                </ClickableTile>
              </li>
              <li className="overview-page__list-item">
                <ClickableTile
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ibm/carbon-components"
                  className="overview-page__tile">
                  <div className="tile__icon">
                    <img src={githubIcon} alt="" />
                  </div>
                  <div className="tile__info">
                    <p aria-label="Components on GitHub">
                      {isInternal ? 'Components' : 'Carbon Components'}
                    </p>
                    <p>
                      The Component Library gives developers a collection of
                      re-usable HTML and Sass partials they can use for building
                      websites and user interfaces.
                    </p>
                  </div>
                </ClickableTile>
              </li>
              <li className="overview-page__list-item">
                <ClickableTile
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ibm/carbon-components-react"
                  className="overview-page__tile">
                  <div className="tile__icon">
                    <img src={githubIcon} alt="" />
                  </div>
                  <div className="tile__info">
                    <p aria-label="Components React on GitHub">
                      {isInternal ? 'React Components' : 'Carbon Components React'}
                    </p>
                    <p>
                      The Component Library gives developers a collection of
                      re-usable React components they can use for building
                      websites and user interfaces.
                    </p>
                  </div>
                </ClickableTile>
              </li>
              <li className="overview-page__list-item">
                <ClickableTile
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ibm/carbon-components-angular"
                  className="overview-page__tile">
                  <div className="tile__icon">
                    <img src={githubIcon} alt="" />
                  </div>
                  <div className="tile__info">
                    <p aria-label="Components Angular on GitHub">
                      {isInternal ? 'Components Angular' : 'Carbon Components Angular'}
                    </p>
                    <p>
                      The Component Library gives developers a collection of
                      re-usable Angular components they can use for building
                      websites and user interfaces.
                    </p>
                  </div>
                </ClickableTile>
              </li>
              <li className="overview-page__list-item">
                <ClickableTile
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.codepen.io/team/carbon"
                  className="overview-page__tile">
                  <div className="tile__icon">
                    <img src={codepenIcon} alt="" />
                  </div>
                  <div className="tile__info">
                    <p aria-label="CodePen">
                      {isInternal ? 'CodePen' : 'Carbon CodePen'}
                    </p>
                    <p>
                      CodePen, a social development playground for front-end
                      designers and developers, houses demos of our vanilla
                      Components.
                    </p>
                  </div>
                </ClickableTile>
              </li>
              <li className="overview-page__list-item">
                <ClickableTile
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://themes.carbondesignsystem.com/"
                  className="overview-page__tile">
                  <div className="tile__icon">
                    <img src={sandboxIcon} alt="" />
                  </div>
                  <div className="tile__info">
                    <p>Theming Sandbox</p>
                    <p>
                      This sandbox allows you to build a custom theme by
                      changing a color variable's hex value and then exporting
                      the theme sheet SCSS file.
                    </p>
                  </div>
                </ClickableTile>
              </li>
            </ul>
          </section>
          <section
            aria-label="overview page section 3"
            className="overview-page__section overview-page__section--contribute"
            style={{ backgroundImage: `url(${scatter})` }}>
            <div className="contribute__info">
              <h2>Wondering how to contribute?</h2>
              <p>
                We welcome all feedback, designs, or ideas in order to produce
                the best possible experience for our users. If you're interested
                in contributing, check out our{' '}
                <Link to="/contributing/designers">
                  contributing guidelines
                </Link>{' '}
                to get started.
              </p>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

export default IndexPage;
