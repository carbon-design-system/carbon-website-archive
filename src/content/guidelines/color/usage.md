---
label: Guidelines
title: Color
tabs: ['Swatches', 'Usage']
---

<page-intro>**Color** brings a design to life. Color is versatile; it's used to express emotion and tone, as well as place emphasis and create associations. Color should always be used in meaningful and intentional ways in order to create patterns and visual cues.</page-intro>

## Color palette

The Carbon color palette is designed and implemented in a themable manner. The universal color variables are determined by common roles and usage; it is not based singularly on a color value (i.e. unique hex code). The same color value may be assigned to multiple variables in a theme's palette when the values have distinctly different roles.

A universal variable can also have multiple associated roles when the color is consistently used across those roles. This allows for uniform color application across themes while giving each theme the freedom to express its own individuality at a more detailed level.

### Color terms

| Term         | Definition                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Value**    | A unique color (hex code) assigned to a universal variable                                                                                                               |
| **Role**     | The systematic usage/s of a color value                                                                                                                                  |
| **Variable** | The code identifier for a unique role or set of roles. Variables are universal and never change across themes. Within a theme variables are assigned appropriate values. |
| **Theme**    | The set of unique color values assigned to the universal palette                                                                                                         |
| **Palette**  | The complete set of universal variables. The palette is the naming conventions of colors used in the UI. Each theme will use the same palette of variables.              |

## Color roles

| Variable                | Role(s)                                                                                                            | Value                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| **$brand-01**           | Primary brand <br /> Interactive text <br /> Primary icon color <br /> Border highlight <br /> Emphasis background | <color-block showhex="true" size="xs">#3d70b2</color-block> |
| **$brand-02**           | Supporting brand                                                                                                   | <color-block showhex="true" size="xs">#5596e6</color-block> |
| **$brand-03**           | Tertiary brand <br /> Loading                                                                                      | <color-block showhex="true" size="xs">#00b4a0</color-block> |
| **$ui-01**              | Primary background <br /> Layer 1 background                                                                       | <color-block showhex="true" size="xs">#ffffff</color-block> |
| **$ui-02**              | Default page background <br /> Layer 0 background <br /> Secondary background                                      | <color-block showhex="true" size="xs">#f4f7fb</color-block> |
| **$ui-03**              | Subtle border                                                                                                      | <color-block showhex="true" size="xs">#dfe3e6</color-block> |
| **$ui-04**              | 3:1 color contrast <br /> Emphasis border                                                                          | <color-block showhex="true" size="xs">#8897a2</color-block> |
| **$ui-05**              | 4.5:1 color contrast <br /> High contrast border <br /> Secondary icons                                            | <color-block showhex="true" size="xs">#5a6872</color-block> |
| **$text-01**            | Primary text <br /> Body copy                                                                                      | <color-block showhex="true" size="xs">#152935</color-block> |
| **$text-02**            | Secondary text <br /> Subtle text <br /> Help text                                                                 | <color-block showhex="true" size="xs">#5a6872</color-block> |
| **$text-03**            | Placeholder text                                                                                                   | <color-block showhex="true" size="xs">#cdd1d4</color-block> |
| **$inverse-01**         | Inverse text color <br /> Inverse icon color                                                                       | <color-block showhex="true" size="xs">#ffffff</color-block> |
| **$inverse-02**         | Inverse background color                                                                                           | <color-block showhex="true" size="xs">#272d33</color-block> |
| **$field-01**           | Field color on $ui-01 background                                                                                   | <color-block showhex="true" size="xs">#f4f7fb</color-block> |
| **$field-02**           | Field color on $ui-02 background                                                                                   | <color-block showhex="true" size="xs">#ffffff</color-block> |
| **$hover-primary**      | $brand-01 element hover                                                                                            | `darken($brand-01, 10%)`                                    |
| **$hover-primary-text** | $brand-01 text hover                                                                                               | `darken($brand-01, 15%)`                                    |
| **$hover-danger**       | Danger hover                                                                                                       | `darken($support-01, 10%)`                                  |
| **$hover-secondary**    | $ui-05 element hover                                                                                               | $brand-01                                                   |
| **$hover-row**          | Row hover                                                                                                          | `rgba($brand-02, 0.1)`                                      |
| **$support-01**         | Error                                                                                                              | <color-block showhex="true" size="xs">#e0182d</color-block> |
| **$support-02**         | Success                                                                                                            | <color-block showhex="true" size="xs">#5aa700</color-block> |
| **$support-03**         | Warning                                                                                                            | <color-block showhex="true" size="xs">#efc100</color-block> |
| **$support-04**         | Information                                                                                                        | <color-block showhex="true" size="xs">#5aaafa</color-block> |

## Color contrast | WCAG AA standards

### Type colors

<p>All type color combinations on Carbon must pass <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target=blank>WCAG AA standards</a> of 4.5:1 for normal text and 3:1 for large text. For larger text, if the font weight is light (300) or normal (400) the text should be no smaller than 24px. If the font weight is Semi-Bold (600) then the large text should be no smaller than 19px. In the table below are approved Carbon color combinations.</p>

<div data-insert-component="ColorContrast"></div>

### UI colors

Certain UI color combinations on Carbon must pass the new WCAG AA standards of a minimum 3:1 ratio. Carbon complies with a 4.5:1 color ratio for certain controls and all icons. In the table below are approved Carbon color combinations.

<div data-insert-component="UIColorContrast"></div>

### Additional color accessibility

Other color accessibility concerns include color blindness and low vision users. Learn more about these additional color accessibility guidelines in the [accessibility section](/guidelines/accessibility/color) of the Carbon website.

## Resources

- <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target=blank>IBM accessible color guide</a>
- <a href="https://w3.ibm.com/able/devtest/quick/" target=blank>IBM accessibility quick guidance</a>
- <a href="https://marijohannessen.github.io/color-contrast-checker/" target=blank>Color contrast checker</a>
- <a href="https://www.ibm.com/design/language/resources/color-library" target=blank>IBM Design Language colors</a>
