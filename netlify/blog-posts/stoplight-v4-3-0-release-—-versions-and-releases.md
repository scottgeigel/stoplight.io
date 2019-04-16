---
path: /blog/stoplight-v4-3-0-release-versions-and-releases-b350587152f7
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2018-07-06T19:25:47.388Z
author: Taylor Barnett
title: Stoplight v4.3.0 Release
subtitle: Versions and Releases
image: /images/versions-releases.png
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: Versions and Releases
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Release v4.3.0 | Stoplight API Corner
  image: /images/versions-releases.png
  twitter:
    description: Versions and Releases
    title: Release v4.3.0 | Stoplight API Corner
    image: /images/versions-releases.png
    username: '@stoplightio'
---
## New 🚀

**[Projects] Versions and Releases!**
You can now declare versions and releases within Stoplight to manage and track changes made to your project over time. You can identify which version you are viewing in the top right of the editor. We wrote more on Stoplight’s perspective on Versions and Releases [here](/blog/the-stoplight-way-versions-and-releases-ba7009e51bab).

**[Projects] Versions:** Versions are editable snapshots of your current project. When you create a new project, it will automatically start at version 1.0. Read more about Versions [here](https://docs.stoplight.io/platform/versioning/versions).

![Preview of the Versions & Releases’ UI](https://cdn-images-1.medium.com/max/800/1*77J6DuLt2vs-cI-iRX5EXQ.png)
*Preview of the Versions & Releases’ UI*

**[Projects] Releases:** Creating a release marks a version as ready to publish and takes a snapshot of the most recent edit of a version. When publishing documentation, all released versions will be included in your documentation under a dropdown selector. Read more about Releases [here](https://docs.stoplight.io/platform/versioning/releases).

![You can select the version you want to see the documentation for in the dropdown selector](https://cdn-images-1.medium.com/max/800/1*jaB_AIs8k3pd9nQZsu253Q.png)
*You can select the version you want to see the documentation for in the dropdown selector*

## Enhancements 💪

* [Projects] Users with read only access can now change environments when working with Modeling, Testing, and Prism files ([#240](https://github.com/stoplightio/desktop/issues/240))

* [Mocking] Update Prism to v2.0.10

## Fixes 🔧

* [Projects] The import button for specifications occasionally did not work ([#239](https://github.com/stoplightio/desktop/issues/239))

* [Hubs] Links with the same host as the current domain should open in the same window ([#235](https://github.com/stoplightio/desktop/issues/235))

* [Projects] Project names containing only numbers weren’t loading correctly ([#232](https://github.com/stoplightio/desktop/issues/232))

* [Hubs] Could not add a new username/password to a published Hub ([#201](https://github.com/stoplightio/desktop/issues/201))

* [Modeling] Request headers weren’t updating when clicking the update request button

* [Projects] Environment variable weren’t fully deleting

* [Hubs] Code snippet was adding unnecessary new lines
