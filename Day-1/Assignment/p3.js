var prompt=require('prompt-sync')();
const name=prompt( "Enter name ");
var guest=["Asmit","Swapnali","Suhas","Siddhita","Tanvi"];
var invited=false;
for(var i=0;i<guest.length;i++)
{
    if(guest[i]==name)
    {
        invited=true;
        break;
    }
    
}
if(invited)
{
    console.log("Invited")
}
else{
    console.log("Not Invited")
}
//console.log(guest);