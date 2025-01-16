const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 5000;
// now i want to connect mongodb
const mongoose  = require("mongoose")
//1st> connect mongodb
mongoose.connect("mongodb://localhost:27017/StudentRegister",{
})
.then(()=>{
    console.log("mongodb connected sucessfully");
})
.catch((err)=>{
    console.log("there is an error", err);
})

//2nd> create a mongoose schema 
const StudentSchema = new mongoose.Schema({
    name:String,
});
const Student = mongoose.model("Student", StudentSchema);


const app = express();
app.use(express.json());
app.use (cors());

// for methode:get by frontend 
app.get('/',(req,res)=>{
    res.send("Jai shree ganesh");
});

//routes
app.post('/add', async(req,res)=>{
    const data = req.body;
    // now i get the data from frontend and will store it to mongodb
    try{
        const newStudnet = new Student({
            name:data.name,
        })
        await newStudnet.save();
        res.json({message:"data added to mongodb"})
    }
    catch(error){
        console.log(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
})