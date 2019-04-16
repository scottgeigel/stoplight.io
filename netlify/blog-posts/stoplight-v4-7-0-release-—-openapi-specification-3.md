---
path: /blog/stoplight-v4-7-0-release-openapi-specification-3-1b5a2276b03c
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2019-01-08T19:04:55.501Z
author: Taylor Barnett
title: Stoplight v4.7.0 Release
subtitle: OpenAPI Specification 3
image: /images/oas3-code-editor.png
color: green
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: OpenAPI Specification 3
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Stoplight v4.7.0 Release | Stoplight API Corner
  image: /images/oas3-code-editor.png
  twitter:
    description: OpenAPI Specification 3
    title: Stoplight v4.7.0 Release | Stoplight API Corner
    image: /images/oas3-code-editor.png
    username: '@stoplightio'
---
## New 🚀

### OpenAPI Specification (OAS) 3

* Create and edit OAS 3 files

* Find and fix issues in OAS 3 documents using validation and linting rules

* Publish auto-generated OAS 3 documentation

* Visual editing coming soon!

![*OpenAPI 3 Editor — Code View with Validation and Linting*](https://cdn-images-1.medium.com/max/800/1*8gUxm53NiXCs80Cn8NMIjg.png)

![*Auto-generated OpenAPI 3 Documentation*](https://cdn-images-1.medium.com/max/800/1*4ICJOxCPSKYO6uRhN6LEzg.png)

## Fixes 🔧

* [API] Publishing can lose references if GitLab times out

* [Hubs] Segment key should be wrapped in quotes when injecting into HTML

* [Hubs] Auto-generated links for nested pages are incorrect when published under a base path

* [Platform] Discussion comment timestamps are incorrect in Safari

* [Platform] String length validation is being stored as a string instead of an integer ([#315](https://github.com/stoplightio/desktop/issues/315))

* [Platform] Prevent overwrites when editing documents ([#283](https://github.com/stoplightio/desktop/issues/283))

* [Platform] Unable to single-click on draggable sidebar items

* [Platform] Ensure correct billing plan when using features

* [Platform] Can’t click possible enum values in path param

* [Prism] Empty security array on an operation is not being respected

* [Prism] $$.env variables are not being set correctly in referenced utilities ([#347](https://github.com/stoplightio/desktop/issues/347))
