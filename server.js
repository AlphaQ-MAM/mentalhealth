const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const MONGODB_URI ="mongodb+srv://MahakC:nodecomplete123@cluster0.nlcrx.mongodb.net/mentalhealth?retryWrites=true&w=majority"

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));







mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(result => {
        console.log('connected');
        app.listen(8080);
    })
    .catch(err => {
        console.log(err);
    })

   




