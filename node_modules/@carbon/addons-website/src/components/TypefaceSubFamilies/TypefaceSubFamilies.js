import React from 'react';
import classnames from 'classnames';
import { Dropdown } from 'carbon-components-react';
import { settings } from 'carbon-components';

export default class TypefaceSubFamilies extends React.Component {
  constructor() {
    super();
    this.state = {
      fontVariant: 'type-serif',
      fontVariantLabel: 'IBM Plex Serif',
      displayMobile: false,
    };
  }
  onChange = (label, value) => {
    this.setState({
      fontVariant: value,
      fontVariantLabel: label,
    });
  };

  updateDimensions = () => {
    if (window.innerWidth < 750) {
      this.setState({ displayMobile: true });
    } else {
      this.setState({ displayMobile: false });
    }
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    const { prefix } = settings;
    const fontVariants = [
      {
        label: 'IBM Plex Sans',
        value: 'type-sans',
      },
      {
        label: 'IBM Plex Mono',
        value: 'type-mono',
      },
      {
        label: 'IBM Plex Serif',
        value: 'type-serif',
      },
      {
        label: 'IBM Plex Condensed',
        value: 'type-sans-condensed',
      },
    ];

    const classNamesMenuDropdown = classnames({
      [`${prefix}--hide`]: !this.state.displayMobile,
      [`${prefix}--show`]: this.state.displayMobile,
    });

    const classNamesMenuTabs = classnames({
      [`${prefix}--subfamilies-tabs-container`]: true,
      [`${prefix}--hide`]: this.state.displayMobile,
      [`${prefix}--show`]: !this.state.displayMobile,
    });

    const classNamesContainer = classnames({
      [`${prefix}--subfamilies-TypeTesterExample`]: true,
      [`${prefix}--col-md-8`]: true,
      [`${prefix}--col-sm-4`]: true,
      'flex-wrap': true,
      [`${prefix + '--' + this.state.fontVariant}`]: true,
    });

    return (
      <div className={`${prefix}--subfamilies`}>
        <div className={`${prefix}--row ${prefix}--offset-lg-4`}>
          <div className={`${prefix}--subfamilies-dropdown-container`}>
            <div className={classNamesMenuDropdown}>
              <Dropdown
                items={fontVariants}
                label={this.state.fontVariantLabel}
                selected={this.state.fontVariant}
                onChange={({ selectedItem }) => {
                  setTimeout(
                    () =>
                      this.setState({
                        fontVariant: selectedItem.value,
                        fontVariantLabel: selectedItem.label,
                      }),
                    100
                  );
                }}
                selectedItem={this.state.selectedItem}
              />
            </div>
          </div>
          <div className={classNamesMenuTabs}>
            {fontVariants.map(fontVariant => {
              return (
                <button
                  className={
                    fontVariant.label === this.state.fontVariantLabel
                      ? `${prefix}--subfamilies-button active`
                      : `${prefix}--subfamilies-button`
                  }
                  onClick={() => {
                    this.setState({
                      fontVariant: fontVariant.value,
                      fontVariantLabel: fontVariant.label,
                    });
                  }}>
                  {fontVariant.label}
                </button>
              );
            })}
          </div>
          <div className={classNamesContainer}>
            {/* Inline styles for all weights don't exist as helper classes. */}
            <div
              className={`${prefix}--padding-left-none ${prefix}--padding--horizontal ${prefix}--col-md-4`}>
              <div style={{ fontWeight: 100 }}>Thin</div>
              <div
                style={{ fontWeight: 100 }}
                className={`${prefix}--type-italic`}>
                Thin Italic
              </div>
              <div style={{ fontWeight: 200 }}>ExtraLight</div>
              <div
                style={{ fontWeight: 200 }}
                className={`${prefix}--type-italic`}>
                ExtraLight Italic
              </div>
              <div style={{ fontWeight: 300 }}>Light</div>
              <div
                style={{ fontWeight: 300 }}
                className={`${prefix}--type-italic`}>
                Light Italic
              </div>
              <div style={{ fontWeight: 400 }}>Regular</div>
              <div
                style={{ fontWeight: 400 }}
                className={`${prefix}--type-italic`}>
                Regular Italic
              </div>
            </div>
            <div
              className={`${prefix}--padding-left-none ${prefix}--padding--horizontal ${prefix}--col-md-4`}>
              <div style={{ fontWeight: 450 }}>Text</div>
              <div
                style={{ fontWeight: 450 }}
                className={`${prefix}--type-italic`}>
                Text Italic
              </div>
              <div style={{ fontWeight: 500 }}>Medium</div>
              <div
                style={{ fontWeight: 500 }}
                className={`${prefix}--type-italic`}>
                Medium Italic
              </div>
              <div style={{ fontWeight: 600 }}>SemiBold</div>
              <div
                style={{ fontWeight: 600 }}
                className={`${prefix}--type-italic`}>
                SemiBold Italic
              </div>
              <div style={{ fontWeight: 700 }}>Bold</div>
              <div
                style={{ fontWeight: 700 }}
                className={`${prefix}--type-italic`}>
                Bold Italic
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
