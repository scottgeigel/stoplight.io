---
path: /blog/missing-api-documentation
tags:
  - blog
  - blog-documentation
relatedTags:
  - blog-documenation
publishedDate: 2019-02-19T08:00:00.000Z
author: Adam DuVander
title: What’s Missing From Your API Documentation
subtitle: 'How to build out high-quality API documentation '
image: /images/missing-docs.jpeg
color: indigo
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'How to build out high-quality API documentation '
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: What’s Missing From Your API Documentation | Stoplight API Corner
  image: /images/missing-docs.jpeg
  twitter:
    description: 'How to build out high-quality API documentation '
    title: What’s Missing From Your API Documentation | Stoplight API Corner
    image: /images/missing-docs.jpeg
---
It's hard to create comprehensive API documentation that speaks to developers in every stage of the integration process. Companies will be rewarded when they put in the additional effort to make sure their developers have a great experience. It's important to give attention to your documentation, even if all your developers are internal.  When you fill the gaps in your docs, you help developers succeed and do so efficiently.

It should go without saying that your documentation must be complete, accurate, and up-to-date. Even if that's the case, consider the other needs developers might have, which could enhance their experience. Put yourself into a fresh developer mindset and see if you can find the areas of your documentation that may be missing or could be improved.

## A Truly Quick Start

Let's assume you've done a great job of designing your API. You've taken into consideration the use cases the API needs to support. You've named your endpoints in a friendly and consistent way. The authentication method is industry standard and clearly explained. That should be enough to get a developer started, right?

Even the best designed APIs with the most robust references should provide a Getting Started Guide to point developers in the right direction. Walk them through the most common task using your API. Identify the steps to authenticate, even if you think it's straightforward. Get them to at least one successful API call.

Once you've written this guide, make it highly visible within your documentation. Send it to new developers in an email. Track how many complete the guide and offer help. Find out where readers get tripped up and try to fix it.

The Quick Start's goal is in the name. Remove any possible obstruction between new developers and their first successful experience.

## Situational Guides to Solve Problems

Your Quick Start Guide addresses a single use case. Once a developer makes some API calls, they may go solve their own problem using your reference. Others may come looking for your solution. Great documentation creates tutorials that guide developers through common use cases.

You know the handful of problems your API solves. You designed your API around these situations, after all. A use case typically involves calling multiple endpoints. You'll need to parse API responses and react accordingly. These guides should walk through everything required to solve the problem.

![GMail API use cases](/images/gmail-use-cases.png)

For example, Gmail has an entire section with guides. In addition to quick starts for popular languages, the documentation includes use cases by category. Developers can solve their problems around sending mail, managing mailboxes, and accessing settings.

Your guides don't need to solely focus on your API. You may want to integrate with a popular framework or a partner's API. These guides are looking to solve real-world problems and it's natural for them to go beyond the boundaries of your API.

## Complete Sample Apps Devs Can Run

For your most complex guides, you can get readers up and running faster with complete examples. As with a Quick Start, the goal is to lower the barrier to someone experiencing your API. Package all the code up in a public repository, include only limited configuration, and point to a cloud host for easy staging.

Your sample apps should be based upon common use cases, just like guides. When you share a complete application, a developer can see all the code decisions you made in context. Then they'll either use your app as a starting place for something new or pull out the important bits into their existing application. Either way, the complete object helps them understand how your API works with a real example.

![SendGrid open source libraries](/images/sendgrid-tutorials.png)

Email delivery API SendGrid provides sample apps for seven programming languages. Each encapsulates the service's functionality in a single working demo that developers can pull from as needed.

## An API Reference That’s Fun to Use

The first documentation an API gets is usually a reference. It's foundational to the rest of your documentation. It provides the black-and-white facts of what's possible with your API. Unfortunately, API references are usually boring.

There's nothing wrong with simply communicating how something works. However, providing developers with an interactive reference can help them better understand how your API works.

![BigCommerce interactive documentation](/images/big-commerce-interactive.png)

Stoplight-powered [BigCommerce](https://developer.bigcommerce.com/api-reference/), for example, includes sample calls in its reference. Paste your variables into a form and see the results without leaving the documentation. Developers can get their hands dirty with their own request and response details, not just pre-selected static content.

Historically, many API references were auto-generated, which is probably why so many are boring. You can have an API reference that's fun to use and still have it be automatically updated when you [build documentation from an OpenAPI specification](https://stoplight.io/documentation).

With a beautiful, modern, interactive API reference, you'll be able to focus on other priorities. Perhaps you'll ensure developers get started quickly, have guides based on use cases, or create complete sample apps. When you improve what's missing from your documentation, you give your developers a better experience and lead them to faster success with your API.
