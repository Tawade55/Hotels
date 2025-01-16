var prompt=require('prompt-sync')();
const age=prompt("Enter Age");

if(age<18)
{
    console.log("u get 20% dis")
}
else if(age>=18 && age <=65)
{
    console.log("Normal tickets")
}
else
{
    console.log("30% discount for u");
}