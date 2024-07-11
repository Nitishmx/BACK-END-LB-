const Comment = require("../models/commentModel");
const Post =require("../models/postModel")

// write logic
let Commentdata = async (req, res) => {
  try {
    let { post, user, body } = req.body;
    let comment = new Comment({ post, user, body });
    // object save in database
    const saveComment = await comment.save();

    //   find the post id and the new comment add in comment model array
    let updatepost = await Post.findByIdAndUpdate(post, {$push: {comments: saveComment._id}},{ new: true })
 

    res.status(200).json({
      post: updatepost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error creating",
    });
  }
};

module.exports = Commentdata;
