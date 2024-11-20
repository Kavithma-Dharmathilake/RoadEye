require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const auth = require("./routes/auth")
const protectedRoutes = require("./routes/protectedRoutes")


//express app
const app = express();
const router = express.Router();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.use(cors());




const corsOptions = {
  origin: "https://localhost:3000/", // frontend URI (ReactJS)
}


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/protected', require('./routes/protectedRoutes'));




//connect to db
mongoose.connect(process.env.MONGO_URI || 2000)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {

      console.log('connected to db and listening on port', process.env.PORT);
    })

  })
  .catch((error) => {

    console.log(error);
  })





  