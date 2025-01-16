const express=require('express');
const router=express.Router();
const Person=require('./../models/Person.js');
//Post route to add a person
router.post('/',async(req,res)=>{  //async manje db function joh aahe tyala jara time loagto process karayla joh paryant purna pane heh perform nahi hoth toh paraynt await wait karayla lavto ekda neat perform jhala tar mag heh await je aahe te save karto
    try{
        const data=req.body     //Assuming the request body contains the person data jasa ki json vala jo data aala hota client kadun tyala object madhe convert kela bodyy parser ne aani aata toh data tyane req-body madhe store kelay
    // Create a new Person document using Mongoose model

        const newPerson=new Person(data);   //Ha ek prakar jhala inputs la ghenyacha dusra way aahe toh tya Person chya aat ch data mahnun call hota  ani khali lihla aahe toh tyacha paila way aahe
        /*newPerson.name=data.name;        
        newPerson.age=data.age;
        newPerson.mobile=data.mobile;
        newPerson.email=data.email;
        newPerson.address=data.address;*/

        //Save the new person to the database
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

router.get('/',async(req,res)=>{
    try{
        const data= await Person.find();
        console.log('data saved');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Invalid server error"})
    }
})


router.get('/:workType',async(req,res)=>{   //ikde :worktype manjech different different variables aasnaar jasa ki cheforwaiter etc 
    try{
        const workType=req.params.workType; //params=parameter extract the workType from URL parameter
        if(workType=='chef'||workType=='waiter'||workType=='manager')
        {
            const response=await Person.find({work:workType});  //work joh aahe toh variable aaplya schema madhe declare kelay aapan
            console.log("Data Fetched");
            res.status(200).json(response)    
        } 
        else
        {
            console.log("Invalid search type");
            res.status(404).json({error:"404 Not found"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;   //extract the ID from URL parameter
        const updatedPerson=req.body;   //updated data for person

        const response=await Person.findByIdAndUpdate(personId,updatedPerson,{
            new:true,   //return the updated document
            runValidators:true  //run mongoose validation
        });
        if(!response)
        {
            res.status(500).json({error:"Person not found"});
        }

        console.log("Data updated");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Invalid server error"});
    }
})
});

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId)

        if(!response)
        {
            res.status(500).json({error:"Person Not found"});
        }
        console.log("Data deleted")
        res.status(200).json({message:"Data Deleted Successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Invalid Server Error"});
    }
})
module.exports=router