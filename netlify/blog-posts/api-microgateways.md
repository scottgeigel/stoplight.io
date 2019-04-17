---
path: /blog/api-microgateways-55d656950d6c
tags:
  - blog-industry
  - blog-general
  - blog
relatedTags:
  - blog-industry
  - blog-general
publishedDate: 2018-07-26T19:03:36.290Z
author: Robert Wallach
title: API Microgateways
subtitle: From Security to Orchestration
image: /images/api-microgateways.jpeg
color: indigo
disqus:
  enabled: true
actionBar:
  enabled: false
meta:
  description: From Security to Orchestration
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: API Microgateways | Stoplight API Corner
  image: /images/api-microgateways.jpeg
  twitter:
    description: From Security to Orchestration
    title: API Microgateways | Stoplight API Corner
    image: /images/api-microgateways.jpeg
    username: '@stoplightio'
---
*Edinburgh Castle, source: CC0 Public Domain*

Welcome back for another edition of *I’ll REST when I’m Alive*. Today we will be discussing the kerfuffle around API Microgateways. Are they tiny gates that guard the microservice kingdom? Is there a drawbridge over crocodile-infested waters? And most importantly, do you need one?

## **A Brief History of the API Gateway**

### **Phase I: Security**

API Gateway history is tied to the emergence of APIs. When engineers started discovering the potential for exposing their APIs, they also discovered the huge security risk of doing so. Around seven years ago, API Gateway companies started appearing to fill the security void. These API Gateways were built primarily for security purposes. They were created as a proxy layer between the web and the backend supporting the API. The Gateways had a UI designed for security teams to define policies about rate limiting, [routing](https://docs.stoplight.io/documentation/getting-started/routing), etc. to ensure that APIs would continue to function even if the API was accidentally or intentionally attacked, or the backend mainframes and databases were overloaded.

### **Phase II: Monetization**

Once API Gateways had established themselves as a viable security solution, they began to mature, and Gateway providers started to monetize their features. Now, in addition to being primarily a security solution, product managers could monetize “products” out of the API Gateways. A major caveat of these original API Gateways was that they could only be deployed after development was complete on the services and APIs. To deploy the Gateway, development teams exported a WSDL document describing the API (which was almost always generated from the code), which was then imported into the Gateway.

### Fun Fact

Many of the original startups that created API Gateways seven years ago have since been consolidated by larger organizations.

![](https://cdn-images-1.medium.com/max/800/1*rC-vjJJ_l0P5uZxf9RlLnQ.png)

### **Gateways Phase III — Microgateways**

With the emergence of microservices, IoT, Mobile, containers, etc., Gateways shifted away from managing monolithic APIs and started supporting much smaller services, and thus the Microgateway was born. One of the major by-products of this shift is that the market is now developer focused instead of security and product manager focused. Microgateways are critical to developing microservices making the end user often a developer. The primary use case, nonetheless, remains [security](https://docs.stoplight.io/modeling/modeling-with-openapi/security-schemes) and management of APIs.

## **Microservice Architecture ♥️ API Microgateways**

API Gateways are not new, but with the emergence of microservice architecture, Microgateways have become a key component of API management. Microservice architecture consists of multiple services that work independently of one another, as opposed to monolithic architecture where all the services are tightly coupled and unified. Each microservice is designed to meet a simple objective. For example, one microservice may process billing, while another sends invoices. When a consumer utilizes a microservice API, most actions will require multiple microservices to accomplish it. Take Netflix for example. From an average users perspective, it is an easy to use, simple, video streaming platform. Nothing complicated about that right? Well, under the hood there are over 500 microservices that provide all the resources necessary for you to watch *Gilmore Girls*. To accomplish the staggering feat of calling on 500+ microservices every time someone presses the play button, Netflix developed an API Microgateway.

### **What is an API Microgateway?**

An API Microgateway is a microservice wrapper that functions similarly to a facade design pattern as espoused by The Gang of Four. In simpler terms, an API Microgateway is an additional layer that allows access to a complex subsystem (i.e. microservices) by providing a simplified interface.

### **What does an API Microgateway do?**

API Gateways can perform many different functions and are highly customizable. There are, however, three fairly universal functions, and some popular custom functions.

### **Universal Functions**

* **Request Routing**: Due to the nature of Microservice Architecture, one request may require responses from multiple microservices as shown in the Netflix example. An API Gateway’s most basic function is to route the request to the appropriate microservices.

* **Composition**: If the request requires multiple responses from multiple microservices, the API Gateway aggregates and composes the response.

* **Protocol Translation**: Translates between different web and non-web protocols.

### **Popular Custom Functions**

* **[Security](https://docs.stoplight.io/modeling/modeling-with-openapi/security-schemes)**: Handles authentication and authorization for your API. Can also generate tokens and keys and forward requests to Authorization servers.

* **Custom API**: You can tailor how your API is consumed depending on circumstance or how it was accessed.

* **Monitoring**: Collect important metrics on API usage. Particularly useful for monitoring API health.

* **Load Balancing**: Minimize response times, maximize throughput, optimize resource usage, and avoid overload. Critical for microservice architecture.

* **Caching**: Increase API response time and mask failures in the backend services.

* **Throttling**: Controls how many requests can be sent to your API. Useful for avoiding request limits and controlling request limits overall to improve performance.

* **Request Shaping and Management**

* **Static Response Handling**

### **Pros and Cons of an API Microgateway**

API Microgateways facilitate interactions between microservices, but beyond that, they also provide a single point of entry to your API, they reduce the number of round trips between client and application, and they help simplify the client-side code.

The drawbacks of instituting an API Gateway include the potential for development bottlenecks and they must be managed, developed, and deployed like any other service.

![Castle Rushen, Copyright [Shazz](http://www.geograph.org.uk/profile/28338) and licensed for [reuse](http://www.geograph.org.uk/reuse.php?id=2109775) under this [Creative Commons Licence](http://creativecommons.org/licenses/by-sa/2.0/).](https://cdn-images-1.medium.com/max/800/1*Qwdc-qbPKV13DAUwwXkl8w.jpeg)*Castle Rushen, Copyright [Shazz](http://www.geograph.org.uk/profile/28338) and licensed for [reuse](http://www.geograph.org.uk/reuse.php?id=2109775) under this [Creative Commons Licence](http://creativecommons.org/licenses/by-sa/2.0/).*

### Lower the Drawbridge

So why Gateway? Because it allows for a single entry point into your system. Like a Medieval castle, everything comes and goes via the gate. And like a castle gate, you can hire some security to protect your keep, an ambassador and translator to great and direct visitors, and a Magistrate to set rules and regulations for who can come and go. Sound the trumpets!
