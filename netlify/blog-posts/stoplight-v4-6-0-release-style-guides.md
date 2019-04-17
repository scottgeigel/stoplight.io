---
path: /blog/stoplight-v4-6-0-release-style-guides-989d0831efbc
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2018-10-15T20:06:32.215Z
author: Taylor Barnett
title: Stoplight v4.6.0 Release 
subtitle: OpenAPI Specification Linting and Style Guides
image: /images/oas2-style-guide.png
color: purple
disqus:
  enabled: true
actionBar:
  enabled: false
meta:
  description: OpenAPI Specification Linting and Style Guides
  favicon: /images/mark_light_bg.png
  title: Stoplight v4.6.0 Release | Stoplight API Corner
  image: /images/oas2-style-guide.png
  twitter:
    description: OpenAPI Specification Linting and Style Guides
    title: Stoplight v4.6.0 Release | Stoplight API Corner
    image: /images/oas2-style-guide.png
    username: '@stoplightio'
---

## New 🚀

### **[OAS] OpenAPI Specification Style Guides**

You can now customize the style and validation settings of your API design. This provides a practical method for enforcing API design rules over multiple APIs. You can enable or disable rules that monitor and validate things like your API, operations, Markdown, parameters, paths, and references. Learn more in the [docs](https://docs.stoplight.io/modeling/modeling-with-openapi/style-validation-rules).

![Example of OpenAPI Specification Style Guide](https://cdn-images-1.medium.com/max/800/1*4LTwOQyn0nQDf8kxms6aBA.png)
*Example of OpenAPI Specification Style Guide*

### Personal plans are now free!

Newly created projects will default as private. If you are currently paying for a personal plan, please email us at [billing@stoplight.io](mailto:billing@stoplight.io) to migrate to a free plan.

## Breaking 💔

* [Platform] We no longer support Internet Explorer 11 (IE 11). We will continue to support IE 11 for published documentation, as well as all Microsoft Edge versions.

* [Platform] We no longer support Firefox 50 or older. Similar to IE, we will continue to support older versions for published documentation.

## Enhancements 💪

* [Hubs] Publishing is now significantly faster — most Hubs will now take less than a minute to build

* [API] Access tokens can be created via the [user settings page](https://next.stoplight.io/profile/access-tokens) and used to authenticate with the [Stoplight API](https://docs.stoplight.io/api-reference/documentation) and [Prism](https://github.com/stoplightio/prism)

* [OAS] File export URLs will now be served from (old URLs will still be supported):

    [https://next-api.stoplight.io/files.export?projectId={projectId}&branch={branch}&path={filePath}](https://next-api.stoplight.io/files.export?projectId={projectId}&branch={branch}&path={filePath})

* [Hubs] Assign environment variables in published documentation through query parameters ([#308](https://github.com/stoplightio/desktop/issues/308))

* [Hubs] Allow custom JS in Hubs ([#313](https://github.com/stoplightio/desktop/issues/313))

## Fixes 🔧

* [Projects] Some file types did not preserve content after importing

* [Hubs] Could not preview a Hub without setting it as live ([#327](https://github.com/stoplightio/desktop/issues/327))

* [Hubs] Published Hub navigation reset scroll on click ([#263](https://github.com/stoplightio/desktop/issues/263)) ([#301](https://github.com/stoplightio/desktop/issues/301))

* Password reset form did not issue a request to update the password

* [Hubs] Intercom and Google Analytics scripts were not working correctly and will now be initialized in published Hubs

* [Hubs] Problems with browser cache for custom CSS and search index files
