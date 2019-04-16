---
path: /blog/the-api-cornucopia-7ba7efb22185
tags:
  - blog-industry
  - blog-general
  - blog
relatedTags:
  - blog-industry
  - blog-general
  - blog
publishedDate: 2017-08-15T22:22:27.858Z
author: Robert Wallach
title: The API Cornucopia
subtitle: Defining and describing APIs and their ecosystem
image: /images/yummee-chinese.jpeg
color: blue
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: Defining and describing APIs and their ecosystem
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: The API Cornucopia | Stoplight API Corner
  image: /images/yummee-chinese.jpeg
  twitter:
    description: Defining and describing APIs and their ecosystem
    title: The API Cornucopia | Stoplight API Corner
    image: /images/yummee-chinese.jpeg
    username: '@stoplightio'
---
*Yum Mee Chinese Food, Boston, MA*

When I first started working at Stoplight I had a very vague sense of what we created or what we did. Having been born in the late 80’s I have worked with computers for most of my life and even dabbled in writing HTML, CSS, XML, and JS but when people asked me what I did for work my mind would go blank. “I work at Stoplight” I would say, “a software company.” Some people found this vague and brief description acceptable but most would follow up with a flood of inquiries: “What kind of software?” “What does it do?” Is it an app?” “Does it deliver me food?” “Connect me with people?” “Can I use it on my Apple Watch?”

