---
path: /blog/making-the-most-of-your-api-specification
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishDate: 2019-02-04T20:10:00.489Z
author: Chris Wood
title: Making the Most of Your API Specification
subtitle: Design Web APIs for Humans & Machines
image: 'https://cdn-images-1.medium.com/max/9792/0*EqisMREXV24UgZ8y'
color: purple-darker
disqus:
  enabled: true
actionBar:
  enabled: false
meta:
  description: Stop Calling Your APIs Microservices
  favicon: /images/mark_light_bg.png
  title: Stop Calling Your APIs Microservices | Stoplight
  twitter:
    description: Stop Calling Your APIs Microservices
    title: Stop Calling Your APIs Microservices | Stoplight
    username: '@stoplightio'
---
A bridge between humans and machines, photo by Marc-Antoine Dépelteau

It wasn’t so long ago that an API specification was just a thing that got generated. Write some code, add some annotations, and let your build tool create an API specification document you shared with your colleagues, community, friends, and family. Job done.

All that’s changed with the advent of design-first APIs. It’s become common practice for API designers to actively create the “best” design they can for humans and machines that consume their APIs. This can be done without writing a stitch of code, [using tools like Stoplight](https://stoplight.io/design/) coupled with the massively popular OpenAPI (fka Swagger) Specification.

## Advantages of Design-First APIs

* [Design-first APIs](https://stoplight.io/design/#powerful-visual-editor) force designers to actively *think* about an interface that is the best fit for their consumers and the provider’s goals when offering an API

* This process ensures that the interface and the backend it exposes do not contaminate each other. This is especially important when existing or legacy backends are being newly offered as REST APIs

* The design process offers an outcome in the form of a tangible artifact — a draft API specification document — that can be easily shared with stakeholders to share, communicate, and agree upon the proposed design

* A secondary benefit is that design-first APIs catapult the production of the API specification forward in the API lifecycle. Your community and stakeholders gain visibility of specific API changes much sooner than if the production of an API specification is coupled with the development of the code

The increasing importance of design-first APIs and use of API specification documents gives us some opportunities to optimize what we deliver to our developer communities. In the context of OpenAPI Specification, this is true for both humans and machines that we interact with.

## For the Humans: Making Use of the Description Property

Many API providers take advantage of the features in the OpenAPI specification that allow them to both define the API and document their design intentions. Key among these is the Description object, a free text property present in most objects including Info, Path, and Definition.

While this is a string, its value can be richer than simple text. For example, Markdown can happily be stored (CommonMark being supported by the specification). Most tools, like [Stoplight](https://stoplight.io/documentation) and open source resources like [Swagger UI](https://swagger.io/tools/swagger-ui/) and [Redoc](https://github.com/Rebilly/ReDoc), will actively render the Markdown, providing convenient formatting for readers of the document.

For example, the description property in the Infoobject can be populated as follows (using a pipe for line continuation):

    swagger: '2.0'
    info:
      title: Stoplight Blog - Example API
      version: 0.0.1
      description: |

    # Example

    I like to make it easy for my readers so I'm using headers:

        * And

        * Some

        * Bullets

Providing Markdown support allows API providers a method for adding supplemental and secondary information. As an API designer, this functionality has a number of benefits:

* You can provide usage notes for your developer community across a whole range of attributes — usage notes for parameters, the rationale behind type definitions, and so on

* The first draft of the specification for an API might only contain skeleton descriptions, but don’t be afraid to embellish your specifications with information from other sources — Confluence, Jupyter notebooks, your data model, anywhere where a source of useful information for the API specification can be elicited

* If you do draw on other sources, do it manually once, then look to automate. It’ll mean you’ll save time and effort in the future and — if it’s important to you — give you a straightforward means to keep your API specification in sync with these sources of truth

By making use full of the Description field, you therefore have the opportunity to provide a rich, self-contained document with possibly everything a human needs to know about your API.

## For the Machines: Promoting Simplicity and Reuse

If you take [Fielding’s REST architectural style](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf) at face value and fully implement both hypermedia and the optional code-on-demand constraint, an API specification wouldn’t be necessary for machines. Your client would be a dumb shell, drawing on the API for everything it needs to execute.

However — and for the time being at least — we need to tell our machines what our APIs look like. With an API specification, we give ourselves an advantage though, by using a means that can be digested by code generation tools so the core of an API client can be constructed automatically.

Sounds like an easy day for developers — generate a client and you’re off-and-running. However, an ugly API specification can result in an ugly API client, with a sprawling, unfamiliar code base that is hard to maintain and debug. In the context of OpenAPI, using the features of the specification that promote reuse will provide benefits for the developer as they implement an integration with your API:

* Most objects defined in an OpenAPI specification — Parameters, Responses, and so on — are reusable with sections in the specification dedicated to this purpose

* On this basis, you should look to create common, reusable type definitions in your specifications where possible, rather than repeatedly embedding the same definitions inline

* Promoting reuse will inevitably result in fewer objects being described in the specification. This will inevitably result in less code being generated by tools, resulting in a code footprint that is both smaller and easier to contain, understand, and debug

* It also has a side effect for humans as well, ensuring the document is less verbose which promotes ease of understanding

Promoting simplicity and reuse through a well-structured API specification, therefore, gives developers the best chance of success in creating a clean and straightforward API client. Moreover, it adds to a great experience for developers, by making their lives easier.
> *Note: In OpenAPI 2.0 (fka Swagger), the majority of reusable types can be grouped under root-level properties such as parameters, responses, and definitions. In OpenAPI 3.0, these have been moved under the root-level componentssection with definitions renamed schemas.*

## For Everyone: Get the Most Out of Your Specification

Your API specification is a crucial document for communicating with your community. However, its capabilities deliver more than just a technical representation of your API.

It can provide a self-contained encapsulation of everything you need to convey your consumers, for humans and machines alike. By leveraging the features available — especially when using the OpenAPI Specification — you have more chance of increasing the breadth and depth of understanding in your developer community.

*Editor’s note: We started a newsletter at [Stoplight](https://stoplight.io/) with some of the month’s blog posts, our favorite posts from the API community, and more! Sign up below*👇

![](https://cdn-images-1.medium.com/max/NaN/1*t-0nFtOwlgG0xGyouTJapQ.png)
