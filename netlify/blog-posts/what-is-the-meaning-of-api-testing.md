---
path: /blog/what-is-api-testing
tags:
  - blog-api-testing
  - blog
relatedTags:
  - blog-api-testing
publishedDate: 2019-04-17T17:11:27.560Z
author: Adam DuVander
title: What is the Meaning of API Testing?
subtitle: How and why to use OpenAPI contract testing for your API
image: /images/formulas-and-equations.jpg
color: green-light
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: How and why to use OpenAPI contract testing for your API
  robots: 'index, follow'
  title: What is the Meaning of API Testing? | Stoplight API Corner
  image: /images/formulas-and-equations.jpg
  twitter:
    description: How and why to use OpenAPI contract testing for your API
    title: What is the Meaning of API Testing? | Stoplight API Corner
    image: /images/formulas-and-equations.jpg
---
Modern software is built on top of web APIs—connected services that exchange data between systems. Most APIs are built and consumed by internal teams. It’s important to both provider and consumer that the API work as designed. Yet, many teams do not have a formal way to ensure that an API operates as expected.

API testing will help teams building APIs be certain that every endpoint returns the appropriate status codes and response data. And their colleagues consuming the API can have the same peace of mind. In this post, we’ll define API testing and look at the best ways to track your test coverage. We’ll also show the power of connecting API descriptions such as OpenAPI and Swagger as an API contract, building your tests from this source of truth.

## What is API Testing?

> API testing is a software process which validates that an API is working properly. Once declared, API tests can run automatically, such as part of integration testing.

When you incorporate API testing into your development process, you can ensure that the API works as intended. Since APIs back much of modern software, testing them helps catch bugs before they make it to production. As the number of APIs built by your organization expands, so does your need to feel confident in the accuracy of the responses.

### Types of API Testing

There are a few meanings of API testing. Each puts an emphasis on different outcomes or stages in the development process.

Some example types of API testing:

* API contract testing
* API load testing
* API security testing
* API reliability testing
* API unit testing
* API usability testing

This post primarily looks at contract testing, a foundational form of testing. Regardless of the type, API testing gives you the confidence to build software quickly, without sacrificing quality.

## Your OpenAPI Description is a Contract

Testing an API from scratch is hard, even with an accurate API reference. Use OpenAPI documents for your APIs to help you better test them. OpenAPI Specification (formerly known as Swagger Specification) is a machine-readable format that describes what’s possible with an API. Your testing process can use your OpenAPI documents to determine the endpoints to check, what HTTP methods to use, the type of data to send, and what data to expect in return.

API testing with OpenAPI is sometimes referred to as contract testing, because the OpenAPI document acts as an agreement between API provider and consumer. Even when an API is only for internal use, you’ll want to have an OpenAPI document for each API to serve as this contract. Then build your tests off this source of truth based on example API calls and assertions against expected results.

![API testing coverage](/images/testing_reporting.png)

As you create tests, you want to make every possible call with the API. Identify the potential requests you haven’t made and then add new tests to fill the gaps. [Stoplight API testing](https://stoplight.io/testing/) includes a coverage report to track progress. Each endpoint/method combination has an expected response for each potential HTTP status code.

With an OpenAPI document to build your tests on top of, you have much of the data you need to reach full coverage.

## Test Use Cases, Not Endpoints

While it’s useful to think of coverage in terms of endpoints, developers will only use the part of your API that makes sense for their use cases. In all stages of an API lifecycle, it’s important to think about how your API is actually used. In testing, you want to convert use cases to a series of API calls.

For example, if you have an e-commerce API, there may be a handful of API calls behind each order:

1. Create customer
2. Create order
3. Add customer to order
4. Add first item to order
5. Add second item to order
6. Change status of order to pending

Depending on your API design, that may be six POST/PUT calls to at least two endpoints. And you may want to add a GET at the end to be certain the order has all the data you expect.

In order to sequence these requests, you need a way to describe the order and use the data from one step in subsequent calls. In Stoplight, these are called [Scenarios](https://docs.stoplight.io/testing/leveraging-openapi/contract-testing) and are connected to your OpenAPI document. You can rely on your definition for automatic tests, and use variables (such as customer ID) from data that is returned.

## API Testing Tools

With the industry rallying behind the OpenAPI Initiative, tooling is following suit. You’ll find various helper applications throughout the API lifecycle. The [API Design Guide](https://stoplight.io/api-design-guide/basics/) describes the design-first approach to APIs, where OpenAPI is an early artifact around which a team can refine an API. That same document, as we’ve seen, becomes a contract that you can test against.

Community website [OpenAPI.Tools](https://openapi.tools/) provides a categorized list of open source and SaaS tools to use with OpenAPI documents. You’ll find various API testing examples and many other useful resources for building robust APIs.

Among the open source tools is [Prism](https://github.com/stoplightio/prism), which creates mock servers for API testing. Once your API is in production, Prism allows you to compare upstream API responses to what it expects to receive based on your OpenAPI description. You can run contract testing against a Live API, including during development, to make sure the results meet expectations.

Stoplight also runs Prism as-a-service within the [OpenAPI testing platform](https://stoplight.io/testing/). Upload an OpenAPI document to get started, or design your own based on an existing API. Then run tests to make sure your API operates as expected.
