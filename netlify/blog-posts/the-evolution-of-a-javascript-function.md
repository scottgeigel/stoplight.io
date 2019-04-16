---
path: /blog/the-evolution-of-a-javascript-function-994ebd95d941
tags:
  - blog-general
  - blog
relatedTags:
  - blog-general
publishedDate: 2018-06-27T19:30:02.611Z
author: William Hilton
title: The Evolution of a JavaScript Function
subtitle: ' A hypothetical (but realistic) example of how an ordinary JavaScript function can evolve over time'
image: /images/evolution-javascript.jpeg
color: purple
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  enabled: false
meta:
  description: ' A hypothetical (but realistic) example of how an ordinary JavaScript function can evolve over time'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: The Evolution of a JavaScript Function | Stoplight API Corner
  image: /images/evolution-javascript.jpeg
  twitter:
    description: ' A hypothetical (but realistic) example of how an ordinary JavaScript function can evolve over time'
    title: The Evolution of a JavaScript Function | Stoplight API Corner
    image: /images/evolution-javascript.jpeg
    username: '@stoplightio'
---
Photo by Orlova Maria on Unsplash

Code evolves over time. JavaScript in particular has evolved a lot in the last couple years. It can be hard to keep up with all the new features in the language! It helps to see concrete examples. In this blog post, I will walk through a hypothetical (but realistic) example of how an ordinary ES3 JavaScript function, subjected to the harsh environment of “changing requirements,” can utilize ES2015+ JavaScript features to become the ultimate version of itself!

## **Say Hello to My Little Function**

```javascript
function greet (firstname, lastname) {
    return "Hello " + firstname + " " + lastname;
}
```

This was good enough for Imaginary Company’s website in the early 2000s. But now Imaginary Company has gone global, and the boss has asked us to update the greet function. She wants greet to automatically be translated into the correct language for the user. We are resourceful, but also lazy, so we decide to use Google Translate.

