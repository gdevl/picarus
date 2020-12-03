### Users

* /user/<:id> GET (retrieve user info)
* /user/<:id> PUT (update user info)
* /user/<:id> DELETE (delete user)

### Posts

* /posts GET (get posts)
* /posts POST (create new post)
* /posts/new GET (retrieve new post form)
* /posts/<:id> GET (retrieve single post)
* /posts/<:id> POST (update single post)
* /posts/<:id>/edit GET (retrieve edit form for single post)
* /posts/<:id>/delete POST (delete single post)

### Comments

* /posts/<:id>/comments GET (retrieve all comments for single post)
* /posts/<:id>/comments POST (create new comment for single post)
* /posts/<:id>/comments/new GET (retrieve new comment form)
* /comments/<:id> GET (retrieve single comment)
* /comments/<:id> POST (update single comment)
* /comments/<:id>/edit GET (retrieve edit form for single comment)
* /comments/<:id>/delete GET (delete single comment)

### Likes

* /posts/<:id>/likes GET (retrieve all likes for single post)
* /posts/<:id>/likes POST (create new like for single post)

### Followers

* /users/<:id>/followers GET (retrieve all followers for single user)
* /users/<:id>/followers POST (create new follower)
* /users/<:id>/followers DELETE (delete follower)
