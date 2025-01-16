const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 5000;
const multer = require("multer")
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
    Name:String,
    FathersName:String,
    Class:String,
    ContactNumber:Number,
    EmailID:String,
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
            EmailID:data.EmailID,
            Introduction:data.Introduction,
            Photo:photo.buffer,
        })
        await newStudnet.save();
        res.json({message:"data added to mongodb"})
    }
    catch(error){
        console.log(error);
    }
})

app.get('/students',async(req,res)=>{
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