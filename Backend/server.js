const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 5000 || process.env.PORT;
const multer = require("multer")
require('dotenv').config();
// now i want to connect mongodb
const mongoose  = require("mongoose")
//1st> connect mongodb
const MONGODBURI = process.env.MONGODB_URI;
mongoose.connect(MONGODBURI,{
})
.then(()=>{
    console.log("mongodb connected sucessfully");
})
.catch((err)=>{
    console.log("there is an error", err);
})

//2nd> create a mongoose schema 
const StudentSchema = new mongoose.Schema({
    Name:String,
    FathersName:String,
    Class:String,
    ContactNumber:Number,   
    EmailId:String,
    Introduction:String,
    Photo:Buffer,
});
const Student = mongoose.model("Student", StudentSchema);

// after this i want to add images so i need multer
// Multer setup: Store uploaded image as Buffer
const storage = multer.memoryStorage();  // Store image in memory
const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use (cors());

// for methode:get by frontend 
app.get('/',(req,res)=>{
    res.send("Jai shree ganesh");
});

//routes
app.post('/add', upload.single('Photo'), async(req,res)=>{
    const data = req.body;
    const photo = req.file;
    // now i get the data from frontend and will store it to mongodb
    try{
        const newStudnet = new Student({
            Name:data.Name,
            FathersName:data.FathersName,
            Class:data.Class,
            ContactNumber:data.ContactNumber,
            EmailId:data.EmailId,
            Introduction:data.Introduction,
            Photo:photo.buffer,
        })
        console.log(data.EmailId);
        await newStudnet.save();
        res.json({message:"data added to mongodb"})
    }
    catch(error){
        console.log(error);
    }
})

app.get('/api/students',async(req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "failed to fetch students"})
    }
})

app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
})