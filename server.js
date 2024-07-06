const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

//setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//allows you to serve static files from a directory. 
app.use(express.static(path.join(__dirname, 'public')));

// Sets up the routes
app.use(require('./controllers/'));

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});