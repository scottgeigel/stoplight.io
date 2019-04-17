---
path: /blog/api-security-in-openapi-b105ae725a08
tags:
  - blog-design
  - blog
relatedTags:
  - blog-design
publishedDate: 2018-08-16T18:27:33.860Z
author: Lukas Rosenstock
title: API Security in OpenAPI
subtitle: 'An Introduction to API Security with the OpenAPI Specification '
image: /images/api-security.jpeg
color: blue
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'An Introduction to API Security with the OpenAPI Specification '
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: API Security in OpenAPI | Stoplight API Corner
  image: /images/api-security.jpeg
  twitter:
    description: 'An Introduction to API Security with the OpenAPI Specification '
    title: API Security in OpenAPI | Stoplight API Corner
    image: /images/api-security.jpeg
    username: '@stoplightio'
---
Security isn’t something that gets people excited. Developers find it a drag and businesses consider it a cost center. Everyone takes it for granted until it’s not, and that’s when the press starts talking about the next scandal where hackers stole data and violated people’s privacy.

APIs and security are intertwined. APIs are interfaces for the exchange of data and, as such, they are a primary attack vector. Therefore, it’s essential that APIs are adequately secured. That should be part of the mindset during the whole API lifecycle, not just bolted on at the end. Security specialist [Akshay Aggarwal](https://www.linkedin.com/in/akshayaggarwal/) calls this [MASH: Make API Security Habitual](https://nordicapis.com/why-api-security-is-more-important-than-ever/)!

## Basics of API Security

We can separate API security into two main aspects: access control and other technical and organizational measures. Technical measures include things like enabling TLS to encrypt data in transit and disk encryption to save data at rest. Organizational measures are, for example, employee policies around server and database access. We won’t look into these in detail in this article and focus on access control instead or, more specifically, authentication and authorization.

## Authentication and Authorization

By their definition, authentication and authorization are two distinct concepts. *Authentication* means establishing and proving an identity, whereas *Authorization* links that identity to permissions in a system. For APIs, permissions pertain to the availability of resources and actions within.

Authentication and Authorization are, however, typically implemented together and many documents use the terms incorrectly or interchangeably. OpenAPI doesn’t make the distinction as well. Therefore we will look at them in unison. When it comes to APIs, there are two approaches, two-legged and three-legged.

### Two-Legged

In the two-legged approach, one entity authenticates against the API provider. It uses either HTTP Basic Authentication and sends a username and password in the HTTP Authorization header or an API key, which it adds to requests as a header or in the query string. There are other methods such as SSL client certificates, but they are rare due to their complexity. A username and password set or an API key can either identify the API consumer, i.e., the developer of a client application, or an end user who is accessing their data, but never both.

### Three-Legged

The three-legged approach is used to identify both the client application and the user. API providers that grant access to user-specific data based on individual consent but who also want to review every integration of their API use this approach. The most common protocol for three-legged authentication used by virtually every API provider is OAuth, and those who do not use it, have custom protocols with a similar flow.

OAuth works by redirecting users from an API client back to the API provider where they can sign in and approve or deny access. The API provider redirects them back to the client with a temporary authorization code. The client then sends this temporary code with their client ID and secret to the API provider in exchange for an access token, which is like an API key that has a specified scope and is usually valid for only a limited time.

There are other OAuth flows too, but we won’t discuss those in this article.

## Defining Authentication and Authorization in OpenAPI

The OpenAPI Specification allows API designers to specify authentication and authorization as part of their machine-readable API specification through security scheme definitions and security requirements. OpenAPI 2 supports API keys, Basic Authentication, and OAuth. (We will focus on OpenAPI 2 in this article and will follow up on OpenAPI 3 security.) In the remainder of this article, we’ll look at security concepts and terminology in OpenAPI and then walk through defining security using Stoplight’s visual editor as well as OpenAPI specification code for all three modes.

### OpenAPI Security Terminology

A *security scheme* definition is a global definition with a name that designates an authentication method available for the API. It is possible to define multiple schemes if, for example, an API supports both Basic Authentication and OAuth. There can even be various schemes of the same type.

A *security requirement*, on the other hand, can exist both globally for the entire API or on an operation level. It matches the API as a whole or the individual API operation to one or more of the previously defined security schemes. Developers can use this to specify different levels of authorization explicitly, for example, by making read requests available without authentication, but requiring OAuth for write requests.

### Specifying OpenAPI Security with Stoplight

If this is your first time using Stoplight or OpenAPI, I recommend you to [walk through my OpenAPI tutorial](/blog/getting-started-with-api-design-using-stoplight-and-openapi-90fc8f37ac2e), in which you’ll build a simple calendar API and learn both Stoplight’s visual editor as well as the OpenAPI specification itself.

If you already have a project in Stoplight that is missing security, now is an excellent chance to open it and add the definitions and requirements.

If you neither have an existing project nor want to go through the tutorial right now, you can also start a new project. Stoplight adds a sample OpenAPI file called main.oas2 to your workspace, which you can use as the basis.

Open the .oas2 file you want to work in and switch to the *Design* tab. Then, depending on which type of scheme you want to define, follow the instructions in the respective section below.

### Basic Authentication

Basic Authentication is a standard defined by [RFC7617](https://tools.ietf.org/html/rfc7617) that is natively supported by practically every HTTP client and server in existence. It works by sending two credentials — a username and a password — through an HTTP header called Authorization.

Here’s how to specify [Basic Authentication](https://docs.stoplight.io/modeling/modeling-with-openapi/security-schemes#basic-api-authentication) for your API in Stoplight:

1. Click the plus sign that appears next to *Security* in the left column of the editor

1. Give your scheme a name in the key field, such as *basic-auth*. This key must be unique within the API and will be used to reference the scheme in a security requirement

1. Select *basic* in the *type* drop-down menu. There are no further configuration options for Basic Authentication

1. Add a short description if you like

![](https://cdn-images-1.medium.com/max/800/0*vHvDoQ8Y0HzvtpNQ)

Let’s move to the Code tab to see how it looks in OpenAPI. You’ll find your scheme with its key and attributes in the *securityDefinitions* section.

To apply your scheme to an operation, follow these steps:

1. Go back to the *Design* tab

1. Select a path under *Paths* and click on the operation

1. Scroll down to *Request* and expand it, if necessary

1. Click on *Security* to expand it

1. Choose your scheme (e.g. *basic-auth*) in the drop-down or type its name in the field

![](https://cdn-images-1.medium.com/max/800/0*Mmal3c3Xi6J846A4)

When you switch to the *Code* tab, you can see your path and operation in OpenAPI which now includes the *security* attribute that defines the security requirement and includes your scheme. You might wonder why there’s an empty JSON array behind your scheme’s key. The reason for it is that other security types support additional configuration which is not applicable to Basic Authentication.

### API Keys

Unlike OAuth and Basic Authentication, API Keys are not a well-defined protocol. Various APIs have implemented different methods for sending an API key with the request. Many APIs use a query parameter because this is the most accessible approach, especially for inexperienced developers or those working with tools or environments where there are limited options for customizing HTTP requests besides the URL. Since query parameters often appear in logs, this is not a good choice from a security perspective. Using a header avoids this problem. It also follows proper HTTP semantics more closely because headers separate meta information like authentication data from API request payloads that also appear in the query string (i.e., filters and searches). Think about who your API consumer is and make the trade-off, though you could also define two API key schemes to support both options.

Here’s how to specify API Key authentication for your API in Stoplight:

1. Click the plus sign that appears next to *Security* in the left column of the editor

1. Give your scheme a name in the key field, such as *apikey-auth*. This key must be unique within the API and will be used to reference the scheme in a security requirement

1. Select *apiKey* in the *type* drop-down menu

1. Choose *query* or *header* from the *in* drop-down

1. Enter the name for the header or query parameter in the *name* field. Use something like *api_key* for query or *API-Key* for header

1. Add a short description if you like

![](https://cdn-images-1.medium.com/max/800/0*GPw4EFTggUF-Eu8d)

Let’s move to the *Code* tab to see how it looks in OpenAPI. You’ll find your scheme with its key and attributes in the securityDefinitions section.

To apply your scheme to an operation, follow these steps:

1. Go back to the *Design* tab

1. Select a path under *Paths* and click on the operation

1. Scroll down to *Request* and expand it, if necessary

1. Click on *Security* to expand it

1. Choose your scheme (e.g. *apikey-auth*) in the drop-down or type its name in the field. Repeat this if you want to add more than one scheme

![](https://cdn-images-1.medium.com/max/800/0*C450bDqkY7tApdSQ)

When you switch to the *Code* tab, you can see your path and operation in OpenAPI which now includes the *security* attribute that defines the security requirement and includes your scheme. As there’s no additional configuration for API Keys, the scheme’s key points to an empty JSON array.

### OAuth

OAuth is an open standard defined by [RFC6749](https://tools.ietf.org/html/rfc6749) and [RFC6750](https://tools.ietf.org/html/rfc6750). Due to its popularity, there are [a variety of open source libraries](https://oauth.net/code/) to implement an OAuth client or server.

Here’s how to specify [OAuth](https://docs.stoplight.io/modeling/modeling-with-openapi/oauth) for your API in Stoplight:

1. Click the plus sign that appears next to *Security* in the left column of the editor

1. Give your scheme a name in the key field, such as *my-oauth*. This key must be unique within the API and will be used to reference the scheme in a security requirement

1. Select *oauth2* in the *type* drop-down menu

1. Under *flow*, choose the type of flow that your OAuth server implements. If you want to support more than one flow, you must create a new security scheme for each

1. Add your OAuth server URLs in the *authorization url* and *token url* fields. Depending on the flow you selected, you may have to provide a value for only one of them. Stoplight automatically hides the inputs that are not necessary

1. Click the **Add Scope** button. Enter a name and description for your scope. You should add at least one scope for your API, but you can add as many as you want

1. Add a short description if you like

![](https://cdn-images-1.medium.com/max/800/0*eYY3LFcdAWtoAdE9)

Let’s move to the *Code* tab to see how it looks in OpenAPI. You’ll find your scheme with its key and attributes in the *securityDefinitions* section.

To apply your scheme to an operation, follow these steps:

1. Go back to the *Design* tab

1. Select a path under *Paths* and click on the operation

1. Scroll down to *Request* and expand it, if necessary

1. Click on *Security* to expand it

1. Choose your scheme (e.g. *my-oauth*) in the drop-down or type its name in the field. Repeat this if you want to add more than one scheme

1. As soon as you add an OAuth scheme, another input appears which allows you to define the scopes. Choose the scope in the drop-down or type its name. You can also add multiple scopes. Note that, [according to the OpenAPI specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-requirement-object), the intended semantics behind this is that the user must have approved all of these scopes

![](https://cdn-images-1.medium.com/max/800/0*OC01UuRj4rT4T3ee)

When you switch to the *Code* tab, you can see your path and operation in OpenAPI which now includes the *security* attribute that defines the security requirement and includes your scheme. Your scheme key is mapped to the required scopes for the operation.

## How The OpenAPI Specification Benefits API Security

The advantage of having a machine-readable API specification is that quality assurance can test the implementation against it automatically as part of continuous integration (CI). This benefit extends to security. For example, a test script could find the API paths that require authentication, try to make anonymous requests and assert that they fail with an [HTTP 401 response](https://httpstatuses.com/401).

Even outside the explicit security scheme and security requirement definitions, having a tight specification can be a tremendous security benefit. Imagine having undocumented endpoints or additional information in API responses that developers have added for debug purposes which accidentally leak unwanted data. Functional API tests, API monitoring systems, and even API gateways can always verify API traffic against the definition and filter requests and responses based on what the OpenAPI file allows.

## Summary

Every API should be designed with security in mind, and there are multiple aspects to consider for a secure API. OpenAPI allows API designers to specify access control through Basic Authentication, API Keys, and OAuth as part of the API definition. Stoplight makes it easy to create these [security definitions](https://docs.stoplight.io/modeling/modeling-with-openapi/security-schemes). Furthermore, the benefits of an OpenAPI-driven lifecycle improve security as well, by making it testable and enforceable in production without extensive effort. API consumers and their users expect that downstream API providers take security seriously, but also remain convenient with standardized authentication protocols. Therefore, you should not make compromises in this area, and OpenAPI will be a useful instrument in your toolbox to achieve the goal of a secure and private API.
