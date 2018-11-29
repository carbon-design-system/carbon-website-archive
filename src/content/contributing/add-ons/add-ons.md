---
label: Contributing
title: Add-ons
---

<page-intro>**Add-on repositories**, or repos, are components built for a specific product or experience. The repos are built on top of the core Carbon repo, and enable teams to create their own custom components that follow Carbon's visual style and guidelines.</page-intro>

## Do you need an add-on repo?

Please answer yes or no to the following list of questions:

- Is your team using Carbon components?
- Does your team have the need to add custom components in addition to Carbon's core components?
- Will these components only be needed by your team?
- Do you need these custom components to match Carbon's visual style?

If you've answered "yes" to all the questions above, then you definitely qualify for an add-on repo! Jump to the next section to learn about the required steps to create an add-on repo.

If you answered "no" to any of the questions above but still feel like you need an add-on repo, please reach out to the a member of the Carbon team to discuss additional options. It might be that your component need is something that can be shared across the core Carbon organization. In this case, we can talk about how you can contribute this component back to the core Carbon repo.

## Creating an Add-on repo

There are a number of growing add-on repos that can be found under the [Carbon org](https://github.com/carbon-design-system). If you'd like to create an add-on repo we have created a [vanilla boilerplate](https://github.com/carbon-design-system/carbon-boilerplate) and a [react boilerplate](https://github.com/carbon-design-system/carbon-addons-boilerplate-react) that you can clone to get started. For further assistance please reach out to a member of the carbon design team.

### Private vs Public

Carbon Design System is an open-source project and we do encourage teams using Carbon Design System to stay open-source as well. However, if your product has privacy constraints, we can discuss options for creating an add-on repo under our GitHub Enterprise account.

## Contributing to Add-ons

Add-ons are generally easier to contribute to because they are not fully managed by the Carbon team. Below are the items that you need to pass in order for your contribution to be accepted. You can read our full contribution process for [design](/contributing/designers) and [development](/contributing/developers) to learn more.

|               |                                                     | Core library                                         | Add-ons                                              |
| ------------- | --------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| Accessibility | WCAG AA                                             | <icon name="icon--checkmark--solid" color="green" /> | <icon name="icon--checkmark--solid" color="green" /> |
|               | Keyboard tabbing                                    | <icon name="icon--checkmark--solid" color="green" /> | <icon name="icon--checkmark--solid" color="green" /> |
|               | Carbon custom focus states                          | <icon name="icon--checkmark--solid" color="green" /> |                                                      |
| Visual + UX   | Carbon themed                                       | <icon name="icon--checkmark--solid" color="green" /> |                                                      |
|               | Universal pattern <br>(fits for 2-3 use cases)      | <icon name="icon--checkmark--solid" color="green" /> |                                                      |
|               | Interaction states (hover, active, focus, disabled) | <icon name="icon--checkmark--solid" color="green" /> | <icon name="icon--checkmark--solid" color="green" /> |

## Who owns an add-on repo?

Once an add-on repo has been created, the team or product that requested it is in charge of maintaining and keeping it up to date. This involves carrying over specific changes from the core Carbon repo, as well as making sure it is using the latest major version of Carbon Components.

## Carbon support

The table below shows the Carbon team's level of support for the Core library vs. the Add-ons repo.

|                           | Core library                                         | Add-ons                                              |
| ------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| General design questions  | <icon name="icon--checkmark--solid" color="green" /> | <icon name="icon--checkmark--solid" color="green" /> |
| Design feedback & support | <icon name="icon--checkmark--solid" color="green" /> |                                                      |
| Troubleshooting           | <icon name="icon--checkmark--solid" color="green" /> | <icon name="icon--checkmark--solid" color="green" /> |
| Bug fixes                 | <icon name="icon--checkmark--solid" color="green" /> |                                                      |
