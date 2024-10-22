import React from 'react'
import CodeBlock from '../components/CodeBlock'

function ExpressCRUD() {
  return (
    <div>
        <hi>Delete</hi>
        <CodeBlock>{`const express = require('express');
const router = express.Router();
const Beat = require('../models/beatSchema');


router.delete('/deletebeat/:id', async (req, res) => {

    // curl -X DELETE http://localhost:5000/api/deletebeat/6714eb4d97924c43ab203710

    //Note: this will not delete the file on AWS
    try {
        const beatId = req.params.id;  // Get the beat ID from the request params
        const deletedBeat = await Beat.findByIdAndDelete(beatId);

        if (!deletedBeat) {
            return res.status(404).json({ message: 'Beat not found' });
        }

        res.status(200).json({
            message: 'Beat deleted successfully',
            data: deletedBeat
        });
    } catch (error) {
        console.error('Error deleting beat:', error);
        res.status(500).json({ message: 'Error deleting beat', error: error.message });
    }
})

module.exports = router;`}</CodeBlock>

<h1>Update</h1>
<CodeBlock>{`const express = require('express');
const router = express.Router();
const Beat = require('../models/beatSchema');

router.put('/updatebeat/:id', async (req, res) => {

    // curl -X PUT http://localhost:5000/api/updatebeat/67105d247ac9d6bd4b9f9db7 \
    // -H "Content-Type: application/json" \
    // -d '{"title": "Updated Beat Title", "bpm": 150, "status": "sold"}'

     //Note: this will not update the file on AWS, if we will update it, should add the that feature
    try {
        const beatId = req.params.id;  // Get the beat ID from the request params
        const updatedBeat = await Beat.findByIdAndUpdate(beatId, req.body, {
            new: true,  // Return the updated document
            runValidators: true  // Ensure validators are run on the update
        });

        if (!updatedBeat) {
            return res.status(404).json({ message: 'Beat not found' });
        }

        res.status(200).json({
            message: 'Beat updated successfully',
            data: updatedBeat
        });
    } catch (error) {
        console.error('Error updating beat:', error);
        res.status(500).json({ message: 'Error updating beat', error: error.message });
    }
})

module.exports = router;`}</CodeBlock>

<h1>Add</h1>
<CodeBlock>{`const express = require('express');
const multer = require('multer');
const { s3Client, getObjectURL } = require('../utils/s3Client');
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const Beat = require('../models/beatSchema');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.fields([

  { name: 'thumbnail', maxCount: 1 },
  { name: 'mp3', maxCount: 1 }
]), async (req, res) => {
  
  try {
    const { title, tags, duration, bpm, status } = req.body;
    const thumbnailFile = req.files['thumbnail'][0];
    const mp3File = req.files['mp3'][0];

  
    // Upload thumbnail to S3
    const thumbnailKey = \`thumbnails/\${Date.now()}-\${thumbnailFile.originalname}\`;
    await s3Client.send(new PutObjectCommand({
      Bucket: "pendukobeats",
      Key: thumbnailKey,
      Body: thumbnailFile.buffer,
      ContentType: thumbnailFile.mimetype
    }));

    // Upload MP3 to S3
    const mp3Key = \`mp3s/\${Date.now()}-\${mp3File.originalname}\`;
    await s3Client.send(new PutObjectCommand({
      Bucket: "pendukobeats",
      Key: mp3Key,
      Body: mp3File.buffer,
      ContentType: mp3File.mimetype
    }));

    // Create new Beat document
    const beat = new Beat({
      title,
      tags: tags.split(',').map(tag => tag.trim()),
      duration,
      bpm: parseInt(bpm),
      thumbnailKey,
      mp3Key,
      status
    });

    // Save beat to MongoDB (indexID will automatically increment)
    await beat.save();

    // Get signed URLs for the uploaded files
    const thumbnailUrl = await getObjectURL(thumbnailKey);
    const mp3Url = await getObjectURL(mp3Key);

    res.status(200).json({
      message: 'Beat uploaded successfully',
      data: {
        ...beat.toObject(),
        thumbnailUrl,
        mp3Url
      }
    });
  } catch (error) {
    console.error('Error processing upload:', error);
    res.status(500).json({ message: 'Error processing upload' });
  }
});

module.exports = router;
`}</CodeBlock>
<h1>Read</h1>
<CodeBlock>{`const express = require('express');
const Beat = require('../models/beatSchema');
const { getObjectURL } = require('../utils/s3Client');

const router = express.Router();

router.get('/beats', async (req, res) => {
  try {
    const beats = await Beat.find();
    const beatsWithUrls = await Promise.all(beats.map(async (beat) => {
      const thumbnailUrl = await getObjectURL(beat.thumbnailKey);
      const mp3Url = await getObjectURL(beat.mp3Key);
      return {
        ...beat.toObject(),
        thumbnailUrl,
        mp3Url
      };
    }));
    res.json(beatsWithUrls);
  } catch (error) {
    console.error('Error fetching beats:', error);
    res.status(500).json({ message: 'Error fetching beats' });
  }
});

module.exports = router;
`}</CodeBlock>

<h1>Schema</h1>
<CodeBlock>{`const mongoose = require('mongoose');

// Counter Schema for incrementing indexID
const counterSchema = new mongoose.Schema({
  model: { type: String, required: true },  // Model name (e.g., 'Beat')
  count: { type: Number, default: 0 },      // Counter value
});
const Counter = mongoose.model('Counter', counterSchema);

// Beat Schema
const beatSchema = new mongoose.Schema({
  indexID: { type: Number, unique: true },  // Incrementing ID
  title: String,
  tags: [String],
  duration: String,
  bpm: Number,
  thumbnailKey: String,
  mp3Key: String,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

// Pre-save middleware to increment indexID
beatSchema.pre('save', async function (next) {
  if (!this.isNew) return next();

  try {
    const counter = await Counter.findOneAndUpdate(
      { model: 'Beat' },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    this.indexID = counter.count;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('Beat', beatSchema);
`}</CodeBlock>


<h1>s3Client, getObjectURL</h1>
<CodeBlock>{`const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.S3_ACCESSKEYID,
    secretAccessKey: process.env.S3_SECRETACCESSKEY
  }
});

async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: "pendukobeats",
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command);
  return url;
}

module.exports = { s3Client, getObjectURL };
`}</CodeBlock>

    </div>
  )
}

export default ExpressCRUD