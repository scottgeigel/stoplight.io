---
path: /blog/stoplight-v4-4-release-hub-search-430f8fde7d6d
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2018-08-03T18:41:01.212Z
author: Taylor Barnett
title: Stoplight v4.4.0 Release
subtitle: Hub Search
image: /images/hub-search.png
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: Hub Search
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Stoplight v4.4.0 Release | Stoplight API Corner
  image: /images/hub-search.png
  twitter:
    description: Hub Search
    title: Stoplight v4.4.0 Release | Stoplight API Corner
    image: /images/hub-search.png
    username: '@stoplightio'
---
## New 🚀

**[Hubs] Published Hub Search:** Search is back! Users can now instantly search the content of all the pages in your Hub.

![](https://cdn-images-1.medium.com/max/800/0*aBLqg4zXoL67b5uQ.png)
> *Note: If you rebuild your docs, you will have search added by default*

## Enhancements 💪

* [Modeling] Drag and drop reordering support for OpenAPI Specification tags

* [Hubs] Published Hub meta tags are better optimized for SEO

* [Modeling] Better naming from CRUD builder [#248](https://github.com/stoplightio/desktop/issues/248)

## Fixes 🔧

* [Modeling] Could not include a referenced query parameter to common parameters section [#271](https://github.com/stoplightio/desktop/issues/271)

* [Hubs] Markdown blocks with a dedicated anchor and headings were showing two anchor tags [#269](https://github.com/stoplightio/desktop/issues/269)

* [Hubs] Code generation for Basic Auth was not replacing environment variables [#268](https://github.com/stoplightio/desktop/issues/268)

* [Hubs] Incorrect fields for OAuth2 application flow [#267](https://github.com/stoplightio/desktop/issues/267)

* [Hubs] OAuth2 should use the correct callback URL [#266](https://github.com/stoplightio/desktop/issues/266)

* [Projects] When a project is deleted, any reserved domains for that project should be made available again

* [Desktop] Stoplight URIs in desktop app were using the local hostname [#265](https://github.com/stoplightio/desktop/issues/265)

* [OAS] OpenAPI Specification tags were not displaying the correct order in Read mode [#264](https://github.com/stoplightio/desktop/issues/264)

* [Modeling] Can’t view operation with path / in OAS read mode [#262](https://github.com/stoplightio/desktop/issues/262)

* [Organizations] Broken link in access to team email [#261](https://github.com/stoplightio/desktop/issues/261)

* [Modeling] Random zero in numeric fields was in the UI [#254](https://github.com/stoplightio/desktop/issues/254) [#272](https://github.com/stoplightio/desktop/issues/272)

* [Hubs] Boolean examples were not showing [#252](https://github.com/stoplightio/desktop/issues/252)

* [OAS] Setting OpenAPI Specification host to {$$.env.host} was not resolving correctly [#246](https://github.com/stoplightio/desktop/issues/246)

* [Hubs] AWS auth signing failed when query parameters were set on request [#217](https://github.com/stoplightio/desktop/issues/217)
