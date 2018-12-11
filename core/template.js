export default (html, hydrateData) => {
  const helmet = hydrateData.helmet
  return `
    <!doctype html>
      <html ${helmet.htmlAttributes.toString()}>
          <head>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
          </head>
          <body ${helmet.bodyAttributes.toString()}><div id="app">${html}</div>
          </body>
          <script type="text/javascript">window.__NEXT_DATA__=${JSON.stringify(hydrateData)}</script>
          <script src="/dist/client.js"></script>
      </html>
  `;
}
