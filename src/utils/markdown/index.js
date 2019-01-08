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
  .use(require('markdown-it-video'));

export function Renderer(src) {
  if (typeof src !== 'string') {
    return null;
  }

  try {
    return BaseMarkdown.render(src);
  } catch (e) {
    console.log('Error rendering markdown:', e.message, src);
  }

  return null;
}
