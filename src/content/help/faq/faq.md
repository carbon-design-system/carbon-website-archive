---
title: FAQ
---

The following are some of the most frequently asked questions about the Carbon Design System. Please check back often, as the Carbon team is constanly adding new FAQs to this list.

### What is the Carbon Design System?

Carbon is the open-source design system for all IBM software products. It is a series of individual styles, components, and guidelines used for creating unified UI.

### Who works on the Carbon Design System?

Carbon has a [core team](https://github.com/orgs/carbon-design-system/people) of designers and front-end developers that are dedicated to developing and supporting the system. Our core team sits in the IBM Design Studio in Austin, Texas. There are also countless other designers and developers who contribute back to [carbon-components](https://github.com/IBM/carbon-components#contributors) and [carbon-react](https://github.com/IBM/carbon-components-react#contributors).

### How can I contribute and/or propose new components/ideas?

We have contributing guidelines for [Developers](/contributing/developers) and [Designers](/contributing/designers). We appreciate you helping out and contributing back.

### Which browsers are supported?

Carbon components are supported in the following browsers:

- IE11
- Microsoft Edge latest
- Firefox latest
- Chrome latest
- Safari latest

### What languages are the components written in?

There are two different implementations of the Carbon Design System. One is a vanilla JavaScript library; that's written in ES6+, SCSS, and HTML and ships deliverables in vanilla JavaScript in ES5 as well as ES6, CSS, SCSS and HTML. The other is a React library that ships a React rewrite of the JavaScript, but uses the same CSS as the core library.

There is also an unofficial, internal-only Angular library for Carbon Components that was built out by a team other than Carbon. Please note that the Carbon team does not maintain this repo.

### I see a bug. How do I report it?

First, make sure the problem is reproducible. Once confirmed, please open an issue in the appropriate GitHub repo (see below). We will address the bug as soon as we can. If you have a fix for the bug please feel free to submit a PR for it.

#### Design Issue Repos

- [Design Kit](https://github.com/IBM/carbon-design-kit/issues/new)
- [Icons](https://github.com/IBM/carbon-icons/issues/new)
- [Website](https://github.com/carbon-design-system/carbon-website/issues/new/choose)
- [Components](https://github.com/IBM/carbon-components/issues/new/choose)
- [Elements](https://github.com/IBM/carbon-elements/issues/new/choose)
- [Charts](https://github.com/IBM/carbon-charts/issues/new)
- [Everything else](https://github.com/carbon-design-system/issue-tracking/issues/new)

#### Code Repos

- [carbon-components](https://github.com/IBM/carbon-components/issues/new/choose)
- [carbon-components-react](https://github.com/IBM/carbon-components-react/issues/new/choose)
- [carbon-components-angular](https://github.com/IBM/carbon-components-angular/issues/new)
- [carbon-charts](https://github.com/IBM/carbon-charts/issues/new)

### What can I expect for a response to my bug report?

If you have a pressing bug or change it is best to make PR for the issue yourself. Our team works in sprints and will try to address your bug as soon as possible; sometimes within two or three days, but usually by the following sprint. Issues that are out of scope will be closed until they become a higher priority.

Typical responses to bug reports will include:

- Need more info, can't reproduce the problem
- Won't fix, this isn't something we intend to support
- Confirmed, will add to our roadmap (Carbon team will fix)
- Confirmed, will accept PRs (need external member to fix)
- Need to include design to verify this behavior is supported

### What should I do if I find a component that isn't accessible?

First, refer to the [Carbon accessibility guidelines](/guidelines/accessibility) to confirm that the component fails accessibility standards. If confirmed, [create a GitHub issue](https://github.com/IBM/carbon-components/issues/new/choose) in the Components repo and describe the steps to reproduce the problem. If the core Carbon team confirms the problem, we will work to fix it as quickly as possible.

### I haven't updated to the latest version of Carbon yet, but I still need the old documentation. Is there a place I can find it?

Every version of Carbon that is still supported is hosted at its own domain. You can find the old sites version here:
**[V6](http://v6.carbondesignsystem.com/)**, **[V7](http://v7.carbondesignsystem.com/)**, and **[V8](http://v8.carbondesignsystem.com/)**.
