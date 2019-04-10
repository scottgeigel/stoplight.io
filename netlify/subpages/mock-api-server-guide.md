---
path: /mock-api-guide/basics
tags:
  - guides
  - mocking
relatedTags:
  - mocking
  - blog-testing
publishedDate: 2019-03-14T16:49:10.182Z
title: Mock API Server Guide
subtitle: 'Learn how to use mock data to design, build, and test APIs'
color: black
tabs:
  - href: /mock-api-guide/basics
    title: Mock Server Basics
  - href: /mock-api-guide/advanced
    title: Mock Server Advanced
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  title: Mock/Dummy API Server API Guide | Basics
  description: Want to learn how to quickly test APIs through using a Mock/Dummy API Server? Check out our Mock API Server guide right here to find out everything you need to know.
  robots: 'index, follow'
  twitter: {}
---
The fastest way to understand what’s possible with an API is to send it requests and review the responses. During the initial design of an API, it can take weeks to have live calls available. You can develop against an API in parallel by [creating mock API servers](/mocking/server/) to return example results. Furthermore, you can create a better API by getting feedback sooner and iterating before writing code to serve a production API.

## What is a Mock API Server?
A mock API server imitates a real API server by providing realistic responses to requests. They can be on your local machine or the public Internet. Responses can be static or dynamic, and simulate the data the real API would return, matching the schema with data types, objects, and arrays.

### Why Use API Mocking?
A mock API server is useful during development and testing when live data is either unavailable or unreliable. While designing an API, you can use mock APIs to work concurrently on the front and back-end, as well as to gather feedback from developers. Use a mock API server so the absence of a real API doesn’t hold you back.

Often with internal projects, the API consumer (such as a front end developer through REST APIs) moves faster than the backend team building the API. A mock API server allows developers to consume a working API with the same interface as the eventual production API. As an added benefit, the backend team can discover where the mock API doesn’t meet the developer’s needs without spending developer time on features that may be removed or changed. This fast feedback loop can make engineering teams much more efficient.

You can also use mock APIs to emulate APIs you don’t control. For example, you can use a local mock server to fake results from a public API when you aren’t connected to the Internet. Or, use mock data responses if live calls to an API would incur a charge from the provider.

You might also [mock API calls for unit testing](/blog/the-fundamentals-of-http-api-unit-testing-2c55cd0c7634/). When your tests run with every deploy, you may not want to wait for dozens of live calls to an external API. A mock API server or library can return anticipated results so you can unit test the rest of your code. Keep in mind, you’ll want another method for ensuring that API responses meet expectations, such as [API contract testing](https://docs.stoplight.io/testing/leveraging-openapi/contract-testing).

## Types of Mock APIs
Before you create a mock API, make sure you understand what type your project needs. There are advantages and drawbacks of each kind. How you use it will be determined by the needs of your project and how realistic you need to make your responses.

### Static vs Dynamic Mock Data
At its simplest, your mock API can use static example responses for each endpoint. You can generate these yourself, store them from an existing API response, or use a tool to provide dummy data. The drawback to a static response is that real APIs produce different data based on different input. You may not get realistic results in this case, such as missing fields in responses. In addition, some field types, such as dates, will not have realistic values over time.

In contrast, a dynamic response can make your mock API more realistic. The data can be randomly generated based on the type of field and requirements you determine. You can even allow for different results based upon input, such as including search terms in results or calculating dates from parameters.

### External vs Internal API
Another distinction of your mock API will be whether it is mocking an external dependent API or your own. You likely will expect more changes to your own API, especially if it’s still in development. Make sure you have a way to keep your mock servers updated, such as generating them from an OpenAPI Specification (formerly known as Swagger Specification). We’ll discuss methods of generating data in the next section.

External APIs also change, of course. Unless you have access to their API definition, your ability to keep the mocked responses updated is limited. The best approach is likely to periodically gather live results and store them for use by your mock API.

### Public Mock/Dummy API vs Local Server
Finally, some mock APIs are fully staged on public servers, while others are created only for your local machine. When publicly accessible, you can more easily tie them into services and tooling hosted elsewhere. However, local mock servers might be advantageous for unit tests and other situations requiring low latency or offline access.
