---
path: /blog/stoplight-v4-2-0-and-v4-1-2-release-fb82e741d9f
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2018-06-04T21:29:35.465Z
author: Robert Wallach
title: Stoplight v4.2.0 and v4.1.2 Release
subtitle: Hubs Proxy Support and Import Files
image: /images/import-files.png
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: Hubs Proxy Support and Import Files
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Stoplight v4.2.0 and v4.1.2 Release | Stoplight API Corner
  image: /images/import-files.png
  twitter:
    description: Hubs Proxy Support and Import Files
    title: Stoplight v4.2.0 and v4.1.2 Release | Stoplight API Corner
    image: /images/import-files.png
    username: '@stoplightio'
---
## New 🚀

* [Hubs] Hubs basePath option to prefix all routes

* [Hubs] Hubs Reverse Proxy Support: This feature + the basePath feature make it possible to mount a hub into a route in your existing applications

* Support for [importing files](https://docs.stoplight.io/platform/editor-basics/import-files) into a project

![No longer need to copy and paste your specification files to import!](https://cdn-images-1.medium.com/max/800/1*xH5QIs4X8LarTsDiJaYpSg.png)
*No longer need to copy and paste your specification files to import!*

## Enhancements 💪

* [Hubs] Published Hubs support embedding basic auth creds in the URL, for example: https://username:password@myhub.com

* Better on-boarding experience for new users

## Fixes 🛠

* [Projects] Manually re-ordering JSON schema properties in the “Raw” tab

* [Scenarios] When creating a “Get” step in a scenario from the Swagger/OAS matrix, the path parameter appeared twice ([#192](https://github.com/stoplightio/desktop/issues/192))

* [Hubs] When using *deref=all* parameter in the export URL, OAS specs in the response section were not derefing ([#227](https://github.com/stoplightio/desktop/issues/227))

* [Projects] Code generation failing if variable includes a double quote ([#219](https://github.com/stoplightio/desktop/issues/219))

* [Modeling] OpenAPI Read view not rendering request body description ([#205](https://github.com/stoplightio/desktop/issues/205))

* [Projects] Try It Out code generation not working with numeric $$.env variables in headers ([#204](https://github.com/stoplightio/desktop/issues/204))

* [Hubs] Display model title instead of key in generated documentation sidebar ([#199](https://github.com/stoplightio/desktop/issues/199))

* [Mocking] Prism instance methods are now an array of strings ([#211](https://github.com/stoplightio/desktop/issues/211))

* [Projects] Tags are now sorted by the order they appear in the OAS spec. To change order, go to Code View and rearrange the tags. Any paths that aren’t tagged will be sorted alphabetically within the Reference section ([#214](https://github.com/stoplightio/desktop/issues/214))

* [Organizations] Users with read only access cannot run Scenarios([#228](https://github.com/stoplightio/desktop/issues/228))

* [Mocking] Prism instance method selector bug

* [Organizations] Inviting users by email where the email capitalization differs from the existing account email

* [Hub] Selection dropdown being cut off when referencing in a short markdown block

* [Modeling] Edge case freeze when using “length” property in JSON examples

* [Projects] JSON schema viewer now supports nesting up to 50 levels deep

## v4.1.2 (Enterprise Only)

## Enhancement 💪

* Support HTTP Hubs via new env flags for configuring custom pubs scheme and/or port

## Fixes 🛠

* [Enterprise] Don’t display the Change Password option under account settings if SSO is enabled

* [Enterprise] Use app host environment var for generating magic invite link, instead of relying on Gitlab URL

* [Scenarios] When creating a “Get” step in a scenario from the Swagger/OAS matrix, the path parameter appeared twice ([#192](https://github.com/stoplightio/desktop/issues/192))

* [Hubs] When using *deref=all* parameter in the export URL, OAS specs in the response section were not derefing ([#227](https://github.com/stoplightio/desktop/issues/227))

* [Projects] Code generation failing if variable includes a double quote ([#219](https://github.com/stoplightio/desktop/issues/219))

* [Modeling] OpenAPI Read view not rendering request body description ([#205](https://github.com/stoplightio/desktop/issues/205))

* [Projects] Try It Out code generation not working with numeric $$.env variables in headers ([#204](https://github.com/stoplightio/desktop/issues/204))

* [Hubs] Display model title instead of key in generated documentation sidebar ([#199](https://github.com/stoplightio/desktop/issues/199))

* [Mocking] Prism instance methods are now an array of strings ([#211](https://github.com/stoplightio/desktop/issues/211))

* [Mocking] Prism instance method selector bug — switching the method for a rule works again

* [Organizations] Inviting users by email where the email capitalization differs from the existing account email

* [Design] File selection dropdown being cut off when referencing in a short markdown block

* [Modeling] Edge case freeze when have “length” property in JSON examples

* [Projects] Manually re-ordering JSON schema properties in the “raw” tab
