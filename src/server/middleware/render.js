/* global VENDOR_BUNDLE: true, CLIENT_BUNDLE: true */
function render(req, res) {
  const context = {}

  if (context.url) {
    return res.redirect(302, context.url)
  }

  return res.status(context.status || 200).send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="description" content="Software Engineer from Portugal">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta property="og:title" content="Carlos Carvalho - Software Engineer" />
          <meta property="og:type" content="website" />
          <title>Carlos Carvalho</title>
        </head>
        <body>
          <div id="root">
          </div>
          <noscript>
            Carlos Carvalho
            Software Engineer
            </noscript>
          <script src="${VENDOR_BUNDLE}"></script>
          <script src="${CLIENT_BUNDLE}"></script>
        </body>
      </html>
    `)
}

export default render
