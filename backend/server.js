require('dotenv').config();


const express = require ('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose')


// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// route
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen to the port
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listen to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    });
