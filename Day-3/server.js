const objectToConvert={
	name:"Alice",
	age:25
};
const json=JSON.stringify(objectToConvert);//Convert object to JSON string
console.log(json)

console.log(typeof json)

const express=require('express')//Ikdun aapan server banvayla chalu kela
const app=express()//app madhe express fn aahe

app.get('/',function(req,res)	//hyat get madhe aaplya fakta information disnaar aapan tyat kahich modification nahi karu shakat hyat / nantar enter dabla ki toh function run honaar jyat toh req ani response gheto
{
	res.send('Hello and Welcome to our restaurant')
})	

app.get('/chicken',function(req,res){
	res.send("Sure sir i would like to serve u chicken")
})

app.get('/idli',function(req,res)
{
	var customized_idli={
		name:"rava idli",
		size:"10 cm diameter",
		is_sambar:true,
		is_chutney:false
	}
	res.send(customized_idli);
})

app.listen(3000,function(){	//call back () aahe ha joh vaparla aahe paila function run honaar(main) nantar print honaar server listninng on 3000 port vala je callback karnaar
	console.log("Server listinning on port 3000")
})//Ha port no aahe