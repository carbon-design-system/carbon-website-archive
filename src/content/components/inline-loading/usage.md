---
label: Component
title: Inline Loading
tabs: ['Code', 'Usage', 'Style']
---

## General

The waiting experience is a crucial design opportunity. Although it may not be obvious what is occurring on the back-end, we can communicate clearly to reassure the user that progress is happening.

It is best practice to use an Inline Loading component for any Create, Update, or Delete actions. The component provides feedback to the user about the progress of the action they took. This could be in a table, after a primary or secondary button click, or even in a modal.

## States

### Loading

The **LOADING** state indicates that the action is still in progress.

![Example of a text Skeleton State in use on a Data Table](images/inline-loading-usage-1.png)
_Example of the loading state for the Inline Loading component | px / rem_

### Success

The **SUCCESS** state indicates that the action completed successfully.

![Example of a text Skeleton State in use on a Data Table](images/inline-loading-usage-2.png)
_Example of the success state for the Inline Loading component | px / rem_

## Guidelines

- If the Inline Loading is being used to submit a form, the form fields should get disabled.

- Descriptive text for the action is optional, but encouraged. If you have limited room or find adding text to be unnecessary you can just run through the animations.

- The SUCCESS state of the Inline Loading component is active for 1.5 seconds before calling a optional function onSuccess. Use the onSuccess function to refetch new data, close a modal, or reset a form. If no function is specified the SUCCESS state will last indefinitely.

- If an error occurs, the Inline Loading component should be hidden and a error notification should be added or error handling within a form should appear.

- The Inline Loading component should never be used to load a page or data.
