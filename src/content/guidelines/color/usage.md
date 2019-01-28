---
label: Guidelines
title: Color
tabs: ['Overview', 'Usage']
---

**Color** brings a design to life. Color is versatile; it's used to express emotion and tone, as well as place emphasis and create associations. Color should always be used in meaningful and intentional ways in order to create patterns and visual cues.

## Color in UI

Carbon uses _themes_ and _tokens_ to manage color. The universal color tokens are defined by common roles and usage, not specific color values. The same color value may be assigned to multiple tokens in a theme even if the values have distinctly different roles. A color token can also have multiple associated roles when the color is used consistently across those roles.

### Color terms

| Term      | Definition                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| **Value** | A unique color (hex code) assigned to a universal token                                                     |
| **Role**  | The systematic usage/s of a color value                                                                     |
| **Token** | The code identifier for a unique role or set of roles. Tokens are universal and never change across themes. |
| **Theme** | The unique color values assigned to a distinct set of color tokens                                          |

## Color tokens

| Token                | Role(s)                                                                                             | Value                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **\$interactive-01** | Primary interactive color <br /> Interactive text <br /> Selected elements <br /> Featured elements | <color-block showhex="true" size="xs">#0062ff</color-block> |
| **\$interactive-02** | Secondary interactive color <br /> Loading                                                          | <color-block showhex="true" size="xs">#0062ff</color-block> |
| **\$ui-01**          | Primary container background <br /> Secondary page background                                       | <color-block showhex="true" size="xs">#f3f3f3</color-block> |
| **\$ui-02**          | Primary page background <br /> Secondary container background                                       | <color-block showhex="true" size="xs">#ffffff</color-block> |
| **\$ui-03**          | Subtle border <br /> Tertiary background color                                                      | <color-block showhex="true" size="xs">#dcdcdc</color-block> |
| **\$ui-04**          | 3:1 AA element contrast <br /> Medium contrast border                                               | <color-block showhex="true" size="xs">#8c8c8c</color-block> |
| **\$ui-05**          | 4.5:1 AA element contrast <br /> High contrast border <br /> Emphasis elements                      | <color-block showhex="true" size="xs">#171717</color-block> |
| **\$text-01**        | Primary text <br /> Body copy <br /> Headers <br /> Hover text color for `text-02`                  | <color-block showhex="true" size="xs">#171717</color-block> |
| **\$text-02**        | Secondary text <br /> Input labels <br /> Help text                                                 | <color-block showhex="true" size="xs">#565656</color-block> |
| **\$text-03**        | Placeholder text                                                                                    | <color-block showhex="true" size="xs">#8c8c8c</color-block> |
| **\$icon-01**        | Primary icons                                                                                       | <color-block showhex="true" size="xs">#171717</color-block> |
| **\$icon-02**        | Secondary icons                                                                                     | <color-block showhex="true" size="xs">#565656</color-block> |
| **\$inverse-01**     | Inverse text color <br /> Inverse icon color                                                        | <color-block showhex="true" size="xs">#ffffff</color-block> |
| **\$inverse-02**     | High contrast backgrounds <br /> High contrast elements                                             | <color-block showhex="true" size="xs">#3d3d3d</color-block> |
| **\$field-01**       | Default input fields <br /> Field color on \$ui-01 backgrounds                                      | <color-block showhex="true" size="xs">#f3f3f3</color-block> |
| **\$field-02**       | Input field color on \$ui-02 backgrounds                                                            | <color-block showhex="true" size="xs">#ffffff</color-block> |
| **\$support-01**     | Error                                                                                               | <color-block showhex="true" size="xs">#e0182d</color-block> |
| **\$support-02**     | Success                                                                                             | <color-block showhex="true" size="xs">#5aa700</color-block> |
| **\$support-03**     | Warning                                                                                             | <color-block showhex="true" size="xs">#efc100</color-block> |
| **\$support-04**     | Information                                                                                         | <color-block showhex="true" size="xs">#5aaafa</color-block> |
| **\$overlay-01**     | Background overlay                                                                                  | `#ffffff` @ 60% opacity                                     |
| **\$overlay-02**     | Contrast background overlay                                                                         | `#171717` @ 70% opacity                                     |

### Interaction tokens

| Token                    | Role(s)                                                                                                                                       | Value                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **\$focus**              | Focus border <br /> Focus underline                                                                                                           | <color-block showhex="true" size="xs">#0062ff</color-block> |
| **\$hover-primary**      | `$interactive-01` hover                                                                                                                       | <color-block showhex="true" size="xs">#0353E9</color-block> |
| **\$hover-primary-text** | `$interactive-01` text hover                                                                                                                  | <color-block showhex="true" size="xs">#054ada</color-block> |
| **\$hover-secondary**    | Secondary hover <br /> `$inverse-02` hover                                                                                                    | <color-block showhex="true" size="xs">#4c4c4c</color-block> |
| **\$hover-ui**           | `$ui-01` hover <br /> `$ui-02` hover <br /> Transparent background hover                                                                      | <color-block showhex="true" size="xs">#e5e5e5</color-block> |
| **\$hover-danger**       | Danger hover <br /> `$support-01` hover                                                                                                       | <color-block showhex="true" size="xs">#ba1b23</color-block> |
| **\$hover-row**          | Row hover                                                                                                                                     | <color-block showhex="true" size="xs">#e5e5e5</color-block> |
| **\$active-primary**     | `$brand-01` active                                                                                                                            | <color-block showhex="true" size="xs">#0530ad</color-block> |
| **\$active-secondary**   | Secondary active <br /> `$inverse-02` active                                                                                                  | <color-block showhex="true" size="xs">#6f6f6f</color-block> |
| **\$active-ui**          | `$ui-01` active <br /> `$ui-02` active                                                                                                        | <color-block showhex="true" size="xs">#bebebe</color-block> |
| **\$active-danger**      | Danger active <br /> `$support-01` active                                                                                                     | <color-block showhex="true" size="xs">#750e13</color-block> |
| **\$selected-ui**        | Selected UI elements                                                                                                                          | <color-block showhex="true" size="xs">#dcdcdc</color-block> |
| **\$visited-link**       | Visited links                                                                                                                                 | <color-block showhex="true" size="xs">#8a3ffc</color-block> |
| **\$disabled-01**        | Disabled fields <br /> Disabled backgrounds <br /> Disabled border                                                                            | <color-block showhex="true" size="xs">#f3f3f3</color-block> |
| **\$disabled-02**        | Disabled elements on `$disabled-01` <br /> Disabled label <br /> Disabled text on `$disabled-01` <br /> Disabled icons <br /> Disabled border | <color-block showhex="true" size="xs">#bebebe</color-block> |
| **\$disabled-03**        | Disabled text on `$disabled-02` <br /> Disabled icons on `$disabled-02`                                                                       | <color-block showhex="true" size="xs">#8c8c8c</color-block> |

## Color and accessibility

Check out the [accessibility section](/guidelines/accessibility/color) for complete guidance on color and accessibility in Carbon.
