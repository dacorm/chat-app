const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api/auth', userRoutes)

mongoose.connect(process.env.MONGO_CLUSTER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Db connection Successful')
}).catch((err) => {
    console.log(err.message)
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on Port ${process.env.PORT}`)
})