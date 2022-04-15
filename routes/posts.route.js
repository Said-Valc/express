const {Router} = require('express');
const {postsController} = require('../controllers/posts.controller.js');
const router = Router();

router.get("/getPosts", postsController.getPosts);
router.post('/addComment', postsController.addComment);

module.exports = router;