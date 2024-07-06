// this establishes the relationships between our Models
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

BlogPost.belongsTo(User,{
    foreignKey: "user_id",
});

BlogPost.hasMany(Comment, {
    foreignKey: "blogpost_id",
    onDelete: "CASCADE",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongsTo(BlogPost, {
    foreignKey: "blogpost_id",
});

User.hasMany(BlogPost, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

module.exports = { BlogPost, Comment, User};