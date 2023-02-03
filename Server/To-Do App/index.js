// jshint esversion: 6
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();


// Get request of express server
app.get('/',(req,res)=>{
    res.send('Hello World!')
    console.log(req)
})


// Listen on port 3000

let port=3000
app.listen(port, ()=>console.log(`Example app listening on port ${port}!`));


function swap(x,y) {
    x=y;
    y=x;
    return [x,y];
}
console.log(swap(2,3))

console.log(!! 0)