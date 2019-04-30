---
path: /blog/introducing-spectral/
tags:
  - blog
  - blog-design
  - blog-general
relatedTags:
  - blog-design
publishedDate: 2019-03-28T22:43:09.385Z
author: Taylor Barnett
title: Introducing Spectral
subtitle: >-
  An open source, flexible JSON linter with out of the box support for the
  OpenAPI Specification
image: /images/sharon-mccutcheon-663633-unsplash.jpg
color: green-light
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: >-
    An open source, flexible JSON linter with out of the box support for the
    OpenAPI Specification
  robots: 'index, follow'
  title: Introducing Spectral | Stoplight API Corner
  image: /images/sharon-mccutcheon-663633-unsplash.jpg
  twitter:
    description: >-
      An open source, flexible JSON linter with out of the box support for the
      OpenAPI Specification
    title: Introducing Spectral | Stoplight API Corner
    image: /images/sharon-mccutcheon-663633-unsplash.jpg
---
_Photo by [Sharon McCutcheon](https://unsplash.com/photos/W7cPLHOa0eQ) on [Unsplash](https://unsplash.com)_

Linters for your code like ESLint, pycodestyle, CSSLint, and others have grown increasingly popular as tools for maintaining a consistent code base and to prevent future errors before execution. A linter acts as a style guide, enforcing predetermined rules during the code creation process. This helps reduce the cognitive load while writing the code and saves time later in the code review. Linters also do the hard work of enforcing things like the contentious tabs vs. spaces debate. This is why we created [Spectral](https://github.com/stoplightio/spectral/), a flexible JSON linter. 

![Bugs Bunny and Daffy Duck arguing over tabs versus spaces](/images/tabsvsspaces.gif)

At Stoplight, we want to promote consistent API design best practices. We believe that API descriptions should be treated the same way as code. APIs should have style guides with rules and be reviewed to ensure they are descriptive, readable, and concise for the developers who use them.

## Spectral Promotes Consistency

![Spectral logo](/images/spectral-banner-center-transparent.png)

Our goal for Spectral is to create a JSON linter that promotes standards with the flexibility for custom rule creation to validate and lint any JSON. A lot of tools out there provide validation (i.e. Is this valid JSON?) and there are several tools that provide JSON Schema validation (i.e. Is this JSON valid against this schema file?), but Spectral is the first to allow you to lint any JSON document.

For example, while an OpenAPI document might be entirely valid, it could be missing important fields like descriptions for parameters or other problematic design issues. Spectral can warn about possible improvements to ensure API definitions can reach their full potential, without needing to have special “OpenAPI Gatekeepers” review every change to the documents.

Spectral isn’t just a fun side project for our team. It is an integral part of our Stoplight platform. Spectral powers all of the OpenAPI validation and linting within the platform. It also helps users turn specific style rules on and off.

![Style Validation Rules in Stoplight](https://github.com/stoplightio/docs/blob/develop/assets/imagesv2/style-validation-rules.png?raw=true)

Even though we often use it with OpenAPI, we also see a future for it being used for other API specifications, configuration files, and more. This is why we wanted a library to lint any JSON object and not just OpenAPI documents.

For JSON Schema validation, Spectral exposes a schema function that you can use in your rules to validate all or part of the target object with JSON Schema. Spectral uses [ajv](https://github.com/epoberezkin/ajv), also known as “another JSON validator.”

A common complaint regarding linters is that they are not flexible enough. We hear you! Spectral provides a number of built-in functions and utilities that you can use to build up a linting ruleset that simple JSON Schema validation is not well suited for.

## Rules and Functions Define Your Style Guide

There are two key concepts in Spectral: **Rules** and **Functions**.

* **Rules** filter your object down to a set of target values and specify the function that should evaluate those values.
* **Functions** accept a value and return issue(s) if the value is incorrect.

Think of a set of rules and functions as a flexible and customizable style guide for your JSON objects.

Spectral has a set of built-in functions to help you build custom rules for your JSON objects. These functions include pattern checks, parameter checks, alphabetical ordering, a specified number of characters, provided keys are present in an object, etc. These rules can be clearly defined thanks for TypeScript typings. 

In this example, we are using the `RuleFunction.PATTERN` to create a rule that checks that all property values are in snake case:

```javascript
const { RuleFunction, Spectral } = require('@stoplight/spectral');

const spectral = new Spectral();

spectral.addRules({
  snake_case: {
    summary: "Checks for snake case pattern",

    // evaluate every property
    given: "$..*",

    then: {
      function: RuleFunction.PATTERN,
      functionOptions: {
        match: "^[a-z]+[a-z0-9_]*[a-z0-9]+$"
      }
    }
  }
});

// run!
spectral.run({ name: "helloWorld" }).then(results => {
  console.log(JSON.stringify(results, null, 4));
});

// => outputs a single result since helloWorld is not snake_case
// [
//     {
//         "code": "snake_case",
//         "summary": "Checks for snake case pattern",
//         "message": "must match the pattern '^[a-z]+[a-z0-9_]*[a-z0-9]+$'",
//         "path": [
//             "name"
//         ],
//         "severity": 1,
//         "range": {
//             "start": {
//                 "line": 1,
//                 "character": 10
//             },
//             "end": {
//                 "line": 1,
//                 "character": 22
//             }
//         }
//     }
// ]
```

You can then use JSON paths to apply custom rules and functions to specific parts of your JSON objects. 

### OpenAPI Validation and Linting

We built Spectral to have out of the box support for validating and linting OpenAPI documents. You can choose to use our rulesets or modify it to create your own custom OpenAPI rulesets. 

In this example, we are using an OpenAPI 3 ruleset that we have included in Spectral to validate and lint an OpenAPI 3 document.

You can use the [built-in CLI](https://github.com/stoplightio/spectral#cli):

```bash
spectral lint myOAS.json
```

For example, it would respond with:

```bash
linting myOAS.json
OpenAPI 3.x detected

/Users/taylorbarnett/Stoplight/spectral-example/myOAS.json
  2:6   warning  info-contact           Info object should contain `contact` object
  2:6   warning  info-description       OpenAPI object info `description` must be present and non-empty string
  11:9  warning  operation-description  Operation `description` must be present and non-empty string
 42:10  warning  operation-description  Operation `description` must be present and non-empty string
  57:9  warning  operation-description  Operation `description` must be present and non-empty string

✖ 5 problems (0 errors, 5 warnings, 0 infos)
```

Or you can do the same thing [programmatically](https://github.com/stoplightio/spectral#example-linting-an-openapi-document): 

```javascript
const { Spectral } = require('@stoplight/spectral');
const { oas3Functions, oas3Rules } = require('@stoplight/spectral/rulesets/oas3');

// an OASv3 document
const myOAS = {
  // ... properties in your document
  responses: {
    "200": {
      description: "",
      schema: {
        $ref: "#/definitions/error-response"
      }
    }
  }
  // ... properties in your document
};

// create a new instance of spectral with all of the baked in rulesets
const spectral = new Spectral();

spectral.addFunctions(oas3Functions());
spectral.addRules(oas3Rules());

spectral.addRules({
  // .. extend with your own custom rules
});

// run!
spectral.run(myOAS).then(results => {
  console.log(JSON.stringify(results, null, 4));
});
```

Don’t see a built-in function that fits your needs? You can create custom functions for advanced use cases too. You can see more in the Spectral docs [here](https://github.com/stoplightio/spectral#advanced).

## Future of Spectral

### More Rulesets

We’d love to see more API style guides translated into Spectral-friendly rulesets. And we’d love to help make that happen. 

> If your API has a style guide that could potentially be translated into custom rules and functions with Spectral -- please post in the [Stoplight forum's Open Source category](https://community.stoplight.io/c/open-source)! 

We are here to help. We’ve seen some progress on an AsyncAPI ruleset being created.

### More Integrations

One of the first integrations I built with Spectral is a GitHub pull requests bot that runs when a pull request is opened with changes to your API specification. I’d love to help people build [more integrations](https://github.com/stoplightio/spectral#example-implementations) like this. Other ideas include adding Spectral to your specification review process or your Travis CI, Jenkins, or CircleCI pipelines. 

Also, thanks to Mike Ralphson, who contributed our first major community contribution, we now have a CLI for Spectral. 

### More Use Cases

We see a future for Spectral being used for other API specifications, configuration files, and more. If you have a potential use case in mind, we’d love to hear from you! You can help us shape the future of the project with these use cases. 

### Automagically Fix Issues

Lastly, another idea we have for Spectral is to have the ability to automatically fix errors and warnings. If this is something you would find useful, we’d love to talk to you more about it. We’ve [opened an issue for it](https://github.com/stoplightio/spectral/issues/98) in the repo here to start the conversation or if you are interested in working on this.

## Try it out

You can install Spectral [here](https://github.com/stoplightio/spectral#installation). If you want to run an example OpenAPI document through it, here is an example you can follow to [try it out](https://github.com/stoplightio/spectral#example-linting-an-openapi-document).
