const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed

// Route handling for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api',(req,res)=>{
  res.json([{
    "email":"ruhul@gmail.com",
    "name":"ruhul amin"
  }])
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
