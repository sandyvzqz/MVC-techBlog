const { User} = require('../models/User');

const userData = [
    {
        username: "sandyvblogs",
        password: "Hi!123456",
    },
    {
        username: "huskyBlogs",
        password: "Fluffytail!1",
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
