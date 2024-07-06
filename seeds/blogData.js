// import required blogpost model
const { BlogPost} = require('../models/BlogPost');

const blogData = [
    {
        title: "Should you learn how to code?",
        content: "Learning how to code can be difficult at first, but having a good mentality is a good quality that will help you learn to code. You must be patient and embrace the fact that when you begin learning, there will be confusion and frustration, but take it one baby step at a time. Learning takes time and patience, so be patience with yourself... remember that you will get there eventually. If you want to learn a field that is competitive and growing rapidly, coding is a good career option for you!",
        dateCreated: "07/06/24",
        userId: 1,
    },
    {
        title: "Apple is launching a new phone for pets, called the IPaw!",
        content: "If you haven't already heard about the revolutionary IPaw, are you living under a rock? The new IPaw will allow pet owners to call their pets when they're away from home! The IPaw even features Facetime calling, for those pet parents that just can't stand to be without their pet babies. Will you be waiting in line for the launch of the IPaw?",
        dateCreated: "07/06/24",
        userId: 2,
    },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogData);

module.exports = seedBlogPost;