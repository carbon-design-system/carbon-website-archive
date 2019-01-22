---
title: Governance
---

The Carbon Design System community welcomes all design, development, feedback, and ideas in order to produce the best possible experience for our users. Being an ecosystem of open-source projects, this document describes how we govern ourselves, how decisions are made, and how you can get involved.

## Roles and responsibilities

### Users

Users are members of the community who are using the Carbon Design System guidelines, components, and tooling. Anyone can be a user and we encourage users to participate in the community as much as possible.

### Contributors

Contributors are members of the community who contribute to the Carbon Design System in a material way. Anyone can be a contributor. In addition to their participation as a user, they also can contribute by:

- Supporting new users and answering questions on Slack (IBM internal)
- Reporting bugs or missing features by creating GitHub issues
- Fixing bugs, adding features, and improving documentation by submitting GitHub pull requests

### Maintainers

Maintainers are members of the community who are committed to the success of individual Carbon Design System projects. Each project has a team of maintainers, and each team has a lead. In addition to their participation as a contributor, maintainers have privileges to:

- Label, close, and manage GitHub issues
- Close and merge GitHub pull requests
- Nominate and vote on new maintainers

## Teams

### Core team

Core team members are IBM employees who are responsible for the leadership and strategic direction of the Carbon Design System as a whole. The core team represents a centralized model of decision making on how the IBM Design Language is reflected in digital products and experiences. This includes:

- Setting overall direction and vision
- Setting priorities and release schedule
- Focusing on broad, cross-cutting concerns
- Spinning up or shutting down project teams

### Project teams

Project teams are narrowly focused on specific areas of interest. Although not a requirement, it's recommended that project teams include at least one member of the core team to help ensure coherent project vision. As a distributed model, project teams operate independently although it's recommended that they follow this governance structure to define roles, responsibilities, and how decisions are made.

Each project team has a lead maintainer, responsible for:

- Deciding on the initial membership of project maintainers (in consultation with the core team)
- Determining and publishing project team policies and mechanics, including the way maintainers join and leave the team (which should be based on team consensus)
- Communicating core vision downward to the team
- Ensuring that issues and pull requests progress at a reasonable rate, assigning issue owners and pull request reviewers as necessary
- Making final decisions in cases where team is unable to reach consensus (should be rare)

The way that project teams communicate internally and externally is left to each team, but:

- Technical discussion should take place as much as possible in the public domain, ideally in GitHub issues and pull requests
- Each project should have a dedicated Slack channel (IBM internal)
- Project teams should actively seek out discussion and input from stakeholders who are not members of the team

### Project team categories

**Design** - design kits and designer tooling.

- [Carbon Design Kit](https://github.com/IBM/carbon-design-kit)

**Elements** - how the IBM Design Language is implemented.

- [Carbon Icons](https://github.com/IBM/carbon-icons)
- [Carbon Elements](https://github.com/IBM/carbon-elements)

**Components** - component implementation appearance and behavior.

<!-- Remove comment in v11 -->
<!-- - [Carbon Spec and Styles](https://github.com/carbon-design-system/carbon-spec) -->
- [Carbon Components Vanilla](https://github.com/IBM/carbon-components)
- [Carbon Components React](carbon-components-react)
- [Carbon Components Angular](https://github.com/IBM/carbon-components-angular)
- [Carbon Components Vue](https://github.com/carbon-design-system/carbon-components-vue)

**Website** - online presence.

- [Carbon Website](https://github.com/carbon-design-system/carbon-website)
- [Carbon Website (Archived)](https://github.com/IBM/design-system-website)

**Add-ons** - see [add-on guidance](/contributing/add-ons) for custom components that follow the IBM Design Language.

### Technical steering committee

Each project lead is expected to participate in the technical steering committee to foster collaboration among the core team and all project teams. This close communication on cross-cutting concerns greatly mitigates the risk of misalignment that can come from decentralized efforts.

## Decision making

### Consensus

Project teams use [consensus design-making](http://en.wikipedia.org/wiki/Consensus_decision-making) with the premise that a successful outcome is not where one side of a debate as "won", but rather where concerns from _all_ sides have been addressed in some way. **This emphatically does not entail design by committee, nor compromised design.** Rather, it's a recognition that every design or implementation choice carries a trade-off and numerous costs. There is seldom a right answer.

Breakthrough designs sometimes end up changing the playing field by eliminating tradeoffs altogether, but more often difficult decisions have to be made. **The key is to have a clear vision and set of values and priorities**, which is the core team's responsibility to set and communicate, and the project teams' responsibility to act upon.

Whenever possible, we seek to reach consensus through discussion and design revision. Concretely, the steps are:

- New GitHub issue or pull request is created with initial analysis of tradeoffs
- Comments reveal additional drawbacks, problems, or tradeoffs
- The issue or pull request is revised to address comments, often by improving the design or implementation
- Repeat above until "major objections" are fully addressed, or it's clear that there is a fundamental choice to be made

Consensus is reached when most people are left with only "minor" objections, i.e., while they might choose the tradeoffs slightly differently they do not feel a strong need to _actively block_ the issue or pull request from progressing.

One important question is: consensus among which people, exactly? Of course, the broader the consensus, the better. But at the very least, **consensus within the members of the project team should be the norm for most decisions**. If the core team has done its job of communicating the values and priorities, it should be possible to fit the debate about the issue into that framework and reach a fairly clear outcome.

### Lack of consensus

In some cases, though, consensus cannot be reached. These cases tend to split into two very different camps:

- "Trivial" reasons, e.g., there is not widespread agreement about naming, but there is consensus about the substance
- "Deep" reasons, e.g., the design fundamentally improves one set of concerns at the expense of another, and people on both sides feel strongly about it

In either case, an alternative form of decision-making is needed.

- For the "trivial" case, the project lead will make an executive decision or defer the decision to another maintainer on the team
- For the "deep" case, the project lead is empowered to make a final decision, but should consult with the rest of the core team before doing so

## Contribution process

Carbon Design System projects typically use a [fork and pull request](https://guides.github.com/activities/forking/) workflow for contributions. Specific instructions can be found in each project's GitHub `CONTRIBUTING.md` file.

## CLAs

We require contributors to sign our Contributor License Agreement (CLA) before code contributions can be reviewed and merged. If you have questions, please [contact the core team](/help/support#email).

## Support

Have questions? Found a bug? Learn where to go and what to do by visiting the [Support page](/help/support).
