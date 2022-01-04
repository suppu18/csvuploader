const mongoose= require('mongoose');
// ||'mongodb://localhost/csv-reader'
const DB= 'mongodb+srv://suppu:NWgCbwJeCYTac9g@cluster0.lwltz.mongodb.net/csvuploader?retryWrites=true&w=majority';
mongoose.connect(DB)
.then(()=>{console.log('db connected')})
.catch((err)=>{console.log(err)});
const db= mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to mongodb'));

db.once('open',function(){
    console.log("connected to mongodb");
});

module.exports= db;