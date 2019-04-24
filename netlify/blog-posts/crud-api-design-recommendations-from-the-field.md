---
path: /blog/crud-api-design
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-04-24T17:01:00.707Z
author: Lukas Rosenstock
title: CRUD API Design Recommendations From the Field
subtitle: 'When and how it makes sense to create, read, update, and delete in your API'
image: /images/create-wall.jpg
color: blue
tabs: []
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'When and how it makes sense to create, read, update, and delete in your API'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: CRUD API Design Recommendations From the Field | Stoplight API Corner
  image: /images/create-wall.jpg
  twitter:
    description: >-
      When and how it makes sense to create, read, update, and delete in your
      API
    title: CRUD API Design Recommendations From the Field | Stoplight API Corner
    image: /images/create-wall.jpg
    username: '@stoplightio'
---
Good API design is essential for excellent developer experience. One straightforward way to approach good API design is to follow a certain design paradigm and the best practices that come with it. CRUD is one of those common design paradigms that works well for a lot of APIs.

In this post, we'll have a look at what CRUD means and whether it's the right design approach for your API. Then, we'll talk about the cornerstones - crafting proper URLs and choosing the appropriate HTTP verbs. Finally, we'll look at a small sample API to show how the recommendations come together.

## Let's talk about CRUD

CRUD is an acronym that comes from the world of databases. Each letter stands for one type of action that a user can perform on a set of data: *C*reate, *R*ead, *U*pdate, and *D*elete. In relational databases, the four activities match the SQL commands INSERT, SELECT, UPDATE and DELETE.

It's possible to apply the CRUD concept to the world wide web and its underlying HTTP protocol. Every URL points to a resource, that is, a set of data. And you can access those with different HTTP verbs: GET, PUT, POST and DELETE. Spoiler alert: these verbs do _not_ match CRUD exactly. But more about that later.

Many APIs follow this paradigm, so you'd be in good company. For developers who have already worked with other APIs, the developer experience will immediately be familiar and consistent, which is fantastic. On the other hand, you should think about whether performing CRUD operations on resources is the best approach for your use case.

Here's an idea on how you could assess the CRUD paradigm’s applicability for your API. First, see if you can name one or more resources or things, for example, files, documents, appointments, contacts, tasks, etc.. Then, put them into the following sentence: "Using my API, users can create, read, update and delete $THINGs." If you feel that this sentence is a good summary of your API, go for it! If you think it captures the essence of your API, but some part is missing, for example, because users can do a multitude of other actions on the resources, you can still use the CRUD paradigm and bolt on those other actions. We'll discuss this in the section about URL design. If the whole phrase feels off, another design paradigm could be better suited. For example, the RPC (Remote Procedure Call) approach means that you think of your API in terms of executing commands instead of performing actions on resources.

One more remark: many developers think that CRUD is necessary for your API to be RESTful. That is a common misconception. These terms describe different aspects of API design. However, CRUD and REST work nicely together.

## URL Design Best Practices

As we've established before, URLs describe resources whereas HTTP verbs describe actions that can be taken upon them. That leads us to the first rule of CRUD URL design: URLs should contain only nouns, never verbs, unless you are deliberately adding something to your API that doesn't fit the CRUD paradigm.

The nouns in URLs are the same that describe your domain model. When modeling your domain, pay attention to the following:
* Do not make nouns unnecessarily long and complicated (`users`, not `system-users`).
* Use common terminology (`people` instead of `special-snowflakes`).

