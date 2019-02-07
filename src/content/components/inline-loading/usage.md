---
title: Inline loading
tabs: ['Code', 'Usage', 'Style']
---
<anchor-links>
<ul>
    <li><a data-scroll href="#general-guidance">General guidance</a></li>
    <li><a data-scroll href="#format">Format</a></li>
    <li><a data-scroll href="#states">States</a></li>
</ul>
</anchor-links>


## General guidance

_Inline Loading_ spinners are used when performing actions. They help notify user's that their action is being processed.
The waiting experience is a crucial design opportunity. Although it may not be obvious what is occurring on the back-end, we can communicate clearly to reassure the user that progress is happening.

It is best practice to use an Inline Loading component for any Create, Update, or Delete actions. The component provides feedback to the user about the progress of the action they took. This could be in a table, after a primary or secondary button click, or even in a modal.

## Format

- If the Inline Loading is being used to submit a form, the form fields should get disabled.

- Descriptive text for the action is optional, but encouraged. If you have limited room or find adding text to be unnecessary you can just run through the animations.

- The SUCCESS state of the Inline Loading component is active for 1.5 seconds before calling a optional function onSuccess. Use the onSuccess function to refetch new data, close a modal, or reset a form. If no function is specified the SUCCESS state will last indefinitely.

- If an error occurs, the Inline Loading component should be hidden and a error notification should be added or error handling within a form should appear.

- The Inline Loading component should never be used to load a page or data.


## States

#### Loading

The _loading_ state indicates that the action is still in progress.

<image-component cols="8">

![Example of inline loading](images/inline-loading-usage-1.png)

</image-component>

#### Success

The _success_ state indicates that the action completed successfully.

<image-component cols="8">

![Example of loading success](images/inline-loading-usage-2.png)

</image-component>

