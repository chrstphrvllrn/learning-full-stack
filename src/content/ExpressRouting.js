import React from 'react'
import CodeBlock from '../components/CodeBlock'

function ExpressRouting() {
  return (
    <div>
<p>server.js</p>        
<CodeBlock>{`const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(\`mongodb+srv://christophervillarin:\${process.env.MONGODB_PASSWORD}@cluster0.gyeqk.mongodb.net/\`)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

// Routes
app.use('/api', require('./routes/fileupload'));
app.use('/api', require('./routes/beats'));
app.use('/api', require('./routes/email'));
app.use('/api', require('./routes/pricing'));
app.use('/api', require('./routes/socials'));
app.use('/api', require('./routes/deletebeat'));
app.use('/api', require('./routes/updatebeat'));


app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});
`}</CodeBlock>

<p>routes/social.js</p>
<CodeBlock>{`onst express = require('express');
const SocialMedia = require('../models/socialSchema'); // Assuming your schema is in models/Pricing.js

const router = express.Router();

// GET request to fetch all pricing data
router.get('/socials', async (req, res) => {
    console.log('/api/socials')
  try {
    const socialMediaData = await SocialMedia.find(); // Fetch all pricing data from the database
    res.status(200).json(socialMediaData); // Send the data back as JSON
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pricing data', error });
  }
});

// POST route to insert pricing data from the server
router.post('/socials', async (req, res) => {
    try {
        // Insert the SocialMedxiaData directly into the MongoDB collection
        const socialMediaData = await SocialMedia.insertMany(req.body);
        res.status(201).json({ message: 'Social media data inserted successfully', socialMediaData });
    } catch (error) {
        res.status(500).json({ message: 'Error inserting social media data', error });
    }
});
  

module.exports = router;
`}</CodeBlock>

<p>models/socialschema.js</p>
<CodeBlock>{`const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    icon: {
        type: String, // You can also use an object if you need more information about the icon
        required: true,
    }
});

const SocialMedia = mongoose.model('SocialMedias', socialMediaSchema);

module.exports = SocialMedia;
`}</CodeBlock>
    </div>
  )
}

export default ExpressRouting