---
path: /blog/beyond-static-documentation
tags:
  - blog
  - blog-documentation
relatedTags:
  - blog-documentation
publishedDate: 2019-03-14T17:36:01.794Z
author: Adam DuVander
title: Take Your API Beyond Static Documentation
subtitle: Three ways to make your documentation come alive
image: /images/quino-al-121406-unsplash.jpg
color: purple-darker
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: Three ways to make your documentation come alive
  robots: 'index, follow'
  title: Take Your API Beyond Static Documentation | Stoplight API Corner
  image: /images/quino-al-121406-unsplash.jpg
  twitter:
    description: Three ways to make your documentation come alive
    title: Take Your API Beyond Static Documentation | Stoplight API Corner
    image: /images/quino-al-121406-unsplash.jpg
---
You’ve just published a new API and created documentation to help developers use it. Assuming those docs are complete, you’ve now achieved the minimum that developers expect. This static documentation is helpful, but there is more you can do to make it easier to use. You can help developers take the next step, right within your API documentation.

With interactive documentation and copy-paste code samples, you’ll help developers quickly get to success. But like all software, APIs need to be maintained. Keep your docs from getting stale by making them part of your deploy process. In this post, we’ll cover three ways to give life to your documentation, moving beyond your current static approach.

## Make API Calls On-the-fly With Interactive Docs

Your documentation, even in a static format, has a couple simple goals:

1. Help developers understand what’s possible with your API
2. Show developers how to move from documentation to code

Interactive documentation provides a clear path to achieve both of these objectives. As the name implies, developers don’t merely _read_ your documentation. They provide input to it and inspect a response. Right from your API reference, they can declare parameters and make live calls to your API.

![Send a test API request](/images/bigcommerce-test-request.png "Send a test API request")

With interactive documentation, you’re removing a major barrier to taking the next step with an API. With static documentation, a developer needs to bring API calls into a request utility or directly into code before they can fully understand what’s possible. Instead, they can see exactly what is possible without leaving their browser.

Sure, static content can list out inputs and even show an example response, but that will never give as full a picture as live results. For one thing, sample data is never as descriptive as real data. Further, many APIs will have vastly different results for each developer, especially when the API is exposing personalized data.

This rich view not only shows what’s possible, it also starts to show the developer what’s needed to bring the API into their application. Given real response data, they can start to see what’s needed to consume the API with their code. While you’re at it, your documentation may be able to write some of that code for them.

## Supply Copy-Paste Code Samples That Just Work

In our [API documentation guide](https://stoplight.io/api-documentation-guide/basics/) we highlight Stripe’s API reference. It provides an overview of what is possible, as well as a deep dive into request and response data. However, its most useful feature is hiding in plain sight.

![Stripe API reference](/images/stripe-docs.png "Stripe API reference")

Along with every example request is everything you need to perform the request live, including the Stripe token. By default, Stripe shows examples using the popular command line tool curl. Developers can highlight the example, tab over to their terminals, and paste to create a live call to Stripe. This works even if they aren’t logged into Stripe.

Depending on your situation, it might not be feasible or necessary to automatically include usable credentials within your documentation. However, you can take a page from Stripe and look for ways to make your documentation equally copy-paste-able.

![Automatic code generation](/images/npr-code-generation.png "Automatic code generation")

For example, include a form field to include an API key, or provide a token generation tool. Then populate the key or token into your example requests so they can be used quickly. No more `YOUR_KEY_HERE` stuff. Authentication is one of the biggest hurdles to using an API. You can maintain security while still making it easy for your approved developers to send their credentials.

Stoplight’s [automated API documentation](https://stoplight.io/documentation/) provides copy-paste examples for your API in 11 programming languages and three command tools, all generated from your OpenAPI spec.

## Ensure Docs Stay Updated With CI/CD Tools

Outdated or inaccurate documentation has to be high up on the list of developer pet peeves. When attempting to integrate with a poorly-documented API, a developer may first assume they’re doing something wrong. They edit their code, run it again, and still see errors. Finally, they dig into the response and realize the API works differently than the docs claim. It’s maddening.

Documentation rarely becomes outdated on purpose. Most inaccuracies in API documentation are accidents, yet they still send developers scrambling. In the name of developer efficiency and sanity, incorporate your APIs—and the documentation—into your CI/CD pipeline.

In order to keep your docs updated, [generate documentation from your OpenAPI spec](https://stoplight.io/documentation/generator/) whenever there are changes. Automation means you don’t need to worry about a mismatch between the API in production and the documentation developers use to access it. While the docs you output may still be static, the process of keeping them in sync takes you beyond typical documentation.

![Stoplight scenarios](/images/stoplight-scenario-dashboard.png "Stoplight scenarios")

You’ll also gain other benefits by bringing your API into your existing integration processes. [API testing](https://docs.stoplight.io/testing/introduction) can catch errors and other weaknesses that go beyond the accuracy of your documentation. You can ensure responses match what is expected, run scenarios that go beyond simple endpoint monitoring, and get a report of your API testing coverage.

Add this automation of your docs to interactive API calls and copy-paste samples, and you’ll transform your static documentation. They’ll be more accurate and useful not just today, but into the future.
