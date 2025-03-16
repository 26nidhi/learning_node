const express = require("express");
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());// req.body
const Person = require("./models/person");
const MenuItem = require('./models/menu');


app.get('/', (req,res) => {
  res.send('welcome to my hotel');
})

const personRoutes = require('./routes/personroutes');
const menuItemsRoutes = require('./routes/menuItemsRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuItemsRoutes);

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
