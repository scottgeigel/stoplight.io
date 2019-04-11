---
path: /blog/stoplight-v4-9-0
tags:
  - blog
  - blog-changelog
relatedTags:
  - blog-changelog
publishedDate: 2019-04-09T16:59:41.917Z
author: Marc MacLeod
title: Stoplight v4.9.0 Release
subtitle: OpenAPI Extensions
image: /images/robin-pierre-323861-unsplash.jpg
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
  description: OpenAPI Extensions
  robots: 'index, follow'
  title: Stoplight v4.9.0 Release | Stoplight API Corner
  image: /images/robin-pierre-323861-unsplash.jpg
  twitter:
    description: OpenAPI Extensions
    title: Stoplight v4.9.0 Release | Stoplight API Corner
    image: /images/robin-pierre-323861-unsplash.jpg
---
## New 🚀

### Extensions

![Example of extensions](/images/extensions.png)

Users can now interact with OpenAPI Specification extensions through the Stoplight visual editor. Extensions are reusable components that describe additional functionality beyond what is covered in the OpenAPI Specification. They are generally vendor specific, such as Amazon API Gateways extension. All OpenAPI extensions begin with `x-`. Read more on how to use extensions in the docs [here](https://docs.stoplight.io/modeling/modeling-with-openapi/openapi-extensions).

## Enhancements 💪

* \[Modeling] Added ability to support 'no security' for an API operation
* \[Modeling] Added a banner letting users know they can't edit without write access
* \[Hubs] Removed endpoints marked private from the specification document when download link is selected
* \[Modeling] Added safeguard for scopes, specifically with OAuth

## Fixes 🔧

* \[Hubs] Markdown code blocks were not getting highlighted
* \[Hubs] When you changed pages, they were being replaced in the body frame without resetting scrolling to the top of new page ([Forum Link](https://community.stoplight.io/t/pages-open-in-weird-spots))
* \[Mocking] Unable to enter a forward-slash character in path for mock test request
* \[Modeling] - Changing an object to any of the combination types (allOf, anyOf, oneOf) erases the data
* \[Hubs] Variable templating was not working properly in Hubs
* \[Hubs] Path Parameter Variables were not showing in Test Request UI when both http and https were set as security schemas ([Forum Link](https://community.stoplight.io/t/variables-missing-from-code-generator-forms))
* \[Platform] Editor sometimes showed warnings that someone else was editing when they were not
