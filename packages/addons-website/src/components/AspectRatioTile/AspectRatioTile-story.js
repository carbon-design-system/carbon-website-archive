import { storiesOf } from '@storybook/react';
import React from 'react';
import AspectRatioTile from '.';

import Carousel from '@carbon/addons-website/src/components/Carousel/';

const style = {
  width: '100%',
};

const compStyle = {
  width: '100%',
  background: '#171717',
  padding: '5rem 0',
};

const RowDecorator = storyFn => (
  <div className="bx--row" style={style}>
    {storyFn()}
  </div>
);

const CompRowDecorator = storyFn => (
  <div className="bx--row" style={compStyle}>
    {storyFn()}
  </div>
);

storiesOf('Aspect Ratio Tile', module)
  .addDecorator(RowDecorator)
  .add(
    'light square',
    () => (
      <div className="bx--col-lg-4 bx--col-md-4 bx--offset-lg-4 bx--no-gutter">
        <AspectRatioTile
          ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
          hoverDark
          transparentImage="images/tooltip-components.svg"
          subtitle="Components"
          title="Carbon X next"
          actionIcon="resources"
          link="https://www.ibm.com/standards/web/design-kit/"
          target="_blank"
        />
      </div>
    ),
    {
      info: {
        text: 'light square',
      },
    }
  )
  .add(
    'dark square',
    () => (
      <div className="bx--col-lg-4 bx--col-md-4 bx--offset-lg-4 bx--no-gutter">
        <AspectRatioTile
          ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
          theme="dark"
          subtitle="Elements"
          title="2x Grid"
          actionIcon="article"
          transparentImage="images/grid-temp.png"
          link="https://www.ibm.com/standards/web/design-kit/"
          target="_blank"
        />
      </div>
    ),
    {
      info: {
        text: 'dark square',
      },
    }
  )
  .add(
    'w/identity icon',
    () => (
      <div className="bx--col-lg-4 bx--col-md-4 bx--offset-lg-4 bx--no-gutter">
        <AspectRatioTile
          ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
          theme="dark"
          subtitle="GitHub repo"
          title="Design & development"
          actionIcon="resources"
          identityIcon="images/GitHubIcon.svg"
          link="https://www.ibm.com/standards/web/design-kit/"
          target="_blank"
        />
      </div>
    ),
    {
      info: {
        text: 'w/identity icon',
      },
    }
  )
  .add(
    'w/no action icon',
    () => (
      <div className="bx--col-lg-4 bx--col-md-4 bx--offset-lg-4 bx--no-gutter">
        <AspectRatioTile
          ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
          theme="dark"
          image="images/landing-plex-animation.gif"
          actionIcon="no-icon"
          link="https://www.ibm.com/standards/web/design-kit/"
          target="_blank"
        />
      </div>
    ),
    {
      info: {
        text: 'w/no action icon',
      },
    }
  )
  .add(
    'color bg double height',
    () => (
      <div className="bx--col-lg-4 bx--col-md-4 bx--offset-lg-4 bx--no-gutter">
        <AspectRatioTile
          ratio="1:2" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
          theme="dark"
          hoverDark
          backgroundColor="#8a3ffc" // if omitted, defaults to #282828
          transparentImage="images/three-icons-stacked.svg"
          subtitle="Icons"
          title="Icon usage"
          actionIcon="article"
          link="https://www.ibm.com/standards/web/design-kit/"
          target="_blank"
        />
      </div>
    ),
    {
      info: {
        text: 'color bg double height',
      },
    }
  )
  .add(
    'w/image and text on hover',
    () => (
      <div className="bx--col-lg-4 bx--col-md-4 bx--offset-lg-4 bx--no-gutter">
        <AspectRatioTile
          ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
          // marginTop='50%'
          theme="dark"
          hoverDark
          contentOnHover
          image="images/blue1.jpg"
          subtitle="Elements"
          title="Color Palette"
          actionIcon="article"
          link="https://www.ibm.com/standards/web/design-kit/"
          target="_blank"
        />
      </div>
    ),
    {
      info: {
        text: 'w/image and text on hover',
      },
    }
  )
  .add(
    'w/bg image and nested tile',
    () => (
      <div className="bx--col-lg-8 bx--col-md-8 bx--offset-lg-4 bx--no-gutter">
        <AspectRatioTile
          ratio="1:1"
          image="images/product-gallery.jpg"
          actionIcon="no-icon">
          <AspectRatioTile
            ratio="4:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Photography"
            title="IBM Services"
            actionIcon="article"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </AspectRatioTile>
      </div>
    ),
    {
      info: {
        text: 'w/bg image and nested tile',
      },
    }
  )
  .add(
    'w/bg carousel and nested tile',
    () => (
      <div className="bx--col-lg-12 bx--col-md-8 bx--offset-lg-4 bx--no-gutter">
        <AspectRatioTile
          ratio="16:9"
          image="images/landing-photography-gallery-2.jpg"
          actionIcon="no-icon">
          <Carousel id="c1" count="1 2" nav={false} fade={true} autoplay>
            <img
              src="images/landing-photography-gallery-1-mobile.jpg"
              alt="alt text"
            />
            <img
              src="images/landing-photography-gallery-2.jpg"
              alt="alt text"
            />
          </Carousel>
          <AspectRatioTile
            ratio="6:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Elements"
            title="Photography"
            actionIcon="article"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </AspectRatioTile>
      </div>
    ),
    {
      info: {
        text: 'w/bg carousel and nested tile',
      },
    }
  );

