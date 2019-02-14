---
path: /blog/stoplight-v4-8-0
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2019-02-08T22:30:00.819Z
author: Taylor Barnett
title: Stoplight v4.8.0 Release
subtitle: New API Documentation Features
image: /images/changelog-stock.jpg
color: black
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: New API Documentation Features
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Stoplight v4.8.0 Release | Stoplight API Corner
  image: /images/download-link-included.png
  twitter:
    description: New API Documentation Features
    title: Stoplight v4.8.0 Release | Stoplight API Corner
    image: /images/download-link-included.png
    username: '@stoplightio'
---
## New 🚀

### Link to download your OpenAPI Specification document in your published Hub

![Checkbox to include OpenAPI document in Hub Page](/images/download-link-checkbox.png)_Checkbox to include OpenAPI document in Hub Page_

![Published Hub with link to the raw OpenAPI Specification document](/images/download-spec-link.png)_Published Hub with link to the raw OpenAPI Specification document_

Back by popular demand from Stoplight Classic!

You can now find a checkbox in your Hub’s Page Settings to include a link to your raw OpenAPI Specification document in your Hub. If you are publishing your OAS document directly (not in a Hub), you can add an extension in your specification document `x-stoplight: { docs: { includeDownloadLink: true } }` to include the download link in your published API reference documentation. 

([Forum Link](https://community.stoplight.io/t/allow-users-to-download-swagger-file))

### Mark endpoints as private

![Toggle button to mark an operation as private](/images/private-endpoint.png)_Toggle button to mark an operation as private_

Also back by popular demand, you can now mark operations in your specification as private to hide them from your published documentation. 

> Note: This functionality wasn't added to models (although you can hide models) and doesn't remove endpoints from your OpenAPI Specification document (if the download link is included or specification is exported).

([Forum Link](https://community.stoplight.io/t/public-private-endpoint-designation))

## Enhancements 💪

* \[Modeling] Able to add custom lint rules by editing lint.yml file
* \[Modeling] Added a close icon to JSON Schema validation popup
* \[Modeling] Automatically update local $refs when their pointer is changed
* \[Platform] Can load more than 100 files in a project
* \[Platform] Improved notifications when editing in multiple browser windows, tabs, or desktop apps ([\#283](https://github.com/stoplightio/desktop/issues/283))
* \[Platform] Added warning about unsaved changes when clicking home or organization buttons
* \[Organizations] Sort user lists alphabetically

## Fixes 🔧

* \[Modeling] allOf/oneOf models with nested JSON references did not display correctly ([\#152](https://github.com/stoplightio/desktop/issues/152))
* \[Modeling] Unable to use an environment variable in place of OpenAPI host with port
* \[Modeling] FormData response bodies, response/request headers were not displaying in Read View ([Forum Link #1](https://community.stoplight.io/t/response-headers-do-not-show-up-in-published-api-docs)) ([Forum Link #2](https://community.stoplight.io/t/example-request-body-not-showing-up-in-read-view))
* \[Hubs] Reordering a page in the Table of Contents removed its tags ([Forum Link](https://community.stoplight.io/t/page-tags-are-lost-when-reordering-pages))
* \[Hubs] Test Request did not support multiple OAS security schemes
* \[Hubs] Test Request paths were encoded
* \[Hubs] Test Request did not support Basic Auth when combined with apiKey
* \[Hubs] Tagged operations were being grouped by their method
* \[Hubs] OAuth callback did not include Hub’s base path
* \[Hubs] Incorrect code generation for Python’s Requests library
* \[Hubs] Could not republish when custom domain limit reached
* \[Hubs] Links with query parameters were being escaped in Markdown ([\#353](https://github.com/stoplightio/desktop/issues/353))
* \[Hubs] Request body examples were not displayed ([\#354](https://github.com/stoplightio/desktop/issues/354))
* \[Organizations] Projects were not sorted alphabetically
* \[Projects] There was no warning or auto-deletion of published Hubs before deleting an organization
* \[Platform] Environment variables input was rendering incorrectly on first load ([\#350](https://github.com/stoplightio/desktop/issues/350))
* \[Platform] HTTP request maker password inputs were not obscured
* \[Platform] HTTP basic auth headers were not set when sending requests from a browser
* \[Platform] Code generation prepended URL with the scheme
* \[Platform] Exporting a file with `deref=all` was not resolving external references in private projects
* \[Platform] Permissions error returned when exporting a file with `format=yaml` option
* \[Scenarios] Utility Scenarios were not being found ([Forum Link](https://community.stoplight.io/t/reference-utility-models-in-test-scenarios-is-not-working))
