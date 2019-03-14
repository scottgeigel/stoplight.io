---
path: /api-design-guide/basics
tags:
  - guides
  - api-design
relatedTags:
  - api-design
publishedDate: 2019-02-06T03:07:38.734Z
author: ''
title: API Design Guide
subtitle: Learn all there is about API Design through our comprehensive guide
color: blue
tabs:
  - href: /api-design-guide/basics
    title: API Design Basics
  - href: /api-design-guide/tooling
    title: API Design Tooling
  - href: /api-design-guide/oas-spec
    title: Understanding the OpenAPI Specification
actionBar:
  enabled: false
meta:
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: API Design Guide | Basics
  description: Learn all there is to know about our API designs through our comprehensive guides, including the basics, API tooling, and OpenAPI Specification.
  twitter:
    title: API Design Guide | Basics
    image: /images/mark_light_bg.png
    username: '@stoplightio'
---

# What is API Design?

API design is the collection of planning and architectural decisions you make when building an API. Your API design influences how well developers are able to consume it and even how they use it. Just like website design or product design, API design informs the user experience. Good API design meets initial expectations and continues to behave consistently and predictably.

There is not a single approach to design APIs “the right way.” Instead, we need to lean on industry best practices where relevant and take cues from those who will use our APIs.

## Choose your API Specification

Before you can communicate your API design, you need an artifact that someone else can use to understand your design. Historically, this might have been called documentation. While it’s still important to have human-facing documentation that is easy to use, more is required of modern APIs. In recent years the industry has rallied around the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) (OAS).

OAS allows you to define how your REST API works, in a way that can be easily consumed by both humans and machines. It serves as a contract that specifies how a consumer can use the API and what responses you can expect.

OAS 3.0 was released in July, 2017, by the OpenAPI Initiative, a consortium of member companies who want to standardize how REST APIs are described. There are various other approaches to API description:

- **OAS 2.0**, based on the Swagger definition. Still widely used, but being replaced by OAS 3.0
- **Swagger**, the best known of the approaches being replaced or augmented by OAS 3.0
- **API Blueprint** was created to foster collaboration between API design stakeholders
- **RAML**, the RESTful API Modeling Language, focuses on the planning stage of API design

While OAS 3.0 is the way forward, each of these alternative formats has tooling associated. You may find yourself converting between them, especially OAS 2.0, until the tools catch up.

Your API design requires a way to define how the API will be used. The future-thinking approach is to select [OAS 3.0](/api-design-guide/oas-spec/) to describe your API.

## Why API Design-First Matters

Now that you’ve chosen OAS 3.0, you may be tempted to set that aside until after you build your API. While it’s useful to describe existing APIs, you should also use your OpenAPI description while designing a new API.

When you design your API alongside a description, you always have the artifact to communicate what’s possible with your API. The [design-first approach](/blog/openapi-and-design-first-principles-96e7c4b2aec1) offers a single source of truth, readable by collaborators and machines alike.

### The Design-Second Oxymoron

Design-first becomes clearer when you consider the alternative. If you go straight into building your API, there’s no returning to design. That’s like constructing a house and _then_ going to an architect to draw up plans. It just makes no sense.

Yet, software teams frequently make similar choices. They may output an API spec from code, which sounds efficient. Unfortunately, by the time you’ve built an API in code, you’ve lost out on a lot of the advantages of design-first approach. When your API design exists before the implementation, you can get early feedback, connect your API to tools from the start, and collaborate across departments and functions.

Do you know who will use your API? Even for an internal project, you’re likely to have multiple consumers. An API spec allows you to share details about how the API will work. You can send the spec document itself, or use tools to prototype your API or documentation. You could generate mock servers based on your spec, as described in another section, and have your consumers make live calls.

Your collaboration can go beyond technical teams, as well. You could get great insights from product, marketing, partnerships, and many other areas of your organization.

### The Importance of Knowing Use Cases

When you understand how your software will be used you can design it better. The biggest mistake in API design is to make decisions based on how your system works, rather than what your consumers need to support. In order to design around use cases, you’ll need to talk to the consumers, or at least include those who know them better.

Software is rarely built entirely by engineers. There are stakeholders throughout the organization. And while many engineers can be very product-minded, they don’t always have the visibility of the full picture. If your organization has a product group, that’s often where the voice of the customer is most heard. Involve anyone who understands how an API will be used in discussions as you design the API.

For example, let’s say you want to design a contact API. Naturally, you would expect to be able to create, list, update, and delete contacts. However, if you don’t dig deeper, you are designing an API based on your system. Instead, find out how contacts are created. Do the details come from a user in the field, or are they passed through an online form? Ask the same questions about the other potential endpoints.

When you involve others in API design, you build something better. The API spec becomes an artifact upon which they can comment. You still need ways to coordinate the cross-department conversation, but design-first makes it possible in the first place.

![API Design-First Flow](/images/api-design-first-flow-wide.png 'API Design-First Flow')

## API Design Best Practices

Armed with an understanding of your use cases, you’re ready to begin your API design. Each project is different, so best practices may not always fit your situation. However, these are guidelines to keep in mind as you design your API.

