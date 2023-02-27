const express = require("express");
const app = express();
const morgan = require("morgan")
const{list, find} = require("./postBank.js")
const posts = list()
app.use(express.static('public'))

app.use(morgan('dev'));

app.get("/", (req, res) => res.send(
  `<html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="/posts/${post.id}">${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
      ).join('')}
    </div>
  </body>
  </html>`
  ));

  app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = find(id);
    res.send(`<html>
    <head><link rel="stylesheet" href="/style.css" /></head>
    <body>
    <div class="news-list"><header><img src="/logo.png"/>Wizard News</header></div>
    </body>
    
    </html>`);
  });


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
