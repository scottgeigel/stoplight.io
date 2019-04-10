---
path: /api-documentation-guide/advanced
tags:
  - guides
  - api-documentation
relatedTags:
  - api-documentation
publishedDate: 2019-02-11T17:59:22.696Z
author: ''
title: API Documentation Guide | Advanced
subtitle: 'A deep dive into API Documentation '
color: green
tabs:
  - href: /api-documentation-guide/basics
    title: API Documentation Basics
  - href: /api-documentation-guide/advanced
    title: API Documentation Advanced
  - href: /api-documentation-guide/best-practices
    title: 'API Documentation Best Practices '
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: API Documentation Guide | Advanced
  description: Want to know about some of the more technical and advanced aspects of API Documentation? Find out some of the more in-depth aspects with Stoplight.
  twitter:
    title: API Documentation Guide | Advanced
    username: '@stoplightio'
---
## Should I Build My Own API Documentation?
As you get serious about your developer experience, you might consider rolling your own API documentations internally, using an open source documentation framework, or subscribing to a documentation provider. Each can be a viable choice, as long as you understand the costs and trade-offs of each alternative.

Stripe, Twilio, and Heroku are all companies who market directly to developers. They have entire teams to build and maintain their documentation and other developer resources. When you write API documentation in-house, be ready to take the bulk of at least one engineer’s time for the initial build. Also remember that, like any software, the documentation will require maintenance. You’ll frequently require additional time from engineers to fix or update your docs.

Starting from scratch isn’t a good option for most companies. Instead, you might look to open source frameworks as a foundation for your documentation. Most likely, you’ll still require some engineering time to customize the style and functionality. Just like in building your own, this method also requires maintenance. The good news is some of this will be handled by the open source community. However, you’ll still need to bring changes from the project into your documentation, or risk your installation becoming outdated.

Finally, you can use a hosted option like Stoplight, which provides beautiful, customizable documentation. Going down this route typically requires the least amount of engineer time; keeping your team focused on your core business. Since many of these services are delivered in the cloud, updates are automatic and maintenance is minimal. 

All of these options require investment at varying levels. Regardless of which you choose for your API documentation, your developer experience is worth it.

## Generating Useful API References
When a developer thinks about API documentation, it’s most likely they envision a complete reference. This is only one type of documentation, but it’s an important one. Here you’ll find a list of API endpoints, what request and response fields are available, and how to authenticate with the API. These are all very important parts of integrating with your API.

Developers may use a reference when determining what is possible with an API, creating SDKs or testing against an API, or simply reminding themselves an endpoint or field’s name. In all of these cases, it’s important to have an accurate, up-to-date, and complete reference. To that end, the more you can automate your API reference, the more likely it will reflect your latest API updates.
### Start with Your API Specification Document
The best place to start when generating an API reference is a machine-readable description of your API. There are a handful of options here, including OpenAPI, Swagger, and RAML. That said, the industry has rallied around The OpenAPI Initiative, created by a consortium and operated by the Linux Foundation.

The OpenAPI Specification comes in two flavors: version 2, which is based on the original Swagger spec, and the newer version 3. The latest version is the way forward, but you’ll still find tools built on version 2, and may need to convert between them.

OpenAPI allows you to describe your API endpoints, request data, response fields, authentication, headers, and more. While the format is human-readable, the biggest reason to use an OpenAPI document is for automation. There’s a lot you can do, including [mock and test your API](/mock-api-guide/basics/), but one popular use of OpenAPI is to generate documentation.

You may generate OpenAPI documents from code, but you’ll be missing out on using it earlier in your API design. There are major advantages to [design-first APIs](/api-design-guide/basics/), including early collaboration across departments, mock servers to try out your APIs, and automated API testing from design through production.
### Show and Tell API Functionality
Every API reference should _tell a developer_ what’s possible. That is, listing the endpoints and their input fields describe the functionality. A developer expects this kind of black-and-white, citation of facts. The best and most useful API references also _show what’s possible_.

At its simplest, a good API documentation can show example responses. The data that is returned from an API is at least as important as how you make the calls, but you’d be surprised how many API references leave responses out. If you have started with an OpenAPI definition, the responses objects (and other related components in version 3) is where you’ll include this important data. When a developer can see what to expect, they’re better able to predict how they might integrate with an API without making live calls.

That said, showing your API docs can go beyond static content. Interactive documentation is becoming more common and therefore expected. Developers can preview API requests, change values, and see mock or live responses. You can even construct curl command line examples or generate source code in popular languages.
