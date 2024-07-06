// this establishes the relationships between our Models
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

BlogPost.belongsTo(User,{
    foreignKey: "user_id",
});

BlogPost.hasMany(Comment, {
    foreignKey: "blogpostId",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "userId",
});

Comment.belongsTo(BlogPost, {
    foreignKey: "blogpostId",
});

User.hasMany(BlogPost, {
    foreignKey: "userId",
    onDelete: "CASCADE",
});

User.hasMany(Comment, {
    foreignKey: "userId",
    onDelete: "CASCADE",
});

module.exports = { BlogPost, Comment, User};