const express = require('express'); 
const app = express();

// ...other requires and database connection as before...
const { Flowchart, Node } = require('./models'); // Assuming your models file

// Example GET route
app.get('/flowchart/:id', async (req, res) => {
  try {
    

    const flowchart = await Flowchart.findById(req.params.id).populate('nodes');
    res.json(flowchart);
  } catch(err) {
     res.status(500).json({message: err.message}); // Basic error handling
  }
});

const port = 3000; // Or your desired port number

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {  
  // What should we do here? For now, a simple response:
  res.send('Hello from flowchart backend!'); 
});



// ...Add your other routes for POST, PUT...
