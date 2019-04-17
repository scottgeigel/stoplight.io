---
path: /blog/scenarios-v3-3-update-e2e7f7b39603
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2017-06-12T22:48:20.849Z
author: Stoplight
title: Scenarios v3.3 Update
subtitle: 'Changelog, updates, fixes, & roadmap'
image: /images/changelog-stock.jpg
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'Changelog, updates, fixes, & roadmap'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Scenarios v3.3 Update | Stoplight API Corner
  image: /images/changelog-stock.jpg
  twitter:
    description: 'Changelog, updates, fixes, & roadmap'
    title: Scenarios v3.3 Update | Stoplight API Corner
    image: /images/changelog-stock.jpg
    username: '@stoplightio'
---
Last Thursday we released one of the biggest updates to Scenarios yet. It includes numerous bug fixes, a whole lot of polish, and several new features. This release also coincides with Prism v2-alpha.5, which includes a couple of breaking changes - described below.

## Platform Updates

### Modeler Polish

Our OAS/Swagger 2 modeling tool received a big update. Not only did we squash all of the bugs reported over the last month, but we’ve added shortcuts and organizational improvements throughout the editor.

* You can more quickly extend your specification with buttons in the sidebar.

* Operation data is organized into collapsible sections.

* Most of the root properties have been consolidated to one organized home screen (like consumes, produces, info, etc).

* We now support the global security property in the UI.

![New context-aware actions in the sidebar to quickly add to your spec.](https://cdn-images-1.medium.com/max/800/1*raBK-gZJrKBBie5wp8yV-g.gif)*New context-aware actions in the sidebar to quickly add to your spec.*

![Switch between UI and “raw” edit modes. Navigate the sidebar and the relevant parts of your spec will highlight.](https://cdn-images-1.medium.com/max/800/1*xxGweKczpkW4wCGwc5VpiA.gif)*Switch between UI and “raw” edit modes. Navigate the sidebar and the relevant parts of your spec will highlight.*

### Share Model Data With Connections

As the number of APIs under management increases, it is often desirable to extract common pieces out into a shared API specification(s). These shared pieces can include common model definitions, operations, responses, parameters, and security definitions.

Scenarios v3.3 takes a first step towards this type of functionality. You can now connect API Specs to other API Specs, and then reference models and responses defined in the connected spec. This is all built around the OAS and JSON Schema standards — there is nothing proprietary about it, and your resulting API specs will work well with any tooling that supports these standards.

### HTTP Try It Out

Sending requests to debug your API can be very useful. Typically, you would either do this with cURL, or by defining the requests in client like Postman. Now, with Stoplight, you can use your existing API specification to quickly send requests to your APIs — no need to define and maintain another set of data to send requests (Postman), or manually put together cURL requests.

To use the new feature, simply navigate to your API spec, and then select the “HTTP Try It Out” tab at the bottom of the editor. The request maker tool will autocomplete according to your spec, and update as you navigate around the API operations listed in the sidebar.

Additionally, Stoplight will contract test your existing specification against the request sent. This immediately tells you if your response schemas are accurate to your API (see the “Tests” tab in the gif below).

Finally, you can send requests and then click the magic wand icon at the top of the editor to extend your specification, using the data in the HTTP request. This is a great way to quickly create hundreds of lines of OAS code for pre-existing APIs.

## Prism Updates

The Scenarios collection format received a small update. Collections stored on Stoplight’s servers have been automatically migrated. If you are using the local file feature, you should see a “Migrate” button in the top left of the scenarios editor. Clicking that will migrate your local file to the latest format, and explain the changes.

We anticipate that this will be one of the final changes to the collection format (if not the final one) before the formal Prism 2 release.

### CLI Breaking Changes

If you are using the Prism 2 alpha to work with Scenarios, run “prism update” in your terminal to get the latest version, which is 2-alpha.5 at the time of this writing. Run “prism version” to see what version you currently have installed. More details on the changes [here](https://github.com/stoplightio/prism/releases/tag/v2.0.0-alpha.4).

Over the next month we will be introducing easier one-click mock servers, and Hubs! Hubs is the next version of our documentation platform, and we are are excited to share what we have been working on with everybody. If you have not already, you can sign up for scenarios at [https://stoplight.io/testing](/testing).
