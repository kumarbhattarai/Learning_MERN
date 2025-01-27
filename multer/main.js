const express= require('express');
const ejs=require('ejs');
const path=require('path');
const multer=require('multer'); 
const app = express();
const port = 3000;

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,`${file.fieldname}-${Date.now()}-${file.originalname}`)
    },
})
const upload=multer({storage:storage})

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
return res.render('main')   
})

app.post('/upload', upload.single('file'), (req, res) => {
console.log(req.file);
console.log(req.body);
res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})