---
path: /blog/introducing-scenarios-3b88242cf9cc
tags:
  - blog-testing
  - blog
relatedTags:
  - blog-testing
publishedDate: 2017-02-09T00:05:29.244Z
author: Stoplight
title: Introducing Scenarios
subtitle: 'The lean, mean, API testing machine'
image: /images/introducing-scenarios.png
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'The lean, mean, API testing machine'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Introducing Scenarios | Stoplight API Corner
  image: /images/introducing-scenarios.png
  twitter:
    description: 'The lean, mean, API testing machine'
    title: Introducing Scenarios | Stoplight API Corner
    image: /images/introducing-scenarios.png
    username: '@stoplightio'
---

**Getting Started**

Stoplight Scenarios is a powerful (but accessible!) product that takes the pain out of API testing. Today, we are releasing it as a standalone product, available [on the web](/testing), and as a [desktop app](https://download-next.stoplight.io).

We generally recommend the desktop app when possible, because it can work with local servers, behind firewalls, and with local files.

![API Specification Coverage Report](https://cdn-images-1.medium.com/max/800/1*epCvIcr8745JoqRijKg82A.png)*API Specification Coverage Report*

**OAS / Swagger Integration**

If you are modeling your API with Swagger 2 (whether with the v2 Stoplight app, or with another tool), Scenarios can leverage that specification to automatically build tests for you, provide coverage reports, and apply the specification to your API in the form of contract tests. This is THE best way to make sure that your API specification accurately reflects your API!

**Continuous Integration … err, Integration**

Running Scenarios outside of Stoplight, as part of your CI process, is trivial. Just install [Prism](http://stoplight.io/platform/prism/) on your computer or CI server, and then run something like:

    prism conduct myOrg/scenarios/myScenarios

Prism will run your scenarios locally, pretty-printing out the results as it goes.

![read/write to files on disk](https://cdn-images-1.medium.com/max/800/1*vvPlg4fKJxPesqva0_EtSA.gif)*read/write to files on disk*

**Local File Writing**

The desktop app makes it easy to read/write to files on disk. This allows you to include your specs and tests alongside your code, version them with git, and use your favorite tools to manage them.

Just drag a Swagger or Scenario file onto the app, or click the “read/write to disk” toggle if already in the editor.

## FAQs

* **Does Scenarios costs money?** Nope! The base scenarios product is free. We will be charging for teams support in the near future. If you are a current paying Stoplight customer, your teams plan will carry over.

* **I have a Stoplight account, can I use it?** Yup, just login to Scenarios with your existing credentials. If you use Github to login to Stoplight, you’ll need to go through the forgot password process to generate a password.

* **Can I run tests as part of my CI process?** Yes! See above.

* **Can I collaborate with my team?** Soon! As in this month soon.

* **Can I store my specs/tests with my code?** Yes! Use the desktop app, and toggle the read/write to file mode to on in the scenarios editor.

* **Why is this a standalone app?** Scenarios is built on our upcoming v3 architecture. This architecture is generally faster, and allows for really cool things like read/writing to local files on disk. More info in the looking forward section below.

* **I’m modeling my API in the v2 Stoplight app, can I use it in Scenarios?** Yes! Open the scenarios app and navigate to the “New API Spec” form. On that form, paste in the URL to your v2 Stoplight Swagger JSON export. After importing, there is a button on the editor to “Reload from source”, which allows quick refreshing of the spec from an external source (in this case, v2 Stoplight app).

* **How does this compare to Postman?** Postman is a better fit for simple HTTP requests (Scenarios is overkill for this). Stoplight Scenarios is generally more robust than Postman when it comes to creating actual tests. Things that Scenarios supports that Postman does not include referencing tests from other tests, JSON schema testing, Swagger contract testing, simpler request chaining, local file writing, coverage reports, direct spec editing, multi scenario running, and more.

* **I have more questions?** And we hopefully have answers! Shoot us an email at support@stoplight.io.

## Testing v1

The testing module of the Stoplight app will be removed on March 15th. You are free to continue using it from now until then, and we will provide an automatic migration to Scenarios on March 15th.

## Looking Forward

Scenarios is actually the first product on our new v3 architecture. This architecture is much more robust, and allows for powerful features like local filesystem read/write for seamless interop with your existing workflows (whether it’s generating API specification from code, storing specs in Git, or using your favorite IDE to bulk edit specs every once and a while).

**There will be no changes to existing v2 users in the immediate future**. We are developing v2 (app.stoplight.io) and v3 in tandem, and will be including next generation versions of v2 systems like mocking, modeling, and docs, in v3 over the next few months.

We are also working on an enterprise teams product, with enhanced Prism functionality — will share details soon (or please reach out to us in the meantime if this sounds interesting!).

The Stoplight Team

@marbemac, @pytlesk4, @chrisnlott, @vazhaom
