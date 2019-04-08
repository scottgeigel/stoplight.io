---
path: /mock-api-guide/advanced/
tags:
  - guides
  - mocking
  - ''
relatedTags:
  - mocking
  - blog-testing
publishedDate: 2019-03-14T17:05:26.209Z
title: Mock API Server Guide | Advanced
subtitle: Learn how to generate dummy API data and stage a mock API server
color: black
tabs:
  - href: /mock-api-guide/basics/
    title: Mock Server Basics
  - href: /mock-api-guide/advanced
    title: Mock Server Advanced
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  title: Dummy API data generation & REST API Mocking Guide
  description: Want to learn how to generate dummy API data and Mocking your REST API? Check out our advance guide right here to find out everything you need to know.
  robots: 'index, follow'
  twitter: {}
---
## Generate Mock Data Definition

The major requirement of a mock API server is to generate the data to send as responses. Ideally, the data is realistic, because you want to make the experience as close to a real API as you can. However, an overly complex effort to build a mock API may negate its purpose. In the cases where the real API is available, the mock API is meant to unblock projects that depend on the API, not become a project itself.

When generating mock data, you can use static responses or fully randomized fields. Depending on how you generate the dummy data, you may also be able to find a middle ground of mostly static content with some fields dynamically generated.

### Dummy Server with Manual Data

The most basic way to create a mock API server is to use static responses. The downside of this approach is returned data is potentially repetitive and outdated, which breaks down the illusion of real data. However, if you need to quickly create a mock API by hand, you can connect it to a basic web server.

With the static approach, you can grab a response from an existing or similar API and then make edits manually. Typically, response formats are JSON or XML, so you’ll need to be familiar with the syntax. Your text file will need to emulate the same structure of fields that the real API will return.

You will need a basic server to return the appropriate data for your mock calls. If you don’t have a go-to API server, consider some popular API frameworks:

* [Hapi](https://hapijs.com/) (Node)
* [Falcon](https://github.com/falconry/falcon) (Python)
* [Flask](http://flask.pocoo.org/) (Python)

An alternative to wholly static responses is to generate static data from code. You already need to use a small amount of code to return the text content, so you could instead hard-code your mock data into your dummy server. There are a couple advantages to this approach: You can selectively include dynamic data (such as future dates) and you won’t have to worry about data format syntax. You can represent your dummy data as a hash or dictionary, then use your framework or programming language library to return JSON or XML.

However, even these partially-dynamic mock APIs require manual input. If you have described your API using a format such as Swagger, RAML, or OpenAPI, you have more options to create dynamic mock servers.

### Mock Data Generator for Swagger / OpenAPI

As [design-first APIs](/api-design-guide/basics/) gain popularity, API descriptions become an important way to share what’s possible. You’ll also find many tools built around these formats, most notably the OpenAPI Specification. An OpenAPI document provides a machine-readable description of exactly what is possible with your API. The OpenAPI definition becomes the source of truth throughout the API lifecycle, starting with the earliest design.

Many of the top API experts have gathered around this central format, based on the Swagger format. The OpenAPI Initiative is a consortium of industry supporters creating a standard (using YAML or JSON) to describe the endpoints, responses, and other parts of an API. From this one document, you can generate example responses or even build entire mock servers.

There are major advantages to using an API description instead of one of the manual data approaches:

* Automatically generate data from schemas 
* Share descriptions with any consumers of the API 
* Utilize the description to generate documentations, tests, and more

> Plus, you save yourself the manual effort and potential for outdated mock data.

Once you have an OpenAPI document to describe your API (you can create one in [Stoplight’s OpenAPI builder](/design/), you can plug it into an open source data generator or a mock server service.

**[Prism API Server](https://github.com/stoplightio/prism)** is an open source command line utility that serves mock data and validates API descriptions. You can create mock data and a local server from your OpenAPI document using the following command:
`prism mock --spec your-openapi-doc.yaml`
Install Prism on a public server for use cases that don’t require local data, or use a mocking service.

**[Stoplight Mocking](https://stoplight.io/mocking/)** provides hosted Prism servers based on OpenAPI documents imported into or created with our API design tool.

![Stoplight dynamic mock endpoints](/images/dynamic-mocking.png "Stoplight dynamic mock endpoints")

If you have example responses in your OpenAPI definition, those will be used. But you can [force dynamic mocking](https://docs.stoplight.io/mocking/dynamic-mocking) to always generate the data based on your spec.
## Stage a Mock REST API Server
In many cases, you’ll want to make your mock server available publicly. Whether the API consumers are co-workers, external partners, or even your own code, it can be helpful to provide Internet-accessible mock servers. You can use many of the methods described in this guide, such as the basic dummy server stub code or a hosted mocking service.

Your mock servers are temporary, but the consumers of the mock API may build upon their prototype code. For that reason, you want your mock servers to appear as realistic as possible. One way to ensure minimal changes is to host your mock servers at the same path level. In other words, if the eventual API call will go to `/api/resource/` don’t use mock servers with a different path like `/mock/api/resource/`.

Many services use unique subdomains to host mock servers. For example, you could use `mockapi.yourdomain.com` or even use an external service like Heroku that will auto-generate a subdomain.

Unless you are hosting an open source tool like Prism, you’ll likely be generating your endpoints and data manually. Building from a single source of truth, like an OpenAPI document, will allow you to generate realistic responses automatically.
### Beyond a Dummy Server
Robust mock servers return more than dummy data. Rather than static responses, which are either handmade or copy-pasted, a powerful mock server will create dynamic data from OpenAPI definitions.

Manual mock servers can seem like extra work. They may temporarily unblock the developer using your API-in-progress, but the data returned by a static mock server may become dated and inaccurate. When generating from an OpenAPI description, your mock API servers can generate data to include in the latest interface. By being up-to-date, you will receive better feedback from developers, improving the speed you can iterate on changes.

OpenAPI-driven mock servers also save you time by generating common objects in your API from a single model. For example, the schema for your resource may return an ID (an integer) and a name (a string). Your mock server uses this schema for all endpoints that generate a single instance of the resource. Additionally, it’s just as easy to generate multiple instances for endpoints that contain an array of the resource.
[Stoplight Todos](http://todos.stoplight.io/) shows a sample mock service in action.
## From Mock to Real: Design, Test, and Deploy Your API
Mock API servers are a very useful part of creating and using APIs. However, they’re just one part of a larger project that often includes collaborators across an organization. Stoplight can help you at each step with tools for designing, documenting, and testing your API.

You can import an existing OpenAPI definition, or create one from scratch with our visual designer. See how [Stoplight's mocking](https://stoplight.io/mocking/) helps you share mock servers with your team in minutes.
