---
path: /blog/designing-apis-for-microservices
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-02-07T18:09:11.347Z
author: Lukas Rosenstock
title: Designing APIs for Microservices
subtitle: How to Gain the Benefits of Microservice Architecture in API Design
image: /images/ash-edmonds-636863-unsplash.jpg
color: green
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: How to Gain the Benefits of Microservice Architecture in API Design
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Designing APIs for Microservices | Stoplight API Corner
  image: /images/ash-edmonds-636863-unsplash.jpg
  twitter:
    description: How to Gain the Benefits of Microservice Architecture in API Design
    title: Designing APIs for Microservices | Stoplight API Corner
    image: /images/ash-edmonds-636863-unsplash.jpg
    username: '@stoplightio'
---
*Photo by [Ash Edmonds](https://unsplash.com/photos/XZ0xN0hmpi4) on [Unsplash](https://unsplash.com)*

So, you're at the start of a new project or in need of a significant refactoring to tackle technical debt, and you have decided to build a microservice architecture? Congratulations, you've just given yourself a massive API design task!

Microservices require APIs to interact with each other, as you might have learned from my previous article, "[Stop Calling Your APIs Microservices](https://stoplight.io/blog/stop-calling-your-apis-microservices-e165a80eba9d/)." Therefore, let's have a look at the challenges and unique requirements for microservice API design!

## A Hierarchy of APIs?!

Companies build APIs for various purposes and audiences. Based on the audience of an API you can distinguish public APIs, partner APIs, internal APIs, and microservice APIs. Public APIs, also called open APIs, are made available to everyone who agrees to their terms of service. Partner APIs are only offered to select partners and can be a great facilitator for business development. Internal APIs are created for developers within the same company to fulfill the promise of reuse between different teams, effectively the modern equivalent of an enterprise SOA (service-oriented architecture). Finally, microservice APIs are only for use inside a single application.

You could be tempted to look at these API types as a hierarchy based on the numbers of developers who are consuming an API. Bad design decisions bite you harder and are more difficult to rectify when numerous people use your API, so you're more likely to invest in API design and other aspects of developer experience when the audience is greater. Hence API design for microservices at the lower end of the hierarchy would be practically irrelevant or at least more straightforward compared to the creation of more widely-distributed APIs. Not so fast, hotshot! To leverage the benefits of a microservice architecture you need proper APIs. Otherwise, you could end up with a set of microservices that behave worse than the monolith you tried to avoid.

## Performance

It's important to remember why developers and companies build microservices. The idea is to split a monolithic application into loosely coupled components that you can develop, maintain, and deploy independently. Communication between elements in a monolithic architecture occurs rapidly as it happens within the same process. A request can easily instantiate dozens of classes and make hundreds of method calls and finish within milliseconds. In a microservice architecture, API calls to other services replace many of these internal method calls. A website request or remote API call can easily result in tens of API requests to other microservices. Therefore, if you want your application to perform comparable to an equivalent monolith, this is your level of competition!

There are binary protocols for fast inter-process and remote communication, for example, gRPC. That said, you can achieve excellent performance with JSON-over-HTTP API calls as well, which are often easier to build and consume, especially because you can reuse tools and previous experience from designing and utilizing external APIs. For example, if you use [Stoplight's visual API designer](https://stoplight.io/design), you can create OpenAPI descriptions of each microservice and share them with your team.

A loss of performance of web APIs over binary interfaces is made up by gains in interoperability, as long as you keep good API design and the specialties of microservice APIs in mind. There's no need to do premature optimization, but you can keep gRPC in mind as an upgrade path. That is also [what Microsoft's Azure team recommends](https://docs.microsoft.com/en-us/azure/architecture/microservices/api-design).

One major thing to keep in mind is to design non-chatty interfaces. A chatty interface is one that requires a lot of back-and-forths to achieve a particular task. You should pay attention to this especially when you're trying to migrate an existing monolith or are calling your APIs with SDKs where remote calls look almost like local calls. It's no big deal whether you call a class method a hundred times or a single method that does a hundred things, but when each method call needs to go over the wire as an HTTP request, the difference becomes significant.

Of course, as with any API design, you need to balance chattiness with huge payloads that include unnecessary information, because these also grow into a significant source of traffic between your microservices.

## Loose Coupling

It's important to remember that one of the explicit goals of implementing a microservice architecture is to have services with loose coupling to allow independent development and even reuse. Keep this in mind when designing your interfaces. As the [API Academy writes](https://www.apiacademy.co/lessons/2016/06/api-design-304-api-design-for-microservices), "API design [for microservices] should reflect best practices for coding microservices themselves."

Once you get started with microservices, however, you typically have a specific scenario and patterns of interaction that will dictate the use case and, consequently, design for your API. While it's impossible to anticipate all future use cases, you should at least be aware of this and try to design your API in a way that there's room to grow and evolve. At the very least, this could mean thinking about a versioning scheme, developing backward-compatible API endpoints, for example, by only adding but never removing or renaming fields, or applying [Postel's law (the robustness principle)](https://en.wikipedia.org/wiki/Robustness_principle).

The API Academy recommends message-oriented design approaches as well as Hypermedia for good microservice API design. Messages lead to flexible API design since you can place different actions and resources into a single message and need less specific endpoints.

With Hypermedia, an API response provides not just data but also lists different actions that the API client can take. This way, microservices can learn about each other's capabilities and, for example, enable additional functionality or gracefully degrade. As Hypermedia is a vast field itself, we won't dive deeper into it today.

## Domain Modeling

Unless the stated purpose of an API is to provide insights into the backend of a system, it should provide a layer of abstraction over the underlying means of storage. As I've mentioned in the previous piece of this series, if a microservice is stateful, it should come with its own persistence layer. A change in the database schema should not necessitate a change in the API, so even if one of your microservices is just a thin layer over a database, it should have a deliberately designed API that does transformations into a domain model.

Every microservice should only deal with the information it needs. For example, in a microservice architecture for an online shop, the payment services do not need to know product attributes except for the price. Unnecessary information leads to unnecessary dependencies. Remember loose coupling! Still, at some point, microservices may have to have shared datatypes, for example, a user model. You should not make these models dependent on a single microservice but, instead, create a standard, shared domain model. You can then reuse this model when designing each microservice and its API.

Using shared domain models for different microservices works exceptionally well with OpenAPI. You can create JSON schema files that describe these models and then reference the same models in all OpenAPI descriptions that define different interfaces by including them with $ref. Stoplight allows you to maintain different OpenAPI files within the same project.

## Summary

To recap, designing microservice APIs is as important as designing other APIs, especially if you want to gain the benefits of the microservice architecture. The important considerations are:

- Don't underestimate the role of API design
- Design non-chatty interfaces for improved performance
- Achieve loose coupling by building a versioned, evolvable design
- Model your domain and design your API after that model, not a specific implementation

If you keep all these things in mind, nothing will be standing in the way between you and successful completion of your microservice API design project!
