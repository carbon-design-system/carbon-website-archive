---
title: Migration
---

<anchor-links>
<ul>
  <li><a data-scroll href="#carbon-x-is-near">Carbon X is near</a></li>
  <li><a data-scroll href="#rollout-plan">Rollout plan</a></li>
  <li><a data-scroll href="#design-kit">Design kit</a></li>
  <li><a data-scroll href="#component-code">Component code</a></li>
  <li><a data-scroll href="#tokens">Tokens</a></li>
  <li><a data-scroll href="#icons">Icons</a></li>
  <li><a data-scroll href="#themes">Themes</a></li>
  <li><a data-scroll href="#ui-shell">UI shell</a></li>
  <li><a data-scroll href="#grid-and-layout">Grid and layout</a></li>
  <li><a data-scroll href="#migration-tooling">Migration tooling</a></li>
</ul>
</anchor-links>

## Carbon X is near

Carbon X, aka v10, is currently in Alpha release. Please use this opportunity to explore and experiment with the new components, elements, layouts, and UI shell. The Alpha release is a work in progress; changes will be frequent and possibly breaking. **This release is not approved for production.** Please explore the system and [provide bountiful feedback](/help/support#github-issues)!

## Rollout plan

- **February 2019:** Beta release
- **March 2019:** Production release

### Adoption and activation sessions

<p>The IBM Design core team is establishing an adoption and activation program. A new <a href="https://w3.ibm.com/design/essentials" target="blank">IBM Design Essentials</a> course is available, and teams will receive either in-person or remote education before (or soon after) the Production release of Carbon X. The Carbon team will share news on Slack, Connections, and in the IBM Design Town Hall as well.</p>

## Design kit

The Beta release of Carbon X will arrive with a completely revised Sketch design kit, updated for the new IBM Design Language (f.k.a. "Duo"). All components in the kit have been reskinned, and colors, icons, typrography, UI shell, and grid elements will also reflect the new IBM Design Language.

Internal IBM users will now be able to auto-sync the design kit with Box Drive, allowing users to update the Sketch library automatically. The manual download method will also still be available via the [Github repository](https://github.com/IBM/carbon-design-kit).

The Digital Design group has published a detailed guide on [setting up auto-sync for the design kit using Box Drive](https://www.ibm.com/standards/web/design-kit/).

## Component code

The redesigned components will be available in the current repos once released. All components have been reskinned to the new IBM Design Language for v10. Detailed technical migration instructions will be published to the repos upon Beta release.


<grid-wrapper className="tile--resource--no-margin" col_lg="8" flex="true" bleed="true">
<clickable-tile
    title="Carbon Components"
    href="https://github.com/ibm/carbon-components"
    type="resource"
    >
    <img src="images/github-icon.png" alt="Carbon Component Library" />
</clickable-tile>
<clickable-tile
    title="Carbon Components React"
    href="https://github.com/ibm/carbon-components-react"
    type="resource"
    >
    <img src="images/react-icon.png" alt="Carbon Components React" />
</clickable-tile>
</grid-wrapper>


## Tokens

### Type tokens
The type token architecture has been completely redesigned for better clarity and flexibility in v10, moving from a "class-name" approach to a more standard token architecture. More detailed technical guidance on migrating to the new type tokens will be available in early 2019.


### Color tokens
The color token architecture for v10 is based on the v9 architecture, with some minor updates for the new design language. Carbon v9 users will see automatic, non-breaking color updates when they upgrade to v10.

### Spacing tokens
Spacing tokens will see no change from Carbon v9.

## Icons

The iconography in Carbon X has been completely redesigned to align with the new IBM Design Language, with hundreds of new icons added to the system. Icons in the system have been redesigned for greater accessibility. The repository is also moving to @carbon/icons, where more detailed migration instructions for developers is coming soon. The original carbon-icons repo will be deprecated.

## Themes

Carbon now supports four all-new themes, which will be stored in a new repo: @carbon/themes. The former carbon-themes repo will be deprecated.

## UI shell

The basic UI shell has been completely redesigned for Carbon X, though it is still considered experimental. Full documentation on the new UI shell is available on the Carbon website.

_Coming soon: Carbon X UI shell migration guide for developers_

## Grid and layout

The page grid has been completely redesigned for v10, to align with the IBM Design Language. The grid is now 16 columns, which is prioritized over the 12-column grid from v9. See the [Layout page](/guidelines/layout) for more details.

## Migration tooling

When Carbon X reaches its Production release, specific developer tooling (custom scripts) will be available to help automate the transition. Stay tuned for updates!

_Last updated: 22 January 2019_