![Imagination.](https://cdn-images-1.medium.com/max/800/1*upGKzFVUI3ojN031fBPjcw.gif)
_Imagination._

## **Promise Me You’ll Say Hello**

(Before you ask, yes ‘[google-translate-api](https://www.npmjs.com/package/google-translate-api)’ is a real package on npm. I told you this would be realistic!)

```javascript
const translate = require('google-translate-api');
async function greet (firstname, lastname, lang) {
    let greeting = await translate('Hello', {to: lang});
    return greeting + " " + firstname + " " + lastname;
}
```

Here is the first big change: the Google Translate function returns a Promise. Our boss already told us to stop using callbacks, so that means our greet function must _also_ return a Promise. Luckily, working with Promises is not as difficult these days thanks to [async functions](https://developers.google.com/web/fundamentals/primers/async-functions) which were added to JavaScript officially in ES2017.

Asynchronous calls are contagious — once you introduce an asynchronous function into your code, everything that uses that function becomes asynchronous! So I suggest you embrace that early on in your design. Even if your function is actually synchronous, you can tack async in front of it and now you’ve future-proofed it. If you ever need to change the implementation and it becomes asynchronous, no big deal because all your existing code already is calling it with await.

Now the boss comes to us with another request. Sometimes the user’s native language isn’t known. She tells us the function needs to default to English if the language parameter is undefined.

## **Undefined is not a problem**

![You got it!](https://cdn-images-1.medium.com/max/800/1*RrFFM_EwTp3RVKUFuViqFw.gif)__

_You got it!_

```javascript
async function greet (firstname, lastname, lang = 'en') {
...
```

That was easy! JavaScript has supported [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) since ES2015.

It used to be you needed code like this in your function to implement default values:

```javascript
arg = arg || 'foo'
```

But that had the unfortunate edge case of not working if arg was 0 or false. So to be safe, we were told to do fancier checks like:

```javascript
arg = typeof arg!=="undefined" && arg!==null ? arg : 'foo'
```

which of course most people never did. But it is easy now! Setting the default values in the function declaration is nice for readability and IDEs will show that information as well.

Just as we’re feeling clever, the boss adds a new requirement. Some languages use a different name order convention. First name and last name are out, she says. Now it is “given name” and “family name” and we’ll determine which is first and which is last based on a flag.

## **Ordering and Chaos**

![When one thing disappears, another appears…](https://cdn-images-1.medium.com/max/800/1*wyv6Frz4ZOR4093-MkQCaA.gif)__

_When one thing disappears, another appears…_

```javascript
async function greet (given, family, lang = 'en', reverse = false) {
...
```

Unfortunately, our naive solution has resulted in a problem. There are two ways to generate correct-looking names:

```javascript
greet(given, family, 'en', false) // correct
greet(family, given, 'en', true) // correct
```

but also two ways to screw up:

```javascript
greet(given, family, 'en', true) // wrong
greet(family, given, 'en', false) // wrong
```

Our development team is spread over the world, and some developers are used to listing family name before given name, and some given name before family name. Thus they have trouble remembering whether true means family name first or given name first.

Our boss is displeased. For any given instance of the greet function, she can’t tell without consulting the documentation whether the arguments are correct. We are given a new challenge: make the greet function fool-proof.

## **The Object of Destructuring**

Some languages like Python have named arguments. Named arguments are super-cool because you don’t have to remember what order the arguments are in, and it’s obvious to whoever has to read the code what the arguments are (what some might brazenly call “self-documenting code”). Using JavaScript’s [object destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/), we can achieve something very similar to named arguments.

```javascript
async function greet ({given, family, lang='en', reverse=false}) {
```

All we did is add a pair of curly braces but suddenly the nature of the function has changed. It now takes a single argument, and that argument is an object:

```javascript
greet({given: 'John', family: 'Smith'}) // 'Hello John Smith'
greet({family: 'Smith', given: 'John'}) // also 'Hello John Smith'
```

The boss loves this! It is easier to read, and no one is mixing up given name and family name anymore.

![Highfive!](https://cdn-images-1.medium.com/max/800/1*coWium9mkHprwHGupY_Zuw.gif)__

_Highfive!_

At first, the other developers complain that this new syntax is verbose. But then they discover a neat trick: if they name their variables the same as their properties, they can use the [shorthand literal syntax](http://www.benmvp.com/learning-es6-enhanced-object-literals/):

```javascript
let given = 'John'
let family = 'Smith'
let lang = 'en'
let reversed = false

greet({ lang, given, family, reversed }) // 'Hello John Smith'
```

They feel quite clever. The boss loves that everyone is starting to use the same variable names for data throughout the app; the desire to keep the code “DRY” has finally motivated the other developers to update old code that still used variables called firstname and lastname or firstName and lastName to use given and family.

But now there’s the potential new kind of error. If either lang or reversed are misspelled, then greet won’t see those properties and will silently use the default value instead. You realize you’ve traded worrying about what order arguments are in to worrying about how the arguments are spelled.

## **No rest for the misspelled**

![Sometimes we make typos…](https://cdn-images-1.medium.com/max/800/1*X0eu8TZb_u3WfH4kckywjw.gif)__

_Sometimes we make typos…_

We can solve this problem using another ES2018 feature: [rest properties](http://2ality.com/2016/10/rest-spread-properties.html)!

```javascript
async function greet ({
    given,
    family,
    lang = 'en',
    reverse = false,
    ...misspellings
}) {
```

Here ...misspellings will catch any arguments NOT matched by the rest of the destructuring. We can then add a simple runtime check to make sure the function is called correctly:

```javascript
misspellings = Object.keys(misspellings)
if (misspellings.length > 0) {
  throw new Error('Unrecognized arguments: ' +
                  misspellings.join(','))
}
```

Now if a developer misspells one of the arguments, the function will throw an error:

```javascript
greet({ lang, given, family, reserved })
// Error: Unrecognized arguments: reserved
```

## **The function, evolved**

![Another kind of evolution…](https://cdn-images-1.medium.com/max/800/1*HNlDPG4AlGhv9oMBhJbcpw.gif)

_Another kind of evolution…_

In this blog post, I’ve tried to show how a simple function

```javascript
function greet (firstname, lastname) {
    return "Hello " + firstname + " " + lastname;
}
```

can evolve in response to the demands to add new features and satisfy new requirements.

Here is the final result:

```javascript
const translate = require('google-translate-api');
async function greet ({
    given,
    family,
    lang = 'en',
    reverse = false,
    ...misspellings
}) {
    // Check arguments
    misspellings = Object.keys(misspellings)
    if (misspellings.length > 0) {
      throw new Error('Unrecognized arguments: ' +
                      misspellings.join(','))
    }
    // Await translation from Google
    let greeting = await translate('Hello', {to: lang});
    // Determine name order
    if (reverse) {
        return greeting + " " + family + " " + given;
    } else {
        return greeting + " " + given + " " + family;
    }
}
```

Our final function takes advantage of many modern JavaScript “super powers”:

* async functions
* default parameters
* object destructuring
* rest properties

I’ve started to write all my functions using these features because they provide a flexible foundation for the function to adapt to whatever new requirements come its way. What does _your_ ultimate function look like?

![](https://cdn-images-1.medium.com/max/800/1*sY8s44Z6K4Q9C1B_iN1agg.gif)

_P.S. If JavaScript is your thing, Stoplight is [hiring](https://angel.co/stoplight/jobs/364562-fullstack-engineer-with-initial-react-focus)!_
