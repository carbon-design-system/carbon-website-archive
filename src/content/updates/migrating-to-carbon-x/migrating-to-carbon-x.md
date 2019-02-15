---
title: Migrating to Carbon X
---

<anchor-links>
<ul>
  <li><a href="#carbon-x-is-near">Intro</a></li>
  <li><a href="#rollout-plan">Rollout Plan</a></li>
  <li><a href="#design-kit">Design Kit</a></li>
  <li><a href="#tokens">Tokens</a></li>
  <li><a href="#icons">Icons</a></li>
  <li><a href="#ui-shell">UI Shell</a></li>
  <li><a href="#migration-tooling">Migration Tooling</a></li>
</ul>
</anchor-links>

## Carbon X is near!

Carbon X, aka v10, is currently in Alpha release. Please use this opportunity to explore and experiment with the new components, elements, layouts, and UI shell. The Alpha release is a work in progress; changes will be frequent and possibly breaking. **This release is not approved for production.** Please explore the system and [provide bountiful feedback](../help/support#github-issues)!

## Rollout plan

- February 2019: Beta release
- March 2019: Production release

### Adoption and activation sessions

<p>The IBM Design core team is establishing an adoption and activation program. A new <a href="https://w3.ibm.com/design/essentials" target="blank">IBM Design Essentials</a> course is available, and teams will receive either in-person or remote education before the Production release of Carbon X. The Carbon team will share news on Slack, Connections, and in the IBM Design Town Hall as well.</p>

## Design kit

The Beta release of Carbon X will arrive with a completely revised Sketch design kit, updated for the new IBM Design Language (f.k.a. "Duo"). All components in the kit have been reskinned, and colors, icons, typrography, UI shell, and grid elements will also reflect the new IBM Design Language.

Internal IBM users will now be able to auto-sync the design kit with Box Drive, allowing users to update the Sketch library automatically. The manual download method will also still be available via the [Github repository](https://github.com/IBM/carbon-design-kit).

The Digital Design group has published a detailed guide on [setting up auto-sync for the design kit using Box Drive](https://www.ibm.com/standards/web/design-kit/).

## Component code

The redesigned components will be available in the current repos once released. All components have been reskinned to the new IBM Design Language for v10. Detailed technical migration instructions will be published to the repos upon Beta release.

[carbon-components repo](https://github.com/IBM/carbon-components)
[carbon-components-react repo](https://github.com/IBM/carbon-components-react)

## Tokens

The **type** token architecure has been redesigned for better clarity and flexibility in v10. More detailed guidance on migrating to the new type tokens will be available in early 2019.

The **color** token architecture for v10 is based on the v9 architecture, with some minor updates for the new design language. Carbon v9 users will see automatic, non-breaking color updates when they upgrade to v10.

**Spacing** tokens will see no change from Carbon v9.

## Icons

The iconography in Carbon X has been completely redesigned to align with the new IBM Design Language.

Coming soon: Carbon X icon migration guide for developers

## UI shell

The basic UI shell has been completely redesigned for Carbon X. Full documentation on the new shell is available on the Carbon website.

Coming soon: Carbon X UI shell migration guide for developers

## Migration tooling

When Carbon X reaches its Production release, specific developer tooling (custom scripts) will be available to help automate the transition. Stay tuned for updates!

_Last updated: 22 January 2019_
