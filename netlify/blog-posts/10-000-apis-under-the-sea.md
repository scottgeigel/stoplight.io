---
path: /blog/10-000-apis-under-the-sea-28a3db17666f
tags:
  - blog-industry
  - blog-general
  - blog
relatedTags:
  - blog-industry
  - blog-general
publishedDate: 2018-07-11T19:15:59.311Z
author: Robert Wallach
title: '10,000 APIs Under the Sea'
subtitle: 'An Exploration of API Directories '
image: /images/apis-under-sea.jpeg
color: indigo
disqus:
  enabled: true
actionBar:
  enabled: false
meta:
  description: 'An Exploration of API Directories '
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: '10,000 APIs Under the Sea | Stoplight API Corner'
  image: /images/apis-under-sea.jpeg
  twitter:
    description: 'An Exploration of API Directories '
    title: '10,000 APIs Under the Sea | Stoplight API Corner'
    image: /images/apis-under-sea.jpeg
    username: '@stoplightio'
---

*Katsushika Hokusai, Thirty-Six Views of Mount Fuji, The Great Wave Off the Coast of Kanagawa*

Following my journey through APIs and the tech industry while working at [Stoplight](https://stoplight.io) it occurred to me that, while I do understand what an API is, I had no idea what the scope of the API ecosystem was. So I’ve compiled a list of some of the most popular API Directories (or Marketplaces) and an exploration of API Integration Platforms.

### **Why Do I Care?**

APIs are currently experiencing a renaissance as they become more and more integral to any cloud or web based service. This upsurge in use has been accompanied by a massive proliferation of APIs. Currently, [ProgrammableWeb](https://www.programmableweb.com), the largest API directory, has 16,590 APIs listed, and that is just the tip of the iceberg. In response to the sheer amount of publicly facing APIs available on the web, the API community has been put under increasing amounts of pressure to come up with an solution for exposing them (aka API Discovery).

### **How Many APIs Currently Exist?**

The iceberg analogy speaks to the volume of visible, or, public facing APIs available on the web, compared to the potential treasure trove of internal APIs and APIs hidden behind paywalls. ProgrammableWeb estimates put the number of public facing APIs around 16,000 while [APIHound](http://apihound.com/apifinder) puts the number around 50,000.

### **So What Do We Do?**

The issue of API Discovery is not a new one, and luckily we already have some solutions to the problem. In this article, we will look over the most common solution, API Directories, along with a quick look at API Integration Platforms. While these two solutions address different audiences and problems, there are some common threads that permeate through both that could lead to a more comprehensive vision of what the future could look like.

## **API Directories**

API Directories, also known as API Repositories, API Catalogs, and API Marketplaces, tackle API Discovery head on by scouring the web for APIs and compiling them in one convenient location. These solutions focus on creating a single source of truth for developers to discover APIs and are, for the most part, free.

![](https://cdn-images-1.medium.com/max/800/1*x5jhTd-WVDzrkt2D2G8k3A.png)

### **[ProgrammableWeb](https://www.programmableweb.com)**

The granddaddy of all API Directories. ProgrammableWeb has consistently been one of the most visible and accessible of API Directories. With a behemoth library curated by a team of API evangelists, ProgrammableWeb continues to cultivate and collect API relics in an effort to support the ever changing API landscape.

### Size of Directory

* 🌟🌟🌟🌟🌟

* Largest curated API Directory

### Filters

* ⭐️⭐️⭐️

* By API

* By Category

* By Platform

* Most Recent

### Supporting Documentation

* ⭐️⭐️⭐️⭐️

* User contributed

* Trackable/Notification system

* Summary

* SDKs

* Articles

* How to

* Sample Source Code

* Libraries

* Developers

* Followers

* Comments

![](https://cdn-images-1.medium.com/max/800/1*cBlO5tgw9NVG3Tdqdq932w.png)

### **[GitHub](https://github.com/)**

GitHub will always be a good option for finding anything in tech and that includes APIs and curated user generated API Directories. The downside to GitHub is that there is no central guideline or goal which results in a lack of standardization.

### Size of Directory

* 🌟🌟🌟🌟🌟

* Massive, unlimited

### Filters

* ⭐️⭐️

* Stars

* Notifications

* Tags

### Augments existing provider documentation

* Depends on the creator

![](https://cdn-images-1.medium.com/max/800/1*asthqsGt3G-0qQdx1JhWWg.png)

### **[RapidAPI](https://rapidapi.com/)**
> “You can’t build everything from scratch, and using APIs makes work a lot more efficient. But each API has a different format and authentication strategy. You have to speak a lot of different languages to use them all.” — Iddo Gino

As of March 13, 2018, RapidAPI claims that [they process 400B API calls each month](https://techcrunch.com/2018/03/13/rapidapi-an-api-marketplace-that-processes-half-a-billion-api-calls-each-month-raises-9m-led-by-a16z/) which makes them one of the most used API directories available. RapidAPI differs from the other directories by providing a single standardized gateway that allows access to all the APIs they support.

### Size of Directory

* ⭐️⭐️⭐️⭐️

* 8,000 APIs

* 2017, Acquired Mashape Hub

### Filters

* ⭐️⭐️⭐️⭐️

* Categories

* Health

* Installs

* Ratings

### Augments Existing Provider Documentation

* ⭐️⭐️⭐️⭐️

* Overview

* List of Endpoints

* Discussion Board

* Test Endpoints and Generate Code Snippets

## **Honorable Mentions**

### **[APIs.guru](https://github.com/APIs-guru/openapi-directory)**

APIs.guru could be considered the bedrock of API Discovery. An open-source, machine readable API Directory, APIs.guru is a leading source of data for many API Directories and embodies the open-source mentality that has come to symbolize the dev community at large. They also specialize in APIs that use the OpenAPI Specification

### Size of Directory

* ⭐️

* Around 250 APIs

### **[{API} Search](http://apis.io/)**

### Size of Directory

* ⭐️⭐️⭐️

* 1116

### Filters

* ⭐️⭐️

* Search

* Tags

### Augments (rather than replaces) existing provider documentation

* ⭐️

* Lacks any form of additional information

## **API Integration Platforms**

API Integration Platforms are an emerging field within the API ecosystem. These SaaS platforms aren’t engineered to function solely as an API Discovery tool but do so as a by-product. They function as a middle man of sorts. Instead of having to manually integrate APIs into your product, all you have to do is integrate with their service, and you gain access to all the APIs they support. Currently, most of the platforms primary focus is on integrating commonly used analytics/big data/financial platforms to centralize and share valuable consumer data.

![](https://cdn-images-1.medium.com/max/800/1*jprQhpYV5-iwetiqfoPlxw.png)

### **[Segment](https://segment.com)**

Segment is not just an API Integration Platform but is still one of the most widely used. They specialize in analytics integrations with a focus on data warehousing.

### Size of Directory

* ⭐️⭐️⭐️⭐️

* ~200

### Filters

* ⭐️⭐️⭐️

* Categories

* Search

* Popularity

* Date Added

### Augments (rather than replaces) existing provider documentation

* ⭐️

* Summary

### Price

* $0 — $2400

* Custom plan focus, with resource based pricing

![](https://cdn-images-1.medium.com/max/800/1*4YXLLWOjQ01PnzRpChFMFQ.png)

### **[Cloud Elements](https://cloud-elements.com/)**

The purest distillation of an API Integration Platform. They provide you with the connections and the maintenance necessary to hookup any of the APIs they support.

### Size of Directory

* ⭐️⭐️⭐️

* ~150

### Filters

* ⭐️

* Categories

### Augments (rather than replaces) existing provider documentation

* ⭐️⭐️⭐️⭐️

* Guides

* References

* Feedback

* Release notes

### Price

* $2995 — $11995 / month

* Custom plans, additional elements, and variable components add to price

![](https://cdn-images-1.medium.com/max/800/1*tyDAYX3c5WqEOuEyGZxWYg.png)

### **[Zapier](https://zapier.com/)**

Zapier differs from the other integration platforms by focusing on non-technical users. The language and the approach will be substantially different. They specialize in connecting apps (Zaps) in creative ways to allow for automation and additional functionality.

### Size of Directory

* 🌟🌟🌟🌟🌟

* ~1000 Apps

### Filters

* ⭐️⭐️⭐️⭐️

* Popularity

* Recently Added

* Premium Content

* Category

### Augments (rather than replaces) existing provider documentation

* ⭐️⭐️⭐️

* Overview

* Triggers

* Actions

* Searches

### Price

* $0 — $250 / month

## **Takeaways**

API Directories and Integration Platforms tackle the issue of API Discovery in inherently different ways. Directories function as an open repository for API consumers and producers that want to share their APIs to the greater tech community. Their audience will be much more technical than their counterpart and it will be a much cheaper, if not free solution. In the future, I see them filling a similar role to that of GitHub in regards to APIs. API Integration Platforms, on the other hand, will emerge as a larger player in the B2B API ecosystem. By cutting out manual, time-consuming technical integrations, integration platforms will drive much of the API economy. They will provide a simple, non-technical platform that allows anyone to snap on any number of different APIs onto a product like a child with Legos. The major downside of the Integrations Platforms are cost and choice.
