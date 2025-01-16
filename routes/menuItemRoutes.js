const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem.js');


//Menu Post,Get

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newmenu=new MenuItem(data);
        const response=await newmenu.save();
        console.log("Data Saved");
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Invalid Server Error"})
    }
})
router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log("Data Visible");
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Invalid server error"});
    }

})

router.get('/:tasty',async(req,res)=>{
    try{
        const tasty=req.params.tasty;
        if(tasty=="spicy" || tasty=="sour" || tasty=="sweet")
        {
            const response=await MenuItem.find({taste:tasty});
            console.log("Data saved");
            res.status(200).json(response);
        }
        else
        {
            console.log("Invalid Search")
            res.status(404).json({error:"Error not found"});
        }


    }catch(err){
        console.log(err);
        res.status(500).json({error:"Invalid server error"});
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const menuId=req.params.id;   //extract the ID from URL parameter
        const updatedMenu=req.body;   //updated data for person

        const response=await MenuItem.findByIdAndUpdate(menuId,updatedMenu,{
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


router.delete('/:id',async(req,res)=>{
    try{
        const menuId=req.params.id;
        const response=await MenuItem.findByIdAndDelete(menuId)

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
module.exports=router;