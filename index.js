const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const userRoute = require('./src/Routes/user');
app.use('/api' , userRoute );
//start function
const PORT = process.env.PORT || 5000;
const ConnectDB = require('./src/DB/config');
const DB = process.env.mongoURI ;
const start = ()=>{
app.listen(PORT , ()=>{
    ConnectDB(DB)
    console.log(`This route is running the port ${PORT}`);
    console.log(`Route: http://localhost:${PORT}/api`);
}
);
}
//calling the start function
start();