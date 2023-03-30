const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler')

const userRoutes = require('./routes/userRoutes')

require('dotenv').config();
require("colors");
require('./database')

// initialize
const app = express()
const PORT = process.env.PORT

// middlewares
app.use(cors({origin: process.env.ORIGIN}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(errorHandler)
app.use((req, res, next) => {
    console.log(`${req.path} - ${req.method}: ${JSON.stringify(req.body)}`)
    next();
})


// routes
app.use("/api/v1/users",userRoutes)

// server listen
app.listen(PORT, () => {console.log(`Server running in PORT: ${PORT.cyan}`)})