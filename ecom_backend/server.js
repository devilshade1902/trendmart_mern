const express= require('express')
const app = express();
app.use(express.json());
const port = 3000
const mongoose = require('mongoose');
const cors = require('cors')
const authRoutes = require('./routes/auth')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true,               
}));


const mongoURI = 'mongodb+srv://devilshade1902:dhruvtiger1708@trendmart.ka9p5rk.mongodb.net/TrendMart'; 

    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));


app.get('/',(req,res)=>{
    res.send("hello world")
})

// routes
app.use('/api/auth',authRoutes)


app.listen(port, () => {
    console.log(`server running on ${port}`)
})