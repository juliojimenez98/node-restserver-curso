require('./config/config');

const express = require('express');
const mongoose = require('mongoose');



const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


 
// parse application/json
app.use(bodyParser.json());


app.use(require('./routes/usuario'));

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.URLDB,{ 
    useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false, useCreateIndex: true}
    ,(err,res)=>{

    if (err) throw err;

    console.log('Base de datos Online');

});

 
app.listen(process.env.PORT, ()=>{
    console.log('Escuchando puerto', process.env.PORT);
})