Apart from the noun rules, there are a few other best practices that the industry has established and many companies have put down in their API style guides:
* Use lowercase (`/items` not `/Items`) to avoid the ambiguity around URL case-sensitivity.
* For individual resources, include resource identifiers in the path, not the query (`/contacts/22` instead of `/contacts?id=22`).
* Paths that end with a resource name (and typically no trailing slash) are used to list multiple items (`/files`) or create items without specifying an identifier.
* Paths can indicate a hierarchy of subresources (`/contacts/22/addresses`), but API designers should avoid complex structures that require more than two levels of nesting.
* Nouns should be in the plural form (`/files` instead of `/file`) unless they describe a singleton.
* Nouns that are compounds of multiple words should use a hyphen as a separator (`/legal-documents`). There's a very mundane reason for this: when URLs are hyperlinks, they are often underlined, which would render an underscore separator invisible.
* URLs should _never_ reveal the underlying implementation (`/resources` not `/api.php/resources`).
* The query part of the URL is for search and filtering and commonly used with a resource list endpoint (`/contacts?first_name=Anna&limit=20`).

Now, let's have a look at the more controversial issues:

### Versioning

Many APIs add a version prefix to their paths (`/v1.0/users/{ID}`). While this is undoubtedly an easy way for clients to convey their preference for a specific API version, URL design purists might argue that this is not part of the resource and therefore doesn't belong in the URL. They prefer configuring versioning as part of the account, sending the information as an HTTP header or building the API in a backward-compatible way so that it does not require versioning at all. As versioning is a whole different topic unto itself that depends on the full API lifecycle in your project, I won't recommend one way over the other here.

### Resource Types

Occasionally, API developers add a suffix to their paths to indicate the serialization format of a resource (`/contacts/{ID}.json`). Newer APIs that do not require other serializations such as XML for legacy reasons go all-in on the JSON bandwagon. Therefore, if you don't expect to support anything other than JSON anyway, the `.json` in the URL becomes redundant. And even if you do, down the line, there's an alternative: the HTTP _Accept_ header. On the other hand, if offering resources to less experienced developers in formats like CSV is one of your use cases, these developers will greatly appreciate being able to replace `.json` with `.csv` instead of fiddling with HTTP headers.

### Non-CRUD Actions

The four words create, read, update, delete don't necessarily suffice to describe all actions that can be taken upon resources. For example, you might want to block or suspend a user, which is different from deleting them.

It is often possible to map these to update actions, for example, updating a user with a status attribute set to _suspended_, but in other instances, this could feel clunky and forced.

In those cases, it makes sense to include actions as resources and place them at URLs such as `/users/{ID}/actions/suspend`. It's a great idea to denote them clearly, e.g., by prefixing them with `/actions`, although the use of a verb (like "suspend") already gives it away that we're breaking away from pure CRUD for better developer experience.

## The HTTP Verbs

Using HTTP verbs correctly and adequately is one of the cornerstones of good API design, and the basics are not very complicated so that you are in for a "quick win" here!

First, the straightforward verbs:
* **GET** is for reading or retrieving data, the R in CRUD. This verb is _idempotent_ so that making the same GET request twice returns the same response (unless the underlying data changed in the meantime) and it's also _safe_ because it doesn't alter the server-side state. When designing an API, you should never, ever use GET for something that can modify a resource on the server.
* **DELETE** is the D in CRUD and removes one or more resources from the server.

As mentioned before, for _Create_ and _Update_ there's no exact mapping. Most of the times, CRUD API design uses POST for Create and PUT for Update, which has to do with the semantics of these verbs:
* **PUT** affects the resource identified by the URL. For example, a PUT on `/users/1` either creates a user with the ID 1 or modifies the existing user with this ID. Since most APIs generate identifiers on the server and do not allow creating resources in this way, PUT is confined to update operations but, again, this is not inherent to this verb. Also, PUT is idempotent because doing the same update twice won't be harmful.
* **POST** sends data to the server and leaves it up to the server to do something with it. It is the most flexible verb. In the context of CRUD APIs it is typically used to create resources where the URL of the final resource is not a priori known. For example, a POST to `/users` creates a new user with a new ID, which then can be retrieved from, e.g., `/users/1`. POST is not idempotent because a repeated request to `/users` would create a second user at `/users/2`. POST is also applicable to all non-CRUD actions.

