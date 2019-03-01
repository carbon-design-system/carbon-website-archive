import { storiesOf } from '@storybook/react';
import React from 'react';
import { Grid, Row, Column } from '../Grid';

storiesOf('Grid', module).add(
  'Grid',
  () => (
    <Grid>
      <Row>
        <Column lg="4">one</Column>
        <Column lg="4">two</Column>
        <Column lg="4" offsetLg="4">
          three (offset)
        </Column>
      </Row>
    </Grid>
  ),
  {
    info: {
      text: 'Grid',
    },
  }
);
