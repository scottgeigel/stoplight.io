---
path: /blog/components-of-killer-api-docs-ebbf41c13450
tags:
  - blog-documentation
  - blog
relatedTags:
  - blog-documentation
publishedDate: 2017-05-11T22:57:36.686Z
author: Stoplight
title: Components of Killer API Docs
subtitle: 'Let''s face it — documentation is critical to API success '
image: /images/pexels-photo-272980.jpeg
color: green
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'Let''s face it — documentation is critical to API success '
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Components of Killer API Docs | Stoplight API Corner
  image: /images/pexels-photo-272980.jpeg
  twitter:
    description: 'Let''s face it — documentation is critical to API success '
    title: Components of Killer API Docs | Stoplight API Corner
    image: /images/pexels-photo-272980.jpeg
    username: '@stoplightio'
---
Let’s face it — Writing documentation sucks, but not writing documentation sucks a lot more.

Trying to use an API without clear and accurate documentation is like trying to read a book without any punctuation — It can be done, but it wastes a *ton* of time. As a developer, there’s nothing more frustrating than having to reverse engineer a third-party API because the vendor decided to skimp on the documentation.

Unfortunately, in today’s API climate, it’s not enough to simply have accurate documentation. It has to be clean, detailed, and unambiguous. The first impression a developer gets of an API is its documentation, so creating good API documentation is as much an exercise in usability and marketing as documentation.

## Is It Good?

“So,” you might be thinking, “what exactly *is* good documentation?”

At a high level, good documentation is organized, detailed, accurate, and unambiguous. While every API approaches documentation a little differently, the ones that put a high level of care into their documentation all tend to share these same concepts.

## Organized

Organizing API documentation can be almost as tough as designing the hierarchy of the API. While the documentation can generally follow the design of the API itself, it is important to identify and highlight important topics that do not fit within that paradigm.

![](https://cdn-images-1.medium.com/max/800/0*WCSYf3o6p-OM6hWj.)

*Strava API Documentation*

Take the[ Strava API documentation](https://strava.github.io/api/), for example. It is organized in a way that separates API endpoints (called “resources”) from other important API information like rate limiting and conventions. This ensures that developers can quickly and easily find information about both the API design, and information about the API as a whole.

## Accurate

Have you ever turned on an unfamiliar faucet, only to find out that the hot and cold taps have been mislabeled? Accuracy is the single-most important feature of any documentation. Worse than no documentation at all is inaccurate documentation, which can be dangerous and costly. The API producer-consumer relationship is one of trust, and when the accuracy of your documentation can’t be trusted, neither can your API.

## Detailed

In writing, it is often said that less is more. Why use a paragraph when a sentence will do? Unfortunately, this is *not* the case with API documentation. Nobody has ever complained that an API’s documentation is *too* detailed. As long as it is clear and properly organized, the more information you can provide about an endpoint, parameter, or expected response, the better.

![](https://cdn-images-1.medium.com/max/800/0*mjg-qm39Ru7svpjw.)

*Plaid API Documentation*

The[ Plaid API documentation](https://plaid.com/docs/api/) does an excellent job of providing detailed resource documentation. Every endpoint is clearly outlined and, more importantly, every possible parameter is defined in detail. Because of this level of detail, there is no question as to what each parameter does, whether it is optional or required, and what its expected format is.

## Unambiguous

Every long story needs a tl;dr. No matter how detailed your documentation is, the best way to learn how to use a system is through examples. Clear and concise examples are important because they show an API in action. They take abstract documentation and ground it in reality. It is important to note that while detailed documentation is important, examples are best when generalized. They should be a good representation of a typical request and response, with the detailed parameter and endpoint descriptions providing more depth and context.

![](https://cdn-images-1.medium.com/max/800/0*b8hE97kFCRZ-rb3S.)

*Stripe API Documentation*

When it comes to examples, the[ Stripe API documentation](https://stripe.com/docs/api) is second to none. Live documentation is tough to do right, and often requires end-user configuration, which can make the documentation more frustrating than it is worth. On the flip side, sample requests are useful, but can be hard to relate to. Stripe tackles this problem by providing example requests and responses with dummy data, unless you are an existing API consumer. In that case, Stripe returns real data directly from their API. This provides an element of context that can help you more accurately understand each documented endpoint.

## Next Steps

While all good documentation contains many of the elements shown above, when it comes down to it, the most important thing to remember is that documentation is a product in and of itself. Usability and design are just as important as information, as developers may find themselves living in your documentation for an extended period of time. Anything that improves that experience always reflects positively — both on you and your product.

*Have an API, need docs? [Stoplight.io](https://stoplight.io) offers a suite of tools that make it easy to create killer API docs.*
> **About the author.** Zachary Flower ([@zachflower](http://twitter.com/zachflower)) is a freelance web developer, writer, and polymath. He has an eye for simplicity and usability, and strives to build products with both the end user and business goals in mind. From building projects for the NSA to creating features for companies like Name.com and Buffer, Zach has always taken a strong stand against needlessly reinventing the wheel, often advocating for the use of well established third-party and open source services and solutions to improve the efficiency and reliability of a development project.
> Want to write for Stoplight? We’re hiring! Shoot an email to hi@stoplight.io and let’s chat.
