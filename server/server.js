const express = require('express');
const app = express();
const users = require("./routes/user");

app.use('/api',users)
const port = process.env.PORT || 9000;

app.listen(port,()=>{
    console.log(`server listening on ${port} !`);
})