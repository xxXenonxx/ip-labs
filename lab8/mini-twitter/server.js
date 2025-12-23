const express = require("express");
const app = express();
app.use(express.json());

const posts = [];
let nextId = 1;

app.post("/posts", (req, res) => {
  const post = {
    id: nextId++,
    title: req.body["title"],
    content: req.body["content"],
    comments: []
  };

  console.log(`Adding this new post ${JSON.stringify(post)}`);
  posts.push(post);
  console.log(`Posts: ${JSON.stringify(posts)}`);

  res.status(201).json(post);
});


app.get("/posts", (req, res) => {
  console.log("Returning all posts");
  res.json(posts);
});


app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);

  console.log(`Returning post ${JSON.stringify(post)}`);
  res.json(post);
});


app.post("/posts/:id/comments", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);

  const newComment = req.body["comment"];
  post.comments.push(newComment);

  console.log(`Updated comments for post ${id}: ${JSON.stringify(post.comments)}`);
  res.status(201).json(post.comments);
});


app.get("/posts/:id/comments", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);

  console.log(`Returning comments for post ${id}`);
  res.json(post.comments);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
