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

// ...Add your other routes for POST, PUT...
