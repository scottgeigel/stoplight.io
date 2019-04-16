---
path: /blog/stoplight-v4-0-0-realtime-editor-toolbar-openapi-read-mode-3dded8763fbb
tags:
  - blog-changelog
  - blog
relatedTags:
  - blog-changelog
publishedDate: 2018-03-27T21:56:14.802Z
author: Robert Wallach
title: Stoplight v4.0.0 Release
subtitle: 'Realtime, Editor Toolbar, OpenAPI Read Mode'
image: /images/v4-newui.png
color: black
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  description: 'Realtime, Editor Toolbar, OpenAPI Read Mode'
  favicon: /images/mark_light_bg.png
  robots: 'index, follow'
  title: v4.0.0 Release | Stoplight API Corner
  image: /images/changelog-stock.jpg
  twitter:
    description: 'Realtime, Editor Toolbar, OpenAPI Read Mode'
    title: v4.0.0 Release | Stoplight API Corner
    image: /images/changelog-stock.jpg
    username: '@stoplightio'
---

We’re thrilled to announce the immediate release of Stoplight v4.0.0! This update includes realtime editing notifications, read view for OpenAPI files, significant hub editor improvements, and more that you can read about in this blog post.

## Breaking

- **Desktop**: We have removed Local File Mode from the Desktop application while we work towards a more robust implementation. If this is a breaking change in your workflow, you can continue to use the 3.x.x version of the Desktop App when needed, and the web app otherwise (can mix/match the two).

- **Hubs:** Hub->Hub references are no longer directly supported in the UI. They will still work and render correctly, but the URL to the hub JSON has to be manually entered/edited. We do not recommend using Hub->Hub references moving forward, as it makes route maintenance difficult amongst other things. Instead, we recommend one hub with pages that reference Markdown or OpenAPI files.

- **Hubs**: Hub title and logo are now added by default to the header (you might see “Untitled Hub” if you have not set these properties). To set them, change to design mode and then click “Hub Settings” in the top toolbar.

Please reach out via chat or [support@stoplight.io](mailto:support@stoplight.io) if you have questions about the above changes.

## New 🚀

- **Editor**: You can now see in real-time when someone else is editing files in your project. You no longer have to worry about mistakenly saving over their work or vice versa.

![Editing Notifications](https://cdn-images-1.medium.com/max/800/1*3bkTHpvx2GF6sXD-XOuH5w.png)

- **OpenAPI**: Your OpenAPI files now have a read-only mode that displays the contents of the OAS file in a nice readable format for guests and those without write access.

- **Hubs**: You can now add your logo and pick the colors of your choice for your documentation Hub. The ability to add custom CSS is coming soon too.

- **Hubs**: The “Send a Test Request” feature in your documentation Hub, located in API References and as a block, now supports OAuth 1.0 and 2.0.

- **Hubs**: Pages and subpages can now reference markdown files. This is the preferred method to organize large hubs moving forward (hub provides routing and organization, markdown files hold the content).

- **Hubs**: You can now see all of the pages and subpages in your documentation Hub file in one location with the Table of Contents button in the new toolbar.

- **Orgs**: The new guest role is for read only internal organization collaborators. These collaborators will be able to read projects but not write or create new projects.

## Enhancements 💪

- **Editor**: Alert message when you try to leave a project with unsaved changes.

- **Editor**: We have unified the toolbar throughout the Editor for better user experience. There are now three main modes: Read, Design, and Code. In Design mode, you can edit your .hub, .oas, .scenarios, and .prism files with the visual editor. In Code mode, you can edit the same files, but in a text-based editor.

## Old UI:

![Old UI](https://cdn-images-1.medium.com/max/800/1*MDDCURcSEZ7ofFOnSXD3tA.png)

## New UI:

![New UI](https://cdn-images-1.medium.com/max/800/1*a7RXiuvqMlCo5VstMsmwog.png)

- **Editor**: When you save, you can now create a custom save message. This can be helpful for more detailed messages for your history of changes and the GitHub integration that we are working towards.

- **Editor**: We have improved the UI of the OAS validation panel in the editor, including new tooltips and the ability to jump around in your specification based on the warnings and errors. It’s now easier to see your warnings and errors and quickly fix them.

- **Editor**: We have added a save shortcut when you are editing a file: command+s (on Mac) or Ctrl+s (on Windows).

- **Editor**: The environments editor has been moved into a modal. Users found that the popup style UI made it difficult to edit large variables.

- **Hubs**: When documentation is printed or turned into a PDF, the print layout has now been improved. This is available in the Stoplight application and for published documentation.

![Print Layout](https://cdn-images-1.medium.com/max/800/1*Va04M_br3wIKIyficvS4CQ.png)*Print Layout*
