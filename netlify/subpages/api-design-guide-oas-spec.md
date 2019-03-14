---
path: /api-design-guide/oas-spec
tags: ['guides', 'api-design']
relatedTags: ['api-design']
publishedDate: 'Jan 23, 2019'
title:  Understanding the OpenAPI Specification
subtitle: Learn all there is about API Design through our comprehensive guide
color: orange
cta:
  color: purple
  href: 'https://next.stoplight.io'
actionBar:
  enabled: false
tabs:
  - title: API Design Basics
    href: /api-design-guide/basics
  - title: API Design Tooling
    href: /api-design-guide/tooling
  - title: Understanding the OpenAPI Specification
    href: /api-design-guide/oas-spec
meta:
  robots: 'index, follow'
  title: API Design Guide | OAS Spec
  description: Get to know the intricate details of the all-important OpenAPI Specification with Stoplight’s comprehensive and technical guide.
  twitter:
    image: /images/mark_light_bg.png
    title: API Design Guide | OAS Spec
    username: '@stoplightio'
---
# Understanding the OpenAPI Specification

The industry has selected OpenAPI as the way forward, so let’s understand it. From a technical standpoint, it is a YAML or JSON file that follows a specific [document structure](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#documentStructure). You should be able to describe any REST API using a document that adheres to the OAS 3 schema.

The primary sections of an OAS 3 document are:

- Info: meta-data about the API, including its name and version.
- Paths: relative endpoints, their operations, and responses.
- Security: the scheme used to authenticate calls, such as API Key or OAuth.
- Servers: one or more servers that can be reached with the paths.
- Components: schemas to describe reusable elements, such as error messages or responses.
- Tags: labels that can be used for grouping related paths
- External Docs: meta-data for human-readable documentation

While not all of these sections are required in an OpenAPI definition, they can be used together to flexibly describe an API with minimal repetition. Promoting re-use means you can avoid the tedium and potential human error of find-and-replace updates.

### OpenAPI Versions: OAS 2 vs OAS 3

While OAS 3 is the most recent version of OpenAPI, it replaced OAS 2, previously known as Swagger. The newer version provides a simpler way to describe APIs, while also offering more flexibility. Because there were a lot of legacy Swagger documents, it’s important to have a compatible community-owned version. But API practitioners wanted to move the Spec forward with OAS 3.

One of the biggest differences between OAS 2 and OAS 3 is the components object. For example, responses were their own distinct object in OAS2, whereas they are now organized under components. Other reusable objects now part of components include schemas for security schemes, parameters, and request bodies.

There are a handful of other components, some of which didn’t directly exist in OAS2. Two notable new components are callbacks and headers. Callbacks can be used with Webhooks and other asynchronous technologies. Headers, while describable in OAS 2, are now able to be reused more easily.

## Should Definitions Use JSON or YAML?

Through the OpenAPI Initiative, the industry has agreed upon this new approach. However, the format to use for definitions is still up for much debate. Both JSON and YAML are supported by OAS 3. They each have advantages for both human and machine consumers.

In terms of readability, YAML is clean and easy for most to decipher. It uses whitespace, colons, and newlines—a common writing syntax. By contrast, JSON has a lot of curly braces, quotes, and commas. Yet, when pretty printed, it can be similarly readable. JSON is also very easily consumed by machines. The syntax is still relatively lightweight and helps modern languages quickly parse data.

The whitespacing of YAML describes the nesting of data. When accurately written, it can be quickly parsed. However, consistent spacing becomes difficult for human editors. Once a machine understands the data, outputting YAML is straightforward, but manual writing can become an effort in fighting indentations.

There are good and bad things about both YAML and JSON. In addition to reading and writing issues, you’ll find some tools support only one or the other. It’s best to be familiar with both and plan to convert between them when needed.

## Get Familiar With API Design

Whether wrestling with data formats or spinning up mock servers, there are tools to improve your API design experience. Start from scratch or import an existing description, then start building and sharing with your team. Stoplight’s [Visual OpenAPI Designer](/design) provides a design-first suite of tools to help you build great APIs.
