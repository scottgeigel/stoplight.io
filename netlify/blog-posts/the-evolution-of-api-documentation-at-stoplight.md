---
path: /blog/the-evolution-of-api-documentation-at-stoplight-d567aeba07e
tags:
  - blog-documentation
  - blog
relatedTags:
  - blog-documentation
publishedDate: 2018-09-18T21:36:37.768Z
author: Chris Lott
title: The Evolution of API Documentation at Stoplight
subtitle: >-
  How we are evolving documentation at Stoplight to be performant, accessible,
  portable, and integrated
image: /images/evolution-of-api-documentation.jpeg
color: purple-darker
disqus:
  enabled: true
actionBar:
  enabled: false
meta:
  description: >-
    How we are evolving documentation at Stoplight to be performant, accessible,
    portable, and integrated
  favicon: /images/mark_light_bg.png
  title: The Evolution of API Documentation at Stoplight | Stoplight API Corner
  twitter:
    description: >-
      How we are evolving documentation at Stoplight to be performant,
      accessible, portable, and integrated
    title: The Evolution of API Documentation at Stoplight | Stoplight API Corner
    username: '@stoplightio'
---

API documentation is one of the most undervalued assets of a technology company. Most tech companies sell access to APIs that allow customers to retrieve information or use services. Revenue is then generated each time a customer uses the API. In order for customers to use the APIs, they need to understand what is available, how to ask for it, and how it will be returned. All of this information should be provided in the API’s documentation, usually as a website. Therefore, it is very important that your API documentation is performant, accessible, portable, and integrated.

At [Stoplight](https://stoplight.io), we want to help companies create beautiful and easy to use API documentation. We see the value that it can bring to companies and their customers alike. That’s why we decided to build a tool to facilitate that process. In [Stoplight Classic](http://app.stoplight.io), the first generation of our API platform, we built a tool that automatically generates documentation for your API and publishes it as a single page web application. This means instead of fetching a new HTML file each time the user navigates, the pages are generated dynamically, in the browser, using JavaScript. This allows us to serve up tens of thousands of websites without having to store any HTML files. In theory, this sounds great, but over time, we came to realize that this method had some downsides.

![*Stoplight Classic’s Documentation*](https://cdn-images-1.medium.com/max/800/0*B_TVXiFzfKrfGG9R)**Stoplight Classic’s Documentation**

## Our API documentation problems

### Fast online documentation

The initial render time is dependent on the download speed and size of the JavaScript file. If you’re on a slow internet connection or located far away from the hosted servers, you could be stuck waiting several minutes for that file to download.

### SEO friendly & accessible

It’s terrible for SEO. Almost all web crawlers, such as Google, index the first HTML file that is returned when navigating to a URL. For single page applications, this usually means a loading spinner, since the page content won’t be rendered until the JavaScript file is downloaded.

### Portable

Since there aren’t any static files produced, it wasn’t very easy to port the published documentation into an existing website or developer portal. Most of our customers resorted to embedding their documentation via an HTML iFrame. This works in theory, but it lacks support for linking to subpages.

### Integrated

API documentation is not always standalone. Most of the time, companies want to include their API documentation along with their product documentation. This is usually called a developer portal, or at Stoplight, a Hub. Having the two separate is possible, but it is not ideal for users if they are having to navigate between multiple sites.

## Our hosted documentation solutions

To solve the first issue of lengthy load time, we decided to remove an unnecessary connection to our database. Whenever someone wanted to view a published API Docs website, the browser would need to download both a JavaScript file and some data from our Mongo database, located in the eastern US. This added an average latency of ~220ms to our customers in Asia. In order to reduce that latency, we decided to store any documents used to render an API Docs website in AWS S3. We then took advantage of CloudFront CDN to serve those documents from locations all around the world, reducing the latency down significantly.

![*AWS CloudFront edge locations*](https://cdn-images-1.medium.com/max/800/0*8offufIHUOIUOiXr)**AWS CloudFront edge locations**

Each API Docs website would store one file, which was basically an OpenAPI Specification with some extra metadata such as page routes, themes, and configuration settings, in S3. This JSON file was downloaded at the same time as the JavaScript file and together they were used to render the documentation content. This flow worked exactly how we expected and reduced latency for our customers in other parts of the world, but it did not solve our remaining issues. To this end, we started to rethink how we were building documentation websites.

We decided to create our own specification that could combine any number of OpenAPI Specification documents, Markdown and HTML files using JSON references. With it a build tool that could export the specification into a developer portal, optimized for SEO and portability. Thus, the Hub spec and Hub Builder were born:

![*Stoplight Next’s Documentation Hub*](https://cdn-images-1.medium.com/max/800/0*3HQEAjJlzRVgk0iX)**Stoplight Next’s Documentation Hub**

The Hub Builder gave us a combination of a static website (great for SEO) and a single page application (great for performance). The initial request for a webpage downloads a pre-rendered HTML file containing all of the content and meta tags as well as the JavaScript needed to render all the consecutive pages. The HTML files are small and significantly faster to download compared with the larger JavaScript files. This means the initial page load time is almost instant, crawlers can scrape the static HTML files for meta tags, and our customers can download their full documentation websites to host wherever they choose.

Check out these performance improvements comparing our first solution ([Classic](http://app.stoplight.io)) to what we have now with the Hub Builder ([Next](https://next.stoplight.io)): The average page load time was reduced by ~75%.

![](https://cdn-images-1.medium.com/max/800/1*yJKKLyZsXMN5dMq1M5NkOw.png)

![Next vs Classic page load times](https://cdn-images-1.medium.com/max/800/1*9b4mFAk0Ue8JHt9aMlIe8w.png)_Next vs Classic page load times_

![](https://cdn-images-1.medium.com/max/800/1*Duskr9qnM6tZVB3KqCGc8A.png)

![Next vs Classic download size and number of requests](https://cdn-images-1.medium.com/max/800/1*9ztHseR_6PfY391myQratw.png)_Next vs Classic download size and number of requests_

## Next Steps

Here at Stoplight we are always looking for innovative solutions to maintain a balance between aesthetics and functionality. We don’t want you to have to sacrifice [beautiful documentation](/platform/docs/) for speed and performance. We also don’t want the process of creating documentation to be time consuming and arduous. The changes we’ve made thus far have been our first foray into establishing that balance but this is just the beginning. We already have plans to speed up the process even further along with a multitude of new functions and services. I guess you will just have to wait and see!
