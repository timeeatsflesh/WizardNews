const html = require("html-template-tag");

const fourOhFourhtml = () => {
  return html`
    <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <header><img src="/logo.png" />Wizard News</header>
        <div class="not-found">
          <p>404: Page Not Found</p>
        </div>
      </body>
    </html>
  `;
};

module.exports = { fourOhFourhtml: fourOhFourhtml };
