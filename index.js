const express = require('express');
const app=express();
const fs=require('fs');
const cors=require('cors')
const port=5000;
const multer =require('multer')
const path=require('path')
app.use(cors())
app.listen(port,()=>{
    console.log("server running at port::",port)
})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../src/images/');  // Store files in 'uploads' directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));  // Give the file a unique name
    }
  });
  
  // Set up multer middleware with storage options
  const upload = multer({ storage: storage });

app.post('/',upload.single('image'),async(req,res)=>{
    console.log('Uploaded file:', req.file);

    // now send it to firebase
    res.send(req.file)

})