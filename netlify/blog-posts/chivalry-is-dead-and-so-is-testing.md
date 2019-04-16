---
path: /blog/chivalry-is-dead-and-so-is-testing-8e9103251f15
tags:
  - blog-testing
  - blog
relatedTags:
  - blog-testing
publishedDate: 2016-10-05T23:14:09.129Z
author: Tom Pytleski
title: 'Chivalry is dead, and so is testing'
subtitle: Best Practices for API Testing with Stoplight
image: /images/general-stock-1-.jpeg
color: orange
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: Best Practices for API Testing with Stoplight
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: 'Chivalry is dead, and so is testing | Stoplight API Corner'
  image: /images/general-stock-1-.jpeg
  twitter:
    description: Best Practices for API Testing with Stoplight
    title: 'Chivalry is dead, and so is testing | Stoplight API Corner'
    image: /images/general-stock-1-.jpeg
    username: '@stoplightio'
---
Chivalry is dead, and so is testing. In this article we are going to learn how to bring your tests to life with variables in Stoplight. As an added bonus, we will learn how testing and chivalry are really the same thing.

According to Google, chivalry, or the chivalric code, is a code of conduct associated with the medieval institution of knighthood which developed between 1170 and 1220.

I know, wtf(udge), but please continue reading.

According to Stoplight, testing, or the testing of code, is a code of conduct associated with your API specification of developers which was started in the 1960s, and is still being developed.

At Stoplight, we can’t be there to smash spiders when your significant other is on the kitchen island or provide a jacket when they get cold… but we can, and sincerely want to, help you squash bugs when you are developing your API.

There are a lot of ways to test your API. The most popular method is hoping for the best, and relying on your customers. The second most popular way is hard coding some data, and then making a simple response code assertion (smoke tests). Lastly, there are the select few that use real data to seed your tests, and not only do you check response status codes, but you also validate the structural contract of the returned data.

Honestly, customers are the best way to test your API, because they are using your API in ways you haven’t expected. But if your customers are the only ones testing your API, then you probably don’t have many customers, or you are up all night trying to keep your API online.

**Customers are equivalent to variables in Stoplight.** Variables, if used properly, can breathe life into your tests in ways you didn’t expected. They say a picture is worth a lot of words, so let’s look at some dead tests.

![](https://cdn-images-1.medium.com/max/800/0*D7OMQYjOHt3rn-6u.)

*To try out the above test, [Import](https://help.stoplight.io/docs/basics/creating-or-importing-a-new-api) [this swagger spec](https://api.stoplight.io/v1/versions/7s7aRW9kYkZsjcRgL/export/stoplight.json) into Stoplight*

The screenshot above shows a test in the [Stoplight](https://app.stoplight.io) app for a simple To-dos API. In it, we create a to-do, verify the todo was created, update it, delete it, and verify the delete. Cool test bro. On the surface, this does look cool, and the best part is you don’t have to write any code! But take a closer look - see all that hard coded data? What happens if you need to update the apikey? Also, step 3, the path is /todos/235. What happens if your to-dos API decides to use UUIDs? Have fun updating your tests and typing all those UUIDs. And…

**Code: Thou shall use variables, to make tests easier to maintain and less error prone.**

Let’s step through these issues, and bring our test up to code. First we will look at the solution then talk about what is happening, and why.

1. **Hard Coded Data.**

![](https://cdn-images-1.medium.com/max/800/0*H88tFMDSlaEsRdhF.)

*To try out the above test, [Import](https://help.stoplight.io/docs/basics/creating-or-importing-a-new-api) [this swagger spec](https://api.stoplight.io/v1/versions/pB8p56oTFBRZQiDEh/export/stoplight.json) into Stoplight*

Hard coding data is awesome when you write your first test step. Then you write step 10, and realize you need to update the apikey, ouch! This is where initial variables come into play. If we add apikey to our initial variables, and update our test every where we harded apikey, we now only have one place to update. Awesome!

2. **Invalid Input, and maintainability.**

![](https://cdn-images-1.medium.com/max/800/0*9yoMickrEJAkRnYY.)

*To try out the above test, [Import](https://help.stoplight.io/docs/basics/creating-or-importing-a-new-api) [this swagger spec](https://api.stoplight.io/v1/versions/jJjjqLoniNWsBAGeD/export/stoplight.json) into Stoplight*

Most of the time when testing APIs, you are creating a lot of resources and cleaning them up. In our test above, the first thing we do is create a todo. Then in the following steps, we get the todo we just created, delete it and then verify that it was deleted. We hardcoded the todoId after we created it, and in step 3, we used 235 as the todoId when we expected it to be 234. Now you might think initial variables is a good place to stick todoId, with a value of 234, but in reality your API returns dynamic ids. To bring our test up to code, we will use variable capture to persist our todoId in our variables. There are multiple ways to capture variables, but the easiest and best way is use our visual variable capture:

1. Expand the test step for the request that returns the value you want to re-use.

1. In the left column of the step editor select the ‘Variable Capture’ tab.

1. Use simple path selectors to select values from the response body and enter the variable name you want to use later. For example, to capture the id of the first element of an array, you’d use the path selector ‘[0].id’. Then, you might assign that value to a variable called ‘todoId’. That’s it!

**Bonus points — path selectors in variables.**

![](https://cdn-images-1.medium.com/max/800/0*yr5vm-P-Jg3NzkJJ.)

*To try out the above test, [Import](https://help.stoplight.io/docs/basics/creating-or-importing-a-new-api) [this swagger spec](https://api.stoplight.io/v1/versions/SXzwWdrfEPJcJABZg/export/stoplight.json) into Stoplight*

If you understand what is going on in the image above, then you are ready to bring your tests to life.

At Stoplight, we believe in testing and chivalry, and we want to bring them to life again. Our door is always open, so if you have any questions about what you just read or anything else please walk through the door and send us a message.

Learn more about design, documentation and testing in the [help center Stoplight](https://help.stoplight.io/).

Happy Testing!
