const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const testRoutes = require('./routes/testRoutes')
const responseRoutes = require('./routes/responseRoutes')
const userRoutes = require('./routes/studentRoute')


dotenv.config();
const MONGODB_URI =process.env.MONGODB_URL

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/test', testRoutes)
app.use('/response', responseRoutes)
app.use('/user', userRoutes)





mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(result => {
        console.log('connected');
        app.listen(3030);
    })
    .catch(err => {
        console.log(err);
    })

   




