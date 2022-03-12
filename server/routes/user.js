const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/all',async (req,res)=>{
    const {status, data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    if(status === 200){
        res.json(data);
    }else{
        res.json({error:"Error"})
    }
})

module.exports = router;