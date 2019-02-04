---
path: /blog/openapi-and-design-first-principles
publishDate: 2018-06-21T19:34:32.353Z
author: Lukas Rosenstock
title: OpenAPI and Design-First Principles
subtitle: Why API Design is critical and how the OpenAPI Specification can help
image: /images/openapi-design-first.jpeg
color: indigo
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: OpenAPI and Design-First Principles | Stoplight
  twitter:
    title: OpenAPI and Design-First Principles | Stoplight
    image: /images/openapi-design-first.jpeg
    username: '@stoplightio'
---
Maintaining an OpenAPI definition for an API as an artifact that is separate from the implementation source code can feel like tedious, unnecessary work. What if you could just implement your system and use a tool to generate OpenAPI, which you can then use for documentation and testing? No problem, [tools like this exist for almost every programming language](https://www.blazemeter.com/blog/how-to-generate-openapi-definitions-from-code). They can infer a lot of the interface from the code, and whatever remains can be provided through annotations. It sounds good at first, because it is less work, however, you should be careful about relying on these tools.

Most explanations for why an API design generated from code is imperfect, boil down to the fact that good API design is of utmost importance for the success of any API. Automated OpenAPI generation, on the other hand, allows and tempts us to skip the design stage of the API lifecycle. In the remainder of the article, we first explain why API design is crucial. Then, we will look at a proper API lifecycle and design workflow, and how Stoplight can help. In the end, you learn where tools to generate API design from code still serve a valid purpose.

## Why API Design Is Important

Let‘s take a look at the process of creating a traditional software product. First, you think about what system you need to build. Then, you dive deeper into the specific use cases and models of interaction. All of this happens before you write the first line of code. There’s a whole profession, user experience (UX) design, involved in the production.

API design, one could argue, is even more critical than UX design. Why?

APIs need to be understood by the developers who write code against them and also enable efficient interactions between machines. Unlike humans, computers have no tolerance for ambiguity. A single API is often consumed by many client applications, and it‘s usually deeply integrated into them. Therefore, changing an API is difficult or almost impossible — [one of the lessons learned from the first 10 years of Amazon Webservices](https://www.allthingsdistributed.com/2016/03/10-lessons-from-10-years-of-aws.html). These attributes make it all the more important to get it right the first time and ensure that a design is both future-proof and backward-compatible. You need to define the appropriate scope and be consistent, as well as apply company-wide style guides, industry best practices, and schemas whenever possible.

Building APIs that don’t just work but also provide [outstanding developer experience (DX)](https://hackernoon.com/the-best-practices-for-a-great-developer-experience-dx-9036834382b0) by being intuitive, delightful, and empowering, takes time. If you do not invest this time during the design stage, your support engineers will have to do it later. This is especially true for public API programs with thousands of consumers, but even if you only work with a handful of partners or internal developers, they will appreciate good API design.

In large-scale systems, the outward-facing API might stay the same for years, but the underlying code or the database layer could change completely. Many companies have migrated their tech stack to accommodate growth. Therefore, it is never a good idea to design an API based on the conventions of the server-side implementation or the existing database schema. Generating an API definition from code, however, is precisely that. You’d be putting simplicity ahead of good design and specifying the interface around the current version of the implementation. It often means exposing untransformed database models as API resources for CRUD operations.

## Practicing API Design

Today, the best practice when implementing APIs on a large scale is to start with an API design stage. This approach is called API design-first, sometimes also known as API-first, schema-first, or [API-driven-development (ADD)](https://dzone.com/articles/abcs-of-api-driven-development). [API experts](https://apievangelist.com/2018/02/14/code-generating-openapi-still-prevailing-approach/) and industry publications such as [ProgrammableWeb](https://www.programmableweb.com/news/introduction-to-api-first-design/analysis/2016/10/31) or [NordicAPIs](https://nordicapis.com/using-a-schema-first-design-as-your-single-source-of-truth/) recommend it.

It works like this: Dedicated API architects write a specification and all the stakeholders, from developers to product managers and external consumers, are involved in the process. APIs are products, so they need to consider not only the technical but also the business and legal concerns. In smaller companies, or when APIs are developed for internal use only, it is the frontend developers who should put on the API designer’s hat. They are the ones who eventually consume the API and therefore should have the best understanding of the requirements.

In any case, the specification — since it is just a JSON or YAML file — [lives in a source repository where all the stakeholders can interact with it and provide feedback](http://apievangelist.com/2017/05/25/every-api-should-begin-with-a-github-repository/).

For even better collaboration, you can use SaaS products like [Stoplight](https://stoplight.io/), which retain your specification and provide a web-based visual API designer and OpenAPI editor to all collaborators. Dedicated API design tools like this make the process more accessible and less prone to errors. You can see how much [faster visual API design is in comparison to writing the definition in this video](https://vimeo.com/246858062).

When the specification is complete, you can then generate a mock server. Thanks to this, frontend and backend development can happen independently, without teams waiting for each other. Backend engineers write the API server to specification and test it, or even leverage tools capable of generating server-side code stubs from OpenAPI to save time writing code. Simultaneously, the frontend developers can build their application and receive correct API responses from the mock server. To some extent, this approach can be considered the API equivalent of test-driven development (TDD), or contract-first development. There are multiple tools to run tests and build a mock server from OpenAPI.

[Prism, a server and command line utility available from Stoplight](https://stoplight.io/platform/prism/), is capable of doing both.

## The Power of OpenAPI

Remember, all of this takes place before or in the early stage of backend development, and it requires a machine-readable definition of the API. You cannot leverage the power of OpenAPI for these stages of the API lifecycle if the specification is an output of your code instead of an input.

You could still argue that you can build a proper API lifecycle without a specification, and you only need OpenAPI to produce documentation. After all, there are enough successful software companies that do not practice test-driven or contract-first development. However, doing so would leave at least half of what OpenAPI can do on the table. [As Kin Lane, the API Evangelist, points out, many companies still see the purpose of OpenAPI, from its historical background in SwaggerUI, solely for generating documentation](https://apievangelist.com/2017/12/18/definition-driven-api-lifecycle-instead-of-code-driven-apis/). It is important to consider that OpenAPI is so much more today — a vast and robust framework for the whole API lifecycle.

## Good OpenAPI Definitions

OpenAPI definitions generated from code are likely poor quality. Definition-generating tools cannot do magic, and while they can deduce a lot from the code, they require additional annotations and human-readable descriptions. These annotations might be inaccurate and not reflect the implementation correctly, so generating the API design from code doesn‘t mean you can forego testing your specification.

There’s a real danger that the automatically generated specifications are considered good enough to be published, even for external audiences, when, in fact, they are not. Developers need to be disciplined, but when it comes to documentation, experience has shown they often aren’t (in the words of Phil Sturgeon, [“When documentation is considered an extra job, that job won’t get done.”](https://philsturgeon.uk/api/2017/07/20/my-vision-for-a-perfect-world-in-api-specification/)). Another post-production step, such as a review with a technical writer, is still necessary.

## It’s Not All Bad

So, is auto-generating machine-readable API definitions always wrong, by definition (pun intended)? No, because they can act as your first step into the OpenAPI ecosystem. These definitions can also assist in refactoring a legacy API. While it’s often useful to start a new, refactored API version from a clean slate, having the ability to compare both versions can help identify the differences and potential problems. You could, for example, generate an OpenAPI definition from the existing implementation and then load it into [Stoplight](https://stoplight.io/) to keep as a reference during an API-first redesign.

*Editor’s note: We are starting a newsletter at [Stoplight](https://stoplight.io/) with some of the month’s blog posts, our favorite posts from the API community, and more! Sign up below*👇

![](https://cdn-images-1.medium.com/max/2436/1*tXurrlLg5pgXl8KpgKc4oQ.png)
