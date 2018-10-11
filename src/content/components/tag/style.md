---
label: Component
title: Tag
tabs: ['Code', 'Usage', 'Style']
---

## Typography

Tag text should be set in sentence case, and should only have one word. However, if more than one is necessary, then connect the words using a hyphen with no spaces.

| Property   | Font-size (px/rem) | Font-weight  | Type style          |
| ---------- | ------------------ | ------------ | ------------------- |
| `.bx--tag` | 12 / 0.75          | Normal / 400 | `.bx--type-caption` |

## Structure

All tags have the same height. However, the width of tags varies based on the amount of content. All four corners of a tag are rounded with a 15px radius.

| Class      | Property                    | px / rem   | Spacing token |
| ---------- | --------------------------- | ---------- | ------------- |
| `.bx--tag` | height                      | 20 / 1.25  | -             |
| `.bx--tag` | radius                      | 15px       | -             |
| `.bx--tag` | margin                      | 3px        | -             |
| `.bx--tag` | padding-left, padding-right | 10 / 0.625 | -             |

<div class="image-component">
    <img src="images/tag-style-1.png" alt="Structure and spacing measurementst" />
</div>

_Structure and spacing measurements for a Tag | px / rem_
