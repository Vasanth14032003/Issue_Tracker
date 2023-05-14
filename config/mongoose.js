const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vasanthpandian02:S40KWZqLfkke777O@cluster0.9lywcno.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});
 

module.exports = db;