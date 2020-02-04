let express=require('express');
let app=express();
var port = process.env.port || 8080;
app.get('/posts',(req,res)=>res.send({name:"Manisha"}));
app.listen(port,function()
{
    console.log("running my first app on port" + port);

});