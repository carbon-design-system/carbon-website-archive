## Dismissal

Modals may be dismissed in 3 ways:

* Using the “x” in the upper right-hand corner of the Modal
* Pressing the `ESC` key
* Clicking / touching outside of the Modal area

## Structure

### Header

Include a heading within the Modal that mirrors the action or button that was clicked by the user. Headers include a close button “x” in the upper right-hand corner of the Modal.

### Body

The body content within a Modal should be as minimal as possible. Components that may be used in Modals include: Form fields, Text Area, Select, and Radio Buttons.

### Footer

The footer area of a Modal typically contains a set of buttons. Refer to [Button](/components/button) guidelines for usage.

## Usage

### Transactional Modal

Transactional Modals are used to validate user decisions or to gain secondary confirmation from the user. Typically, the Modal requests either a 'yes' or 'no' response.

![transactional modal](images/modal-usage-1.png)

### Passive Modal

This Modal is used as a style of notifications. We highly discourage the use of this, due to its disruptive nature. Passive Modal notifications should only appear if there is an action the user needs to address immediately. Passive Modal notifications are persistent on-screen. That is, they do not automatically go away after appearing. Users must either engage with or dismiss the notification.

![Passive modal](images/modal-usage-3.png)

### Input Modal

Modals used in this case include input areas that the user may interact with. These may include but are not limited to Forms, Dropdowns, Selectors, and Links.

![input modal](images/modal-usage-2.png)
