---
title: Checkbox
tabs: ['Code', 'Usage', 'Style']
---

<anchor-links>
<ul>
    <li><a data-scroll href="#general-guidance">General guidance</a></li>
    <li><a data-scroll href="#related-components">Related components</a></li>
    <li><a data-scroll href="#content">Content</a></li>
    <li><a data-scroll href="#tables">Tables</a></li>
</ul>
</anchor-links>

## General guidance
_Checkboxes_ are used for a list of options where the user may select multiple options, including all or none.

#### Checkbox states

The checkbox control allows for three states: **selected**, **unselected**, and **indeterminate**. The indeterminate state comes into play when the checkbox contains a sublist of selections, some of which are selected, and some unselected.

#### Click target

Users should be able to select the checkbox by clicking on the box directly or by clicking on its label.

#### Default selection

The default view of a set of checkboxes is having no option selected.

<image-component cols="8"  caption="By default, checkboxes are unchecked.">

![The default state for checkboxes is unchecked.](images/checkbox-usage-1.png)

</image-component>


## Related components

#### Checkbox vs. radio button
Whereas radio buttons represent a group of _mutually exclusive_ choices, users can select one or more checkboxes from a group. In use cases where only one selection of a group is allowed, use the radio button component instead of the checkbox.

#### Checkbox vs. toggle switch
Generally, toggle switches are preferred when the resulting action will be instantaneously applied, without the need for further confirmation. Checkboxes generally represent one input in a larger flow which requires a final confirmation step.

#### References

<br>

- [Toggle](/experimental/toggle)
- [Radio Button](/experimental/radio-button)
- [Form](/experimental/form)
- _Data Table (coming soon)_


## Content

#### Headings
If necessary, a heading can accompany a set of checkboxes to provide further context or clarity. Use sentence case for checkbox headings. In the example below, “IBM designers” would be the heading for the set of checkboxes.

#### Labels
Always use clear and concise labels for checkboxes. Be explicit about the results that will follow if the checkbox is selected. Labels appear to the right of checkboxes.


## Tables

See the [Data Table](/components/data-table/usage) section for guidance on how to use checkboxes within a table.

