import React from 'react';
import PropTypes from 'prop-types';


export default class ComponentCodePage extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    codepen: PropTypes.string,
  };

  render() {
    const { name, codepen } = this.props;

    const codepenLink = `https://codepen.io/team/carbon/full/${codepen}/`;
    const reactLink =`http://react.carbondesignsystem.com/?selectedKind=${name}`;

    //let htmlFile;
    //const htmlFile = require(`carbon-components/html/accordion/accordion.html`);
    //htmlFile = require(`carbon-components/html/${name}/${name}.html`);
   
    return (    
      <div className="component-variation">
        <h2 className="page-h2">{name}</h2>

        <div className="component-example">
        
        <div className="component-toolbar__links">
            
            <a href={reactLink} target="_blank" rel="noopener noreferrer">React</a>
            <a href={codepenLink} target="_blank" rel="noopener noreferrer">CodePen</a>
          </div>
        </div>

        <div className="page_md code-page__docs">
          <h2 className="page-h2">Documentation</h2>

        </div>

         
      </div>
    );
  }
}
