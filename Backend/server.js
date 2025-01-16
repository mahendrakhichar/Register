const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 5000;
// now i want to connect mongodb
const mongoose  = require("mongoose")
//1st> connect mongodb
mongoose.connect("mongodb://localhost:27017/StudentRegister",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("mongodb connected sucessfully");
})
.then((err)=>{
    console.log("there is an error", err);
})

//2nd> create a mongoose schema 
const StudentSchema = new mongoose.Schema({
    name:String,
});
const model = mongoose.model("student", StudentSchema);


const app = express();
app.use(express.json());
app.use (cors());

// for methode:get by frontend 
app.get('/',(req,res)=>{
    res.send("Jai shree ganesh");
});

//routes
app.post('/add', (req,res)=>{
    const data = req.body;
    console.log(data);
    res.json({
        message:"data recieved",
        details: data,
    })
})

app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
})