On a side note, there's also the lesser known PATCH verb that applies to CRUD APIs, too. My colleague Chris Wood is about to publish an article about the intricate details of PUT, POST, and PATCH.

## For your reference

The [API design guide from the White House](https://github.com/whitehouse/api-standards) reflects a lot of the advice I've shared about URL design and verb choice as well. I can also recommend [Zalando's API design guidelines](https://opensource.zalando.com/restful-api-guidelines/index.html#introduction) and the [HTTP+JSON design practices compiled by Heroku](https://geemus.gitbooks.io/http-api-design/content/en/) if you want to dive deeper.

## Example CRUD API in Action

Let's look at a practical example and apply what we have learned about URLs and HTTP verbs. Our scenario will be a small CRM (Custom Relationship Management) system for a company (not the most creative example, I agree) with the following requirements:
* The CRM has contacts, and each contact has notes and emails attached to them.
* API consumers can create, read, update and delete contacts as well as notes.
* Access to emails via the API is read-only (let's assume the company's mail server is integrated directly with the CRM and doesn't use the API).  

Based on those requirements, these are our resources:

* All contacts: `/contacts`
* Individual contact: `/contacts/{cID}`
* Notes for contact: `/contacts/{cID}/notes`
* Individual note: `/contacts/{cID}/notes/{nID}`
* Emails for contact: `/contacts/{cID}/emails`
* Individual email: `/email/{eID}`

Ok, let's unpack and clarify a few things. Why are we using `/emails/{eID}` and not `/contacts/{cID}/emails/{eID}` for an individual email, even though the list of emails is at `/contacts/{cID}/emails` and we have followed this pattern for notes?

Ultimately, it boils down to the kind of identifiers you use. Our API designer's reasoning could have been that _Email IDs_ are globally unique, but _Note IDs_ aren't. Good API design keeps URLs as short as possible.

In an OpenAPI file, we define _operations_. An operation is a combination of a URL and a verb exposed by the API. Implementation frameworks also call those _routes_. So, which operations, or routes, do we need?

For contacts, we can do all CRUD actions, so there'll be the following:
* **GET** `/contacts`
* **POST** `/contacts`
* **GET** `/contacts/{cID}`
* **PUT** `/contacts/{cID}`
* **DELETE** `/contacts/{cID}`

These are the five operations that you'll find most of the time: GET and POST on the resource list URL, and GET, PUT and DELETE on the individual resource URLs. Note that the curly braces indicate a placeholder. A few frameworks for API implementation present this structure by default.

The same approach applies to notes, except that we have longer URL with (sometimes) two placeholders:
* **GET** `/contacts/{cID}/notes`
* **POST** `/contacts/{cID}/notes`
* **GET** `/contacts/{cID}/notes/{nID}`
* **PUT** `/contacts/{cID}/notes/{nID}`
* **DELETE** `/contacts/{cID}/notes/{nID}`

Finally, for emails, we have fewer operations as they are read-only:
* **GET** `/contacts/{cID}/emails`
* **GET** `/email/{eID}`

That covers all the routes for the current requirements. You can put them down in an OpenAPI file, for example using Stoplight's Visual API Designer, to have a machine-readable definition that can feed into the next steps of your API's lifecycle, such as implementation, documentation, and testing.

One final remark, before you start extending your API with new methods: You should never use an operation that follows the CRUD schema outlined here for a different purpose. For example, a **POST** on `/contacts/{cID}/emails` is reserved for _creating_ emails, should that feature be required somewhere down the road. If you decide to leverage that verb and URL for a different action on a contact's emails, you will stand in the way of your API's evolution.
 
## Conclusion

CRUD is a commonly used paradigm for API design that fits a lot of scenarios, but not all. If CRUD is right for your API, the right choice of verbs and good URL design will help make your API feel consistent which, in turn, leads to good developer experience.
