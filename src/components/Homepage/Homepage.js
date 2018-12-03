import React, { Component } from 'react';

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

class Homepage extends Component {
  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  render() {

    return (
      <div>
        <div className="ibm--row">
            <div class="ibm--col-lg-12 ibm--offset-lg-4">
                {sectionHeader}
                {isInternal ? 'IBM Design System' : 'Carbon Design System'}
            </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
