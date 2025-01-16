const mongoose=require('mongoose');
require('dotenv').config();
//Define MongoDb connection url
//const mongoURL='process.env.MONGODB_URL_LOCAL'
const mongoURL=process.env.MONGODB_URL

//Set up MongoDb connection
mongoose.connect(mongoURL,{ //moongose.connect madhe 2 parameters by-default patvave lagtat
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDb connection
const db=mongoose.connection;   //hyat moongose db barobar connection maintain karto so that server db la connected rahel

//Define event listeners for database connection

db.on('connected',function()
{
    console.log("Connected to MongoDb Server")
})

db.on('error',function(err)
{
    console.log("MongoDb Connection error",err)
})

db.on('disconnected',function()
{
    console.log("Disconnected from MongoDb Server")
})