While we’ll go into specifics below, these are the high level tenets of good API design:

- Approach design collaboratively
- Maintain internal consistency
- When possible, use an established convention

You’ll want to keep your entire team updated as you make [design decisions together](/design/#collaborative-design). Your OpenAPI spec is your single source of truth, so make sure it is available in a place where everyone can see revisions and discuss changes. A GitHub repository or Stoplight’s [Visual OpenAPI Designer](/design) can help keep everyone on the same page.

### How to Design a REST API

The OpenAPI spec is focused on describing REST APIs. However, it’s still possible to describe an API that violates the RESTful principles. This section is not meant to be exhaustive, but will instead help you avoid the most common infringements in REST API design.

**Use HTTP verbs** to communicate action. While REST guidelines can be used outside of HTTP, they are so frequently used together that it’s safe to assume your API will operate over HTTP. This protocol, upon which the web is built, offers useful operations that should form the foundation of our APIs.

- GET: read existing data
- POST: create new data
- PUT: update existing data
- PATCH: update a subset of existing data
- DELETE: remove existing data

By relying upon these verbs, you can build your API to perform these actions on your fields or resources.

**Use nouns for resources** and avoid anything that looks like procedure calls. There’s no need for endpoints like `/getContacts` when we’re using HTTP verbs. Instead, your resource would be named `/contacts` and you could perform the GET action (and any others that are relevant) against that resource.

You may find yourself in a debate about naming your resources. Should they be singular or plural? When there are multiple words in a resource name, should you use punctuation or capitalization to distinguish each word? The most important thing to choose is consistency. If you use one convention with one endpoint, choose the same with another endpoint. If possible, look to maintain this consistency between your APIs, as well.

**Use HTTP status codes** to communicate errors and success. Just as the verbs provide a solid foundation for how your API takes action, the standard status codes share the results of those actions. For example, never send a 200-level status code along with any error message. Both machines and humans will be confused.

Here’s a quick list of the most common status codes and how they should be used:

- 200: Successfully read the data you requested
- 201: Successfully wrote the data you sent
- 401: Authentication is missing or incorrect
- 403: Authentication succeeded, but the user does not have access to the resource
- 404: The resource cannot be found, client-side error
- 500: There was an error on the server-side

There are plenty of other status codes you might find useful. At a minimum, use these most common ones in the expected way.

### API Design Patterns

In addition to following REST principles, you'll run into some of the same concepts others have already solved. You may have reasons to implement some of these patterns differently. In all other cases, look to these best practices for approaching your API design.

**Sorting** can be an expensive operation for your database, but it’s one your API consumers will likely need to access. At a minimum, choose a default sort order for results (most recent first is a good choice) and be consistent with your endpoints.

Remember that your API does not have to open up your entire database to consumers. In fact, it shouldn’t. You can choose the fields to enable with sorting and work to make those operations efficient. Use a query string parameter of `sort` with potential values matching the field names that are returned in your response. For example: `sort=date_added`

Another useful option for sorting is whether you want results ascending or descending. In the case of a single sorted field, use a second query string parameter of `order` to choose sort direction. If you have multiple sort fields, you’re better off using a single parameter with SQL syntax for sorting: `sort=date_added DESC, name ASC`

**Paging** through results is something you’ll need if you have a lot of data. Returning thousands of results in a single API call causes high latency for consumers and can cause issues for your systems. Instead, choose a default page size such as 250, 100, 50, or 10. Then allow consumers to adjust the page size (below a reasonable maximum) and request specific pages of results.

Commonly, you’ll see `page` used as a query string parameter for the page number (starting at 1) and `limit` for the page size. Include the current page and the total pages (or total results) near the top of the response. This enables the consumer to track their current location and know what to retrieve next. Even better, include Hypermedia links (see below) to other pages of results.

If your data changes quickly, consumers might miss some results. You might consider some alternatives, such as cursor-based paging, timestamps, or streaming.

**Filtering** is another useful way for API consumers to control their results. In this case, you can restrict based on values in the results. While this is typically an easier query for your database, you still can control which fields to enable for filtering. With simple filter implementations, you can use one or two query string parameters for each field. For example, `city=Austin` would find all records where the city field is Austin. To look up ranges, use multiple parameters, such as `date_before=2010-01-01&date_after=1999-12-31`.

More advanced filtering will require a different approach. You can use standard search schemas, or explore other technologies like GraphQL.

**Hypermedia links** help show the API consumer what else is available, allowing them to “browse” your API. These are included near the top of your results, or in the relevant object within your results. Links are wrapped in a `links` or `_links` object. For example, if your API results include abbreviated versions of objects (such as contacts), you can include a link to the complete version of each contact. Links always include the full URL to the API call.

A common usage of hypermedia is paging through results. At a minimum, supply the full URL to the API call for the next page of results. The consumer—human or machine—can easily follow the link to get the results when needed. Other links to include: previous page (prev), first, and last. You can find more details in [RFC 8288](https://tools.ietf.org/html/rfc8288), which describes Web Linking.
