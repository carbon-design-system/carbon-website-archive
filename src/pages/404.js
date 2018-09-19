import React from 'react';
import Layout from "../components/layouts";
import FourOhFour from "../components/404";

import '../polyfills';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <FourOhFour />
      </Layout>
    );
  }
}

export default NotFoundPage;
