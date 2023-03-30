const mongoose = require('mongoose')

mongoose.connect(process.env.mongo_URI)
    .then(() => console.log(`MongoDB connected: ${process.env.mongo_URI.cyan}`))
    .catch(err => console.log(err))