---
path: /blog/api-documentation-build-buy
tags:
  - blog-documentation
  - blog
relatedTags:
  - blog-documentation
publishedDate: 2019-04-10T16:59:04.762Z
author: Adam DuVander
title: 'API Documentation: Should You Build or Buy?'
subtitle: What it Takes to Build and Maintain Great Docs
image: /images/barn-construction.jpg
color: black
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: What it Takes to Build and Maintain Great Docs
  robots: 'index, follow'
  title: 'API Documentation: Should You Build or Buy? | Stoplight API Corner'
  image: /images/barn-construction.jpg
  twitter:
    description: What it Takes to Build and Maintain Great Docs
    title: 'API Documentation: Should You Build or Buy? | Stoplight API Corner'
    image: /images/barn-construction.jpg
---
Every API needs documentation. Whether it’s made public for any developer, or meant to be consumed by a single engineering team; it can be tough to create documentation in the first place, and even tougher to keep it updated. On top of that, you need to decide where the docs live.

You can build documentation yourself, piece it together with existing tools, or buy time-saving solutions. As you investigate your options, consider what you need from your documentation:

* API reference for functional documentation
* Guides, tutorials, and other long-form documentation
* Inline personalized data, such as API keys and tokens

Whether you should build or buy depends on what type of documentation you need and how much engineering time you want to spend tuning it.

## You Only Need an API Reference

A reference is a straightforward, just-the-facts view of an API. If your API is strictly internal, or incredibly self-explanatory, you may only need this type of content. While the approach leaves out [important API documentation](https://stoplight.io/blog/missing-api-documentation/), you’re better off with a reference than without. In this case, the content is clear-cut, but whether to build it yourself is not.

There is a lot that goes into an easy-to-use reference:

* An overview of endpoints
* Technical content for each
* Typography and other design
* Example responses
* Organization of API elements

While you could fully hand craft an API reference, you’re more likely to use an existing framework. Existing content management systems are unlikely to work for this specialized content. There are open source tools like [Slate](https://github.com/lord/slate) that provide a general structure for references and have theming options with nicely designed defaults. You’re still on the hook for including technical details about your API within that construct. And while a tool may do many things for you, there’s still building to be done. You may need to incorporate existing style guides and include the reference in a website or intranet sitemap.

### Hosting and Maintaining API Reference Documentation

When creating the API reference in-house, you also need to find a location to host it. Since it didn’t fit into your existing content management system, you likely have a whole new deploy process. Finding the right publication workflow can be a surprising barrier for some teams, especially if they are not already hosting other microsites.

The initial build is a milestone, not an end. As you make changes, you’ll need to redeploy. This sort of maintenance is an area often overlooked with any documentation. You’ll want to look for ways to automate making updates, or at least streamline the process. When it’s hard to update, documentation is bound to become outdated.

You’ll also have technical maintenance for any frameworks or libraries you used. Open source is ever-evolving, which means you need to keep moving with it. Update that JavaScript library you depend on. And make sure you have ways to discover or get reports of errors with your API reference site, just like you’d want with any other software.

![](/images/documentation-design-guide.png)

Paid tools, such as [Stoplight’s documentation](https://stoplight.io/documentation/), can generate beautiful references from OpenAPI documents. Using this approach, you create a machine-readable definition of your API, then automate its publication. You can then plug Stoplight into existing CI/CD tooling to help ensure it’s always up-to-date.

## You Need Many Kinds of Documentation

Our _API Documentation Guide_ identifies [three types of documentation](https://stoplight.io/api-documentation-guide/basics/): reference, guides/tutorials, and examples. Most APIs will need to include all three types. Even if your usage is mostly internal, your API consumers will need to get started quickly and understand the context of how the API interacts with other services. If there are common use cases, you can give a head start to anyone using your API.

Reference documentation is very different from longer form content. Instead of short, functional language, you need paragraphs that give situational descriptions. Rather than lists of endpoints, you might have lists of steps to take, with supporting screenshots. It’s unlikely that whatever you’ve built to support an API reference will be able to be used by other documentation without modification.

One approach is to treat reference documentation and other content separately. Guide and tutorial content flows are typically like other types of content workflows. Often, a company will have an existing content management system (CMS) that may work for longer form developer content. The API reference can then be hosted on a subdomain, for example. The downside of the fragmented approach is that it feels like separate sites to users. Worse, they frequently diverge from each other, with one being more updated than the other.

![Stoplight hub pages for all kinds of documentation](/images/hubs-create-subpage.gif)

There are three primary approaches to bringing all your documentation together in one place:

1. Build a process to include your API reference in your CMS
2. Attempt to shoehorn all the content into your CMS
3. Use a platform that supports multiple types

The first two are some form of build. The third means adopting a tool like Stoplight to [create multiple types of documentation](https://docs.stoplight.io/documentation/getting-started/subpages).

## You Need Personalization Within Your Docs

In our post [Beyond Static API Documentation](https://stoplight.io/blog/beyond-static-documentation/), we referenced Stripe’s famous copy-paste code examples, complete with API token for authentication. Stripe's feature rich documentation illustrates the importance of developer experience for all documentation, including API References. Personalization can help improve this experience, but you should prioritize it based on the effort required to build.

Stripe’s audience is broad and the entire company is impacted by their developer experience. What’s right for Stripe may not be necessary for you. However, consider a few low-impact approaches to bring personalization into your API documentation:

* **Separate portal and documentation functionality**. Developers expect settings and authentication details to be stored in a dashboard or portal. You can heavily interlink the two, or use some trickery to make them appear like a single site. This approach will give you personalization where you need it without the added burden of building everything yourself.
* **Generate tokens for testing**. Authentication is often the biggest hurdle for developer adoption. If your API uses OAuth or another complex authentication scheme, build a small tool to generate easy copy-paste tokens. This small project will pay dividends in developer experience without requiring personalization across your entire documentation.
* **Bring API testing functionality into your documentation**. Once developers have an API key or token, help them use it to make live calls from within the documentation. This sort of “try it out” functionality helps show what’s possible with custom input. It’s so powerful, it’s one of the standard Stoplight [documentation blocks](https://docs.stoplight.io/documentation/blocks).

Only companies like Stripe should be building all of their developer experience in-house. Even when personalization is required, you can find a balance between what you build yourself from scratch and what you buy to build upon.

## Try Before You Buy

Stoplight’s [hosted API documentation](https://stoplight.io/documentation/) allows you to combine generated references with long-form documentation and inline API calls.
