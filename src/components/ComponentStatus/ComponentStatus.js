import React from 'react';
import { Icon } from 'carbon-components-react';
import Packages from '../../../package.json';

class ComponentStatus extends React.Component {
  renderItems = (
    currentItem,
    readyIcon,
    underReviewIcon,
    deprecatedIcon,
    notApplicableIcon
  ) => {
    let tag;
    let vanilla;
    let react;
    let angular;
    let experimental;
    
    if (currentItem.tag && currentItem.tag === 'new') {
      tag = <span className="bx--tag bx--tag--ibm inline-tag">New</span>;
    }
    if (currentItem.tag && currentItem.tag === 'updated') {
      tag = (
        <span className="bx--tag bx--tag--third-party inline-tag">Updated</span>
      );
    }
    if (currentItem.vanilla === "ready") {
      vanilla = readyIcon;
    } else if (currentItem.vanilla === "under-review") {
      vanilla = underReviewIcon;
    } else if (currentItem.vanilla === "deprecated") {
      vanilla = deprecatedIcon;
    } else {
      vanilla = notApplicableIcon;
    }

    if (currentItem.react === "ready") {
      react = readyIcon;
    } else if (currentItem.react === "under-review") {
      react = underReviewIcon;
    } else if (currentItem.react === "deprecated") {
      react = deprecatedIcon;
    } else {
      react = notApplicableIcon;
    }

    if (currentItem.angular === "ready") {
      angular = readyIcon;
    } else if (currentItem.angular === "under-review") {
      angular = underReviewIcon;
    } else if (currentItem.angular === "deprecated") {
      angular = deprecatedIcon;
    } else {
      angular = notApplicableIcon;
    }

    if (currentItem.experimental === "ready") {
      experimental = readyIcon;
    } else if (currentItem.experimental === "under-review") {
      experimental = underReviewIcon;
    } else if (currentItem.experimental === "deprecated") {
      experimental = deprecatedIcon;
    } else {
      experimental = notApplicableIcon;
    }
    return (
      <tr key={currentItem.item}>
        <td>
          {currentItem.item} {tag}
        </td>
        <td>{vanilla}</td>
        <td>{react}</td>
        <td>{angular}</td>
        <td>{experimental}</td>
      </tr>
    );
  };

  
  render() {
    const readyIcon = (
      <div className="component-status__icon ready">
        <Icon
          alt="ready status"
          fill="#8CD211"
          width="16"
          height="16"
          name="checkmark--glyph"
          description="ready status"
        />
      </div>
    );
    const underReviewIcon = (
      <div className="component-status__icon under-review">
        <Icon
          alt="under review"
          fill="#EFC100"
          width="16"
          height="16"
          name="warning--glyph"
          description="ready status"
        />
      </div>
    );
    const deprecatedIcon = (
      <div className="component-status__icon deprecated">
        <Icon
          alt="deprecated"
          fill="#e0182d"
          width="16"
          height="16"
          name="error--glyph"
          description="ready status"
        />
      </div>
    );
    const notApplicableIcon = (
      <div className="component-status__icon not-applicable">
        <span>-</span>
      </div>
    );
    const currentVersion = `Current version: ${
      Packages.dependencies['carbon-components']
    }`;
    const componentStatus = require('../../data/components.json'); // eslint-disable-line
    const content = (
      <div className="page page_md component-status-page">
        <p className="page-intro">{currentVersion}</p>
        <div className="component-status">
          <ul className="component-status__icon-list">
            <li>
              {readyIcon}
              <p>Ready</p>
            </li>
            <li>
              {underReviewIcon}
              <p>Under review</p>
            </li>
            <li>
              {deprecatedIcon}
              <p>Deprecated</p>
            </li>
            <li>
              {notApplicableIcon}
              <p>Not available</p>
            </li>
          </ul>
        </div>
        <table className="page-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Vanilla</th>
              <th>React</th>
              <th>Angular</th>
              <th>Experimental</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(componentStatus.items).map(item => {
              return this.renderItems(
                componentStatus.items[item],
                readyIcon,
                underReviewIcon,
                deprecatedIcon,
                notApplicableIcon
              );
            })}
          </tbody>
        </table>
        <div className="component-status__description">
          <h2 className="page-h2">Tag descriptions</h2>
          <table className="page-table">
            <thead>
              <tr>
                <th>Tag</th>
                <th>Name</th>
                <th>Definitions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{readyIcon}</td>
                <td>Ready</td>
                <td>The component is dev and design ready.</td>
              </tr>
              <tr>
                <td>{underReviewIcon}</td>
                <td>Under review</td>
                <td>
                  Indicates that a component’s design, code, or usage is being
                  re-examined or created.
                </td>
              </tr>
              <tr>
                <td>{deprecatedIcon}</td>
                <td>Deprecated</td>
                <td>
                  Deprecated components have either been completely replaced by
                  new components or are no longer being supported in the
                  component library.
                </td>
              </tr>
              <tr>
                <td>{notApplicableIcon}</td>
                <td>Not available</td>
                <td>
                  Component is not available in this version of the library.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="bx--tag bx--tag--ibm">New</span>
                </td>
                <td />
                <td>This component is brand new to our library.</td>
              </tr>
              <tr>
                <td>
                  <span className="bx--tag bx--tag--third-party">Updated</span>
                </td>
                <td />
                <td>
                  Applied only to existing components after they have been under
                  review, tweaked, and re-released to the design system site.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
    return <div>{content}</div>;
  }
}

export default ComponentStatus;
