---
label: Patterns
title: Common Actions
---

<page-intro>**Common actions** are frequently used actions that appear multiple times across different components and workflows. For platform consistency, these actions should only be applied in the ways described below.</page-intro>

## Regressive actions

### Cancel

**Cancel** stops the current action and closes the component or item. The user should be warned of any possible negative consequences of stopping an action from progressing, such as data corruption or data loss. 

**Usage:** Use a _secondary button_ or a _link_.

![Example of cancel in a modal](images/common-action-1.png)

_"Cancel" action as a button._

### Clear

This action clears data from fields or removes selections. _Clear_ can also delete the contents of a document, such as a log. Typically, the default selection or value is reset for controls that have a default selection or value, such as radio buttons.

**Usage:** Use the `x` icon on the right side of a field, item, or value.

![Example of clear in Multi-select Dropdown and in Search](images/common-action-2.png)

_"Clear" action in multi-select dropdown (top) and in search (bottom)._

### Close

This action closes the current page, window, or menu. One example is closing a secondary window containing help. _Close_ is also used to dismiss information, such as notifications.

**Usage:** Use the `close` icon, which is typically placed on the upper right side of the element. Do not use _close_ in a button.

![Example of close in an inline notification](images/common-action-3.png)

_"Close" action in an inline notification._

### Delete

This action eradicates an existing object. _Delete_ actions cannot be easily undone and are typically permanent. The user should be warned of the negative consequences of destroying an object, such as loss of data. 

**Usage:** Use either the `delete` "trash can" icon, a _danger button_, or a danger option in a menu. A _danger modal_ is used when a warning is needed to confirm an action.

![Example of delete in a Modal and Overflow Menu](images/common-action-4.png)

_"Delete" action in a modal (top) and an overflow menu (bottom)._

### Remove

This action removes an object from a list or item; however, the object is not destroyed as a result of the action. Multiple objects can be removed at once. 

**Usage:** Use as a _button_ or `subtract` icon or glyph.

![Example of Remove in a Structured List](images/common-action-5.png)

_"Remove" action as an icon._

### Reset

This action reverts values back to their last saved state. The last saved state includes the values stored the last time the user clicked or triggered "Apply." 

**Usage:** Typically applied as a _link_.

![Example of reset in a filter](images/common-action-6.png)

_"Reset" action in a filter._

## Progressive actions

### Add

This action adds an existing object to a list, set, or system. For example, adding a document to a folder.

**Usage:** Use a _primary button_, _button with icon_, `add--glyph` or `add--outline` icon.

![Example of add as a Button with Icon in a Data Table](images/common-action-7.png)

_"Add" action as a button with icon in a data table._

### Copy

Creates a new identical instance of the selected object(s) in a specific destination. 

**Usage:** Use the `copy` icon with the confirmation "copied" tooltip appearing post-click.

![Example of copy in a Code Snippet](images/common-action-8.png)

_"Copy" action as an icon with tooltip in a code snippet._

### Edit

This action allows data or values to be changed. _Edit_ commonly triggers a state change to the targeted object or input item. 

**Usage:** Use as an option in a menu, or as a _button_ or `edit` icon.

![Example of edit in a Data Table cell](images/common-action-9.png)
![Example of edit in an Overflow Menu](images/common-action-10.png)

_Example of "edit" options for a data table cell and overflow menu._

### Next

Advances the user to the next step in a sequence of steps, such as in a wizard.

**Usage:** Use a _button with icon_ or a standalone `forward` icon.

![Example of next as a Button with Icon](images/common-action-11.png)
_"Next" action as a button with icon in a wizard._

### Refresh

This action reloads the view of an object, list, or data set when the displayed view has become unsynchronized with the source.

**Usage:** Use the `refresh` icon or a _button_.

![Example of edit in a Data Table cell](images/common-action-12.png)
_"Refresh" action as a ghost button with icon in the action bar of a data table._
