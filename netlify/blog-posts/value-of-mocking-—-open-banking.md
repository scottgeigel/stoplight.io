---
path: /blog/value-of-mocking-open-banking-72b3e4a7d212
tags:
  - blog-mocking
  - blog
relatedTags:
  - blog-mocking
publishedDate: 2018-06-07T19:45:07.047Z
author: Chris Wood
title: Value of Mocking — Open Banking
subtitle: ' The role of developer experience in Open Banking'
image: /images/mocking-open-banking.jpeg
color: indigo
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: ' The role of developer experience in Open Banking'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: Value of Mocking — Open Banking | Stoplight API Corner
  image: /images/mocking-open-banking.jpeg
  twitter:
    description: ' The role of developer experience in Open Banking'
    title: Value of Mocking — Open Banking | Stoplight API Corner
    image: /images/mocking-open-banking.jpeg
    username: '@stoplightio'
---
Everyone is talking about Open Banking. Whether you’re doing it, thinking about doing it or pretending you’re doing it; Open Banking is the **thing** in the API space that everyone wants a slice of. The EU’s [Payment Services Directive](https://en.wikipedia.org/wiki/Payment_Services_Directive) (PSD2) has even gone so far as to require financial institutions to expose APIs for the purposes of promoting transparency, Open Banking, and consumer protection. For the champions of Open Banking — the Fintechs and challengers who see the opportunity to make a splash in financial services — this is a period of significant promise, the gold rush to start chipping away at the existing banking giants. However, for the incumbents — who are being forced to open up access to consumer accounts through both regulation and competition — this is a period of radical change that will bring significant operating challenges.

Before Open Banking, sharing access to customer accounts generally meant one thing in the context of the Internet, online banking. In the vast majority of cases, online banking applications are a tightly controlled and highly secure environment with one entrance dedicated to the account owners. Other than for corporate accounts, they simply do not have delegated access models with appropriate role based access that depends on whether you are the account owner or “someone else”. All this is done for a good purpose — to ensure customer accounts are well-protected with as few attack surfaces as possible. However, the security model and need for new entitlements spanning customers and applications means that reuse is difficult and raises risks to online banking customers.

The majority of incumbent banks are therefore building their API platforms from scratch and playing in a space they have not been in before. This openness is not just a technical challenge — it requires a cultural change that does not always sit naturally with the way online banking has been delivered. It therefore stands to reasons that the initial offerings are unlikely to be feature-rich and may miss what are considered essential components of developer experience in the API Economy.

### **Financial Regulation Beats DX**

The challenge for developers and banking institutions is accentuated by the diversity of the environment. Open Banking is likely to be manifested in many different ways across the world, ranging from free market efforts where banks “go it alone” to highly regulated environments like the first release of the standards in the UK. The APIs offered in the free markets are more likely to be like “regular” APIs, where the providers can design them as they see fit and offer appropriate sandbox environments to go with them. Highly regulated environments are more likely to be at the opposite end of the scale, with sandboxes only available to active participants that have reached a given stage in the scheme’s API lifecycle.

The UK is a pertinent example of this. The banking institutions that are part of the core Open Banking group (the “CMA 9”) sporadically provide public sandboxes for use by any developer, whether they are part of a regulated organization or not. In part, this is due to how the initiative manifested itself — essentially under coercion from the UK government, with a step change required in their behaviors as discussed above. Quite simply, there has not been sufficient time to get everything a developer requires into place. In some cases, participants are required to wait until they are approved by the Financial Conduct Authority (FCA) and are eligible for Open Banking before they can on-board to some of the environments hosted by one of the CMA 9, delaying their ability to start development in earnest.

There is also a practical point for developers. In markets like the UK, the providers are compelled to implement their APIs according to a given API specification. If developers create their applications against each of the providers sandbox, they’ll need to — at the time of writing — develop against nine different sandbox or test instances. This is an inefficient and impractical way of working.

### **The Value of Mocking**

Step in mocking to help out. UK Open Banking provides a [reference implementation](https://github.com/OpenBankingUK/tpp-reference-server) of the available APIs. However, they’ll be esoteric cases that developers want to test that don’t come out of the box with this pre-canned piece of software. In working with different financial institutions, developers may also want to replicate behaviors they find in a live environment for test purposes — something the reference application won’t give them.

Tools like [Prism](/platform/prism/) , therefore, help developers bridge the gap between what they need to get the job done and what is available in the fledgling Open Banking Space:

* Developers can grab the core specification from the relevant source — for example the [UK Open Banking Payment Initiation API](https://github.com/OpenBankingUK/payment-initiation-api-spec/blob/master/dist/v1.1/payment-initiation-swagger.yaml) — and get straight to work by starting Prism from the command line.

* They can do this without waiting for sandboxes or environments to be made available, and get going with virtually zero configuration. Prism will automatically start providing dummy responses.

* They can add their esoteric cases, in the case of Prism, creating scenarios using JavaScript that the out-of-the-box reference application does not cater for.

Tools like Prism, help developers bridge the gap between what they need to get their job done, and what is available in the fledgling Open Banking space.

### **Wrap Up**

Open Banking — and its approach to developer experience — has a long way to go before reaching the maturity of companies whose *raison d’etre* is providing APIs to their consumers. It is unlikely that the incumbent financial institutions will ever get to a truly API-focused implementation of their products. However, if they create an ecosystem of tooling rather than massive developer portal programs they have every chance of providing a developer experience rich enough to suit the needs of even the most demanding developers. In the meantime, tools like Prism are vital to helping bridge the gap and help developers gain traction in the Open Banking space.
