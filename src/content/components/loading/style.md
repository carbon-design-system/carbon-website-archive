## Color

| Class                                | Property         | SCSS         | HEX      |
|--------------------------------------|------------------|--------------|----------|
|`.bx--loading__svg`                   | stroke           | $nav-05      | #00b4a0  |
|`.bx--loading--small.bx--loading__svg`| stroke           | $ui-05       | #5a6872  |
|`.bx--loading-overlay`                | background-color | $ui-01 @ 60% | #ffffff  |

## Structure

| Class                | Property      | px / rem  | Spacing token |
|----------------------|---------------|-----------|---------------|
|`.bx--loading`        | height, width | 84 / 5.25 | - |
|`.bx--loading--small` | height, width | 16 / 1    | - |

<div data-insert-component="ImageGrid">
  <div>
    ![Large spinner structure measurements](images/loading-style-1.png)
  </div>
  <div>
    ![Small spinner structure measurements](images/loading-style-2.png)
  </div>
</div>

_Structure measurements for small and large loading spinner | px / rem_

### Placement

The large Loading spinner should appear centered over a page or content that it is loading. Please note that the top-level navigation is not included in the page loading overlay.

_
![Large spinner in context example](images/loading-style-4.png)
_

_Example of a large loading spinner in product context_