storiesOf('Aspect Ratio Tile', module)
  .addDecorator(CompRowDecorator)
  .add(
    'DL homepage mockup section 1',
    () => (
      <>
        <div className="bx--col-lg-4 bx--col-md-4 bx--offset-lg-4 bx--no-gutter">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            hoverDark
            transparentImage="images/tooltip-components.svg"
            subtitle="Components"
            title="Carbon X next"
            actionIcon="resources"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Design Kit"
            title="Explore & Create"
            actionIcon="resources"
            identityIcon="images/SketchIcon.svg"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-4 bx--col-md-4 bx--no-gutter">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Elements"
            title="2x Grid"
            actionIcon="article"
            transparentImage="images/grid-temp.png"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="GitHub repo"
            title="Design & development"
            actionIcon="resources"
            identityIcon="images/GitHubIcon.svg"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-4 bx--col-md-4 bx--no-gutter">
          <AspectRatioTile
            ratio="1:2" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            hoverDark
            backgroundColor="#8a3ffc" // if omitted, defaults to #282828
            transparentImage="images/three-icons-stacked.svg"
            subtitle="Icons"
            title="Icon usage"
            actionIcon="article"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-4 bx--col-md-4 bx--no-gutter bx--offset-lg-4">
          <AspectRatioTile
            ratio="2:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Elements"
            title="Color in UI"
            actionIcon=""
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            marginTop="50%"
            theme="dark"
            hoverDark
            contentOnHover
            image="images/blue1.jpg"
            subtitle="Elements"
            title="Color Palette"
            actionIcon="article"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-8 bx--col-md-8 bx--no-gutter">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            hoverDark
            image="/images/landing-color-grid.svg"
            subtitle="Elements"
            title="Color Palette"
            actionIcon="article"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-4 bx--col-md-4 bx--no-gutter bx--offset-lg-4">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            backgroundColor="rgb(6, 31, 128)" // if omitted, defaults to #282828
            transparentImage="images/type-scales.svg"
            actionIcon="no-icon"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-4 bx--col-md-4 bx--no-gutter">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Elements"
            title="Type Specs"
            actionIcon="article"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
      </>
    ),
    {
      info: {
        text: 'DL homepage mockup section 1',
      },
    }
  )
  .add(
    'DL homepage mockup section 2',
    () => (
      <>
        <div className="bx--col-lg-4 bx--col-md-4 bx--offset-lg-4 bx--no-gutter">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            image="images/landing-plex-animation.gif"
            actionIcon="no-icon"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
          <AspectRatioTile
            ratio="2:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Elements"
            title="Typeface"
            actionIcon="article"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-8 bx--col-md-8 bx--no-gutter">
          <AspectRatioTile
            ratio="1:1"
            image="images/product-gallery.jpg"
            actionIcon="no-icon">
            <AspectRatioTile
              ratio="4:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
              theme="dark"
              subtitle="Photography"
              title="IBM Services"
              actionIcon="article"
              link="https://www.ibm.com/standards/web/design-kit/"
              target="_blank"
            />
          </AspectRatioTile>
        </div>
      </>
    ),
    {
      info: {
        text: 'DL homepage mockup section 2',
      },
    }
  )
  .add(
    'DL homepage mockup section 3',
    () => (
      <>
        <div className="bx--col-lg-12 bx--col-md-8 bx--no-gutter bx--offset-lg-4">
          <AspectRatioTile
            ratio="16:9"
            image="images/landing-photography-gallery-2.jpg"
            actionIcon="no-icon">
            <Carousel id="c1" count="1 2" nav={false} fade={true} autoplay>
              <img
                src="images/landing-photography-gallery-1-mobile.jpg"
                alt="alt text"
              />
              <img
                src="images/landing-photography-gallery-2.jpg"
                alt="alt text"
              />
            </Carousel>
            <AspectRatioTile
              ratio="6:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
              theme="dark"
              subtitle="Elements"
              title="Photography"
              actionIcon="article"
              link="https://www.ibm.com/standards/web/design-kit/"
              target="_blank"
            />
          </AspectRatioTile>
        </div>
        <div className="bx--col-lg-8 bx--col-md-8 bx--no-gutter bx--offset-lg-4">
          <AspectRatioTile
            ratio="1:1"
            image="images/landing-gallery-watson-duo-phone.jpg"
            actionIcon="no-icon">
            <AspectRatioTile
              ratio="4:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
              theme="dark"
              subtitle="Case Study"
              title="Coming soon"
              actionIcon=""
              link="https://www.ibm.com/standards/web/design-kit/"
              target="_blank"
            />
          </AspectRatioTile>
        </div>
        <div className="bx--col-lg-4 bx--col-md-4 bx--no-gutter">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Philosophy"
            title="Principles"
            actionIcon="article"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-4 bx--col-md-4 bx--no-gutter bx--offset-lg-4">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            hoverDark
            backgroundColor="#8a3ffc"
            image="images/landing-illustration-ibm-rand-logo.svg"
            actionIcon="no-icon"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
        <div className="bx--col-lg-4 bx--col-md-4 bx--no-gutter">
          <AspectRatioTile
            ratio="1:1" // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme="dark"
            subtitle="Philosophy"
            title="Start smart"
            transparentImage="images/big-arrow.svg"
            actionIcon="no-icon"
            link="https://www.ibm.com/standards/web/design-kit/"
            target="_blank"
          />
        </div>
      </>
    ),
    {
      info: {
        text: 'DL homepage mockup section 3',
      },
    }
  );
