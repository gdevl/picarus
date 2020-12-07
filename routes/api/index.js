const router = require("express").Router();

const routes = [
  "users",
  "posts",
  "comments",
  "messages",
  "follows",
  "postlikes",
  "commentlikes",
];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
