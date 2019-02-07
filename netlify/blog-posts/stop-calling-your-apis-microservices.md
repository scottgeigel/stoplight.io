---
path: /blog/stop-calling-your-apis-microservices-e165a80eba9d
tags:
  - blog-design
  - blog-industry
  - blog-general
  - blog
relatedTags:
  - blog-design
  - blog-industry
  - blog-general
publishedDate: 2018-12-04T20:27:05.450Z
author: Lukas Rosenstock
title: Stop Calling Your APIs Microservices
subtitle: 'The Relationship between APIs, Microservices, and Containers'
image: /images/dil-679756-unsplash.jpg
color: purple-darker
disqus:
  enabled: true
actionBar:
  enabled: false
meta:
  description: 'The Relationship between APIs, Microservices, and Containers'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Stop Calling Your APIs Microservices | Stoplight API Corner
  image: /images/dil-679756-unsplash.jpg
  twitter:
    description: 'The Relationship between APIs, Microservices, and Containers'
    title: Stop Calling Your APIs Microservices | Stoplight API Corner
    image: /images/dil-679756-unsplash.jpg
    username: '@stoplightio'
---
_Photo by [Dil](https://unsplash.com/photos/8OECtq8rrNg) on [Unsplash](https://unsplash.com/)_

Have you ever heard the adage that “there are only two hard problems in computer science, cache invalidation, naming things, and off-by-one errors?” Allegedly, [Phil Karlton said this](https://quotesondesign.com/phil-karlton/) [sometime around 1996/97](https://twitter.com/timbray/status/817025379109990402). While [many comedic spin-offs for this famous phrase](https://www.martinfowler.com/bliki/TwoHardThings.html) mention additional problems, a recent observation in the world of APIs seems to prove the bit about naming things right: There’s some confusion about the terms “API” and “microservice,” and some people seem to use them interchangeably.

The whole world of computing is continuously in flux. Developers use various concepts and technologies and connect them in different ways. Therefore, it is not uncommon that we use inconsistent terminology, having multiple words for what is roughly the same concept or, vice versa, saying the same word but meaning different things.

Regarding APIs and microservices: Yes, they are related concepts, and there’s an interplay between them, but they are not the same thing. So, let’s get our terms straight!

## What’s an API?

The abbreviation API stands for Application Programming Interface. Wikipedia states that [“in general terms, it is a set of clearly defined methods of communication among various components.”](https://en.wikipedia.org/wiki/Application_programming_interface) It could be the interface of a software framework or library or a low-level interface exposed by the operating system for the developers of native system software (like POSIX).

> That is one of the things that make APIs so exciting because developers of all kinds can tap into infrastructure built and exposed by others to enhance their applications with additional functionality.

When people talk about APIs these days, they are more often than not describing remote interfaces exposed through HTTP endpoints, and these APIs are what [Stoplight’s API Corner](http://blog.stoplight.io) is all about. To differentiate these remote APIs from the local system APIs mentioned above, I like using the term “Web API” now and then. (Although some people use that term for local APIs in the browser — confusing, right?)

We further categorize remote APIs, or Web APIs, by either their underlying design paradigms, such as query, RPC or RESTful, or protocols, like SOAP, gRPC or GraphQL. Apart from that, we also differentiate APIs by their target audience and call them public, partner, or private/internal APIs.

## Two Sides of an API

Strictly speaking, the term API only describes the interface, the shared language that client and server, API consumer and API provider, use to exchange information. For the API consumer, the API is nothing more than a description of the interface and an endpoint URL or set of URLs. URLs are one of the basic but somewhat magical building blocks of the web that allow a client to access information or services without knowing the nature or location of the server. Clients may remain ignorant of whether the URL leads to a Raspberry Pi hidden in someone’s basement, or a worldwide delivery network of massive data centers on every continent, as long as they receive a response. That is one of the things that make APIs so exciting because developers of all kinds can tap into infrastructure built and exposed by others to enhance their applications with additional functionality.

API providers, however, have to not only design, implement, and document the API, but also think about the infrastructure behind it. In the era of cloud computing though, that rarely means buying hardware and renting data center space anymore. Instead, API providers can choose from various as-a-service offerings, from managed clusters of virtual machines or containers, to fully serverless code hosting environments. Regardless of the infrastructure choice, at some point, the API needs to be deployed.

Do you see what I did there? I talked about deploying _the_ API when what I meant to say was to deploy whatever code and infrastructure are required to _expose_ the API. From a provider’s perspective, the API is not some magical door, but a tangible asset that needs to live somewhere. And, increasingly often, as companies move to a microservice architecture, that asset is … a microservice, or a set of microservices.

## What’s a Microservice?

A microservice is an independent, self-contained component of a broader system or application. Every microservice should have a well-defined scope and responsibility and ideally do only one thing. It should be either stateless or stateful, and if it’s stateful, it should come with a persistence layer (i.e., database) of its own that it doesn’t share with other services. Software development teams use microservices to develop independent, potentially reusable components, in a more distributed fashion. They can use a custom framework, set of dependencies, or even wholly different programming languages for each of them. Microservices can also help with scalability, as they are distributed by nature, and each of them can grow or be replicated independently.

## Containers and Microservices

Containers are a means to establish isolated contexts within an operating system. In practice, that means that each of them has a separate virtual file system containing a set of installed software and associated configuration. As they are isolated, no container can directly access or affect other containers or the underlying host system.

> The ability to create containers had already been part of the Linux operating system for quite a while, but it wasn’t until the launch of [Docker](https://www.docker.com/) in 2013 that containers became a commonly used technology.

As we’re talking about definitions, it’s worth noting that microservices and containers are not the same either, but the two concepts often go hand in hand, just like APIs and microservices. Without containers, either all servers would have to be configured to run multiple microservices that might then negatively interfere with each other, or, each microservice would require a separate server or virtual machine of its own, which causes unnecessary overhead. Therefore, each microservice is typically implemented as a set of containers managed by a container cluster software like [Kubernetes](https://kubernetes.io/). It’s safe to say that the rise of both containers and microservices have influenced and benefitted from each other.

## Communication between Microservices

An application or API built on a microservices architecture does not only expose itself in its entirety but also requires a connection between its internal components, the microservices, as well. As every microservice could have an implementation in a different programming language, we need to rely on standard protocols, like HTTP, to facilitate this connection. And that is where we circle back to APIs.

In its most basic form, every microservice exposes an API so that other services can make requests and retrieve data. There are different approaches, too, like messaging queues, but let’s stick with the basics for now. The microservice API is a private API that applies only to a single application. It is commonly not available on a public URL but, instead, uses private IPs or hostnames that exist only within the closed private network of the organization or even just a single cluster of servers. Still, these APIs can follow any design paradigm or protocol that partner or public APIs have. And, although they have a limited number of consumers, they should follow the basic rules of developer experience too. That means that they should have a relevant, consistent, and evolvable API design and some documentation to inform teams building other microservices (or even your future self) on how to use the service. Therefore, you can and should use similar tools, for example, [Stoplight’s visual API designer](/design), to create your microservice APIs.

Of course, there are different aspects to emphasize when designing microservice APIs compared to more outward-facing APIs. We’ll look at API design for microservices in an upcoming post, so stay tuned.

![Diagram of microservices with APIs that are both talking internally and externally to other services](/images/1_eskatdf7n7vtrp90dufiug.png)

Microservices and APIs are not the same and, while we’re at it, neither are microservices and containers. However, the two concepts work together in two different ways: First, microservices can be a means to deploy the backend for an internal, partner, or public API. Second, microservices typically rely on APIs as a language-independent means to communicate with each other in an internal network. Development teams can use similar design approaches and tools for creating both outward-facing and microservice APIs. We will cover distinct best practices for different types of APIs in an upcoming post.
