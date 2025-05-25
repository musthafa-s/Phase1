import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3000;


const uploadPath = path.resolve('uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}


app.use(express.static(path.resolve('public')));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

app.get('/upload-form', (req, res) => {
  res.sendFile(path.resolve('public', 'form2.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded or invalid file type.');
  }
  res.send(`
    <h2>Upload successful!</h2>
    <p>File saved as: ${req.file.filename}</p>
    <img src="/uploads/${req.file.filename}" style="max-width:300px" />
  `);
});

app.use('/uploads', express.static(path.resolve('uploads')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
