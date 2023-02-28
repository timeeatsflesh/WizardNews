const express = require("express");
const app = express();
const morgan = require("morgan");
const { list, find } = require("./postBank.js");
const posts = list();

const { postDetails } = require("./views/postDetails");
const { postLists } = require("./views/postList");
const { fourOhFourhtml } = require("./views/404html");
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => res.send(postLists(posts)));

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = find(id);

  if (!post.id) {
    res.send(fourOhFourhtml());
  } else {
    res.send(postDetails(post));
  }
});

app.use("*", (req, res) => {
  res.send(fourOhFourhtml());
});

const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
