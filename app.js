const express=require("express")
const app=express();
const port =3500
const cors=require("cors")
app.use(cors(
    {
        origin:"http://127.0.0.1:5500",
    }
));
app.get("/data",(req,res)=>{
    res.send("hello cros")
})
app.get("/datas",(req,res)=>{
    res.json({name:"cors",age:56})
})
app.listen(port,()=>{
    console.log(port)
})