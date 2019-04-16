import MarkdownIt from 'markdown-it';

import Highlight from './highlight';

const BaseMarkdown = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    try {
      const grammar =
        lang !== undefined ? Highlight.languages[lang] || Highlight.languages.markup : Highlight.languages.markup;
      return Highlight.highlight(str, grammar, lang);
    } catch (e) {
      console.log('Error highlighting code:', str, lang, e);
      return str;
    }
  },
})
  .use(require('markdown-it-anchor'), {
    level: [1, 2, 3],
    permalink: true,
    permalinkClass: 'anchor',
    permalinkSymbol: '🔗',
    permalinkBefore: true,
  })
  .use(require('markdown-it-toc-done-right'))
  .use(require('markdown-it-video'));

function Renderer(src, { includeToc } = {}) {
  if (typeof src !== 'string') {
    return null;
  }

  try {
    return BaseMarkdown.render(includeToc ? '${toc}\n' + src : src);
  } catch (e) {
    console.log('Error rendering markdown:', e.message, src);
  }

  return null;
}

export const convertMarkdownToHTML = (data, options) => {
  if (typeof data === 'string') {
    return Renderer(data, options);
  }

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === 'object') {
        data[key] = convertMarkdownToHTML(data[key], options);
      } else if (['description', 'markdown'].includes(key)) {
        // Don't include ToC for description or markdown properties
        data[key] = Renderer(data[key], { includeToc: false });
      }
    }
  }

  return data;
};
