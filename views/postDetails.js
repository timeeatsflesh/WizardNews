const html = require("html-template-tag");

const postDetails = (post) => {
  return html`<html>
    <head>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header><img src="/logo.png" />Wizard News</header>

        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
    </body>
  </html>`;
};

module.exports = { postDetails: postDetails };
