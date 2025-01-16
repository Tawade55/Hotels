const mongoose=require('mongoose');

//Define the person scheme/model
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
        //required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    address:{
        type:String,
        //required:true
    },

    salary:{
        type:Number,
        required:true
    }
});

//Create Person model and export it
const Person=mongoose.model('Person',personSchema);     //Hyala export kelay main directory chya server madhe
module.exports=Person;
