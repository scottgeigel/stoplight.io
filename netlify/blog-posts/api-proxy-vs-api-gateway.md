---
path: /blog/api-proxy-vs-api-gateway-c008c942a02d
tags:
  - blog-industry
  - blog-general
  - blog
relatedTags:
  - blog-industry
  - blog-general
  - blog
publishedDate: 2018-11-27T06:00:00.000Z
author: Robert Wallach
title: API Proxy vs API Gateway
subtitle: 'A breakdown of functions, ecosystem, and use-cases'
image: /images/api-proxy-header.jpeg
color: indigo
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: API Proxy vs API Gateway | Stoplight
  twitter:
    title: API Proxy vs API Gateway | Stoplight
    image: /images/mark_light_bg.png
    username: '@stoplightio'
---

# API Proxy vs API Gateway

On this edition of *I’ll REST when I’m Alive*, I will be exploring the differences and similarities between API Proxies and API Gateways. Expanding on my previous post, *[API Microgateways](/blog/api-microgateways-55d656950d6c)*, I will also be discussing the advantages and disadvantages of both and the individual use cases.

## API Proxies

A proxy, in its most basic form, is an intermediary acting on behalf of something else. Similar to the legal concept of a proxy, an API Proxy acts on behalf of the API instead of an individual. In more technical terms, an API Proxy decouples the frontend of the API from the backend services and filters all incoming and outgoing traffic. The decoupling of front-end and back-end services allows for changes to be made to backend services without disrupting the production API. The filtering of incoming and outgoing traffic allows for monitoring, basic forms of security, request routing, and protocol translation.
> It is important to note that API Proxies require an existing API while some API Gateways can assist in building a new API.

### Notable API Proxies

* [Apigee API Proxy](https://docs.apigee.com/api-platform/get-started/get-started)

* [Mashery Proxy](https://www.tibco.com/products/api-management)

* [Nginx](https://www.nginx.com/) (Open Source)

* [Traekif](https://traefik.io/) (Open Source)

## API Gateway

API Gateways function in a similar way but have a much more robust set of features. Gateways perform the same functions as API Proxies, decoupling the frontend and backend of the API, monitoring, basic security, request routing, and protocol translation, but can also provide:

* Advanced Security

* Composition

* Custom API

* Load Balancing

* Caching

* Request Shaping and Management

* Static Response Handling

* Throttling

If you have different microservices with a set of shared common features, such as authentication, API Gateways can centralize that service so that it doesn’t have to validate each individual microservice.

**Notable API Gateways**

* [Axway API Gateway](https://www.axway.com/en/products/api-management/gateway)

* [Kong API Gateway](https://konghq.com/solutions/gateway/)

* [Amazon API Gateway](https://aws.amazon.com/api-gateway/)

* [IBM API Connec](https://www.ibm.com/cloud/api-connect)t

* [Microsoft Azure API Mangement](https://azure.microsoft.com/en-us/services/api-management/)

* [Apigee](https://apigee.com/api-management/)

* [Express Gateway](https://www.express-gateway.io/) (Open Source)

* [Zuul Gateway](https://github.com/Netflix/zuul) (Open Source)

* [Tyk Gateway](https://github.com/TykTechnologies/tyk) (Open Source)

## Why use an API Proxy over an API Gateway?

The advantage of an API Proxy is that it is essentially a lightweight, simple API Gateway. If you already have an existing API and just want to add some basic security and monitoring capabilities than an API Proxy would probably be the way to go. Many times, API Gateways are a part of larger API Management platforms since they play a part in the larger API lifecycle. This can introduce more complexity and can make them more difficult to manage and more expensive. Gateways must be maintained like any other bit of code and if you want to take advantage of the all the additional features then the level of complexity will increase. Also, take into consideration the price difference. There are many popular API Proxies that are open source while most API Gateways are proprietary.
> Some API Gateways support importing and exporting APIs with the [OpenAPI Specification](https://stoplight.io/design/free/).

![API Proxy versus API Gateway](https://cdn-images-1.medium.com/max/2000/1*Cpy-nYVSWKxCQO0J3QrClg.png)*API Proxy versus API Gateway*

## API Proxy versus API Gateway

The use case for an API Proxy versus an API Gateway depends on what kinds of capabilities you require and where you are in the API Lifecycle. If you already have an existing API that doesn’t require the advanced capabilities that an API Gateway can offer than an API Proxy would be a recommended route. You can save valuable engineering bandwidth because proxies are much easier to maintain and you won’t suffer any negligible performance loss. If you need specific capabilities that a proxy doesn’t offer you could also develop an in-house layer to accommodate your use case. If you are earlier in the API lifecycle or need the extra features that an API Gateway can provide, then investing in one would pay dividends.

*Editor’s note: We started a newsletter at [Stoplight](https://stoplight.io/) with some of the month’s blog posts, our favorite posts from the API community, and more! Sign up below*👇

![](https://cdn-images-1.medium.com/max/NaN/1*t-0nFtOwlgG0xGyouTJapQ.png)
