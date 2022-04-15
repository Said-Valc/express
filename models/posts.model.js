const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
    author: String,
    text: String,
    postId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "posts"
    }
   
})

const likesSchema = mongoose.Schema({
    author: String,
    like: Boolean,
    postId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "posts"
    }
   
})

const postsSchema = mongoose.Schema({
    title:String,
    description: String,
    dop:[
        {
           comments: {
                type: mongoose.SchemaTypes.ObjectId,
                ref:'comments'
            },
            likes: {
                type: mongoose.SchemaTypes.ObjectId,
                ref:'likes'
            },
        }
    ]
})

const Posts = mongoose.model('posts', postsSchema);
const Comments = mongoose.model('comments', commentsSchema);
const Likes = mongoose.model('likes', likesSchema);
module.exports = {Posts, Comments, Likes};