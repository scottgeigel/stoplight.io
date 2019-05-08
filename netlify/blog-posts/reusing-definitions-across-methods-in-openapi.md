---
path: /blog/reuse-openapi-descriptions
tags:
  - blog
  - blog-design
relatedTags:
  - blog-design
publishedDate: 2019-05-08T17:41:02.296Z
author: Chris Wood
title: Reusing Definitions Across Methods in OpenAPI
subtitle: Bring schemas into your API descriptions and don’t repeat yourself
image: /images/rubber-stamp-cloning.jpg
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
  description: Bring schemas into your API descriptions and don’t repeat yourself
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Reusing Definitions Across Methods in OpenAPI | Stoplight API Corner
  image: /images/rubber-stamp-cloning.jpg
  twitter:
    description: Bring schemas into your API descriptions and don’t repeat yourself
    title: Reusing Definitions Across Methods in OpenAPI | Stoplight API Corner
    image: /images/rubber-stamp-cloning.jpg
    username: '@stoplightio'
---
Less is definitely more in software engineering. When we stand back and admire a job well done, the source of our pleasure is often because we've implemented a terse solution with the fewest lines of code possible. Thriftiness is definitely a virtue amongst software developers.

This tendency towards minimalism should also ring true in our OpenAPI specifications (previously known as Swagger). A concise, well-structured specification document with a [Components Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsObject) that includes appropriately reusable objects is the bare minimum an API designer should aim for. There are opportunities to manifest reuse both vertically - ensuring the overall length of the document is kept both digestible and manageable - and horizontally - by creating [Schema Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) that can readily be used across different operations for the same endpoint.

To that end, API designers can structure their Schema objects so one base definition can readily support appropriate request or response bodies across POST, GET, PUT and PATCH operations. This approach takes some thought on the part of the designer, but is worth the effort to produce a more readily consumable specification (for humans and machines alike).
## Creating and Extending Definitions
The first step for the API designer is create a base object that encapsulates the properties of a given resource. By way of example, a designer may be creating a Customer API that implements a `/customers` collection with each Customer resource identified by `/customers/{CustomerId}`. The properties of the Customer resources are defined by the `CustomerProperties` definition in our OpenAPI document:

```yaml
components:
  schemas:
    CustomerProperties:
      type: object
      properties:
        FirstName:
          type: string
        LastName:
          type: string
        DOB:
          type: string
          format: date-time
        Segment:
          type: string
          enum:
            - Young
            - MiddleAged
            - Old
            - Moribund
```

Consumers of the Customer API can create a new customer by using the `post` operation of the `/customers` endpoint. However, certain properties are mandatory - `FirstName`, `LastName` and `DOB` - so those constraints need to be enforced by combining the `CustomerProperties` object with `CustomerRequiredProperties` that defines a `required` properties list:

