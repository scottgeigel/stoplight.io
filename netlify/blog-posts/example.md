---
path: /blog/http-testing
tags:
  - blog
  - blog-testing
relatedTags:
  - blog
publishedDate: 2019-02-04T18:21:16.261Z
author: Ross McDonald
title: The Fundamentals of HTTP API Unit Testing
subtitle: A closer look at unit testing within the context of HTTP APIs
image: /images/aaa_blog_example.png
color: purple-darker
disqus:
  enabled: true
actionBar:
  enabled: false
meta:
  description: The Fundamentals of HTTP API Unit Testing
  title: Blog | Stoplight
  twitter:
    description: The Fundamentals of HTTP API Unit Testing
    title: Blog | Stoplight
    username: '@stoplightio'
---

_This is the first part of a multipart series diving into the technical principles around HTTP API testing._

In the fast-paced world of API’s, it is easy to forget the importance of testing. Testing not only ensures your application or service is performing as expected, but it also helps safeguard against current and future changes in either specification or implementation. After all, how can you know how well a system is performing if you are not testing it? This article will cover the high level in’s-and-out’s of unit testing as it applies to API’s, and where unit testing falls into the greater ‘testing’ picture.

### What’s a “unit?”

Most software developers are likely already familiar with ‘unit testing’, but, for anyone unfamiliar with the term, the principle behind unit testing is essentially to break a larger set of logic into individual ‘units’ that can then be tested in isolation.

```
…when you can measure what you are speaking about, and express it in numbers, you know something about it…

- William Thomson
```

In the case of programming, the ‘larger set of logic’ is typically a program, while the ‘units’ are the individual components of said program. While the exact definition of a ‘unit’ is up for debate (and probably varies by use case), the general consensus is that a ‘unit’ is a logical subset of functionality that can be tested on its own. In most cases, this will be a program function, a class method, or any other building block of a larger set of functionality.

In the context of HTTP API testing, a unit is typically a single API request, which, depending on the API, can be a combination of the following:

- An HTTP method (i.e. `GET`, `PUT`, `POST`)
- An API endpoint (i.e. `/v1/posts`)
- Request parameters
- Request headers
- Request body

### Example

As an example, let’s say we are designing an HTTP API for an e-commerce company that includes a single endpoint: `/orders`. This endpoint only accepts two HTTP methods: `GET` and `POST`. This means that a consumer (or user) of the API can only create and retrieve orders, and nothing more.

So how can we test this API using the unit testing paradigm? Let’s start with enumerating the different operations we have within our API. Since this is our first example, we’ll start with a simple API that contains only two endpoints:

- `GET /orders`
- `POST /orders`

Pretty easy, right? Since each HTTP method comes with a different set of logic, let’s dive a little deeper into each.

We didn’t mention this before, but the GET /orders endpoint takes a limit and offset query parameter. This expands our unit overview for this API to:

- `GET /orders`
- `GET /orders?limit`
- `GET /orders?offset`
- `GET /orders?limit+offset`
- `POST /orders`

While it is important to test the logic behind each query parameter individually, it is also important to test their absence as well as their usage together to verify we get the desired behavior.

As you can see above, as an API’s functionality expands, the underlying scope of our unit testing grows as well (sometimes drastically). What if we added another query parameter to the `GET /orders` endpoint? What if we wanted to test every response code? What if we added logic based on the presence (or the absence) of a header? What about adding support for different formats (`JSON`, `YAML`, `XML`, etc)? You get the idea.

## 👍

Now that we have a better understanding of what unit testing is, let’s go over some of the high level benefits of unit testing APIs:

- Unit tests are simple test cases that cover a narrow block of logic. They can serve as a building block for ensuring changes to your API have not broken fundamental logic elsewhere.
- Unit tests are quick to write, since they are usually very narrowly-scoped. They are also quick to run, and can be run against a subset of an API for ad-hoc verification of behavior.
- Unit tests force developers to break up larger sets of logic into composable ‘units’ suitable for testing. This can be helpful in finding ‘hot-spots’ in your API, or where your API design starts to break down.

## 👎

That’s all well and good, but what about the downsides to unit testing APIs? Here they are:

- As we alluded to above in the example, rigorous unit testing has a combinatorial effect, where testing every bit of functionality will require writing a large amount of tests. This may not be an issue depending on the size of your API (or engineering team), however, for many endpoints, with many branches in functionality, this can quickly become a scalability issue.
- Similarly, unit tests can be difficult to maintain over time as API behavior changes. If you have hundreds of tests for a specific endpoint, and the endpoint is refactored into two endpoints, you now have to comb through every test (or write new ones) to match the new behavior.
- While it’s great that unit tests are able to verify the fundamental building blocks of your API, what happens if two ‘units’ that are correct when tested independently, introduce errant behavior when combined? If you are only relying on unit tests to verify your API, these kinds of subtle issues may allow bugs and other gaps in logic to slip through your test cases.

### Larger Testing Story

The next question is when do you use unit tests, and, maybe more importantly, how do they fit into the larger testing story? Should they only be used for testing in development, or do they provide benefits in other environments? Can they be used in tandem with a mock service?

Since unit tests are supposed to be scoped with a narrow focus, they are much more commonly used within a development, CI/CD pipeline, or pre-production context. This is primarily due to unit tests being the foundation of your testing story. They are not typically used for end-to-end testing, and should (hopefully) not be the only types of tests that you have in place. Unit testing should be the bedrock that is used to ensure that the fundamental logic within your application or service is behaving appropriately, not that the service as a whole is completely bug free and ready for use.

To that end, it is not unheard of to see unit tests rely on mock services (fake services that look like real ones) when the application being tested relies on external services or functionality. That being said, it is important to remember that a mock service is, as the name implies, only mocking requests. Mocking can give false impressions, which, in reality, are not always true. For example, can your service handle malformed data coming from an upstream service? What if the upstream service is down or your authentication credentials have expired? While mock services have their uses in unit testing, they are typically more valuable in tests that have a wider range of scope (for example, integration tests), but more on that later.

### To unit test or not to unit test?

So, should you do unit testing? That is the question, isn’t it? The answer is unequivocally yes. Unit tests are but one of many testing options available for verifying API’s, and they should be used wherever it is appropriate. But should you obsess over making sure that every unit (however you want to define the term) is covered by a test? Eh, probably not. By writing a large number of unit tests, you are ultimately creating technical debt that will have to be reconciled when refactoring or updating your API behavior. Ultimately it is up to you to find the right balance of where unit testing fits based on your use case and needs.

With the next part in this series we will be discussing how Integration Tests fit into your API testing life-cycle.
