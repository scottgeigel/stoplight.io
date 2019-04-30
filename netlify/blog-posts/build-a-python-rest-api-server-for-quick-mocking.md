---
path: /blog/python-rest-api
tags:
  - blog
  - blog-mocking
relatedTags:
  - blog-mocking
publishedDate: 2019-04-30T23:30:17.249Z
author: Adam DuVander
title: Build a Python REST API Server for Quick Mocking
subtitle: Use Flask or Falcon to serve API requests
image: /images/python-snake.jpg
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
  description: Use Flask or Falcon to serve API requests
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Build a Python REST API Server for Quick Mocking | Stoplight API Corner
  image: /images/python-snake.jpg
  twitter:
    description: Use Flask or Falcon to serve API requests
    title: Build a Python REST API Server for Quick Mocking | Stoplight API Corner
    image: /images/python-snake.jpg
    username: '@stoplightio'
---
Throughout web and mobile software, you’ll find APIs to exchange data. They are now a foundational element of the development process. Many organizations have adopted an API-first approach, where this interface that programmers see is built before one that users see.

The most forward-thinking companies will prototype their API designs before committing them to permanent code. While this can happen with any language, Python is easy to read and has straightforward frameworks to help build REST APIs. In this tutorial, we’ll look at two Python API frameworks, as well as a code-free way to create mock servers. 

## Code-First vs Design-First APIs

Before diving into Python examples, it’s important to understand the overall API design process. Your goal is to quickly create an interface. You want our API consumers (such as a frontend web team) to envision what’s possible, even before live data is flowing through the code. You’ll get early feedback that could lead to important updates to your API that could have been major changes if you waited until the API was “complete.”

This **design-first API process** is covered in the [API Design Guide](https://stoplight.io/api-design-guide/basics/), which says design-second APIs are an oxymoron. In other words, anyone creating an API is designing one. Unfortunately, in **code-first APIs**, the design is a guess that gets harder to change.

Keep in mind, even as you stub out the endpoints in this tutorial, we’ll be using mock data. It’s meant as a representation of your API-in-progress. It’s up to you whether you iterate upon it for your eventual production API.

## Create Your First Endpoint

Most REST APIs use resource endpoints and HTTP methods to help communicate actions. In this first example, let’s create a `/companies` endpoint and perform a simple GET request to retrieve a list of companies.

### Flask vs Falcon for REST APIs

There are many ways you can stub out your APIs in Python. This post includes the same examples in two frameworks, so you can compare their approaches and decide which to use.

* [Flask](http://flask.pocoo.org/) is a web framework that can be adapted to return JSON (or any data).
* [Falcon](https://falconframework.org/) is more opinionated and built specifically for REST APIs

We’ll cover them in that order, since Flask examples are typically shorter.

### A Simple Flask GET Request

Firstly, make sure you have Flask installed. It’s easiest to use Python package manager, pip:
`pip install flask`

Now open up a new text file and copy-paste these contents:

```
from flask import Flask, json

companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]

api = Flask(__name__)

@api.route('/companies', methods=['GET'])
def get_companies():
  return json.dumps(companies)

if __name__ == '__main__':
    api.run()
```

The code includes a hard-coded array of two company objects to use as results. Next, we initialize Flask and declare a route for our endpoint. When a consumer visits `/companies` using a GET request, the list of two companies will be returned.

Save the code as `flaskapi.py` and then run it from the command line: `python flaskapi.py`. Follow the local URL provided, and tack on our endpoint, such as http://localhost:5000/companies

Your results should be something like:

```
[
   {
      "id":1,
      "name":"Company One"
   },
   {
      "id":2,
      "name":"Company Two"
   }
]
```

Now let’s see how the same example looks in Falcon.

### A More Structured Falcon GET Request

Like Flask, Falcon can be installed using pip. At the same time, you can install gunicorn, an HTTP server:
`pip install falcon gunicorn`

Unlike Flask, Falcon does not have a built-in server. Now open up a new text file and copy-paste these contents:

```
import falcon, json

class CompaniesResource(object):
  companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
  def on_get(self, req, resp):
    resp.body = json.dumps(self.companies)

api = falcon.API()
companies_endpoint = CompaniesResource()
api.add_route('/companies', companies_endpoint)
```

There’s a bit more to the boilerplate for Falcon. It uses a class for each resource and connects routes to instances of a resource. Due to the use of a class, it makes more sense to declare the hard-coded array of companies within the company resource class. The result is the same as our previous example, returning the JSON version of the company list.

Save the code as falconapi.py and then run it using gunicorn: `gunicorn falconapi:api`. Follow the local URL provided, and tack on our endpoint, such as http://localhost:8000/companies

Your results should be identical to the previous example:

```
[
   {
      "id":1,
      "name":"Company One"
   },
   {
      "id":2,
      "name":"Company Two"
   }
]
```

Now let’s see what it looks like when you want to add a company using the POST method.

## Add Other Methods and Endpoints

Rare is the API with only one endpoint and request method. To get a better feel for creating REST APIs with Python, let’s see how we can expand an API using Flask and Falcon.

### Add a Flask POST Request

Open `flaskapi.py` in your text editor and find the line after the last `return`. We’ll add a new copy of the same endpoint:

```
@api.route('/companies', methods=['POST'])
def post_companies():
  return json.dumps({"success": True}), 201
```

This will look for a POST to `/companies` with company data in the body of the request. Rather than handling the data (since this is just mocking the endpoints), we return success and include a 201 status code. In the GET example a status code wasn’t required because 200 is Flask’s default.

You can copy existing routes to add other endpoints. Edit the path and method to match your requirements. Flask does not restrict how you declare your endpoints, but you’ll find it easier if you keep them logically grouped.

### Falcon Keeps You Resource-Focused

By contrast, Falcon organizes your API with a separate class for each endpoint. HTTP methods are declared with specific functions within the class.

Open `falconapi.py` and define a new function below the existing `on_get` function:

```
  def on_post(self, req, resp):
    resp.status = falcon.HTTP_201
    resp.body = json.dumps({"success": True})
```

To handle a POST, we define an `on_post` function. As with our Flask example, we’ll simply return success, along with a 201 status code. Falcon also assumes a 200 and has helper constants for common statuses.

## Build Mock Servers Without Code

Both Flask and Falcon provide fast ways to prototype a REST API in Python. If you are practicing design-first APIs, you can create mock servers before you write any code. All you’ll need is an OpenAPI document of your new API. For design-first organizations, these machine-readable descriptions serve as a source of truth for what’s possible with an API.

You can use an open source command line utility like [Prism API Server](https://github.com/stoplightio/prism) to stage a mock API. It will consume your OpenAPI document to determine the endpoints, methods, and data supported by the API. Then it serves mock data and validates the API description.

![Dynamic mock servers in Stoplight](/images/dynamic-mocking.png "Dynamic mock servers in Stoplight")

Stoplight also provides [hosted mock API servers](https://stoplight.io/mocking/) which connects Prism to your API design and testing process. It’s easy to make sample calls against your mock API right from the browser. Then you can share them with your team and even connect your server to the frontend before you write any backend code.

No matter how you create your REST API, whether through code or generated from an OpenAPI document, collaboration is important. Mock APIs help you get feedback early. You can learn more in our _[Mock API Server Guide](https://stoplight.io/mock-api-guide/basics/)_.
