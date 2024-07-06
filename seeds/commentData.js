const { Comment } = require("../models/Comment");

const commentData = [
    {
        content: "I've been considering learning how to code, thanks for the information!",
        dateCreated: "07/06/24", 
        userId: 2,
        blogPostId: 1,
    },
    {
        content: "I really want to buy an IPaw for my huskies! But i'm afraid they'll ignore my calls LOL!",
        dateCreated: "07/06/24", 
        userId: 1,
        blogPostId: 2,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;