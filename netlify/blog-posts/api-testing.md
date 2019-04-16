---
path: >-
  /blog/api-testing-achieving-quick-and-easy-service-virtualization-with-stoplight-a590f20a414f
tags:
  - blog-testing
  - blog
relatedTags:
  - blog-testing
publishedDate: 2017-05-31T22:52:07.204Z
author: Stoplight
title: Achieving Quick and Easy Service Virtualization
subtitle: How to use Service Virtualization to test APIs with Stoplight
image: /images/api-testing.jpeg
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: How to use Service Virtualization to test APIs with Stoplight
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Achieving Quick and Easy Service Virtualization | Stoplight API Corner
  image: /images/api-testing.jpeg
  twitter:
    description: How to use Service Virtualization to test APIs with Stoplight
    title: Achieving Quick and Easy Service Virtualization | Stoplight API Corner
    image: /images/api-testing.jpeg
    username: '@stoplightio'
---

API testing is being adopted at an increasingly faster rate. This may be partly due to the wide adoption of RESTful services over the years, which are prized for their ability to match the quick iteration of dev teams.

Yet while API testing is increasingly common, it’s not necessarily a fun thing to do. For many DevOps teams, API testing is a time-consuming and difficult process. The act of writing API tests can be tedious; it sucks the joy out of being a developer. Sometimes, testing is left to QA, isolating developers from the process — which is never good, because according to the DevOps mantra, no one should work in silos.

Fortunately, there’s a way to make API testing fun and easy again. It involves using service virtualization to take the tedium out of the traditional testing workflow.

In this article, I’ll show you how API testing can add significant value to your team, and how easy it is to implement with Stoplight. I’ll start by walking you through setting up an API spec for a basic CRUD service. Then we’ll run some tests.

### **Something to Test**

For the purposes of this article, we’ll assume we have a simple *Express* and *Node.js* API that performs some basic CRUD operations on a MongoDB database. Each document has a schema matching the following example:

    {
     "_id": "5889481213d6a93ada33e23c",
     "item": "Canned tomato soup",
     "quantity": 7,
     "expires": "2018–04–13",
     "created": 1492916510
    }

### **Connecting the Services to Stoplight**

The next step is to set up an account for testing. If you don’t already have a Stoplight account, head over to their website and get their new desktop app, [Scenarios](http://stoplight.io/platform/scenarios/). Sign up and create a new organization.

Next, create an API specification. Make sure the **API Spec** tab is selected and fill out the form. All we need for this example is a name.

![](https://cdn-images-1.medium.com/max/800/0*cvftwMv_Scx1ag73.)

Now that you are in, you can use Stoplight’s visual CRUD builder to define your model. All changes made via the interface write to the Swagger spec, displayed in the built-in text editor to the bottom of your window.

Stoplight’s Visual OpenAPI Specification (OAS) Editor is intuitive and easy to navigate. However, to save time, I copied the contents of this Swagger file: [http://www.jsoneditoronline.org/?id=ed42666d21301233f5d9a99a53d06f9c](http://www.jsoneditoronline.org/?id=ed42666d21301233f5d9a99a53d06f9c)

![](https://cdn-images-1.medium.com/max/800/0*N2pvMEAdZdVU9sor.)

I want to take a minute to talk about the OpenAPI Specification. If you are unfamiliar with OAS, check it out over at [https://github.com/OAI/OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification).

Although knowledge of OAS is not required to use Stoplight, learning it puts you in a better position to dramatically improve the way you and your team work with and on REST APIs. It was designed to add a layer of abstraction over an API, so that computers and humans are able to instantly understand the functions of the API without reviewing source code or reading documentation. I highly recommend giving it the time.

Stoplight in its purest form is an OpenAPI editor. All edits made in the visual editor can be written either to Stoplight servers or to a JSON file on your local machine to an editable Swagger JSON file.

### API Testing

At this point, we now have our API specification. Hooray!

The next thing we need is to be sure that our API works and that it reflects what we described in our API spec. We can do this quite easily by heading over to the Scenarios section of the Stoplight app.

Click your organization’s name in the breadcrumbs navigation in the top left. Then create a new **Scenarios Collection.** Give your collection a name.

![](https://cdn-images-1.medium.com/max/800/0*FwgCF--OLbapskU_.)

Once in, the first thing you need to do is connect your spec, the one we defined before, so go to the **Connections** tab and click **Select Specs.** Look for the spec you defined previously from the dropdown menu labelled **SRN.**

Go back to **Scenario Collection.**

Under the **Collection Settings,** set your API’s host. I’m running locally on port 3000.

![](https://cdn-images-1.medium.com/max/800/0*53BODTHr7yrpaZnW.)

Next, on the **Coverage** tab, you’ll notice that Stoplight has read the contents of your spec and displayed all the operations and their endpoints.

From here, we can quickly click endpoints to create a scenario. Let’s run through an example scenario:

1. POST a new item. Passes if the status code is 201 and the response object is valid.

1. GET the newly created item using the ID returned in the response object when the item was created. Passes if the status code is 200 and the response object is valid.

1. PUT to the same item using the ID returned in the response object. Passes if the status code is 200 and the response object is valid.

1. DELETE the same item using the ID returned in the response object. Passes if the status code is 204 and the response object is valid.

1. GET the same item using the ID returned in the response object — The object should no longer exist and return a 404 in order to pass.

Now, we’re almost ready to run our test. We just need to double-check to make sure we capture the ID after the object is created.

From the sidebar, select **CREATE item**. Then from the **Captures** tab, choose **Add Capture**. Give your capture a name. I went with itemsId. Select from the output body output.body, and type the name of the property. In our case, we want _id.

![](https://cdn-images-1.medium.com/max/800/0*BeqGBYd1smQ8uRMD.)

Perfect! We are all set to run our tests. Click **Run Scenario** and watch your tests pass.

![](https://cdn-images-1.medium.com/max/800/0*t8dBL7bgJ8aoabLW.)

### In Conclusion

There are a number of things about Stoplight’s Scenarios that we didn’t cover here. If you wish to get more insight into what else it can do, a good place to look is [Intro to Scenarios](/blog/introducing-scenarios-3b88242cf9cc). This is by no means a complete overview of Stoplight and its tools. My hope is, however, that if you have been on the fence about writing tests, or don’t necessarily like to write them, that this intro will give you the courage to take the leap. The added benefit of using Stoplight is getting familiar with Swagger/OAS. It acts as a gateway to using more sophisticated or commonly used tools.
