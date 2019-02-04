---
path: /blog/release-v4-5-0
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishDate: 2018-09-11T18:09:47.152Z
author: Robert Wallach
title: Stoplight v4.5.0 Release — Discussions and Documentation API
color: green
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: true
meta:
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Release v4.5.0 | Stoplight
  twitter:
    title: Release v4.5.0 | Stoplight
    image: /images/mark_light_bg.png
    username: '@stoplightio'
---



Update: v4.5.1 and v4.5.2 have also been released to squash from bugs🐛 from v4.5.0.

## New 🚀

### [Organizations] [Discussions](http://docs.stoplight.io/platform/projects/discussions)

Discussions allow organizations to track and share conversations at the project and/or file level. They are particularly useful for tracking enhancements, bugs, issues, and tasks. Discussions are displayed in a Projects Home and within the Discussions toolbar. They are sorted by most recent activity.

![Discussions Example](https://cdn-images-1.medium.com/max/2896/1*9SpIHXPJInfzCju_O55VxQ.png)*Discussions Example*

### [Hubs] [Documentation API](https://docs.stoplight.io/api-reference/documentation)

Stoplight exposes an API that enables you to programmatically publish and unpublish documentation, download build zips, and modify a docs configuration. Additionally, you can retrieve a documents build list and configuration. This enables more advanced automation and integrations into existing workflows. For example, continuous integrations services such as Travis, Jenkins, and Circle CI.

## Fixes 🔧

* [Modeling] Requesting OAuth2.0 Access Token: Scope is missing in Form Data [#276](https://github.com/stoplightio/desktop/issues/276)

* [Modeling] Impossible to have an assertion testing the numeric value of 0 [#279](https://github.com/stoplightio/desktop/issues/279)

*We started a newsletter at [Stoplight](https://stoplight.io/) with some of the month’s blog posts, our favorite posts from the API community, and more! Sign up below *👇

![](https://cdn-images-1.medium.com/max/11000/1*t-0nFtOwlgG0xGyouTJapQ.png)
