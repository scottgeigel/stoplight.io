---
path: /blog/raml-vs-yaml
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-03-21T17:08:25.117Z
author: Adam DuVander
title: RAML vs YAML for API Specifications
subtitle: The similarities and differences of these two file formats
image: /images/two-camels.png
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
  description: The similarities and differences of these two file formats
  robots: 'index, follow'
  title: RAML vs YAML for API Specifications | Stoplight API Corner
  image: /images/two-camels.png
  twitter:
    description: The similarities and differences of these two file formats
    title: RAML vs YAML for API Specifications | Stoplight API Corner
    image: /images/two-camels.png
---
Do a little research into API definition documents and you’ll run into enough terms to be confusing. Among them you’ll find two that seem very similar: RAML and YAML. These formats are both used in API design and documents. While they have similar origins (RAML is an implementation of YAML), they are very different in application.

Before we can get into the similarities and differences, let’s look at what they are and how they’re used.

## What Do These Acronyms Mean?

There are a lot of FLAs and TLAs thrown around in technology—that’s Four Letter Acronyms and Three Letter Acronyms. With an “AML” in both RAML and YAML, you might expect a lot of overlap in their definitions. But only the L for Language are the same.

### What is YAML?

YAML originally stood for _Yet Another Markup Language_, but officially goes by the recursive definition **YAML Ain’t Markup Language**. While invented as a more readable version of HTML, it is now used for all kinds of content and data.

Going back to YAML’s origins helps show the power of showing structure in a human-readable format through the use of whitespace:

```
html:
  head:
    title: Welcome to my YAML web page
  body:
    h1: Hello Web World
    p:
      - This is my first paragraph
      - And this is the second paragraph
```

Now YAML is used in configuration files, templating engines, and API descriptions, among many other uses. Notably, both versions of the OpenAPI spec and Swagger can use YAML files to define the elements of an API.

### What is RAML?

RAML is the **RESTful API Modeling Language** and is built on top of YAML. That means at-a-glance, they look similar. In fact, all RAML is YAML, but the reverse is not true.

As the acronym suggests, RAML is focused on modeling (or designing) APIs. At its simplest, RAML can be used to describe an API’s endpoints. For example:

```
#%RAML 1.0
---
title: Todo API
baseUri: http://todos.stoplight.io/{version}
version: v1

/todos:
  get:
  post:
  /{id}:
    get:
    put:
    delete:
```

From that basic structure, you can include parameters, responses, status codes, and more. As we’ll see, the same can be defined with OpenAPI YAML. The technical difference between the two is each has its own specification for how the YAML is structured.

## When to Use RAML vs YAML

RAML may be used in various API capacities, though the focus it claims is on modeling APIs. YAML can be used in any number of ways, including non-API implementations mentioned previously. However, if we’re looking at YAML written for OpenAPI or Swagger documents, then we can make direct comparisons to RAML. The OpenAPI specification aims to be an API _contract_, a definition of what to expect from an API.

There are tools for both RAML and OpenAPI across the API lifecycle. However, RAML’s focus on modeling, which occurs early in the lifecycle, means it will likely need to be converted to other formats as the API matures. OpenAPI is the only format broadly adopted by the API community, so it’s a fair assumption that many RAML documents will end up being converted to OpenAPI definitions.

Therefore, it’s no longer a question of RAML vs OpenAPI. That was made clear when RAML originators MuleSoft joined the OpenAPI Initiative, the consortium of companies and individuals who work to evolve the OpenAPI spec. Instead, the question is whether to begin in RAML and move into OpenAPI, or to use OpenAPI from the start. At Stoplight, the tooling is built around the single approach, supporting OpenAPI formats.

## How YAML is Used in OpenAPI and Swagger

The industry has rallied around the OpenAPI specification as a standard to describe REST APIs. Like the Swagger spec it’s based on, OpenAPI documents can be written in YAML. The spec also supports a JSON format, though the two are interchangeable.

For example, an OpenAPI description of a todo list endpoint might look like this in YAML:

```
openapi: "3.0.0"
servers:
  - url: http://todos.stoplight.io
paths:
  /todos:
    get:
      summary: List todos
      operationId: GET_todos
      tags:
      parameters:
      responses:
        '200':
          description: An array of todos
```

While this example is truncated, it gets across the simplicity and readability of YAML documents for OpenAPI. You can find complete examples in the [Initiative’s GitHub repo](https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v3.0).

YAML files are easy to create by hand with any text editor. However, most developers choose to use tools to create their OpenAPI documents. You may be able to generate YAML from existing API code, for example. Ideally, your organization has a [design-first API](https://stoplight.io/api-design-guide/basics/) practice. In this approach, you model the interface before writing the code that produces it.

![](/images/api-design-modeling.png)

Stoplight’s offers a [full toolkit for OpenAPI](https://stoplight.io/), including a visual builder. You can export OpenAPI documents from Stoplight—or import existing API definitions to get started.

There are a lot of ways you can create your YAML files for OpenAPI. You can edit them by hand, generate them from code, use design tools, and even transform them from other documents like RAML files. Once you have your document, it can serve as a single source of truth for your team and any external consumers. You can also use it for testing, documentation, mock servers, and more. See the _API Design Guide’s_ [OpenAPI specification section](https://stoplight.io/api-design-guide/oas-spec/) for more about the format and different versions.
