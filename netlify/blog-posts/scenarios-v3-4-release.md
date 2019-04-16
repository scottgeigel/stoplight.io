---
path: /blog/scenarios-v3-4-release-2eff3345918
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2017-07-31T22:30:02.700Z
author: Marc MacLeod
title: Scenarios v3.4 Release
subtitle: 'Changelog, updates, fixes, & roadmap'
image: /images/scenarios-tagging.png
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'Changelog, updates, fixes, & roadmap'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Scenarios v3.4 Release | Stoplight API Corner
  image: /images/changelog-stock.jpg
  twitter:
    description: 'Changelog, updates, fixes, & roadmap'
    title: Scenarios v3.4 Release | Stoplight API Corner
    image: /images/changelog-stock.jpg
    username: '@stoplightio'
---
Today, we are happy to announce the release of Scenarios v3.4! This release includes several highly requested features, as well as a slew of bug fixes. You can check all of this out now at [https://scenarios.stoplight.io](https://scenarios.stoplight.io).

### v3.4 highlights:

1. Tagging & Filtering

1. Discussions

1. Shared Environments

1. Public Entities

1. Editor UI Update

***Notes**: This release requires you to re-login. This release clears private environment variables due to the new shared environments system — we apologize for the inconvenience!*

## Tagging & Filtering

![Manage tags on your organization settings page.](https://cdn-images-1.medium.com/max/800/1*uGL3lxZulxt8hIKDI6jFuQ.png)
*Manage tags on your organization settings page.*

Tags help you organize the many artifacts that are part of your development process. You can define tags in your organization, and then add them to entities (API specs, scenario collections, and prism instances) inside of the organization.

Use tags to organize your lifecycle stages (design, needs review, published, etc), group entities into projects, deprecate entities, and more.

Every organization starts off with some basic tags, but they are fully customizable on the settings page.

***Coming Soon:** A kickass search system.*

## Discussions

![Discussions make it easy for stakeholders to coordinate.](https://cdn-images-1.medium.com/max/800/1*T5Jzo_KtjS6x-yAgYdWt6w.png)
*Discussions make it easy for stakeholders to coordinate.*

Every editor now has a discussions pane, accessible via a button in the top right.

Discussions make it easy for stakeholders to coordinate. Use discussions to ask questions, assign tasks, and resolve issues.

To create a new discussion, simply navigate to the entity in question, and then click on the “Discussion” button in the top right. Anybody with read access to the entity can create and participate in discussions. Discussions can be resolved, and you can toggle between open and closed discussions with the tabs at the bottom of the discussion list.

***Coming Soon:** @mentions, activity feeds, and notifications!*

## Shared Environments

Environments make it easy to define groups of variables that you can re-use throughout your API spec / scenario collection /etc.

Before v3.4, each entity was limited to 3 pre-defined environments (development, staging, and production). Additionally, environment data was always specific to each user, and only saved on their computer.

v3.4 introduces the concept of shared environments. You still have the three pre-defined default environments, but now you can also add your own. You can also save shared variables to environments. These variables are usable by anybody with read access to the entity. Shared variables are great for properties that are applicable to more than one person (like API hosts).

Don’t worry — private user variables are still supported! Private environment variables are only saved on the individual users computer (not Stoplight servers), and are merged over any shared variables of the same name. This lets individual users customize shared variables when needed, without affecting their teammates.

## Public Entities

Entities can now be made public! This makes it easier to share API Specs and other development artifacts with people outside of your organization.

***Coming Soon:** Pretty, read-only/documentation views for all of our editors. These will be perfect to share with the public and/or less technical stakeholders in your organization.*

## Editor UI Update

![Editor UI Update](https://cdn-images-1.medium.com/max/800/1*7aGeACeAj1xr_i8wwZV9CA.png)
*Editor UI Update*

We’ve updated the editor UI in a few small ways. The primary goal here was to increase the amount of space available to the editor itself by minimizing the navigational chrome around it. To do that, we’ve moved the tabs that used to be at the top of the editor to a new left gutter. This significantly increases the amount of vertical space available to the editor. This also allowed us to increase the height of the top nav strip, which is important because…

***Coming Soon:** Multiple tabs support. No clicking through lots of links to switch back and forth between two things in the app.*

We hope you enjoy this release! Please let us know if you run into any bugs, or have questions.

We’re on Twitter [@stoplightio](http://twitter.com/stoplightio) and available by email at hi  @stoplight.io.
