const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

//* route:  POST api/posts
//? desc:   Create a post
//! access: Private
router.get('/', (req, res) => res.send('Post route'))


//* route:  GET api/posts
//? desc:   Get all posts
//! access: Private


//* route:  GET api/posts/:id
//? desc:   Get post by ID
//! access: Private


//* route:  DELETE api/posts/:id
//? desc:   Delete a post
//! access: Private


//* route:  PUT api/posts/like/:id
//? desc:   Like a post
//! access: Private


//* route:  PUT api/posts/unlike/:id
//? desc:   Unlike a post
//! access: Private


//* route:  POST api/posts/comment/:id
//? desc:   Comment on a post
//! access: Private


//* route:  DELETE api/posts/comment/:id/:comment_id
//? desc:   Delete comment
//! access: Private



module.exports = router;