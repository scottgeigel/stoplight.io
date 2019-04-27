---
path: /blog/mock-json-generator
tags:
  - blog
  - blog-mocking
relatedTags:
  - blog-mocking
publishedDate: 2019-04-03T18:42:07.305Z
author: Adam DuVander
title: JSON Generator for Mock API Data
subtitle: Create random JSON and host it on a mock server
image: /images/mock-car.jpg
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
  description: Create random JSON and host it on a mock server
  robots: 'index, follow'
  title: JSON Generator for Mock API Data | Stoplight API Corner
  image: /images/mock-car.jpg
  twitter:
    description: Create random JSON and host it on a mock server
    title: JSON Generator for Mock API Data | Stoplight API Corner
    image: /images/mock-car.jpg
---
With so many APIs using JSON responses, it’s become the common format to express data. It’s has a simple syntax, is human-readable, and can be efficiently parsed in modern languages. Typically, JSON is generated from existing data structures and databases. Yet, when sharing examples, mocking APIs, or building documentation, you may find yourself creating a lot of JSON by hand. That’s when you’ll wish you could generate the data automatically.

## Why Create Dummy JSON Data?

Saving manual work is a great reason to generate JSON, but why even create it in the first place? You may be designing an API and not have live data yet. Or perhaps, the service is live and returning data, but it contains sensitive personal information. In that case, you don’t want to send real data to anyone who isn’t authorized to receive it. The goal of a JSON generator is to create a representative data sample that appears real enough to be useful.

There are all sorts of places your generated data could end up:

* Example results in tutorials
* Mock API server responses
* API references and other documentation
* Input for integration tests
* Replies to support emails
* Samples in your OpenAPI/Swagger definitions

Many times you’ll find the same mock data gets copied to multiple locations. It may seem simple enough to make up your own data, especially if the schema is trivial:

```
{
    "user_id": "abcdef1234ghi",
    "name": “Mock Holliday",
    "email": “mock.holliday@example.com",
    "birthdate": "1971-08-01T00:00:00+00:00”
}
```

But your schema is likely more complex. And you’ll come upon situations where you need more than a single result. No matter how creative you are, you don’t want to be generating something like an array of 100 distinct responses.

## Generate JSON as One-off Dummy Data

In our [API Mocking Guide](https://stoplight.io/mock-api-guide/basics/) we cover several methods to generate mock data and API servers. Live API endpoints are useful for getting feedback on a new API or ensuring the responses meet expectations. Many of the reasons you’ll want to generate JSON don’t require an API server. For those situations, one-off data may suffice.

![JSON Generator](/images/json-generator.png)

You can quickly generate JSON [using a tool](https://www.json-generator.com) created by Stoplight engineer Vazha Omanashvil. When loaded, it includes an extensive JSON template as an example. You can edit as needed and include your own JavaScript to tune the format you need for your dummy data.

For example, the simple example from the previous section can be repeated 100 times with the following template:

```
[
  {
    'repeat(100)': {
      user_id: '{{objectId()}}',
      name: '{{firstName()}} {{surname()}}',
      email(tags) {
        return `${this.name}@example${tags.domainZone()}`
          .toLowerCase().replace(' ', '.');
      },
      birthdate: '{{moment(this.date(new Date(1953, 0, 1), new Date(2000, 0, 1))).format("")}}'
    }
  }
]
```

Within the repeat block there are four fields that use built-in data types and features:

* `user_id` uses the `objectId()` tag to create a unique identifier
* `name` calls two tags: `firstName()` and `surname()` with a space between them, as expected
* `email` gets a little more complicated because it requires a function to call the previously-generated name and uses an example domain with a random extension (via the `domainZone()` tag). Finally, the JavaScript string functions ensures it formats like an email address.
* `birthdate` calls to Moment.js formatting after generating a random date that puts this user between approximately 18 and 65 years old.

You’ll find a handful of other tags and examples on the site. It takes a little effort to get going, but much less than making up the data yourself. For large one-off JSON data files, this is a relatively quick way to get some realistic sample data that won’t give away anyone’s personal information.

For something more ongoing, attached to mock servers, you’ll be better off starting from an OpenAPI (previously Swagger) description, as described in the next section.

## Connect a Mock Server to Produce Random JSON Data

A mock API server is useful during development and testing when live data is either unavailable or unreliable. Here, you’re looking to make a live API call and have it imitate a real API server by providing realistic responses to your requests. Standing up a mock server with static responses is trivial, but then the responses aren’t generated. Instead, use an OpenAPI description of your API (or import you Swagger file) and Stoplight to generate your mock servers.

[Login to Stoplight](https://next.stoplight.io) and create or import an API. If you don’t already have an OpenAPI description, you’ll be able to export one from here. The format is widely embraced as a way to define what’s possible with an API in a shareable, machine-readable way. For teams designing APIs and microservices, OpenAPI documents are often the source of truth.

If you’re starting from scratch, click the “+” by _Modeling_ to get started with a fresh OpenAPI document.

![Create a model](/images/create-model.png)

To emulate our earlier example, the first thing we need to do is create a User model. Click the “+” by _Models_ and fill in the key and title. Then, in the editor tab below, add four fields. In this case, the types are all strings. However, you can use validations to note the special types of strings for the email and birthdate fields.

At this point, we have a model of the user object, but no way to retrieve it with the API. To do that, we need to add a path to our API. Click the “+” by _Paths_ and add a `/users` endpoint. You’ll need to create an operation ID, a unique string that Stoplight uses to reference this operation. Here I used `GET_users`.

![Reference your model in responses](/images/reference-model.png)

Scroll to the bottom of the path details and you’ll see an editor tab that looks similar to the one from the modeling section. For a return type, choose `array`, since we’ll be showing multiple users. For the array items type, choose `$ref` and for the target, you can select the model we previously created.

Now we’ve successfully modeled both our data and the path. To mock the results, click the “+” next to _Servers_. Create an API and under connected specs add your OpenAPI document.

![Use shared rules to set up your mock server](/images/mock-rules.png)

Finally, you’ll need to create a new rule, select your API, and add shared before/after scenarios. This ensures the traffic for the mock server is connected to your API.

Now you can click _Home_ and Send Test Requests for your mock server to `/users` (the endpoint you created earlier). You can take the mock server URL that was automatically hosted and call it from code, other API testing tools, or however else you want to use this mock server with generated results.

## How Will You Use Your Mock Server?

Now that you have a mock server connected to your OpenAPI or Swagger description, you can use it to make test calls. Share it with your co-workers or API consumers so you can get feedback before you build commit your API to code.
