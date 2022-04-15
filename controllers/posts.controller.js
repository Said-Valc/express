const {Posts, Comments, Likes} = require('../models/posts.model.js');

module.exports.postsController = {
    getPosts: async(req, res)=>{
        const result = await Posts.find({}).populate(['dop.comments','dop.likes']);        
        res.json(result);
    },

    addComment: async(req, res) =>{
        const {postId, author, text} = req.body;
        const result = await Comments.create({
            author,
            text,
            postId
        })
    }
}