```yaml
components:
  schemas:
    CustomerRequiredProperties:
      type: object
      required:
        - FirstName
        - LastName
        - DOB
```

 The two definitions are combined using the `allOf` keyword. These properties are encapsulated in the `CreateCustomer` [Request Body Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#requestBodyObject). The payload will need to be valid against both of the listed schemas for the implementation of the API to successfully process the request:

```yaml
components:
  requestBodies:
    CreateCustomer:
      description: Create a new customer
      content:
        application/json:
          schema:
            allOf:
              - $ref: '#/components/schemas/CustomerProperties'
              - $ref: '#/components/schemas/CustomerRequiredProperties'
  schemas:
    Id:
      type: integer
    CustomerId:
      type: object
      properties:
        Id:
          $ref: '#/components/schemas/Id'
```

The Request Body Object can then be implemented in the `post` operation of the `/customers` endpoint and return the `CustomerId` object to return an identifier for the newly created Customer resource. The `CustomerId` definition can be also be combined with the `CustomerProperties` and `CustomerRequiredProperties` definitions to create the `Customer` definition, again using the `allOf` keyword, to fully describe a Customer resource:

```yaml
paths:
  '/customers':
    post:
      tags:
        - Customer
      requestBody:
        $ref: '#/components/requestBodies/CreateCustomer'
      responses:
        201:
          description: Created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CustomerId'
components:
  schemas:
    Customer:
      allOf:
        - $ref: '#/components/schemas/CustomerId'
        - $ref: '#/components/schemas/CustomerProperties'
        - $ref: '#/components/schemas/CustomerRequiredProperties'
```

The Customer API now has sufficient definitions to both create and describe a Customer resource. Taking this structured approach to creating the definitions gives us the flexibility to reuse then across of HTTP methods.

## GET One or GET Many
The obvious first reuse of these objects is for a GET operation. When implementing a GET to retrieve a given Customer resource we can simply return `CustomerProperties` as we already know the value of `CustomerId` and don't need it back in the response. However, the API consumer will also be interested in understanding the mandatory properties so the Response Object should also include the `CustomerRequiredProperties` definition.

However, if the client wants to retrieve all the Customers that they are authorised for then the API can return an array of `Customer` items. This definition includes the `CustomerId` so we can easily identify a given Customer resource.

```yaml
paths:
  /customers:
    get:
      tags:
        - Customer
      responses:
        200:
          description: OK
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Customer'
  /customers/{CustomerId}:
    get:
      tags:
        - Customer
      parameters:
        - $ref: '#/components/parameters/CustomerId'
      responses:
        200:
          description: OK
          content:
            application/json:
              schema:
                allOf:
                  - $ref: '#/components/schemas/CustomerProperties'
                  - $ref: '#/components/schemas/CustomerRequiredProperties'
components:
  parameters:
    CustomerId:
      name: CustomerId
      in: path
      required: true
      schema:
        $ref: '#/components/schemas/Id'
```

By using these three schemas, we’ve managed to avoid unnecessary repetition in our OpenAPI description. We’ve kept the document readable, while making it easy to extend to other endpoints and methods.
## Update Some or All Properties
We can really see the power of reuse if we want to implement a PUT to update a given Customer resource. With the expectation that we are replacing the properties of a resource completely, we can just use reuse `CreateCustomer` definition as is (perhaps renaming it to `CreateUpdateCustomer`). This definition will apply the same constraints as when the Customer resource was created:

```yaml
paths:
  /customers/{CustomerId}:
    put:
      tags:
        - Customer
      requestBody:
        $ref: '#/components/requestBodies/CreateCustomer'
      parameters:
        - $ref: '#/components/parameters/CustomerId'
      responses:
        204:
          description: Updated
```

However, if we are implementing a PATCH - where we look to update only the properties that need to changed - then we can simply reference the `CustomerProperties` definition as the `required` list should not be applied. However, to successfully implement a PATCH operation we need to allow clients to remove optional properties. One approach to accomplishing this is by implementing [JSON Merge Patch](https://tools.ietf.org/html/rfc7386) where sending `null` indicates that a property should be removed.

We can therefore combine the `CustomerProperties` definition with the `nullable` keyword using `allOf` so that any optional fields can also be removed:

```yaml
paths:
  /customers/{CustomerId}:
    patch:
      tags:
        - Customer
      requestBody:
        description: Update customer with properties to be changed
        content:
          application/json:
            schema:
              allOf:
                - $ref: '#/components/schemas/CustomerProperties'
                - type: object
                  properties:
                    Segment:
                      nullable: true
      parameters:
        - $ref: '#/components/parameters/CustomerId'
      responses:
        204:
          description: Updated
```

Our full OpenAPI document is at a minimum length, while providing readable implementations of GET, POST, PUT, and PATCH.
## Designing for Reuse
The examples above show how the OpenAPI specification can engender significant amounts of reuse from relatively few objects. By incorporating this design approach, it's possible to create terse, well-constructed API specification documents that you as API designer can stand back and be proud of.

