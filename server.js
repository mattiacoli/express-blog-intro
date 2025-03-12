// import express modules
const express = require('express')
// invoqe express() function
const app = express()
// add port for local server
const port = 3001

// initialize server
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port} `);

})

// add basic route
app.get('/', (req, res)=>{
  res.send('Server del mio Blog')
})