---
path: /blog/the-stoplight-way-versions-and-releases-ba7009e51bab
tags:
  - blog-general
  - blog
relatedTags:
  - blog-general
publishedDate: 2018-07-09T19:21:12.282Z
author: Nicholas Cassera
title: 'The Stoplight Way: Versions and Releases'
subtitle: 'An integral part of any teams workflow, is version control'
image: /images/versions-releases.jpeg
color: indigo
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'An integral part of any teams workflow, is version control'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: 'The Stoplight Way: Versions and Releases | Stoplight API Corner'
  image: /images/versions-releases.jpeg
  twitter:
    description: 'An integral part of any teams workflow, is version control'
    title: 'The Stoplight Way: Versions and Releases | Stoplight API Corner'
    image: /images/versions-releases.jpeg
    username: '@stoplightio'
---
An integral part of any teams workflow, is version control. In this post, I am going to go over Stoplight’s perspective on versions, releases, and some best practices to help your team deliver the best product in the shortest period of time with Stoplight.

## Stoplight Perspective

### Versions

The simplest way to view versions are as milestones within your project. Version control allows you to create linear and historical reference points that denote significant changes within your project. By having a historical timeline of changes, it’s easy to organize and track how your product grows and when major changes are made. Without the use of version control, your changes will be ambiguous.

One of the biggest benefits of having milestones to work with is easy recoverability. Say, for example, you put your latest work out into production and “uh oh” something broke and your product is completely unusable. Without the use of version control, your team is left scrambling trying to track down the problem and push out a fix before too many consumers are affected. Even a small outage like this can leave you with some disgruntled consumers. If your team was using version control, it would be easy to rollback to the latest working version of your product leaving the outage window as small as possible. Your team can then work on fixing the problem without negatively affecting consumers.

### Releases

Version control is extremely helpful internally but it is an excessive amount of information for external users. This is where releases come in. A release within Stoplight is when you mark a version as complete and “ready to publish/view.” Releases should be done once you have completely finished working on major changes and want to include the current version in your published documentation. The advantage of Stoplight is that you control what the readers of your documentation see without being flooded with unnecessary information like work in progress or internal-only versions.

## Versions and Releases with Stoplight

We realize that different teams might be using our product in different ways, so we have two possible methods of version control in Stoplight that will cover most use cases.

![Versions and Releases in Stoplight](https://cdn-images-1.medium.com/max/800/1*Ul-zwQZJ7iWcUD-KBxyy4w.png)*Versions and Releases in Stoplight*

### Mirror Release Method

The first method is to mirror your product or APIs release cycle. The basic rule of thumb is when you release a new version of your API, you also release that [version](https://docs.stoplight.io/platform/versioning/versions) in Stoplight. This release flow is one-to-one with your API, and will usually result in a large number of released versions within Stoplight.

### Documentation Driven Method

The second method is designed for a documentation driven project. First, you describe the major versions of your API. Next, any time you want the changes reflected in your published documentation, you can [re-release those versions](https://docs.stoplight.io/platform/versioning/releases). This method allows you to continue making edits to your documentation, without needing to create a new version, or worry about your in-progress work being shown to readers.

![Versions in your documentation Hub](https://cdn-images-1.medium.com/max/800/1*jaB_AIs8k3pd9nQZsu253Q.png)*Versions in your documentation Hub*

Ultimately, we’ll be expanding the release system to more than just publishing. Our goal is to build and publish docs, run scenarios and provide coverage reports, and create mock servers with a single click. Automating these processes will cut down on valuable engineering time you can then use elsewhere.
