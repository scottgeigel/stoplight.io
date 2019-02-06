---
path: >-
  /blog/writing-documentation-when-you-arent-a-technical-writer-part-one-ef08a09870d1
tags:
  - blog-documentation
  - blog
relatedTags:
  - blog-documentation
publishedDate: 2018-07-31T18:53:50.859Z
author: Taylor Barnett
title: Writing Documentation When You Aren't A Technical Writer — Part One
subtitle: ' How do people actually read documentation and how to write documentation and code samples to maximize developer success'
image: /images/not-technical-writer-part-one.jpeg
color: yellow
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: >-
    Writing Documentation When You Aren't A Technical Writer — Part One |
    Stoplight
  twitter:
    description: ' How do people actually read documentation and how to write documentation and code samples to maximize developer success'
    title: >-
      Writing Documentation When You Aren't A Technical Writer — Part One |
      Stoplight
    image: /images/not-technical-writer-part-one.jpeg
    username: '@stoplightio'
---
_Photo by [rawpixel](https://unsplash.com/photos/VfZOC3kV6sM) on [Unsplash](https://unsplash.com)_

_In the fall of 2016, my teammate and I were tasked with the mission of improving my former company’s documentation and content. We spent a year working on all kinds of documentation — API references, guides, tutorials, and blog posts. I had been writing documentation off and on over the previous 5 years, but I wasn’t formally trained in technical writing. I was by no means inexperienced though, due to working on API documentation for projects and a startup and teaching Python Flask workshops towards the end of my computer science degree. This was the first time I had ever been able to focus on documentation, which allowed me to pursue my passion for helping people of all skill levels through technical documentation._

_In that year, I learned a lot from the Write the Docs community, other API providers, and my own trials and errors. Last year, I spoke about it in a talk, “Things I Wish People Told Me About Writing Docs,” at the [API Strategy and Practice Conference](https://events.linuxfoundation.org/events/apistrat-2018/) in Portland, OR. This [multipart series](/blog/api-documentation) is a survey of what I learned._

## How do people actually read documentation?

![“Nation Shudders At Large Block Of Uninterrupted Text,” photo from [The Onion](https://www.theonion.com/nation-shudders-at-large-block-of-uninterrupted-text-1819571366)](/images/the-onion.png)

Do you know that feeling when The Onion is eerily right? This is one of those times. People might not be physically shuddering at your docs, but there’s a good chance they are doing it mentally. I struggled with the idea that people aren’t going to read what I write, unless I present it in the most easily digestible way. Heck, this could even happen for this blog post. (Note to self: Remind myself why I even write. 🤔)

In an [eye-tracking study](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/) from the Neilson Norman Group in 2006, 232 users looked at thousands of Web pages. What they found was that users generally look at web pages in an F-pattern:

1. “Users first read in a **horizontal movement**, usually across the upper part of the content area. This initial element forms the F’s top bar.”
2. “Next, users move down the page a bit and then read across in a **second horizontal** movement that typically covers a shorter area than the previous movement. This additional element forms the F’s lower bar.”
3. “Finally, users scan the content’s left side in a **vertical movement**. Sometimes this is a slow and systematic scan that appears as a solid stripe on an eye-tracking heatmap. Other times users move faster, creating a spottier heatmap. This last element forms the F’s stem.”

![Heatmaps from [Nielsen Norman Group](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/)](/images/heat-maps.png)

The study also found some alternative scanning patterns such as layer-cake pattern, spotted pattern, marking pattern, bypassing pattern, and commitment pattern. I highly recommend reviewing the rest of [the report](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/).

It’s important to note that F-pattern is [negative for users](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/), but good content design can help prevent F-shape scanning.

## What exactly are the implications of this with respect to documentation?

* The first two paragraphs must state the **most important information**
* Further, the first 3–5 words are **critical**
* Start headers, paragraphs, and bullet points with information-carrying words
* Variations in typeface (text size, links, bold, etc.) can be essential to keep people’s attention

## So how should you structure the content on a page?

* Prevent search failure — make sure what the users wants stands out
* One idea per paragraph, if there’s more than one, split the paragraphs
* Users skip over things that look like ads, so be careful how you display images
* Don’t make your content body too wide — aim for 65–90 characters in width

I learned some of these tips from Kevin Burke’s [talk](https://www.youtube.com/watch?v=sQP_hUNCrcE), “How to Write Documentation for Users that Don’t Read.” Kevin maintained Twilio’s docs from 2011 to 2014.

Moreover, there’s the usability of paragraphs. Similar to _The Onion_ piece, when you read a paragraph many times over you gloss over the whole thing. So then why do we write so many paragraphs in docs? Let’s do an experiment from the Keen IO docs:

**Quickly read this:**

Event collections can have almost any name, but there are a few rules to follow: The name must be 64 characters or less. It must contain only Ascii characters. It cannot be a null value.

**Now quickly read this:**

Event collections can have almost any name, but there are a few rules to follow:

* The name must be 64 characters or less.
* It must contain only Ascii characters.
* It cannot be a null value.

Both of these contain the **exact** same content. It’s not rocket science that the second one helps you comprehend the information better and in less time. We have to remember that some paragraphs can benefit from being broken up into bullets. If your paragraph contains a list of any kind, turn it into a bulleted list.

I’ll talk more documentation design and navigation in a later part of this series.

## Code samples

What’s API documentation without code, right? Code samples are all over many of our docs, and our users _actually_ read them. However, the problem is, they don’t always read the stuff around them unless it jumps out at them.

The context in the code sample is important for developer success. Developers are quick to copy and paste. Here’s an example with the Keen IO API:

<script src="https://gist.github.com/tbarn/c22331a6aa01859dca8a9000356732df.js"></script>

A developer quickly copies and pastes this code. And…

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/13J4mAfd4iHC5G" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/puppy-fine-falling-13J4mAfd4iHC5G"></a></p>

First, how do they even run this file? Probably node file_name.js but it wasn’t in the code. This could have been put in a comment at the top.

Okay, so they run it and… ReferenceError: Keen is not defined. ☹️ A Keen client was never instantiated, there’s no import or require statement at the top, and it only works if they npm installed the library.

They get those fixed and run it once more… guess what?! Another error! ☹️your_project_id and your_write_key were never stored anywhere.

These are all things that could be made more evident in the code.

Here’s an example from the Twilio docs that gives good context to the end user:

![Photo from the /[Twilio Node Helper Library/](https://www.twilio.com/docs/libraries/node)](/images/twilio-context-example.png)*Photo from the [Twilio Node Helper Library](https://www.twilio.com/docs/libraries/node)*

It makes it very clear how you should install the library, include it in your code, and then what needs to be replaced in the sample code to run the sample.

## Copy and paste bugs

Since we have lots of code samples in docs, successful copying and pasting becomes pretty key. Here’s are two example of where that breaks down:

```
# Copy and paste the following command

$ gem install rails
```

It seems pretty harmless, right? Think again, what happens when you go copy and paste that in your command line? You will most likely get:

```
bash: command not found: $
```

It’s a common mistake. Either, you want your command to appear like it is in a command line environment or you accidentally copied it over yourself. I would recommend just leaving off the $. You can also find a way to make it not copy and pastable because the error will happen to your users and it will be annoying.

Here’s a more recent example: Have you checked how easy it is to select the code the user needs to copy?

Kelsey Hightower struggled to copy this code sample off of StackOverflow in a Google Cloud Next demo.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">In a LIVE DEMO, watch <a href="https://twitter.com/kelseyhightower?ref_src=twsrc%5Etfw">@kelseyhightower</a> build a weather application from zero. Starting from the database up to the end point: <a href="https://t.co/XAKsOYSHZq">https://t.co/XAKsOYSHZq</a> <a href="https://t.co/1iuHGlVRnR">pic.twitter.com/1iuHGlVRnR</a></p>&mdash; Google Cloud Platform (@GCPcloud) <a href="https://twitter.com/GCPcloud/status/1022591825096335360?ref_src=twsrc%5Etfw">July 26, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Did he do this intentionally? The world will never know. However, it represents the struggle of coders to copy large blocks of text on some documentation sites. Make sure the UI of your site makes it easy to copy large blocks of text. You can even break up those blocks to explain them in chunks making them more accessible to copy and understand.

_I hope some of these tips help you the next time you are writing documentation. I’d love to hear what tips you’ve learned over the years that were helpful to you in the comments below. Update: Check out [Part Two](/blog/writing-documentation-when-you-arent-a-technical-writer-part-two-59997587cc2a) of the series!_
