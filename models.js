const mongoose = require('mongoose');

const flowchartSchema = new mongoose.Schema({
    title: String,
    createdDate: { type: Date, default: Date.now }
});

const nodeSchema = new mongoose.Schema({
    type: String,
    content: {
        text: String,
        images: [String], // Array of image URLs
        pdfs: [String]  // Array of pdf URLs
    },
    position: {
        x: Number,
        y: Number
    }
});

// Export your models:
module.exports.Flowchart = mongoose.model('Flowchart', flowchartSchema);
module.exports.Node = mongoose.model('Node', nodeSchema);
