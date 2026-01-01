const express=require ("express");
const port =3000;
const app=express();

app.get("/route-handler",(req,res)=>{
    res.send('<b>ok sending info<b>');
})

app.get('/',(req,res)=>{
    res.send("hii yashhh");
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

// a simple http server is made 