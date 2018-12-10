export default (html, hydrateData) => `
  <html>
  <head>
    <title>test app</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
  </head>
  <body>
    <div id="app">${html}</div>
    <script type="text/javascript">window.__NEXT_DATA__=${hydrateData}</script>
    <script src="/dist/client.js"></script>
  </body>
  </html>
`;
