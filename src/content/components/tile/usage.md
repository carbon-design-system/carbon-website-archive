---
label: Component
title: Tile
tabs: ['Code', 'Usage', 'Style']
---

## Usage

Tiles provide a diverse method for displaying information. The type of content within a Tile can range from informational, to getting started, how-to, and next steps.

Carbon ships a basic Tile structure that responds to the grid. Tiles have no pre-set styles for the content within them. You can customize Tiles to fit your specific use case.

When using a call to action (CTA) within a Tile, we recommend using a [Secondary Button](/components/button). Primary Buttons should be reserved for the most important action a user can take on the page.

## Types of Tiles

_All of the images below represent an example of what type of content could be presented within a Tile. These are the styling choices we recommend, but you are free to create your own layout and design within a Tile._

### Read-only

Read-only Tiles are used to display information to the user, such as features or services offered. Read-only Tiles are often seen on marketing pages to promote content. These Tiles can have internal calls-to-action (CTAs), such as a [Button](/components/button) or a [Link](/components/link).

![Read-only tile](images/tile-usage-1.png)

### Clickable

Clickable Tiles can be used as navigational items, where the entire Tile is a clickable state, which redirects the user to a new page. Clickable Tiles cannot contain internal CTAs.

![Clickable tile](images/tile-usage-2.png)

### Selectable

Selectable Tiles work like a [Radio Button](/components/radio-button), where the entire Tile is a click target. Selectable Tiles may contain internal CTAs (like links to docs) if the internal CTA is given its own click target. Selectable Tiles work well for presenting options to a user in a structured manner, such as a set of pricing plans.

![Selectable tile](images/tile-usage-3.png)

### Expandable

Expandable Tiles are helpful for hiding/showing larger amounts of content to a user. They can only be stacked in a single column, and cannot live in a row or horizontal grid. When expanded, Tiles push content down the page. Expandable Tiles may contain internal CTAs (like links to docs) if the internal CTA is given its own click target.

![Expadable tile](images/tile-usage-4.png)
