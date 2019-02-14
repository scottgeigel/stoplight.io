---
path: /blog/using-service-virtualization-api-mocking-to-unblock-teams-2914843cf56e
tags:
  - blog-mocking
  - blog
relatedTags:
  - blog-mocking
publishedDate: 2017-06-20T22:37:44.512Z
author: Stoplight
title: Using API Mocking to Unblock Teams
subtitle: ' A Primer on How Service Virtualization Can Help You'
image: /images/service-virtualization.jpeg
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: ' A Primer on How Service Virtualization Can Help You'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Using API Mocking to Unblock Teams | Stoplight API Corner
  image: /images/service-virtualization.jpeg
  twitter:
    description: ' A Primer on How Service Virtualization Can Help You'
    title: Using API Mocking to Unblock Teams | Stoplight API Corner
    image: /images/service-virtualization.jpeg
    username: '@stoplightio'
---
There’s no denying that a well-written test suite breeds a better product. Not only does it provide a high level of confidence in your code, but it also covers your butt whenever you make any changes.

And an essential part of a well-written test suite is mocking. Mocking helps keep individual tests focused and lightweight, which ensures a fast, clean test suite, and provides a mechanism for testing functionality that requires objects that aren’t quite finished yet.

Here are a few ways mocking can help you overcome the most common problems you face when delivering software.

### Service Virtualization

Although mocking is often used in the context of unit testing, a far more powerful use case for it is service virtualization. In a nutshell, a virtualized service is a mock API. Following the definition above, a mock API simulates the behavior of a real API.

While mock APIs can be used for unit testing, a more common use case is the parallelization of work. By standing up a mock API server, teams that are building features that are dependent on that API can begin working on them without waiting for the API to actually exist. This ensures that, API or no, each team can work as productively as possible.

Beyond simply allowing teams to work better in tandem, how does service virtualization help teams build a *better* product together?

### Emphasize Form and Function

In my experience, teams that communicate well perform well. Standing up a mock API server is an important step towards unblocking conflicting team priorities, but that is only half of the battle. The other half is the actual design of the mock API.

In the early stages of product design, when the design and usability of a product are being worked on, and the architecture is being decided, outlining the form and function of the API is a crucial step. Much like how writing API documentation *before* developing an API helps identify usability and design problems, designing a mock API with all stakeholders present can provide the same benefit.

Once the design of the API has been agreed upon, any teams dependent on it can begin working in tandem on their own piece of the product puzzle. This mock API not only works to unblock the various stakeholders — it also acts as a blueprint for the API development team to follow. Defining the expected endpoints, requests, and responses early on will drastically speed up API development. When the decisions are already made, no time is wasted.

### **Research and Development**

The beauty of mock API servers is that spinning one up can be a relatively trivial task through the use of third-party platforms like Stoplight.io. These platforms make testing out new API ideas fast and easy, while also providing the ability to use proxies to turn these ideas into something more substantial if they take hold. For example, these servers can be used to further the goals of an organization with minimal engineering intervention by establishing a feedback loop on a beta version of an existing API.

By spinning up a mock server using something like Stoplight.io, an organization can work directly with early adopters to design an API that best fits their needs. High-value customers receive the opportunity to update their integrations to the next version of an API while it is still being designed, allowing you to write and rewrite the API specifications without having to change any code. This high-touch feedback loop can go a long way towards building a healthy relationship with valuable customers, while also keeping the workload of the engineering team at a manageable level.

### Taking It Further

One way to take a mock API further than simply filling in some blanks is to use it to validate the completeness of the official API development. By comparing the API with the mock API, we can determine which endpoints are done, which ones aren’t, and which ones do not match the design spec. This is a great way to close the loop on product development, as once the API and mock API are in parity, the mock API can then be integrated directly into the test suite to ensure that the API *stays* accurate.

In the end, service virtualization should make your organization more efficient, not less, so it is important to focus on the things that matter. API design, communication, documentation, consistency, and test integrations are all huge gains that can be the difference between a two-month project and a 10-month project.

*Have an API, want to add mocking into the mix? [Stoplight Scenarios](/testing) makes it easy to mock both pre-existing APIs, and new APIs.*

***About the author:** Zachary Flower ([@zachflower](http://twitter.com/zachflower)) is a freelance web developer, writer, and polymath. He has an eye for simplicity and usability, and strives to build products with both the end user and business goals in mind.*

*Want to write for Stoplight? We’re hiring! Shoot an email to hi@stoplight.io and let’s chat.*
