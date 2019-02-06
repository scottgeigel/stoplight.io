import MarkdownIt from 'markdown-it';

const BaseMarkdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
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

export function Renderer(src, { includeToc } = {}) {
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
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === 'object') {
        data[key] = convertMarkdownToHTML(data[key], options);
      } else if (key === 'body') {
        data[key] = Renderer(data[key], options);
      } else if (['description', 'markdown'].includes(key)) {
        // Don't include ToC for description or markdown properties
        data[key] = Renderer(data[key], { includeToc: false });
      }
    }
  }

  return data;
};
