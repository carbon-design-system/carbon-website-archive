---

title: Loading
tabs: ['Code', 'Usage', 'Style']
---

## Color

| Class                                  | Property         | SCSS         |
| -------------------------------------- | ---------------- | ------------ |
| `.bx--loading__svg`                    | stroke           | $nav-05      |
| `.bx--loading--small.bx--loading__svg` | stroke           | $ui-05       |
| `.bx--loading-overlay`                 | background-color | $ui-01 @ 60% |

## Structure

| Class                 | Property      | px / rem  | Spacing token |
| --------------------- | ------------- | --------- | ------------- |
| `.bx--loading`        | height, width | 84 / 5.25 | -             |
| `.bx--loading--small` | height, width | 16 / 1    | -             |

<div class="image-grid">
  <div>
    <img src="images/loading-style-1.png" alt="Large spinner structure measurements"/>
  </div>
</div>

_Structure measurements for small and large loading spinner | px / rem_

### Placement

The large Loading spinner should appear centered over a page or content that it is loading. Please note that the top-level navigation is not included in the page loading overlay.

<div class="image-component">
    <img src="images/loading-style-4.png" alt="Large spinner in context example" />
</div>

_Example of a large loading spinner in product context_
