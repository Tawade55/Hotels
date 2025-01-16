/*function add(a,b)
{
    return a+b;
}
var result=add(15,15)
console.log(result);*/

//callback function
/*function callback()
{
    console.log("Callback function");
}
const add=function(a,b,callback)
{
   var result=a+b;
   console.log("result:",result);
   callback();
}
add(1,3,callback);*/

var fs=require('fs')
var os=require('os')

var user=os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Hi ' + user.username +'!\n', ()=>{
    console.log("file created")
});