Everyday conversation is fueled by the question “What do you do for a living?” For many, this answer is a simple one off that requires little to no explanation; I am a manager at such and such, maybe an Architect , perhaps even a Press Secretary. Little or no follow up is usually required and the conversation moves into another direction. For me, however, the question would inevitably blindside me. Not because of what my role is, even though it includes a bevy of different hats due to the nature of a startup, but because of what our company does. So I finally decided to create a sketch of what [*Stoplight*](http://stoplight.io/) is and what we do. But before we can plumb the depths of [*Stoplight’s*](http://stoplight.io/) many different services and tools we must discuss one of the lesser known, even lesser understood, but most vital of programming elements, the API.

## The API

Like many professional industries, software engineering has a plethora, actually more like a full on cornucopia of industry specific terms that would make anyone feel a bit overwhelmed. To simplify, mostly for my own sanity, I am going to describe APIs in:

### The Land of Analogies

“Welcome to Business, I will be your server tonight, my name is Request.” Yes, that’s right, you are in a restaurant, in the Land of Analogies, at a restaurant called Business, being served by a weird guy named Request. The waiter hands you a menu titled *API Definitions/References/Docs* with over 15,000 options. While scanning the menu you notice a few popular choices, for an appetizer, perhaps you want to consume *Google Maps* API, maybe sample the infamous *Twitter* API, gorge on the* IBM Watson *API, and for dessert, the *Stripe* API. You relay your order to Request who just stares at you sullenly. Another customer in the restaurant coughs and pulls you aside, “The only words Request knows are Get, Put, Post, and Patch.” So you carefully rephrase your order to Request and he turns and stalks back to the kitchen. He returns soon after and decries “400.” You swear under your breathe then more carefully arrange the words in your sentence and repeat your order. Request blinks, then strolls back towards the kitchen. He soon returns with a steaming *Google Map* loaded with features, followed by samples of Tweets, some visual recognition software compliments of *IBM Watson*, and a deconstructed *Stripe* payment system. “200,” he proclaims gleefully.

At this point you’re probably wondering what the hell is this guy talking about, get to the point, or you’re hungry for deconstructed *Stripe* payment. Whatever you’re thinking, let’s break the analogy down from front to back stage:

![[https://www.flickr.com/photos/stevendepolo/15984623159](https://www.flickr.com/photos/stevendepolo/15984623159)](https://cdn-images-1.medium.com/max/800/1*a7lcPicbg5ju8zn9sn1NJg.jpeg)*[https://www.flickr.com/photos/stevendepolo/15984623159](https://www.flickr.com/photos/stevendepolo/15984623159)*

**Front Stage**

* Restaurant: *Your Business*

* Server: *Request*

* Menu: *API Definitions/References/Docs*

* You: *Client*

**Back Stage**

* Restaurant Owner: *Companies that own the API*

* Chef: *API Developer*

* Food and Drink: *The API*

* Restaurant Equipment Providers: *API Service Provider* ([**Stoplight**](http://stoplight.io/)!)

To summarize our delicious analogy let’s imagine you, the client, is the proud owner of the restaurant *Yum Mee Chinese Food*. A feature you would like to incorporate into your restaurant’s website is a map that tracks your Deliveries. The easiest way to accomplish this is to simply add the *Google Maps* API into your site.

![[https://hiveminer.com/Tags/food%2Cyummee/Interesting](https://hiveminer.com/Tags/food%2Cyummee/Interesting)](https://cdn-images-1.medium.com/max/800/1*LPOb26EyoCjsNHOChkYPWA.jpeg)*[https://hiveminer.com/Tags/food%2Cyummee/Interesting](https://hiveminer.com/Tags/food%2Cyummee/Interesting)*

* The restaurant: *Yum Mee Chinese Food*

* The Server: *Request*

* Menu: *Google Maps API Definitions/References/Docs*

* Food Provider: *Google*

* Chef: *Fred the developer*

* Food: *Google Maps API*

Now that we have an admittedly elementary understanding of an extremely complex, diverse, routine, protocol, and tool we will go further behind the scenes and see how the sauce is made.

## Stoplight

Before we leave the Land of Analogies let’s discuss how [*Stoplight*](http://stoplight.io/) contributes to our *Michelin* 3-Star experience. As a Restaurant Equipment Provider we supply the restaurant with the tools they need to deliver delicious food and reliable service while cutting food prep and delivery time. From recipe creation to menu design, we help you modernize the way you create a solid product.

### How the Sauce is Made

Here at [*Stoplight*](http://stoplight.io/) we equip you with the tools that help you tackle the most critical tasks in API Production: Modeling, Testing, Mocking, and Documentation.

![Stoplight Modeling](https://cdn-images-1.medium.com/max/800/1*Ruit1ulB8Tnzcd78iyhPHA.png)*Stoplight Modeling*

### Modeling

We thoroughly believe in a design first mentality in regards to API Production as espoused in REST. Instead of building an API from the ground up based on priority and need, we provision you with an editor that allows you to build schemas and models to provide a solid framework and architecture for your API.

* **Land of Analogy**: We provide the Chef with the tools to help him craft recipes instead of serving whatever the Restaurant Owner or Client wants at that very moment.

![Stoplight Scenarios](https://cdn-images-1.medium.com/max/800/1*LFnYcnPEMFDwve8H__a0vA.png)*Stoplight Scenarios*

### Testing

Before your API can be deployed to the masses it must be battle tested and hardened to withstand the ever evolving IoT. To this end, we created *Scenarios*, a testing tool that allows you to test, debug, and orchestrate every aspect of your API from every angle.

* **Land of Analogy**: Maybe the Chef accidentally mixed in some
Cayenne Pepper into the Vanilla Ice Cream. Maybe the client is allergic to an ingredient in the new recipe your Chef just created. Before the meal goes out, we provide the Restaurant with the tools to check the food for poisons and other undesirables.

![Stoplight Prism](https://cdn-images-1.medium.com/max/800/1*bpPbJ83wfobGTWaSdC7KTA.png)*Stoplight Prism*

### Mocking

With the advent and adoption of Agile Methodology we created *Prism*, an API Gateway that allows your developers to spin up mock APIs, validate HTTP traffic, and further orchestration. With *Prism*, developers can quickly produce a mock API so that Front-End and QA teams can work in tandem with the Back-End developers to cut into overall production time.

* **Land of Analogy**: Do you remember that sullen server Request? Well he’s just not cutting it anymore. He spends way too much time going shuffling back and forth from the kitchen, especially when he doesn’t even return with food. To make matters worse, your friends just arrived and they want to order the same thing. Unfortunately, Request has been at the restaurant for a very long time so we can’t just fire him. Instead, we provide the restaurant with an additional server that doesn’t need to go to the kitchen to take your order.

### Documentation (Coming Soon!)

APIs need documentation to function and flourish. From a healthy Help Center to detailed Definition and References, we help you create beautiful documentation for your product in *Hubs*. *Hubs* is a documentation tool that provides aesthetically pleasing and functional templates with an automatic API documentation generator, all inside a simple, easy to use editor.

* **Land of Analogy**: While the chef creates a recipe we simultaneously generate the menu content for you within elegant design templates.

### Conclusion

So what do *we* do? We help you build your business in the cloud, from conception to implementation, with a sophisticated set of developer tools packaged in a brilliantly minimalistic UI. We help your team strategize, orchestrate, and create without the hassle, without the drama, and without cutting corners. To find out more, visit us at [stoplight.io](http://stoplight.io)
