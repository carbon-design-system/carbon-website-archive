import { storiesOf } from '@storybook/react';
import React from 'react';
import AspectRatioTile from '.';

import { ArrowRight24 } from '@carbon/icons-react';

storiesOf('Aspect Ratio Tile', module).add(
  'Aspect Ratio Tile',
  () => (
    <>
      <div className='ibm--row' style={{width: '100%', background: '#171717', paddingTop:'5rem'}}>
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--offset-lg-4 ibm--col-bleed'>
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            hover='darken'
            transparentImage='images/tooltip-components.svg'
            subtitle='Components'
            title='Carbon X next'
            actionIcon='resources'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          >
          </AspectRatioTile>
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            subtitle='Design Kit'
            title='Explore & Create'
            actionIcon='resources'  
            identityIcon='images/SketchIcon.svg'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>          
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed'>
          <AspectRatioTile 
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            subtitle='Elements'
            title='2x Grid'
            actionIcon='article'
            transparentImage='images/grid-temp.png'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            subtitle='GitHub repo'
            title='Design & development'
            actionIcon='resources'
            identityIcon='images/GitHubIcon.svg'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>  
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed'>
          <AspectRatioTile
            ratio='1:2' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            hover='darken'
            backgroundColor='#8a3ffc' // if omitted, defaults to #282828
            transparentImage='images/three-icons-stacked.svg'
            subtitle='Icons'
            title='Icon usage'
            actionIcon='article'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed ibm--offset-lg-4'>
          <AspectRatioTile
            ratio='2:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark' 
            subtitle='Elements'
            title='Color in UI'
            actionIcon=''
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            marginTop='50%'
            theme='dark'
            hover='darken'
            image='images/blue1.jpg'
            subtitle='Elements'
            title='Color Palette'
            actionIcon='article'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>
        <div className='ibm--col-lg-8 ibm--col-md-8 ibm--col-bleed'>
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            hover='darken'
            image='/images/landing-color-grid.svg'
            subtitle='Elements'
            title='Color Palette'
            actionIcon='article'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed ibm--offset-lg-4'>
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'  
            backgroundColor='rgb(6, 31, 128)' // if omitted, defaults to #282828
            transparentImage='images/type-scales.svg'
            actionIcon='no-icon'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed'>
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            subtitle='Elements'
            title='Type Specs'
            actionIcon='article'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>  
      </div>

      <div className='ibm--row' style={{width: '100%', background: '#171717', padding:'5rem 0'}}>
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed ibm--offset-lg-4'>
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            image='images/landing-plex-animation.gif'
            actionIcon='no-icon'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
          <AspectRatioTile
            ratio='2:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            subtitle='Elements'
            title='Typeface'
            actionIcon='article'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>
        <div className='ibm--col-lg-8 ibm--col-md-8 ibm--col-bleed'>
          <AspectRatioTile
            ratio='1:1'
            image='images/product-gallery.jpg'
            actionIcon='no-icon'
          >
            <AspectRatioTile
              ratio='4:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
              theme='dark'
              subtitle='Photography'
              title='IBM Services'
              action='article'
              link='https://www.ibm.com/standards/web/design-kit/'
              target='_blank'
            />
          </AspectRatioTile>
        </div> 
      </div>
      <div className='ibm--row' style={{width: '100%', background: '#171717', paddingTop:'5rem'}}>
        <div className='ibm--col-lg-12 ibm--col-md-8 ibm--col-bleed ibm--offset-lg-4'>
          <AspectRatioTile
            ratio='3:2'
            image='images/landing-photography-gallery-2.jpg'
            actionIcon='no-icon'
          >
            <AspectRatioTile
              ratio='6:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
              theme='dark' 
              subtitle='Elements'
              title='Photography'
              actionIcon='article'
              link='https://www.ibm.com/standards/web/design-kit/'
              target='_blank'
            />
          </AspectRatioTile>  
        </div>
        <div className='ibm--col-lg-8 ibm--col-md-8 ibm--col-bleed ibm--offset-lg-4'>
          <AspectRatioTile
            ratio='1:1'
            image='images/landing-gallery-watson-duo-phone.jpg'
            actionIcon='no-icon'
          >
            <AspectRatioTile
              ratio='4:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
              theme='dark'
              subtitle='Case Study'
              title='Coming soon'
              actionIcon=''
              link='https://www.ibm.com/standards/web/design-kit/'
              target='_blank'
            />
          </AspectRatioTile>
        </div>
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed'>
          <AspectRatioTile  
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1       
            theme='dark'
            subtitle='Philosophy'
            title='Principles'
            actionIcon='article'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed ibm--offset-lg-4'>
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            hover='darken'
            backgroundColor='#8a3ffc'
            image='images/landing-illustration-ibm-rand-logo.svg'
            actionIcon='no-icon'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>
        <div className='ibm--col-lg-4 ibm--col-md-4 ibm--col-bleed'>
          <AspectRatioTile
            ratio='1:1' // choices are 1:1, 2:1, 1:2, 3:1, 4:1, 6:1, 3:2, 4:3 and 16:9. If omitted, defaults to 2:1
            theme='dark'
            subtitle='Philosophy'
            title='Start smart'
            transparentImage='images/big-arrow.svg'
            actionIcon='no-icon'
            link='https://www.ibm.com/standards/web/design-kit/'
            target='_blank'
          />
        </div>
      </div>
    </>
  ),
  {
    info: {
      text: 'Aspect Ratio Tile',
    },
  }
);
