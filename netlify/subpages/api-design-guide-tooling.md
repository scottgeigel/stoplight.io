---
path: /api-design-guide/tooling
hero:
  aligned: center
  bgColor: green
  buttons:
    - href: /api-design-guide/basics/
      title: API Design Basics
    - href: /api-design-guide/tooling/
      title: API Design Tooling
    - href: /api-design-guide/oas-spec/
      title: Understanding the OpenAPI Specification
  cta:
    color: purple
    href: 'https://next.stoplight.io'
  subtitle: Learn all there is about API Design through our comprehensive guide
  title: API Design Guide
info:
  links:
    - href: '/api-design-guide/tooling#generate-api-documentation'
      title: 'Generate API Documentation '
    - href: '/api-design-guide/tooling#create-mock-servers'
      title: Create Mock Servers
    - href: '/api-design-guide/tooling#automatically-test-your-apis'
      title: Automatically Test your APIs
    - href: '/api-design-guide/tooling#use-linting-to-spot-errors'
      title: Use Linting to Spot Errors
  title: Sections
quotes: []
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: API Design Guide | Tooling
  twitter:
    image: /images/mark_light_bg.png
    title: API Design Guide | Tooling
    username: '@stoplightio'
---
## API Design Brings Powerful Tooling
When you use an OpenAPI spec to design your API, it becomes part of your workflow. That means as soon as you have even a single potential endpoint of your API described, you can begin to gather feedback and piece together how your API will be used. Rather than toiling away in an API silo, your spec allows for collaboration with colleagues and across departments. You can work the API description into your approval processes, so everyone is on the same page with its progress.

Tooling built around the OpenAPI spec can help in the very early stages of design through a live API and even as you consider versioning and deprecation. We’ll cover some of the common tools you might use with your API descriptions.

### Generate API Documentation
Perhaps the tool most associated with API descriptions is Swagger UI and other tools for generating documentation. Before developers and architects used a definition to help them design APIs, documentation was the biggest use case. While OpenAPI allows for much more than generated documentation, that remains a huge advantage to having your API described in OpenAPI.

There are different types of documentation, but OpenAPI-generated docs thrive for API references and interactive documentation. As you add and update your API endpoints, you can automatically keep your documentation updated. You may even be able to connect these tools to your CI/CD workflow, so that as your new API hits production, so does your new API documentation.

Reading documentation is one way to determine how an API works. Live calls add another dimension to that understanding. Interactive documentation means that consumers can test requests against your API, supply their own inputs and see the response inline.

You’ll want to add other types of documentation, too, such as tutorials. Look for a tool that allows you to have customized documentation alongside your generated docs. You’ll also may want to match your site’s style and navigation.

For an example of fully customizable, generated docs, see [Stoplight’s hosted API documentation](https://stoplight.io/documentation/)

### Create Mock Servers
Just as interactive documentation adds another dimension beyond simple reference, you can benefit from making calls against your API while you design. Your OpenAPI spec can be used to create mock servers that use responses you’ve included in your design. You can collaborate with others around real data and seek early feedback from API consumers.

Much as documentation is built and rebuilt as you update your API description, mock servers can also automatically have your latest changes. Integrate with your own API as you build it by including mock server endpoints in your code, or coordinate with API consumers and collaborators to write tests or sample code. Code you write against a mock server isn’t wasted, because only the server root will change when you move to production.

Sometimes hard-coded responses aren’t enough for validation. For example, you might need dates in the future, or want to randomize some of the content in your results. Some tools, such as [Stoplight’s Prism-based mock servers](https://stoplight.io/mocking/) allow you to extend your API description with scripts before or after traffic reaches your mock server.

### Automatically Test Your APIs
Mocking API calls before they’re in production is a good idea. Once your API is live, you’ll also want to make sure it’s built the way you’ve described. That’s where API testing comes in.

Your OpenAPI definition describes exactly how your API can be used and what response to expect. During testing, you create scenarios for how your API is used, then run them to make sure you get the correct HTTP status code for the method used. If your OpenAPI document is a contact, testing makes sure you’ve built it true to the terms.

Testing can be built into your CI/CD pipeline, so you always know that your tests are passing. Like other software testing, you can track coverage, ensuring that errors are unlikely to slip through. You can build fully customizable tests with built-in coverage reporting with [Stoplight OpenAPI testing](https://stoplight.io/testing/).

### Use Linting to Spot Errors
As you design your APIs using OpenAPI, you’ll need to conform to the spec’s schema. You can use linting tools to validate your JSON or YAML as you write. An accurate API definition is important so that you can feel confident that other tools will interpret your API the way you expect.

Linting tools come in command line, editor plugin, and built-in varieties. It helps you spot errors before you commit them to your repository. Since the OpenAPI spec becomes your source of truth, you want it to be right!

More advanced linting tools can also help you design consistent APIs. For example, have you decided to use plural terms for your resources? If you have an API style guide, you may be able to use a linter to catch that singular endpoint before it goes live. Consistency leads to a better developer experience and a greater likelihood that your API won’t need major changes.

Regardless of how much your tools help you, it’s a good idea to become familiar with structure and elements of your OpenAPI documents.
