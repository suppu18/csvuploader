const mongoose= require('mongoose');
mongoose.connect(process.env.MONGODB_URL||'mongodb://localhost/csv-reader');
const db= mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to mongodb'));

db.once('open',function(){
    console.log("connected to mongodb");
});

module.exports= db;