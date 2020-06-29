const express = require('express');
const mainController = require('./controller/mainController');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public')); 

mainController(app);

app.listen(3000);
console.log('listening to port 3000 '); 



